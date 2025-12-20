import Link from 'next/link';

const modules = [
  {
    id: 1,
    title: "The Big Picture",
    subtitle: "Understanding the Immigration Landscape & Our Solution",
    description: "Learn why H-1B fails most applicants, understand O-1 as an alternative, and articulate IGTA's unique value proposition.",
    duration: "45 min",
    topics: ["H-1B Crisis", "O-1 Solution", "Agent-Based Petitions", "Our Brands", "Key Statistics"],
  },
  {
    id: 2,
    title: "O-1 Visa Fundamentals",
    subtitle: "Everything About the O-1A Visa Classification",
    description: "Master the 8 O-1 criteria, understand evidence requirements, and know the petition process timeline.",
    duration: "60 min",
    topics: ["8 O-1 Criteria", "Evidence Requirements", "Petition Process", "Common Misconceptions"],
  },
  {
    id: 3,
    title: "Our Product Suite",
    subtitle: "Complete Guide to All IGTA Programs",
    description: "Know all 5 programs with exact pricing, understand target audiences, and match prospects to the right program.",
    duration: "45 min",
    topics: ["Profile Builder", "Elite", "Filing Accelerator", "Ready Filing", "Petitioner Services", "Upgrades"],
  },
  {
    id: 4,
    title: "Assessment & Qualification",
    subtitle: "How We Evaluate and Route Prospects",
    description: "Understand the assessment tool, interpret scores, route prospects correctly, and handle edge cases.",
    duration: "30 min",
    topics: ["Assessment Tool", "Score Interpretation", "Routing Logic", "Consultation Process"],
  },
  {
    id: 5,
    title: "Agent-Petitioner Model",
    subtitle: "Understanding Our Core Legal Structure",
    description: "Explain what an agent-petitioner is, the legal basis, and how it compares to employer-sponsored O-1.",
    duration: "30 min",
    topics: ["Legal Basis (8 CFR 214.2)", "Agent vs Employer", "Itinerary of Work", "Objection Handling"],
  },
  {
    id: 6,
    title: "Evidence Building",
    subtitle: "How We Create Extraordinary Ability Documentation",
    description: "Understand how each criterion is built, realistic timelines, and what deliverables clients receive.",
    duration: "45 min",
    topics: ["Publications", "Media Coverage", "Awards", "Judging Roles", "Project Work", "Timeline"],
  },
  {
    id: 7,
    title: "The Filing Process",
    subtitle: "From Evidence Complete to USCIS Approval",
    description: "Understand petition preparation, USCIS timelines, RFE handling, and post-approval steps.",
    duration: "30 min",
    topics: ["Petition Components", "Processing Options", "RFE Handling", "Post-Approval"],
  },
  {
    id: 8,
    title: "Client Journey",
    subtitle: "The Complete Client Experience from Lead to Approval",
    description: "Map the full client journey, know key touchpoints, understand handoffs between teams.",
    duration: "40 min",
    topics: ["Funnel Stages", "Onboarding", "Active Program", "Filing Phase", "Post-Approval"],
  },
  {
    id: 9,
    title: "Objection Handling & Sales",
    subtitle: "Addressing Concerns and Closing Enrollments",
    description: "Handle common objections, know when to push and pause, and close with confidence.",
    duration: "60 min",
    topics: ["Price Objections", "Legitimacy Concerns", "Qualification Doubts", "Timing Objections", "Closing Techniques"],
  }
];

export default function ModulesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">All Training Modules</h1>
        <p className="text-xl text-slate-600 mt-2">Complete curriculum with 9 modules covering everything you need</p>
      </div>

      {/* Progress Tracker */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="font-bold text-slate-900 mb-4">Your Progress</h2>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex-1 bg-slate-100 rounded-full h-3">
            <div className="bg-green-500 rounded-full h-3" style={{ width: '0%' }}></div>
          </div>
          <span className="text-sm text-slate-600">0/9 completed</span>
        </div>
        <p className="text-sm text-slate-500">Track your progress by marking modules complete as you finish them</p>
      </div>

      {/* Foundation Section */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Foundation</span>
          Modules 1-4
        </h2>
        <div className="space-y-4">
          {modules.slice(0, 4).map((module) => (
            <Link
              key={module.id}
              href={`/modules/${module.id}`}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition block"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      {module.id}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{module.title}</h3>
                    <span className="text-sm text-slate-500">{module.duration}</span>
                  </div>
                  <p className="text-slate-600 mb-3">{module.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Core Operations Section */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Core Operations</span>
          Modules 5-9
        </h2>
        <div className="space-y-4">
          {modules.slice(4).map((module) => (
            <Link
              key={module.id}
              href={`/modules/${module.id}`}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-green-300 transition block"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-green-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      {module.id}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{module.title}</h3>
                    <span className="text-sm text-slate-500">{module.duration}</span>
                  </div>
                  <p className="text-slate-600 mb-3">{module.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Estimated Time */}
      <div className="bg-slate-900 text-white rounded-xl p-6 text-center">
        <p className="text-slate-300">Total Estimated Training Time</p>
        <p className="text-4xl font-bold mt-2">5-7 Hours</p>
      </div>
    </div>
  );
}
