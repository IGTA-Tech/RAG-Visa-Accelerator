import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome to BD Portal</h1>
        <p className="text-slate-300 mb-4">
          Your hub for training, lead management, and AI assistance.
        </p>
      </div>

      {/* Quick Actions - Main Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Innovative Automations (Tech) Card */}
        <Link href="/chat" className="block">
          <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl p-6 hover:shadow-xl transition h-full">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">🤖</span>
              <div>
                <h2 className="text-2xl font-bold">Innovative Automations Chatbot</h2>
                <p className="text-green-200">Tech O-1 Visas</p>
              </div>
            </div>
            <p className="text-green-100 mb-4">
              AI chatbot for tech visa questions, O-1 criteria, pricing, and lead qualification.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">O-1 Tech</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">AI/ML</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Profile Builder</span>
            </div>
          </div>
        </Link>

        {/* Other Brands Card */}
        <Link href="/ssv" className="block">
          <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white rounded-xl p-6 hover:shadow-xl transition h-full">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">🏃</span>
              <div>
                <h2 className="text-2xl font-bold">Other Brand Chatbot</h2>
                <p className="text-cyan-200">Sports P-1/O-1 Visas</p>
              </div>
            </div>
            <p className="text-cyan-100 mb-4">
              AI chatbot for SSV, IGTA, Aventus Visa Agents. Pricing links, email drafting, and eligibility checks.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">SSV</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">IGTA</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Aventus</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Training Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>📚</span> Training Modules
          </h2>
          <Link href="/notebooks" className="text-green-600 hover:text-green-700 font-medium text-sm">
            View All →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2">Foundation (1-4)</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Company & Mission</li>
              <li>• O-1 Criteria Deep Dive</li>
              <li>• Products & Pricing</li>
              <li>• Assessment & Qualification</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border border-green-100">
            <h3 className="font-semibold text-green-800 mb-2">Core Operations (5-9)</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Agent-Petitioner Model</li>
              <li>• Evidence Building Process</li>
              <li>• The Filing Process</li>
              <li>• Client Journey & Objection Handling</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <Link href="/notebooks" className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2">
            <span>🎧</span> Open NotebookLM
          </Link>
          <a
            href="https://notebooklm.google.com/notebook/7d6c4d8c-2513-42e1-bdbe-d79d8c2a7889"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Start Module 1 →
          </a>
        </div>
      </div>

      {/* Quick Reference Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* IGTA Pricing */}
        <div className="bg-white rounded-xl shadow-sm p-5 border border-slate-200">
          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span>💰</span> IGTA Pricing
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Profile Builder</span>
              <span className="font-semibold">$800/mo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Elite</span>
              <span className="font-semibold">$1,400/mo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Filing Accelerator</span>
              <span className="font-semibold">$2,000/mo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Ready Filing</span>
              <span className="font-semibold">$11-15K</span>
            </div>
          </div>
        </div>

        {/* SSV Pricing */}
        <div className="bg-white rounded-xl shadow-sm p-5 border border-slate-200">
          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span>🏃</span> SSV Pricing
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">P-1 Standard</span>
              <span className="font-semibold text-green-600">$6,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">P-1 FRM</span>
              <span className="font-semibold text-cyan-600">$4,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">O-1 Standard</span>
              <span className="font-semibold text-green-600">$8,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Petitioner</span>
              <span className="font-semibold">$2,000</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-sm p-5 border border-slate-200">
          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span>📊</span> Key Stats
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Successful Cases</span>
              <span className="font-bold text-green-600">500+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Avg Alumni Salary</span>
              <span className="font-bold text-green-600">$275K</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Years Experience</span>
              <span className="font-bold text-green-600">7+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">H-1B Rejections</span>
              <span className="font-bold text-red-600">670K</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Resources */}
      <div className="bg-slate-900 text-white rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span>🔗</span> Key Resources
        </h2>
        <div className="grid md:grid-cols-4 gap-3">
          <a href="https://docs.google.com/spreadsheets/d/1c_ydAYMmGEhI2fcU4Ls9TQ5yHVFEvPrv-bb1RFaUamw/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 rounded-lg p-4 text-center transition">
            <span className="text-2xl block mb-1">📊</span>
            <span className="font-medium">Lead Sheet</span>
          </a>
          <a href="https://innovativevisaevaluations.com" target="_blank" rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 rounded-lg p-4 text-center transition">
            <span className="text-2xl block mb-1">📄</span>
            <span className="font-medium">Intake Form</span>
          </a>
          <a href="https://cal.com/brettnewman" target="_blank" rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 rounded-lg p-4 text-center transition">
            <span className="text-2xl block mb-1">📅</span>
            <span className="font-medium">Book Call</span>
          </a>
          <a href="https://oandpvisas.community" target="_blank" rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 rounded-lg p-4 text-center transition">
            <span className="text-2xl block mb-1">👥</span>
            <span className="font-medium">Community</span>
          </a>
        </div>
      </div>

      {/* Remember Box */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
        <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
          <span>⚠️</span> Always Remember
        </h3>
        <ul className="text-yellow-700 text-sm space-y-1">
          <li>• BCC these emails on all lead communications:</li>
          <li className="pl-4">- <strong>leads@sherrodsportsvisas.com</strong></li>
          <li className="pl-4">- <strong>leads@innovativeglobaltalent.com</strong></li>
          <li className="pl-4">- <strong>leads@aventusvisaagents.com</strong></li>
          <li className="pl-4">- <strong>talent@innovativeautomations.dev</strong></li>
          <li>• <strong>Government Filing Fees</strong> (paid separately by client):</li>
          <li className="pl-4">- I-129 Petition: <strong>$460</strong></li>
          <li className="pl-4">- Asylum Program Fee (ACWIA):</li>
          <li className="pl-8">• 25 or fewer employees: <strong>$600</strong></li>
          <li className="pl-8">• 26+ employees: <strong>$1,500</strong></li>
          <li className="pl-4">- I-907 Premium Processing: <strong>$2,805</strong> (optional - 15 business days)</li>
          <li className="pl-4 mt-2"><strong>Totals:</strong></li>
          <li className="pl-8">• Small company (≤25): <strong>$1,060</strong> (or <strong>$3,865</strong> with premium)</li>
          <li className="pl-8">• Large company (26+): <strong>$1,960</strong> (or <strong>$4,765</strong> with premium)</li>
        </ul>
      </div>
    </div>
  );
}
