import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function loadSSVKnowledge(): Promise<string> {
  const ragDir = path.join(process.cwd(), 'public', 'rag', 'ssv');
  const files = ['pricing.md', 'links.md', 'visa-eligibility.md', 'brands.md', 'templates.md', 'process.md'];

  let knowledge = '';
  for (const file of files) {
    try {
      const content = await fs.readFile(path.join(ragDir, file), 'utf-8');
      knowledge += content + '\n\n';
    } catch (error) {
      console.error(`Error loading ${file}:`, error);
    }
  }
  return knowledge;
}

function getSystemPrompt(brand: string, knowledge: string): string {
  return `You are the internal Business Development Assistant for Sherrod Sports Visas (SSV). You help the BD team with:
- Visa eligibility assessment (P-1, O-1, EB-1A)
- Pricing and link generation
- Email/WhatsApp drafting
- Process questions

CURRENT BRAND CONTEXT: ${brand}

KEY RULES:
1. Use exact pricing: P-1 Standard $6,000, P-1 FRM $4,000, O-1 $8,000, EB-1A $8,000, Petitioner $2,000
2. FRM clients get P-1 at $4,000 and self-petition
3. Always include payment, engagement, and description links when providing pricing
4. Government fees (~$1,110) are paid separately
5. Premium processing is $2,805 additional
6. Remind about BCC: leads@sherrodsportsvisas.com when drafting emails

BRAND CONTEXT:
- SSV (Sherrod Sports Visas): Athletes, coaches, sports organizations. Tagline: "We solve problems for the best athletes, coaches, and organizations in the world"
- IGTA (Innovative Global Talent Agency): Entertainers, influencers, tech professionals, O-1B candidates
- AVA (Aventus Visa Agents): Simple petitioner services

KNOWLEDGE BASE:
${knowledge}

Be helpful, efficient, and provide complete information including all relevant links. When drafting emails, provide ready-to-send content. When assessing eligibility, ask clarifying questions conversationally to gather needed information.`;
}

export async function POST(request: NextRequest) {
  try {
    const { message, brand = 'SSV' } = await request.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured. Please add ANTHROPIC_API_KEY to environment variables.' },
        { status: 500 }
      );
    }

    const knowledge = await loadSSVKnowledge();
    const systemPrompt = getSystemPrompt(brand, knowledge);

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
    });

    const textContent = response.content.find(block => block.type === 'text');
    const responseText = textContent && 'text' in textContent ? textContent.text : 'No response generated';

    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error('SSV Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response. Please try again.' },
      { status: 500 }
    );
  }
}
