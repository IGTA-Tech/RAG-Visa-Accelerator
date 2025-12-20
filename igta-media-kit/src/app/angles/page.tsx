export default function AnglesPage() {
  const angles = [
    {
      number: 1,
      title: "The Founder/Litigator Story",
      headline: "The Immigration Litigator Who Went from Canelo Alvarez to Silicon Valley",
      description: "Sherrod D. Seward built his reputation with world boxing champions. Now he's applying that same legal expertise to tech workers trapped by the H-1B lottery.",
      hook: "Personal journey, expertise, vision",
      color: "blue"
    },
    {
      number: 2,
      title: "The H-1B Crisis Expose",
      headline: "670,000 Rejected: The H-1B Lottery That's Driving Tech Talent Away",
      description: "85% rejection rate regardless of qualifications. $100K salary minimum locks out early-career professionals. 60-day layoff deadline threatens families.",
      hook: "Policy failure, human impact, urgent need for alternatives",
      color: "red"
    },
    {
      number: 3,
      title: "The Sports-to-Tech Pivot",
      headline: "From Boxing Champions to AI Engineers: How One Visa Service Conquered Two Industries",
      description: "Canelo Alvarez (16.8M followers), Ilia Topuria (UFC), Bakhodir Jalolov (Olympic gold). Same legal structure, different industry. 500+ proven cases in sports → now 30-50 tech professionals monthly.",
      hook: "Unexpected crossover, proven model, scalability",
      color: "purple"
    },
    {
      number: 4,
      title: "The Legal Innovation",
      headline: "The Visa Loophole That's 100% Legal and Changes Everything for Tech Workers",
      description: "8 CFR 214.2(o) - Agent-based petitions used in entertainment for decades. Now being applied to computer science and AI. Merit-based approval vs 14% H-1B lottery selection.",
      hook: "Little-known law, legitimacy, game-changing implications",
      color: "green"
    },
    {
      number: 5,
      title: "The Underserved Market",
      headline: "America Needs AI Talent. The H-1B System Can't Deliver. Here's What Can.",
      description: "US faces critical shortage in AI/ML talent. H-1B lottery ignores merit, rejects 670K qualified professionals. Agent-based O-1 provides merit-based path.",
      hook: "National competitiveness, talent war, solution exists",
      color: "orange"
    },
    {
      number: 6,
      title: "The Career Freedom Story",
      headline: "Why Tech Workers Are Escaping H-1B's 'Golden Handcuffs' for a Better Visa",
      description: "H-1B = tied to one employer, can't negotiate, layoff = deportation. Agent-based O-1 = multiple employers, start business, true freedom. Alumni average $275K salary with 3.2 employers.",
      hook: "Worker empowerment, financial impact, lifestyle change",
      color: "teal"
    },
    {
      number: 7,
      title: "The Layoff Protection Story",
      headline: "Tech Layoffs Left H-1B Holders with 60 Days to Leave. This Visa Offers Protection.",
      description: "400,000+ tech workers laid off 2023-2024. H-1B holders face 60-day scramble or deportation. Agent-based O-1 not tied to any employer - layoff doesn't affect visa.",
      hook: "Current events, human interest, solution",
      color: "indigo"
    }
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string; badge: string }> = {
    blue: { bg: "bg-blue-50", border: "border-blue-500", text: "text-blue-900", badge: "bg-blue-600" },
    red: { bg: "bg-red-50", border: "border-red-500", text: "text-red-900", badge: "bg-red-600" },
    purple: { bg: "bg-purple-50", border: "border-purple-500", text: "text-purple-900", badge: "bg-purple-600" },
    green: { bg: "bg-green-50", border: "border-green-500", text: "text-green-900", badge: "bg-green-600" },
    orange: { bg: "bg-orange-50", border: "border-orange-500", text: "text-orange-900", badge: "bg-orange-600" },
    teal: { bg: "bg-teal-50", border: "border-teal-500", text: "text-teal-900", badge: "bg-teal-600" },
    indigo: { bg: "bg-indigo-50", border: "border-indigo-500", text: "text-indigo-900", badge: "bg-indigo-600" },
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">7 Story Angles</h1>
        <p className="text-xl text-slate-600 mt-2">Ready-to-pitch headlines and hooks for different publications</p>
      </div>

      <div className="space-y-6">
        {angles.map((angle) => {
          const colors = colorClasses[angle.color];
          return (
            <div key={angle.number} className={`${colors.bg} border-l-4 ${colors.border} rounded-r-xl p-6`}>
              <div className="flex items-center gap-3 mb-3">
                <span className={`${colors.badge} text-white text-sm font-bold px-3 py-1 rounded-full`}>
                  Angle {angle.number}
                </span>
                <span className={`${colors.text} font-semibold`}>{angle.title}</span>
              </div>
              <h3 className={`text-xl font-bold ${colors.text} mb-3`}>
                &quot;{angle.headline}&quot;
              </h3>
              <p className="text-slate-700 mb-3">{angle.description}</p>
              <p className="text-sm text-slate-500">
                <strong>Hook:</strong> {angle.hook}
              </p>
            </div>
          );
        })}
      </div>

      {/* Which Angle for Which Publication */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">Recommended Angles by Publication Type</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Tech Publications</h3>
            <p className="text-slate-600 text-sm mb-2">(TechCrunch, Wired, The Information)</p>
            <ul className="text-slate-700 space-y-1">
              <li>• Angle 2: H-1B Crisis</li>
              <li>• Angle 4: Legal Innovation</li>
              <li>• Angle 7: Layoff Protection</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Business Publications</h3>
            <p className="text-slate-600 text-sm mb-2">(Forbes, Inc., Fast Company)</p>
            <ul className="text-slate-700 space-y-1">
              <li>• Angle 1: Founder Story</li>
              <li>• Angle 3: Sports-to-Tech Pivot</li>
              <li>• Angle 6: Career Freedom</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Legal Publications</h3>
            <p className="text-slate-600 text-sm mb-2">(Law360, Bloomberg Law)</p>
            <ul className="text-slate-700 space-y-1">
              <li>• Angle 4: Legal Innovation</li>
              <li>• Angle 1: Litigator Profile</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Mainstream News</h3>
            <p className="text-slate-600 text-sm mb-2">(WSJ, NYT, 60 Minutes)</p>
            <ul className="text-slate-700 space-y-1">
              <li>• Angle 2: Policy Failure</li>
              <li>• Angle 3: Human Interest (Athletes)</li>
              <li>• Angle 7: Layoff Crisis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
