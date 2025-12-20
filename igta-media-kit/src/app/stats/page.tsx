export default function StatsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">Key Statistics</h1>
        <p className="text-xl text-slate-600 mt-2">All the numbers you need for compelling stories</p>
      </div>

      {/* Sherrod's Track Record */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">Sherrod Seward&apos;s Track Record</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-4xl font-bold text-green-600">500+</div>
            <div className="text-slate-600">Successful Visa Approvals</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-4xl font-bold text-green-600">7+</div>
            <div className="text-slate-600">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-4xl font-bold text-green-600">20M+</div>
            <div className="text-slate-600">Clients&apos; Social Following</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-4xl font-bold text-green-600">$275K</div>
            <div className="text-slate-600">Avg Alumni Salary</div>
          </div>
        </div>
      </div>

      {/* H-1B Crisis */}
      <div className="bg-red-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-red-900">The H-1B Crisis (2024)</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-4xl font-bold text-red-600">670,000</div>
            <div className="text-slate-600">H-1B Rejections</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-4xl font-bold text-red-600">85%</div>
            <div className="text-slate-600">Lottery Rejection Rate</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-4xl font-bold text-red-600">14%</div>
            <div className="text-slate-600">Selection Rate</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-4xl font-bold text-red-600">$100K</div>
            <div className="text-slate-600">New Minimum Salary</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-4xl font-bold text-red-600">60</div>
            <div className="text-slate-600">Days After Layoff</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-4xl font-bold text-red-600">80+</div>
            <div className="text-slate-600">Years GC Wait (India)</div>
          </div>
        </div>
      </div>

      {/* Agent-Based O-1 Solution */}
      <div className="bg-green-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-green-900">Agent-Based O-1 Solution</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-4xl font-bold text-green-600">$275K</div>
            <div className="text-slate-600">Avg Alumni Salary</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-4xl font-bold text-green-600">3.2</div>
            <div className="text-slate-600">Avg Employers/Graduate</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-4xl font-bold text-green-600">0</div>
            <div className="text-slate-600">Lottery Required</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-4xl font-bold text-green-600">∞</div>
            <div className="text-slate-600">Renewal Limit</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-4xl font-bold text-green-600">Yes</div>
            <div className="text-slate-600">Business Ownership</div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-4xl font-bold text-green-600">500+</div>
            <div className="text-slate-600">Cases Filed</div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-xl shadow-sm p-8 overflow-x-auto">
        <h2 className="text-2xl font-bold mb-6 text-slate-900">H-1B vs Agent-Based O-1</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">Feature</th>
              <th className="text-center py-3 px-4 bg-red-50 text-red-900">H-1B</th>
              <th className="text-center py-3 px-4 bg-green-50 text-green-900">Agent O-1</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">Selection Method</td>
              <td className="py-3 px-4 text-center bg-red-50 text-red-700">14% Lottery</td>
              <td className="py-3 px-4 text-center bg-green-50 text-green-700">100% Merit</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">Salary Minimum</td>
              <td className="py-3 px-4 text-center bg-red-50 text-red-700">$100,000+</td>
              <td className="py-3 px-4 text-center bg-green-50 text-green-700">None</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">Employers</td>
              <td className="py-3 px-4 text-center bg-red-50 text-red-700">Single Only</td>
              <td className="py-3 px-4 text-center bg-green-50 text-green-700">Unlimited</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">Business Ownership</td>
              <td className="py-3 px-4 text-center bg-red-50 text-red-700">No</td>
              <td className="py-3 px-4 text-center bg-green-50 text-green-700">Yes</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">Duration</td>
              <td className="py-3 px-4 text-center bg-red-50 text-red-700">6 Years Max</td>
              <td className="py-3 px-4 text-center bg-green-50 text-green-700">Unlimited</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">After Layoff</td>
              <td className="py-3 px-4 text-center bg-red-50 text-red-700">60 Days</td>
              <td className="py-3 px-4 text-center bg-green-50 text-green-700">Unaffected</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">Job Switching</td>
              <td className="py-3 px-4 text-center bg-red-50 text-red-700">New Petition</td>
              <td className="py-3 px-4 text-center bg-green-50 text-green-700">Immediate</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Notable Athletes */}
      <div className="bg-slate-900 text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Notable Sports Clients (Social Proof)</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold">16.8M</div>
            <div className="text-slate-400">Canelo Alvarez</div>
            <div className="text-sm text-slate-500">Boxing Champion</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">2M</div>
            <div className="text-slate-400">Ilia Topuria</div>
            <div className="text-sm text-slate-500">UFC Champion</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">1.6M</div>
            <div className="text-slate-400">Bakhodir Jalolov</div>
            <div className="text-sm text-slate-500">Olympic Gold</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">160+</div>
            <div className="text-slate-400">P-1A Athletes</div>
            <div className="text-sm text-slate-500">Int&apos;l Recognized</div>
          </div>
        </div>
      </div>

      {/* Tech Layoff Context */}
      <div className="bg-orange-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-orange-900">Tech Layoff Context (2023-2024)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="text-5xl font-bold text-orange-600 mb-2">400,000+</div>
            <div className="text-orange-800">Tech workers laid off in 2023-2024</div>
          </div>
          <div className="text-orange-800">
            <p className="mb-2">H-1B holders impacted face:</p>
            <ul className="space-y-1">
              <li>• 60 days to find new sponsor</li>
              <li>• Deportation if unsuccessful</li>
              <li>• Families uprooted mid-school-year</li>
              <li>• Years of US contribution erased</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
