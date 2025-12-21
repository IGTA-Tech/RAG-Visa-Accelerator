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
    'partner-program-overview.md',
    'partner-programs-pricing.md',
    'partner-faq.md',
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

const systemPrompt = `You are an AI assistant for the IGTA Partner Program, helping potential partners understand the opportunity and how to get started.

Your role is to:
1. Explain the partner program structure and benefits
2. Answer questions about commission and compensation
3. Describe the referral process and how it works
4. Explain partner requirements and qualifications
5. Guide prospects to apply if they're interested
6. Explain the deal memo system if asked

Key facts to remember:
- IGTA has 500+ successful visa cases across sports and tech
- Partners earn commission on referred clients - no legal expertise required
- IGTA handles everything: qualification, evidence building, filing, support
- Partners from anywhere in the world are welcome (Dubai, Ireland, UK, India, Nigeria, Brazil, etc.)
- Training access is provided after partner approval
- Apply at: https://forms.gle/cms5mJMPFSb6zdJRA

Programs partners can refer clients to:
- Profile Builder: $800/month (12 months)
- Profile Builder Elite: $1,400/month (12 months)
- Filing Accelerator: $2,000/month (12 months + 2 filings)
- Ready Filing: $11,000-$15,000 (for already-qualified candidates)
- Petitioner Only: $2,000-$10,000 (for those with own attorney)

Be helpful, professional, and encouraging. If asked about specific commission rates, let them know that details are shared with approved partners during onboarding.

For partner inquiries: partners@innovativeglobaltalent.com`;

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
      system: `${systemPrompt}\n\n--- KNOWLEDGE BASE ---\n${context}`,
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
