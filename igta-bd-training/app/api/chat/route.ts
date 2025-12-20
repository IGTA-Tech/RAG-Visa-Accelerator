import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// RAG context - will be loaded from files
let ragContext: string | null = null;

async function loadRagContext(): Promise<string> {
  if (ragContext) return ragContext;

  const ragDir = path.join(process.cwd(), 'public', 'rag');
  const files = [
    'IGTA_COMPLETE_TRAINING_CURRICULUM.md',
    'igta-o1-programs-rag-knowledgebase.md',
    'canonical-source-of-truth.md',
    'Tools for BD Director - training with Brett.md',
  ];

  const contents: string[] = [];

  for (const file of files) {
    try {
      const filePath = path.join(ragDir, file);
      const content = await fs.readFile(filePath, 'utf-8');
      contents.push(`\n\n--- ${file} ---\n\n${content}`);
    } catch {
      console.warn(`Could not load RAG file: ${file}`);
    }
  }

  ragContext = contents.join('\n');
  return ragContext;
}

const systemPrompt = `You are an AI training assistant for IGTA Business Development team members. Your role is to help BD reps understand and master:

1. **IGTA Products & Pricing**
   - Profile Builder: $800/mo (no filing)
   - Profile Builder Elite: $1,400/mo (no filing, more support)
   - Filing Accelerator: $2,000/mo (includes 2 O-1 filings)
   - Ready Filing: $11K-$15K (for already qualified 35%+)
   - Petitioner Only: $2,000 (just petitioner service)

2. **O-1 Visa Criteria** (need 3 of 8):
   - Awards & Recognition
   - Elite Memberships
   - Published Material About You
   - Judging Work of Others
   - Original Contributions
   - Scholarly Articles
   - Critical/Essential Role
   - High Salary

3. **Assessment & Routing**
   - 0-34%: Needs evidence building → Profile Builder, Elite, or Accelerator
   - 35%+: Ready to file → Ready Filing
   - Assessment tool: aivisaevaluations.online

4. **Agent-Petitioner Model**
   - Legal basis: 8 CFR 214.2(o)
   - Key benefit: Not tied to single employer
   - Used in entertainment for decades

5. **Objection Handling**
   - Price: ROI is 10-25x with $275K avg salary
   - Legitimacy: 8 CFR 214.2(o) explicitly authorizes
   - Qualification: "Extraordinary" doesn't mean Nobel Prize

6. **Key Statistics**
   - 500+ successful cases
   - $275K average alumni salary
   - 670,000 H-1B rejections (2024)
   - 85% H-1B lottery rejection rate

Be helpful, accurate, and concise. When answering sales or objection questions, provide specific language they can use. Always cite numbers and statistics when relevant.`;

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured. Please set ANTHROPIC_API_KEY in environment variables.' },
        { status: 500 }
      );
    }

    // Load RAG context
    const context = await loadRagContext();

    // Build messages array from history
    const messages: { role: 'user' | 'assistant'; content: string }[] = [];

    if (history && Array.isArray(history)) {
      for (const msg of history) {
        messages.push({
          role: msg.role,
          content: msg.content,
        });
      }
    }

    // Add current message
    messages.push({
      role: 'user',
      content: message,
    });

    // Call Claude API
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: `${systemPrompt}\n\n--- TRAINING KNOWLEDGE BASE ---\n${context}`,
      messages: messages,
    });

    // Extract text response
    const textContent = response.content.find(block => block.type === 'text');
    const responseText = textContent && 'text' in textContent ? textContent.text : 'No response generated';

    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
