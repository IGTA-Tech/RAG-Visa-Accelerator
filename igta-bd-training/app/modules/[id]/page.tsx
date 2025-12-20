import Link from 'next/link';
import { notFound } from 'next/navigation';

const moduleContent: Record<number, {
  title: string;
  subtitle: string;
  sections: { heading: string; content: string[] }[];
  keyTakeaways: string[];
  quiz: { question: string; answer: string }[];
}> = {
  1: {
    title: "The Big Picture",
    subtitle: "Understanding the Immigration Landscape & Our Solution",
    sections: [
      {
        heading: "The H-1B Crisis",
        content: [
          "670,000 rejections in 2024 (85% rejection rate)",
          "Lottery system = random chance, not merit",
          "New $100,000 minimum salary requirement",
          "Single employer dependency trap",
          "October-only start dates",
          "6-year maximum cap",
        ]
      },
      {
        heading: "The O-1 Solution",
        content: [
          "Merit-based approval (no lottery)",
          "No salary minimum",
          "Work for unlimited employers",
          "Start your own business",
          "Begin anytime year-round",
          "Unlimited 3-year renewals",
        ]
      },
      {
        heading: "IGTA's Innovation: Agent-Based Petitions",
        content: [
          "Agent-petitioner files Form I-129 on your behalf",
          "Legal basis: 8 CFR 214.2(o)",
          "Used for decades in entertainment industry",
          "Now applied to tech/AI professionals",
          "Key benefit: You're not tied to any single employer",
        ]
      },
      {
        heading: "Our Brands",
        content: [
          "Innovative Automations - Tech/AI professionals",
          "Pentos Partners - Premium/luxury service",
          "Aventus Visa Agents - Agent-based flexibility focus",
          "Sherrod Sports Visas - Athletes/P-1 visas",
        ]
      },
    ],
    keyTakeaways: [
      "500+ successful approvals",
      "$275,000 average alumni salary",
      "500+ professionals in community",
    ],
    quiz: [
      { question: "Why do most H-1B applicants get rejected?", answer: "85% lottery rejection rate - random chance, not merit" },
      { question: "What are 3 benefits of O-1 over H-1B?", answer: "No lottery, multiple employers, start business, unlimited renewals" },
      { question: "What regulation permits agent-based petitions?", answer: "8 CFR 214.2(o)" },
    ]
  },
  2: {
    title: "O-1 Visa Fundamentals",
    subtitle: "Everything About the O-1A Visa Classification",
    sections: [
      {
        heading: "What is O-1A?",
        content: [
          "Visa for 'extraordinary ability' in sciences, business, education, athletics",
          "Non-immigrant (temporary) visa",
          "3-year initial term, unlimited renewals",
          "Dual intent allowed (can pursue green card)",
        ]
      },
      {
        heading: "The 8 O-1 Criteria",
        content: [
          "1. Awards & Recognition - Industry awards, competition wins, hackathons",
          "2. Membership in Elite Organizations - Selective admission required",
          "3. Published Material About You - Media coverage in professional publications",
          "4. Judging Work of Others - Hackathon judge, peer reviewer, grant evaluator",
          "5. Original Contributions - Patents, research, innovations with major significance",
          "6. Scholarly Articles - Publications in professional journals",
          "7. Critical/Essential Role - Essential capacity for distinguished organizations",
          "8. High Salary - Compensation significantly above average",
        ]
      },
      {
        heading: "How Many Criteria Needed?",
        content: [
          "Minimum: 3 of 8 criteria",
          "Recommended: Build 5-6 for strong application",
          "Quality matters more than quantity",
        ]
      },
      {
        heading: "Common Misconceptions",
        content: [
          "'O-1 is only for famous people' - FALSE",
          "'You need a Nobel Prize' - FALSE",
          "'It's harder than H-1B' - DIFFERENT, not harder",
          "'You need a PhD' - FALSE",
          "'You can't have a regular job' - FALSE",
        ]
      },
    ],
    keyTakeaways: [
      "Need 3 of 8 criteria minimum",
      "3-year term with unlimited renewals",
      "Dual intent allowed",
      "Not just for 'famous' people",
    ],
    quiz: [
      { question: "How many O-1 criteria must you meet?", answer: "Minimum 3 of 8" },
      { question: "What's the O-1 visa term?", answer: "3-year initial, unlimited renewals" },
      { question: "Do you need a PhD for O-1?", answer: "No - FALSE misconception" },
    ]
  },
  3: {
    title: "Our Product Suite",
    subtitle: "Complete Guide to All IGTA Programs",
    sections: [
      {
        heading: "Profile Builder ($800/mo)",
        content: [
          "Target: Self-motivated, budget-conscious, 12+ month timeline",
          "Includes: Evidence building framework, publications, community, 50+ training modules",
          "NOT included: Filing, dedicated advisor, 1:1 sessions",
          "Annual prepay: $8,000 (save $1,600)",
        ]
      },
      {
        heading: "Profile Builder Elite ($1,400/mo)",
        content: [
          "Target: Want expert guidance, 6-12 month timeline",
          "Everything in Profile Builder PLUS:",
          "1:1 strategy sessions, dedicated advisor, attorney access",
          "Priority project placement, Deal Memo Portal",
          "Monthly readiness evaluations",
          "Annual prepay: $15,000 (save $1,800)",
        ]
      },
      {
        heading: "Filing Accelerator ($2,000/mo)",
        content: [
          "Target: Want complete solution, score 0-34%",
          "ALL-INCLUSIVE: Profile building + TWO O-1 filings",
          "Agent-petitioner, attorney coordination, publications & media",
          "Wikipedia page (if qualified), employer introductions",
          "Annual prepay: $20,000 (save $4,000)",
        ]
      },
      {
        heading: "Ready Filing ($11K-$15K)",
        content: [
          "Target: Already qualified (score 35%+), have 3+ criteria",
          "Regular: $11,000 (4-6 month USCIS)",
          "Premium: $15,000 (15-day USCIS)",
          "Filed within 30 days",
        ]
      },
      {
        heading: "Petitioner Services Only ($2,000)",
        content: [
          "Target: Have own attorney, just need petitioner",
          "IGTA as official agent-petitioner",
          "Work itinerary coordination",
          "USCIS correspondence handling",
        ]
      },
    ],
    keyTakeaways: [
      "Profile Builder: $800/mo (no filing)",
      "Elite: $1,400/mo (no filing, more support)",
      "Accelerator: $2,000/mo (includes 2 filings)",
      "Ready Filing: $11K-$15K (already qualified)",
    ],
    quiz: [
      { question: "Which program includes filing?", answer: "Filing Accelerator and Ready Filing" },
      { question: "What score indicates someone is 'ready to file'?", answer: "35% or higher" },
      { question: "How many filings are included in Filing Accelerator?", answer: "2 complete filings" },
    ]
  },
  4: {
    title: "Assessment & Qualification",
    subtitle: "How We Evaluate and Route Prospects",
    sections: [
      {
        heading: "The Assessment Tool",
        content: [
          "URL: aivisaevaluations.online",
          "Time: 2 minutes",
          "Purpose: Evaluate current O-1 criteria strength",
          "Output: Percentage score + criterion breakdown",
        ]
      },
      {
        heading: "Score Interpretation",
        content: [
          "0-15%: Very early stage → Profile Builder or Filing Accelerator",
          "16-34%: Building momentum → Elite or Filing Accelerator",
          "35-50%: Filing ready (basic) → Ready Filing",
          "51-75%: Strong candidate → Ready Filing (high confidence)",
          "76%+: Exceptional → Ready Filing (expedite)",
        ]
      },
      {
        heading: "Routing Logic",
        content: [
          "Score 0-34%: Need evidence building",
          "Ask: 'Do you want filing included?' → Yes = Accelerator, No = Profile Builder",
          "Score 35%+: Ready to file now → Ready Filing",
          "Ask: 'How urgent is your timeline?' → Urgent = Premium ($15K)",
        ]
      },
      {
        heading: "The Consultation Process",
        content: [
          "1. Assessment completed → Score generated",
          "2. Book strategy call (15-30 minutes)",
          "3. Review score and criteria gaps",
          "4. Discuss timeline and goals",
          "5. Recommend appropriate program",
          "6. Answer questions and objections",
          "7. Enrollment or follow-up",
        ]
      },
    ],
    keyTakeaways: [
      "35%+ = ready to file",
      "0-34% = needs evidence building",
      "Assessment takes 2 minutes",
      "Strategy call is 15-30 minutes",
    ],
    quiz: [
      { question: "What score means 'ready to file'?", answer: "35% or higher" },
      { question: "If someone scores 25%, what do you recommend?", answer: "Profile Builder, Elite, or Filing Accelerator" },
      { question: "How long is the strategy call?", answer: "15-30 minutes" },
    ]
  },
  5: {
    title: "Agent-Petitioner Model",
    subtitle: "Understanding Our Core Legal Structure",
    sections: [
      {
        heading: "What is an Agent-Petitioner?",
        content: [
          "The organization that files Form I-129 with USCIS",
          "Represents the visa holder's career/work arrangements",
          "Creates and manages the work itinerary",
          "NOT the employer—the career manager",
        ]
      },
      {
        heading: "Legal Basis",
        content: [
          "8 CFR 214.2(o) explicitly permits agent-based petitions",
          "Used for decades in entertainment industry",
          "Increasingly common in technology sector",
          "USCIS recognizes and approves regularly",
        ]
      },
      {
        heading: "Agent-Based vs. Employer-Sponsored",
        content: [
          "Employer-Sponsored: Tied to one employer, single company, can't start business, can't freelance, employer controls visa",
          "Agent-Based (IGTA): Not tied to employer, multiple companies, can start business, can freelance, YOU control visa",
        ]
      },
      {
        heading: "Handling 'Is This Legal?' Objection",
        content: [
          "'Absolutely. Agent-based petitions are explicitly authorized under 8 CFR 214.2(o).'",
          "'It's been used in entertainment for decades and is now standard in tech.'",
          "'We file agent-based petitions regularly with 500+ successful cases.'",
          "'USCIS is familiar with this structure.'",
        ]
      },
    ],
    keyTakeaways: [
      "Legal basis: 8 CFR 214.2(o)",
      "Used in entertainment for decades",
      "Key benefit: Not tied to employer",
    ],
    quiz: [
      { question: "What regulation permits agent-based O-1 petitions?", answer: "8 CFR 214.2(o)" },
      { question: "Can you work for multiple employers with agent-based O-1?", answer: "Yes, unlimited employers" },
      { question: "How do you respond to 'Is this legal?'", answer: "Yes, explicitly authorized under 8 CFR 214.2(o), used for decades with 500+ successful cases" },
    ]
  },
  6: {
    title: "Evidence Building",
    subtitle: "How We Create Extraordinary Ability Documentation",
    sections: [
      {
        heading: "Evidence Building Philosophy",
        content: [
          "Systematic, not random",
          "Quality over quantity",
          "Build 5-6 criteria, not just 3",
          "Document everything properly",
          "Create paper trail for USCIS",
        ]
      },
      {
        heading: "Publications & Media",
        content: [
          "Ghostwritten technical articles published in industry outlets",
          "3 articles per month typical, 12-36 over program",
          "Media pitches to TechCrunch, Forbes, Built In",
          "First features by month 3-4",
        ]
      },
      {
        heading: "Awards & Judging",
        content: [
          "Hackathon participation and wins",
          "Industry award nominations",
          "First award by month 3-6",
          "Judging roles come month 4-8 (requires reputation)",
        ]
      },
      {
        heading: "Realistic Timelines",
        content: [
          "Publications: First results month 1, strong evidence month 4-6",
          "Media coverage: First month 3-4, strong month 6-8",
          "Awards: First month 3-6, strong month 6-12",
          "Judging: First month 4-8, strong month 8-12",
        ]
      },
    ],
    keyTakeaways: [
      "Build 5-6 criteria (not just 3)",
      "Evidence building is 6-12 months",
      "3 articles per month typical",
      "First media coverage by month 3-4",
    ],
    quiz: [
      { question: "How many criteria should you build?", answer: "5-6 for strong application" },
      { question: "When do first media features typically come?", answer: "Month 3-4" },
      { question: "How long is the evidence building process?", answer: "6-12 months typically" },
    ]
  },
  7: {
    title: "The Filing Process",
    subtitle: "From Evidence Complete to USCIS Approval",
    sections: [
      {
        heading: "Petition Components",
        content: [
          "Form I-129 (Petition for Nonimmigrant Worker)",
          "Petition letter (legal argument)",
          "Evidence exhibits (organized documentation)",
          "Recommendation letters",
          "Agent-petitioner documentation",
          "Work itinerary",
        ]
      },
      {
        heading: "Processing Options",
        content: [
          "Regular Processing: Included in program, 4-6 months",
          "Premium Processing: $2,805 additional (USCIS fee), 15 calendar days",
          "Best for urgent: OPT expiring, job start date",
        ]
      },
      {
        heading: "Possible Outcomes",
        content: [
          "Approval: Receive I-797, status changes or consular processing",
          "RFE (Request for Evidence): Additional docs needed, 87-day response window",
          "Denial: Rare (6% of our cases), can motion to reopen or refile",
        ]
      },
      {
        heading: "RFE Handling",
        content: [
          "We handle RFE response at no extra cost",
          "Review notice, identify what USCIS wants",
          "Gather additional evidence",
          "Draft comprehensive response",
          "Most RFEs successfully overcome",
        ]
      },
    ],
    keyTakeaways: [
      "Regular: 4-6 months",
      "Premium: 15 days ($2,805)",
      "RFE response included",
    ],
    quiz: [
      { question: "What's the difference between regular and premium processing?", answer: "Regular 4-6 months, Premium 15 days ($2,805)" },
      { question: "What is an RFE?", answer: "Request for Evidence - USCIS wants additional documentation" },
      { question: "Is RFE response included?", answer: "Yes, at no extra cost" },
    ]
  },
  8: {
    title: "Client Journey",
    subtitle: "The Complete Client Experience from Lead to Approval",
    sections: [
      {
        heading: "The Funnel Stages",
        content: [
          "AWARENESS → Assessment → Strategy Call → ENROLLMENT",
          "→ Onboarding → EVIDENCE BUILDING → Filing Preparation",
          "→ USCIS SUBMISSION → Waiting Period → APPROVAL → Career Launch",
        ]
      },
      {
        heading: "Pre-Enrollment Journey",
        content: [
          "Lead capture: Website forms → Go High Level (GHL)",
          "Assessment: 2-minute evaluation, score + breakdown",
          "Strategy call: 15-30 minutes, recommend program",
          "Enrollment: Select program, sign agreement, payment",
        ]
      },
      {
        heading: "Onboarding (Week 1)",
        content: [
          "Welcome packet sent",
          "Community access granted",
          "Intake questionnaire completed",
          "First coaching call scheduled",
          "Success advisor introduced (Elite/Accelerator)",
        ]
      },
      {
        heading: "Active Program Phase",
        content: [
          "Profile Builder: Weekly group sessions, quarterly check-ins",
          "Elite/Accelerator: Weekly 1:1s, monthly readiness evaluations",
          "Evidence portfolio updates, media/publication progress",
        ]
      },
    ],
    keyTakeaways: [
      "Assessment → Call → Enrollment",
      "Week 1: Onboarding + advisor",
      "Monthly readiness evaluations",
      "Filing when ready",
    ],
    quiz: [
      { question: "What happens in Week 1?", answer: "Welcome packet, community access, intake questionnaire, first coaching call, advisor intro" },
      { question: "How often are readiness evaluations?", answer: "Monthly (Elite/Accelerator)" },
      { question: "What's the first step for a lead?", answer: "Complete 2-minute assessment" },
    ]
  },
  9: {
    title: "Objection Handling & Sales",
    subtitle: "Addressing Concerns and Closing Enrollments",
    sections: [
      {
        heading: "Price Objections",
        content: [
          "'It's too expensive' → 'You're investing $11K-$24K for a visa enabling $275K+ salaries. That's 10-25x return in year one.'",
          "'I can't afford monthly' → 'Profile Builder is $800/month—less than many coding bootcamps.'",
          "'Why more expensive than a lawyer?' → 'Lawyers file paperwork. We BUILD the evidence AND file.'",
        ]
      },
      {
        heading: "Legitimacy Objections",
        content: [
          "'Is this really legal?' → 'Absolutely. 8 CFR 214.2(o) explicitly authorizes agent-based petitions. Used in entertainment for decades.'",
          "'I've never heard of this' → 'Most people only know H-1B because employers sponsor. Agent-based just isn't marketed.'",
          "'My employer says I need sponsorship' → 'That's their perspective. Agent-based gives YOU control.'",
        ]
      },
      {
        heading: "Qualification Objections",
        content: [
          "'I'm not extraordinary enough' → 'Most people feel that way—imposter syndrome. Extraordinary doesn't mean Nobel Prize.'",
          "'I don't have awards' → 'Awards are just 1 of 8 criteria. Publications, media, projects often easier to build.'",
          "'I'm too early in my career' → '2-5 years is our sweet spot. Early career is perfect for Profile Builder.'",
        ]
      },
      {
        heading: "Closing Techniques",
        content: [
          "Summary Close: 'So to recap: You're looking to [goal], you have [timeframe], and [program] fits. What questions before we enroll?'",
          "Alternative Close: 'Either Elite or Accelerator would work. Elite if you want to arrange filing separately. Which makes more sense?'",
          "Urgency Close: 'Your OPT expires in [X months]. To have O-1 approved by then, we need to start now.'",
        ]
      },
    ],
    keyTakeaways: [
      "Price → ROI ($275K salary)",
      "Legitimacy → 8 CFR 214.2(o)",
      "Qualification → Imposter syndrome normal",
      "Always use summary close",
    ],
    quiz: [
      { question: "How do you respond to 'It's too expensive'?", answer: "$11K-$24K for visa enabling $275K+ salaries = 10-25x ROI" },
      { question: "How do you respond to 'Is this legal?'", answer: "Yes, 8 CFR 214.2(o) explicitly authorizes agent-based petitions" },
      { question: "How do you respond to 'I'm not extraordinary enough'?", answer: "Imposter syndrome is normal. Extraordinary doesn't mean Nobel Prize." },
    ]
  },
};

