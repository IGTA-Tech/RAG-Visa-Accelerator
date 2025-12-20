export default function SherrodPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-slate-900">Sherrod D. Seward, Esq.</h1>
      <p className="text-xl text-slate-600">Immigration Litigator | Sports & Entertainment Expert | Tech Visa Pioneer</p>

      {/* Bio Card */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">Background</h2>
        <div className="prose prose-lg max-w-none text-slate-700">
          <p>
            Sherrod D. Seward is a passionate international sports business lawyer with extensive experience
            advocating for athletes worldwide. His interest in sports law began early - he managed prominent
            mixed martial arts fighters while still in law school, advising several who became UFC champions.
          </p>
          <p>
            His international experience dates to elementary school, where he played soccer with foreign nationals
            at a language immersion school in Columbus, Ohio. Since then, he has worked with athletes from
            Kazakhstan, Brazil, South Africa, the United Kingdom, Argentina, Australia, and many other nations.
          </p>
          <p className="font-semibold text-slate-900">
            &quot;I&apos;ve obtained a P-1 visa on every continent besides Antarctica.&quot;
          </p>
        </div>
      </div>

      {/* Education */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">Education & Training</h2>
        <ul className="space-y-3 text-lg text-slate-700">
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <span><strong>Cleveland-Marshall Law School</strong> (Cleveland, Ohio)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <span>Studied sports law under <strong>Peter Carfargna</strong> (former IMG General Counsel)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold">•</span>
            <span>Started managing UFC fighters while still in law school</span>
          </li>
        </ul>
      </div>

      {/* Credentials */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">Professional Credentials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Bar Admissions</h3>
            <ul className="space-y-1 text-slate-700">
              <li>• District of Columbia Bar</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Professional Associations</h3>
            <ul className="space-y-1 text-slate-700">
              <li>• American Immigration Lawyers Association (AILA)</li>
              <li>• Sports Lawyers Association</li>
              <li>• Black Entertainment and Sports Lawyers Association</li>
              <li>• Esports Bar Association</li>
              <li>• Charlotte Chamber of Commerce</li>
              <li>• Export Legal Assistance Network</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Published */}
      <div className="bg-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Published Author</h2>
        <p className="text-lg text-blue-800 mb-4">
          Contributing author to <strong>AILA&apos;s 2020 Treatise</strong> on &quot;Immigration Options for Artists, Entertainers, and Athletes&quot;
        </p>
        <p className="text-blue-700">
          Recognized as one of today&apos;s leading practitioners in sports and entertainment immigration law.
        </p>
      </div>

      {/* Notable Clients */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">Notable Clients</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-slate-50 rounded-lg p-4">
            <h3 className="font-bold text-slate-900">Canelo Alvarez</h3>
            <p className="text-slate-600">Boxing Champion</p>
            <p className="text-green-600 font-semibold">16.8M Instagram</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <h3 className="font-bold text-slate-900">Tyson Fury</h3>
            <p className="text-slate-600">Boxing Champion</p>
            <p className="text-sm text-slate-500">O-1 for movies, podcasts, clothing</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <h3 className="font-bold text-slate-900">Ilia Topuria</h3>
            <p className="text-slate-600">UFC Champion</p>
            <p className="text-green-600 font-semibold">2M Instagram</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <h3 className="font-bold text-slate-900">Bakhodir Jalolov</h3>
            <p className="text-slate-600">Olympic Gold Medalist</p>
            <p className="text-green-600 font-semibold">1.6M Instagram</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <h3 className="font-bold text-slate-900">NFL Players</h3>
            <p className="text-slate-600">Multiple Teams</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <h3 className="font-bold text-slate-900">NASCAR Teams</h3>
            <p className="text-slate-600">Racing Industry</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <h3 className="font-bold text-slate-900">ONE Championship</h3>
            <p className="text-slate-600">MMA Fighters</p>
          </div>
        </div>
        <p className="mt-4 text-slate-600">
          Combined social media following of notable clients: <strong>20M+ followers</strong>
        </p>
      </div>

      {/* Federal Court Litigator */}
      <div className="bg-slate-900 text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Federal Court Litigator</h2>
        <p className="text-lg text-slate-300 mb-4">
          Sherrod files federal lawsuits against USCIS for denied or delayed petitions using the Administrative Procedure Act.
        </p>
        <ul className="space-y-2 text-slate-300">
          <li>• Files lawsuits challenging USCIS denials in federal court</li>
          <li>• Internal appeals succeed less than 10% of the time - federal court is more effective</li>
          <li>• USCIS exercises caution in litigation to avoid unfavorable precedent</li>
          <li>• Specializes in P-1, O-1, and EB-1A visa litigation</li>
        </ul>
      </div>

      {/* The Pivot */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">The Pivot to Tech/AI</h2>
        <p className="text-lg mb-4">
          After 500+ successful cases in sports and entertainment, Sherrod identified a massive underserved market:
          <strong> tech professionals trapped by the H-1B lottery</strong>.
        </p>
        <p className="text-lg mb-4">
          The same agent-based petition expertise that worked for world champions is now being applied to
          computer science and AI professionals through <strong>IGTA Automation Studios</strong>.
        </p>
        <p className="text-lg">
          Now enrolling <strong>30-50 tech professionals monthly</strong>.
        </p>
      </div>
    </div>
  );
}
