export default function TargetsPage() {
  const tiers = [
    {
      tier: 1,
      name: "Black Tech & Professional Outlets",
      color: "green",
      targets: [
        { publication: "Afrotech", angle: "Black founder story, tech innovation", why: "Leading Black tech audience, high engagement" },
        { publication: "Black Enterprise", angle: "Founder story, business success", why: "Black business professionals" },
        { publication: "Essence", angle: "Career empowerment, success story", why: "Black professional women" },
        { publication: "The Root", angle: "Immigration policy, tech careers", why: "Black news and culture" },
        { publication: "Blavity", angle: "Career freedom, tech opportunities", why: "Black millennials in tech" },
        { publication: "POCIT (People of Color in Tech)", angle: "Diversity in tech, visa alternatives", why: "Underrepresented tech workers" },
      ]
    },
    {
      tier: 2,
      name: "India & South Asia (Top Candidate Source)",
      color: "blue",
      targets: [
        { publication: "YourStory", angle: "Tech talent pathway, H-1B alternative", why: "Indian startup/tech community" },
        { publication: "Inc42", angle: "Founder story, US visa innovation", why: "Indian tech entrepreneurs" },
        { publication: "Economic Times Tech", angle: "H-1B crisis solution", why: "Mainstream Indian tech coverage" },
        { publication: "Mint", angle: "Career opportunities, visa pathway", why: "Indian business professionals" },
        { publication: "The Ken", angle: "Deep dive on visa innovation", why: "Premium Indian tech journalism" },
        { publication: "TechCircle", angle: "Alternative to H-1B lottery", why: "Indian tech startup ecosystem" },
      ]
    },
    {
      tier: 3,
      name: "Latin America (Growing Candidate Pool)",
      color: "purple",
      targets: [
        { publication: "Contxto", angle: "US tech pathway for LATAM talent", why: "LATAM startup ecosystem" },
        { publication: "TechCrunch Espanol", angle: "Visa innovation for tech workers", why: "Spanish-speaking tech audience" },
        { publication: "iProUp (Argentina)", angle: "US visa alternative", why: "Argentine tech professionals" },
        { publication: "Startse (Brazil)", angle: "Pathway to US tech career", why: "Brazilian tech community" },
        { publication: "El Economista (Mexico)", angle: "Tech talent mobility", why: "Mexican business/tech readers" },
      ]
    },
    {
      tier: 4,
      name: "Africa (Emerging Tech Talent)",
      color: "orange",
      targets: [
        { publication: "TechCabal", angle: "African tech talent to US", why: "Pan-African tech coverage" },
        { publication: "Disrupt Africa", angle: "Visa pathway for African engineers", why: "African startup ecosystem" },
        { publication: "TechPoint Africa", angle: "US opportunities for African talent", why: "Nigerian/African tech" },
        { publication: "Quartz Africa", angle: "Tech migration, talent mobility", why: "African business/tech audience" },
        { publication: "Techweez (Kenya)", angle: "East African tech to US", why: "Kenyan tech community" },
      ]
    },
    {
      tier: 5,
      name: "Major US Tech Publications",
      color: "teal",
      targets: [
        { publication: "TechCrunch", angle: "H-1B crisis, layoff protection", why: "Immigration coverage, tech audience" },
        { publication: "Forbes", angle: "Founder story, innovation angle", why: "Business leader profiles" },
        { publication: "Business Insider", angle: "Career freedom, salary data", why: "Work/career content" },
        { publication: "Wired", angle: "AI talent shortage, policy failure", why: "Tech policy intersection" },
        { publication: "The Information", angle: "Legal innovation, tech talent", why: "Deep tech industry coverage" },
      ]
    },
    {
      tier: 6,
      name: "Podcasts & Communities",
      color: "red",
      targets: [
        { publication: "Tech Won't Save Us", angle: "Immigration policy critique", why: "Tech policy audience" },
        { publication: "Hacker News", angle: "H-1B alternative, technical angle", why: "Developer community" },
        { publication: "r/h1b & r/immigration", angle: "Success stories, AMA", why: "Directly affected audience" },
        { publication: "Blind", angle: "Career freedom, salary comparison", why: "Tech worker audience" },
        { publication: "LinkedIn", angle: "Thought leadership", why: "Professional network" },
      ]
    },
  ];

  const colorClasses: Record<string, { bg: string; badge: string; header: string }> = {
    green: { bg: "bg-green-50", badge: "bg-green-600", header: "text-green-900" },
    blue: { bg: "bg-blue-50", badge: "bg-blue-600", header: "text-blue-900" },
    purple: { bg: "bg-purple-50", badge: "bg-purple-600", header: "text-purple-900" },
    orange: { bg: "bg-orange-50", badge: "bg-orange-600", header: "text-orange-900" },
    teal: { bg: "bg-teal-50", badge: "bg-teal-600", header: "text-teal-900" },
    red: { bg: "bg-red-50", badge: "bg-red-600", header: "text-red-900" },
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">Media Targets</h1>
        <p className="text-xl text-slate-600 mt-2">Strategic outlets for reaching top tech talent globally</p>
      </div>

      {/* Quick Reference */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Target Audience Strategy</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <h3 className="font-semibold text-slate-800 mb-2">Black Tech Community</h3>
            <ul className="text-slate-600 space-y-1">
              <li>• Afrotech, Black Enterprise</li>
              <li>• Founder story angle</li>
              <li>• Career empowerment focus</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-2">International Markets</h3>
            <ul className="text-slate-600 space-y-1">
              <li>• India: H-1B alternative angle</li>
              <li>• LATAM: US pathway angle</li>
              <li>• Africa: Opportunity angle</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-2">US Tech Mainstream</h3>
            <ul className="text-slate-600 space-y-1">
              <li>• Policy/crisis angle</li>
              <li>• Layoff protection angle</li>
              <li>• Legal innovation angle</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tiered Targets */}
      <div className="space-y-6">
        {tiers.map((tier) => {
          const colors = colorClasses[tier.color];
          return (
            <div key={tier.tier} className={`${colors.bg} rounded-xl p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`${colors.badge} text-white text-sm font-bold px-3 py-1 rounded-full`}>
                  Tier {tier.tier}
                </span>
                <h2 className={`text-xl font-bold ${colors.header}`}>{tier.name}</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left py-3 px-4 font-semibold text-slate-700">Publication</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-700">Recommended Angle</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-700">Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tier.targets.map((target, idx) => (
                      <tr key={idx} className="border-t border-slate-100">
                        <td className="py-3 px-4 font-medium text-slate-900">{target.publication}</td>
                        <td className="py-3 px-4 text-slate-700">{target.angle}</td>
                        <td className="py-3 px-4 text-slate-600">{target.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pitch Tips */}
      <div className="bg-slate-900 text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Pitch Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-slate-300 mb-2">Lead with Data</h3>
            <ul className="space-y-1 text-slate-400">
              <li>• 670,000 H-1B rejections (2024)</li>
              <li>• 85% lottery rejection rate</li>
              <li>• 80+ year green card wait (India)</li>
              <li>• $275K average alumni salary</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-300 mb-2">Lead with Names</h3>
            <ul className="space-y-1 text-slate-400">
              <li>• Canelo Alvarez (16.8M followers)</li>
              <li>• Tyson Fury (Boxing Champion)</li>
              <li>• Ilia Topuria (UFC Champion)</li>
              <li>• 500+ successful cases</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
