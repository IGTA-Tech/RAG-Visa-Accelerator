import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">IGTA Media Kit</h1>
        <p className="text-xl text-slate-300 mb-6 max-w-3xl">
          From Canelo Alvarez to Silicon Valley: How an immigration litigator with 500+ successful cases
          is solving tech&apos;s visa crisis with agent-based O-1 petitions.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/sherrod" className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">
            Meet Sherrod Seward
          </Link>
          <Link href="/chat" className="bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition">
            Ask AI Questions
          </Link>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">Executive Summary</h2>
        <p className="text-lg text-slate-700 leading-relaxed">
          <strong>Sherrod D. Seward, Esq.</strong> is an experienced immigration litigator who built his reputation
          with 500+ successful visa cases for world-class athletes - including boxing champions
          <strong> Canelo Alvarez</strong> (16.8M Instagram followers) and <strong>Tyson Fury</strong>.
          Now he&apos;s bringing that same proven agent-based O-1 petition expertise to the massively
          underserved <strong>computer science and AI sector</strong>.
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-red-600 text-white rounded-xl p-6 text-center">
          <div className="text-4xl font-bold">670K</div>
          <div className="text-red-100">H-1B Rejections (2024)</div>
        </div>
        <div className="bg-red-500 text-white rounded-xl p-6 text-center">
          <div className="text-4xl font-bold">85%</div>
          <div className="text-red-100">Lottery Rejection Rate</div>
        </div>
        <div className="bg-green-600 text-white rounded-xl p-6 text-center">
          <div className="text-4xl font-bold">500+</div>
          <div className="text-green-100">Successful Cases</div>
        </div>
        <div className="bg-green-500 text-white rounded-xl p-6 text-center">
          <div className="text-4xl font-bold">$275K</div>
          <div className="text-green-100">Avg Alumni Salary</div>
        </div>
      </div>

      {/* The Problem / Solution */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
          <h3 className="text-xl font-bold text-red-800 mb-3">The Problem</h3>
          <ul className="space-y-2 text-red-700">
            <li>• 670,000 H-1B applicants rejected in 2024</li>
            <li>• 85% rejection rate - determined by lottery, not merit</li>
            <li>• $100K minimum salary locks out early-career professionals</li>
            <li>• 60-day layoff deadline threatens families</li>
            <li>• 80+ year green card wait for Indian nationals</li>
          </ul>
        </div>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6">
          <h3 className="text-xl font-bold text-green-800 mb-3">The Solution</h3>
          <ul className="space-y-2 text-green-700">
            <li>• Agent-based O-1 visa - used in entertainment for decades</li>
            <li>• Merit-based selection, no lottery</li>
            <li>• Work for multiple employers simultaneously</li>
            <li>• Start your own business while on visa</li>
            <li>• Unlimited 3-year renewals - no 6-year cap</li>
          </ul>
        </div>
      </div>

      {/* The Story */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">The Story</h2>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          Sherrod D. Seward didn&apos;t start in tech. He started with boxing champions and UFC fighters,
          securing O-1 visas for world-class athletes including <strong>Canelo Alvarez</strong> and <strong>Tyson Fury</strong>.
          His track record? &quot;I&apos;ve obtained P-1 visas on every continent except Antarctica.&quot;
        </p>
        <p className="text-lg text-slate-700 leading-relaxed mb-4">
          After 500+ successful cases in sports and entertainment, Seward saw an underserved market:
          tech professionals trapped by the H-1B lottery. The same agent-based petition strategy that
          worked for world champions could work for AI engineers and software developers.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          Now he&apos;s bringing that expertise to Silicon Valley, offering tech professionals
          something H-1B can never provide: <strong>true career freedom</strong>.
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-3 gap-4">
        <Link href="/angles" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h3 className="text-lg font-bold text-slate-900 mb-2">7 Story Angles</h3>
          <p className="text-slate-600">Ready-to-pitch headlines and hooks for different publications</p>
        </Link>
        <Link href="/stats" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Key Statistics</h3>
          <p className="text-slate-600">All the numbers you need for compelling stories</p>
        </Link>
        <Link href="/targets" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Media Targets</h3>
          <p className="text-slate-600">Recommended publications and angles for each</p>
        </Link>
      </div>

      {/* Contact */}
      <div className="bg-slate-900 text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-slate-300 mb-2">Sherrod D. Seward, Esq.</h3>
            <p>Managing Member, Sherrod Sports Visas</p>
            <p>Partner, Innovative Global Talent Agency (IGTA)</p>
          </div>
          <div>
            <p className="mb-1"><strong>Email:</strong> info@sherrodsportsvisas.com</p>
            <p className="mb-1"><strong>Phone:</strong> (956) 224-9372</p>
            <p><strong>Web:</strong> sherrodsportsvisas.com | innovativeautomations.dev</p>
          </div>
        </div>
      </div>
    </div>
  );
}
