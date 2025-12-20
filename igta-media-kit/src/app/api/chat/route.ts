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
    'pr-briefing.md',
    'h1b-issues-rag.md',
    'agent-based-o1-benefits-rag.md',
    'competitor-intelligence.md',
    'approved-cases-analysis.md',
    'canonical-source-of-truth.md',
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

const systemPrompt = `You are an AI assistant for the IGTA Media Kit, helping publicists and journalists understand the story of Sherrod D. Seward, Esq. and IGTA's agent-based O-1 visa services.

Your role is to:
1. Answer questions about Sherrod Seward's background, credentials, and notable clients
2. Explain the H-1B visa crisis and how agent-based O-1 provides a solution
3. Provide statistics, data points, and story angles for media coverage
4. Help publicists understand which angles work best for different publications
5. Share information about IGTA's track record and success rates

Key facts to remember:
- Sherrod D. Seward, Esq. is an experienced immigration litigator with 500+ successful visa cases
- Notable clients include Canelo Alvarez (16.8M followers), Tyson Fury, UFC champions
- H-1B has 85% lottery rejection rate (670,000 rejections in 2024)
- Agent-based O-1 allows multiple employers, business ownership, unlimited renewals

Be helpful, accurate, and provide specific data when available. If asked about something not in your knowledge base, say so honestly.`;

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
