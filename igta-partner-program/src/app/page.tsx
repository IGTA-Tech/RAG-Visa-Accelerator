import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "IGTA Partner Program | Earn Commissions Referring O-1 Visa Clients",
  description: "Join our global partner network. Refer tech professionals for O-1 visa services and earn competitive commissions. No legal expertise required.",
};

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Become an IGTA Partner
        </h1>
        <p className="text-xl text-slate-300 mb-6 max-w-3xl">
          Join our global network of partners earning commissions by referring clients for O-1 visa services.
          No legal expertise required - we handle everything.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://forms.gle/cms5mJMPFSb6zdJRA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Apply Now
          </a>
          <Link
            href="/benefits"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition border border-white/20"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">1</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Refer a Client</h3>
            <p className="text-slate-600">
              Introduce tech professionals or companies who need O-1 visa services to IGTA.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">2</span>
            </div>
            <h3 className="font-bold text-lg mb-2">We Handle Everything</h3>
            <p className="text-slate-600">
              IGTA manages the entire visa process - qualification, evidence building, and filing.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">3</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Earn Commission</h3>
            <p className="text-slate-600">
              Receive your commission when the client enrolls. Simple, transparent, reliable.
            </p>
          </div>
        </div>
      </div>

      {/* Value Proposition Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6">
          <h3 className="text-xl font-bold text-green-800 mb-3">Commission Structure</h3>
          <ul className="space-y-2 text-green-700">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">&#10003;</span>
              <span>Competitive referral commissions on all programs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">&#10003;</span>
              <span>Programs range from $800/mo to $15,000 one-time</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">&#10003;</span>
              <span>Recurring commissions on monthly programs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">&#10003;</span>
              <span>Transparent tracking and timely payments</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6">
          <h3 className="text-xl font-bold text-blue-800 mb-3">Partner Support</h3>
          <ul className="space-y-2 text-blue-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">&#10003;</span>
              <span>Full training on visa programs and qualification</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">&#10003;</span>
              <span>Marketing materials and co-branded content</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">&#10003;</span>
              <span>Dedicated partner manager for support</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">&#10003;</span>
              <span>AI-powered client qualification tools</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-slate-900 text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Partner With IGTA?</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-green-400">500+</div>
            <div className="text-slate-300">Successful Cases</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-400">7+</div>
            <div className="text-slate-300">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-400">40+</div>
            <div className="text-slate-300">Countries Served</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-400">$275K</div>
            <div className="text-slate-300">Avg Alumni Salary</div>
          </div>
        </div>
      </div>

      {/* Global Partners */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">Global Partner Network</h2>
        <p className="text-slate-600 text-center mb-6 max-w-2xl mx-auto">
          We welcome partners from around the world. Current focus regions include:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-slate-50 rounded-lg p-4">
            <span className="text-3xl mb-2 block">🇦🇪</span>
            <span className="font-medium">Dubai / UAE</span>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <span className="text-3xl mb-2 block">🇮🇪</span>
            <span className="font-medium">Ireland</span>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <span className="text-3xl mb-2 block">🇬🇧</span>
            <span className="font-medium">United Kingdom</span>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <span className="text-3xl mb-2 block">🇮🇳</span>
            <span className="font-medium">India</span>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <span className="text-3xl mb-2 block">🇳🇬</span>
            <span className="font-medium">Nigeria</span>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <span className="text-3xl mb-2 block">🇧🇷</span>
            <span className="font-medium">Brazil</span>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <span className="text-3xl mb-2 block">🇩🇪</span>
            <span className="font-medium">Germany</span>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <span className="text-3xl mb-2 block">🌍</span>
            <span className="font-medium">And More...</span>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-green-100 mb-6 max-w-2xl mx-auto">
          Apply today and join our growing network of successful partners.
          No fees, no commitments - just opportunities.
        </p>
        <a
          href="https://forms.gle/cms5mJMPFSb6zdJRA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-green-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition"
        >
          Apply to Become a Partner
        </a>
      </div>

      {/* Contact */}
      <div className="text-center text-slate-600">
        <p>Questions? Chat with our AI assistant or email <a href="mailto:partners@innovativeglobaltalent.com" className="text-green-600 hover:underline">partners@innovativeglobaltalent.com</a></p>
      </div>
    </div>
  );
}
