import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Benefits & Commission Structure | IGTA Partner Program",
  description: "View IGTA partner commission rates, deal memo system, and program pricing. Earn on referrals from $800/mo to $15,000 programs.",
};

export default function BenefitsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-900">Partner Program Benefits</h1>
        <p className="text-xl text-slate-600 mt-2">
          Full details on commissions, support, and how the partnership works
        </p>
      </div>

      {/* Commission Structure */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Commission Structure</h2>
        <p className="text-slate-600 mb-6">
          Earn competitive commissions on every client you refer. Our programs range from monthly subscriptions to one-time filings.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 font-semibold text-slate-900">Program</th>
                <th className="py-3 px-4 font-semibold text-slate-900">Client Price</th>
                <th className="py-3 px-4 font-semibold text-slate-900">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="py-4 px-4 font-medium">Profile Builder</td>
                <td className="py-4 px-4 text-green-600 font-semibold">$800/month</td>
                <td className="py-4 px-4 text-slate-600">12-month evidence building program</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-4 px-4 font-medium">Profile Builder Elite</td>
                <td className="py-4 px-4 text-green-600 font-semibold">$1,400/month</td>
                <td className="py-4 px-4 text-slate-600">Guided evidence building with extra support</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-4 px-4 font-medium">Filing Accelerator</td>
                <td className="py-4 px-4 text-green-600 font-semibold">$2,000/month</td>
                <td className="py-4 px-4 text-slate-600">12-month program + 2 complete filings</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-4 px-4 font-medium">Ready Filing</td>
                <td className="py-4 px-4 text-green-600 font-semibold">$11,000 - $15,000</td>
                <td className="py-4 px-4 text-slate-600">For clients already qualified (85%+ score)</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-medium">Petitioner Only</td>
                <td className="py-4 px-4 text-green-600 font-semibold">$2,000 - $10,000</td>
                <td className="py-4 px-4 text-slate-600">For clients with their own attorney</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800">
            <strong>Commission Details:</strong> Specific commission rates are shared with approved partners during onboarding.
            Partners earn on initial enrollment and may earn recurring commissions on monthly programs.
          </p>
        </div>
      </div>

      {/* Deal Memo System */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">The Deal Memo System</h2>
        <p className="text-slate-600 mb-6">
          As a partner, you can provide &quot;deal memos&quot; - interest letters that help strengthen O-1 visa applications.
          This creates value for both you and the candidates.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3">What is a Deal Memo?</h3>
            <ul className="space-y-2 text-slate-600">
              <li>&#8226; A letter expressing interest in engaging a candidate</li>
              <li>&#8226; Shows USCIS that legitimate work opportunities exist</li>
              <li>&#8226; No actual work commitment required</li>
              <li>&#8226; Helps qualify candidates for agent-based O-1</li>
            </ul>
          </div>
          <div className="bg-slate-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3">Benefits to Partners</h3>
            <ul className="space-y-2 text-slate-600">
              <li>&#8226; First look at top-tier tech talent</li>
              <li>&#8226; No employment obligation</li>
              <li>&#8226; Build relationships with pre-vetted professionals</li>
              <li>&#8226; Position as a supporter of global talent</li>
            </ul>
          </div>
        </div>
      </div>

      {/* What IGTA Handles */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">What IGTA Handles vs. What Partners Do</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6">
            <h3 className="text-xl font-bold text-green-800 mb-3">IGTA Handles</h3>
            <ul className="space-y-2 text-green-700">
              <li>&#10003; Client qualification and assessment</li>
              <li>&#10003; Evidence building and documentation</li>
              <li>&#10003; Legal petition preparation</li>
              <li>&#10003; Attorney coordination</li>
              <li>&#10003; USCIS filing and follow-up</li>
              <li>&#10003; Client communication and support</li>
              <li>&#10003; RFE responses if needed</li>
            </ul>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Partners Do</h3>
            <ul className="space-y-2 text-blue-700">
              <li>&#10003; Identify potential clients in your network</li>
              <li>&#10003; Make initial introduction to IGTA</li>
              <li>&#10003; Optionally provide deal memos</li>
              <li>&#10003; Receive commission on enrollment</li>
              <li className="text-blue-500 italic">No legal knowledge required</li>
              <li className="text-blue-500 italic">No ongoing client management</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Partner Requirements */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Partner Requirements</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌍</span>
            </div>
            <h3 className="font-bold mb-2">Global Network</h3>
            <p className="text-slate-600 text-sm">
              Access to tech professionals, entrepreneurs, or companies who may need O-1 visa services
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🤝</span>
            </div>
            <h3 className="font-bold mb-2">Professional Reputation</h3>
            <p className="text-slate-600 text-sm">
              Established credibility in your industry or region. We value quality over quantity.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📈</span>
            </div>
            <h3 className="font-bold mb-2">Growth Mindset</h3>
            <p className="text-slate-600 text-sm">
              Willingness to learn about our programs and actively seek referral opportunities
            </p>
          </div>
        </div>
      </div>

      {/* Training Access */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
          <span>🎓</span> Partner Training
        </h3>
        <p className="text-amber-700 mb-4">
          Approved partners receive access to comprehensive training materials including:
        </p>
        <ul className="text-amber-700 space-y-1 mb-4">
          <li>&#8226; O-1 visa criteria and qualification process</li>
          <li>&#8226; Program details and pricing</li>
          <li>&#8226; Objection handling scripts</li>
          <li>&#8226; Client qualification techniques</li>
        </ul>
        <p className="text-amber-600 text-sm">
          <strong>Access:</strong> Training credentials provided after partner approval.
          If you need a 2FA code, email <a href="mailto:info@innovativeglobaltalent.com" className="underline">info@innovativeglobaltalent.com</a> with your name and reason.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
        <p className="text-green-100 mb-6 max-w-2xl mx-auto">
          Complete our quick application form and we&apos;ll be in touch within 48-72 hours.
        </p>
        <a
          href="https://forms.gle/cms5mJMPFSb6zdJRA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-green-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