export default async function ModulePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const moduleId = parseInt(id);
  const module = moduleContent[moduleId];

  if (!module) {
    notFound();
  }

  const prevModule = moduleId > 1 ? moduleId - 1 : null;
  const nextModule = moduleId < 9 ? moduleId + 1 : null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className={`${moduleId <= 4 ? 'bg-blue-600' : 'bg-green-600'} text-white text-sm font-bold px-3 py-1 rounded-full`}>
            Module {moduleId}
          </span>
          <span className="text-slate-500">{moduleId <= 4 ? 'Foundation' : 'Core Operations'}</span>
        </div>
        <h1 className="text-4xl font-bold text-slate-900">{module.title}</h1>
        <p className="text-xl text-slate-600 mt-2">{module.subtitle}</p>
      </div>

      {/* Content Sections */}
      <div className="space-y-6">
        {module.sections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">{section.heading}</h2>
            <ul className="space-y-2">
              {section.content.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="text-green-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Key Takeaways */}
      <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6">
        <h2 className="text-xl font-bold text-green-900 mb-4">Key Takeaways</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {module.keyTakeaways.map((takeaway, idx) => (
            <div key={idx} className="flex items-center gap-2 text-green-800">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{takeaway}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quiz */}
      <div className="bg-slate-900 text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Knowledge Check</h2>
        <div className="space-y-6">
          {module.quiz.map((q, idx) => (
            <div key={idx}>
              <p className="font-medium text-slate-300 mb-2">Q{idx + 1}: {q.question}</p>
              <details className="group">
                <summary className="cursor-pointer text-green-400 hover:text-green-300">
                  Click to reveal answer
                </summary>
                <p className="mt-2 text-slate-400 pl-4 border-l-2 border-green-500">
                  {q.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        {prevModule ? (
          <Link
            href={`/modules/${prevModule}`}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Module {prevModule}</span>
          </Link>
        ) : <div />}
        {nextModule ? (
          <Link
            href={`/modules/${nextModule}`}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            <span>Next: Module {nextModule}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <Link
            href="/chat"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            <span>Ask AI Questions</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
