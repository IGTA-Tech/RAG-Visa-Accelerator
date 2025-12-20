'use client';

import { useState, useEffect } from 'react';

const notebooks = [
  {
    module: 1,
    title: "Company & Mission",
    description: "IGTA overview, 4 brands, mission, values, key statistics (500+ cases, $275K avg salary), team structure",
    link: "https://notebooklm.google.com/notebook/7d6c4d8c-2513-42e1-bdbe-d79d8c2a7889",
    group: "Foundation"
  },
  {
    module: 2,
    title: "O-1 Criteria Deep Dive",
    description: "The 8 O-1 criteria explained, what USCIS looks for, evidence examples, common misconceptions about \"extraordinary ability\"",
    link: "https://notebooklm.google.com/notebook/c6645a4e-86b9-4a1a-9603-ed2fa45c045b",
    group: "Foundation"
  },
  {
    module: 3,
    title: "Products & Pricing",
    description: "All 5 programs (Profile Builder $800/mo, Elite $1,400/mo, Filing Accelerator $2,000/mo, Ready Filing $11-15K, Petitioner Only $2K), routing logic",
    link: "https://notebooklm.google.com/notebook/888300c5-4c52-4caf-a5b6-7792f9193134",
    group: "Foundation"
  },
  {
    module: 4,
    title: "Assessment & Qualification",
    description: "Assessment tool (aivisaevaluations.online), score interpretation, 35% threshold, two talent pools, routing decisions",
    link: "https://notebooklm.google.com/notebook/07100ab9-b218-4de2-9924-2d444307eabe",
    group: "Foundation"
  },
  {
    module: 5,
    title: "Agent-Petitioner Model",
    description: "What agent-petitioner means, legal basis (8 CFR 214.2(o)), comparison to employer-sponsored, work itinerary, benefits (multiple employers, business ownership)",
    link: "https://notebooklm.google.com/notebook/56d2c8d9-b9f6-4f71-81ca-eeeb5a3792f5",
    group: "Core Operations"
  },
  {
    module: 6,
    title: "Evidence Building Process",
    description: "4-phase program (Foundation, Building, Strengthening, Completion), criterion-by-criterion building, 36 articles, media coverage, timelines",
    link: "https://notebooklm.google.com/notebook/e7017c7b-50bd-46e9-bfae-8f5296333e05",
    group: "Core Operations"
  },
  {
    module: 7,
    title: "The Filing Process",
    description: "Petition components (Form I-129, petition letter), Ready Filing 30-day journey, Regular vs Premium processing, RFE handling, outcomes",
    link: "https://notebooklm.google.com/notebook/2376f054-8ed3-4204-a948-439cefe01f8e",
    group: "Core Operations"
  },
  {
    module: 8,
    title: "Client Journey & Touchpoints",
    description: "Complete funnel (Awareness → Approval), pre-enrollment, Week 1 onboarding, active program touchpoints, filing phase, post-approval support",
    link: "https://notebooklm.google.com/notebook/9042f914-3dd8-4cf4-93be-f9db0caaad9f",
    group: "Core Operations"
  },
  {
    module: 9,
    title: "Objection Handling & Sales",
    description: "5 objection categories (Price, Legitimacy, Qualification, Timing, Trust), word-for-word scripts, closing techniques, key statistics",
    link: "https://notebooklm.google.com/notebook/1ef49a70-b009-4201-a181-13c4259b5257",
    group: "Core Operations"
  },
];

const comingSoonModules = [
  { module: 10, title: "Compliance & Ethics" },
  { module: 11, title: "Sales & BD Training" },
  { module: 12, title: "Client Success Training" },
  { module: 13, title: "Operations & Fulfillment" },
  { module: 14, title: "Attorney Coordination" },
  { module: 15, title: "Marketing & Content" },
  { module: 16, title: "Complex Case Handling" },
  { module: 17, title: "Partnership Management" },
  { module: 18, title: "Scaling & Future Vision" },
];

export default function NotebooksPage() {
  const [completedModules, setCompletedModules] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('igta-training-progress');
    if (saved) {
      setCompletedModules(JSON.parse(saved));
    }
  }, []);

  const toggleModule = (moduleId: number) => {
    const newCompleted = completedModules.includes(moduleId)
      ? completedModules.filter(id => id !== moduleId)
      : [...completedModules, moduleId];

    setCompletedModules(newCompleted);
    localStorage.setItem('igta-training-progress', JSON.stringify(newCompleted));
  };

  const foundationModules = notebooks.filter(n => n.group === "Foundation");
  const coreModules = notebooks.filter(n => n.group === "Core Operations");
  const progressPercent = Math.round((completedModules.length / 9) * 100);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-900">NotebookLM Training</h1>
        <p className="text-xl text-slate-600 mt-2">9 NotebookLM training modules to master IGTA</p>
      </div>

      {/* Login Credentials */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
          <span>🔑</span> NotebookLM Access
        </h3>
        <p className="text-amber-700 text-sm mb-2">
          Login to Google/NotebookLM with these credentials:
        </p>
        <div className="bg-white border border-amber-200 rounded-lg p-3 font-mono text-sm">
          <p><strong>Email:</strong> brett@sherrodsportsvisas.com</p>
          <p><strong>Password:</strong> Brett12345!</p>
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold text-slate-900">Your Progress</h2>
          <span className="text-lg font-bold text-green-600">{progressPercent}%</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex-1 bg-slate-100 rounded-full h-4">
            <div
              className="bg-green-500 rounded-full h-4 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
        <p className="text-sm text-slate-500">{completedModules.length}/9 modules completed</p>
      </div>

      {/* Welcome Box */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to IGTA Training</h2>
        <p className="text-blue-100 mb-4">
          This training portal contains 9 comprehensive modules covering everything
          you need to succeed at IGTA. Each module links to an interactive
          NotebookLM notebook where you can learn through AI-powered conversations,
          audio overviews, and quizzes.
        </p>
        <div className="bg-white/10 rounded-lg p-4 mb-4">
          <h3 className="font-semibold mb-2">Recommended Path:</h3>
          <ol className="list-decimal list-inside space-y-1 text-blue-100">
            <li>Complete Foundation modules (1-4) first</li>
            <li>Then proceed to Core Operations (5-9)</li>
            <li>Take quizzes within each NotebookLM to test your knowledge</li>
          </ol>
        </div>
        <p className="text-blue-200 text-sm">
          Estimated Total Time: 5-7 hours
        </p>
      </div>

      {/* Foundation Modules */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Foundation</h2>
        <p className="text-slate-600 mb-4">Modules 1-4 • Start here - essential knowledge everyone needs</p>
        <div className="grid md:grid-cols-2 gap-4">
          {foundationModules.map((notebook) => (
            <div
              key={notebook.module}
              className={`bg-white border-2 rounded-xl p-6 transition ${
                completedModules.includes(notebook.module)
                  ? 'border-green-500 bg-green-50'
                  : 'border-slate-200 hover:border-blue-300 hover:shadow-lg'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-600 text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center">
                    {notebook.module}
                  </span>
                  <div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                      Foundation
                    </span>
                  </div>
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={completedModules.includes(notebook.module)}
                    onChange={() => toggleModule(notebook.module)}
                    className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                  />
                  <span className="text-sm text-slate-500">Done</span>
                </label>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{notebook.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{notebook.description}</p>
              <a
                href={notebook.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                <span>Start Module</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Core Operations Modules */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Core Operations</h2>
        <p className="text-slate-600 mb-4">Modules 5-9 • Complete after Foundation modules</p>
        <div className="grid md:grid-cols-2 gap-4">
          {coreModules.map((notebook) => (
            <div
              key={notebook.module}
              className={`bg-white border-2 rounded-xl p-6 transition ${
                completedModules.includes(notebook.module)
                  ? 'border-green-500 bg-green-50'
                  : 'border-slate-200 hover:border-green-300 hover:shadow-lg'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="bg-green-600 text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center">
                    {notebook.module}
                  </span>
                  <div>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                      Core Operations
                    </span>
                  </div>
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={completedModules.includes(notebook.module)}
                    onChange={() => toggleModule(notebook.module)}
                    className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                  />
                  <span className="text-sm text-slate-500">Done</span>
                </label>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{notebook.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{notebook.description}</p>
              <a
                href={notebook.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                <span>Start Module</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Coming Soon */}
      <div className="bg-slate-100 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Coming Soon</h2>
        <p className="text-slate-600 mb-6">Modules 10-18 • Advanced training for specialized roles</p>
        <div className="grid md:grid-cols-3 gap-3">
          {comingSoonModules.map((module) => (
            <div
              key={module.module}
              className="bg-white/60 border border-slate-200 rounded-lg p-4 opacity-60"
            >
              <div className="flex items-center gap-3">
                <span className="bg-slate-300 text-slate-600 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {module.module}
                </span>
                <span className="text-slate-600 font-medium">{module.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-slate-900 text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Tips for Using NotebookLM</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-slate-300 mb-2">Ask Questions</h3>
            <p className="text-slate-400 text-sm">
              Use the chat to ask questions about any topic. NotebookLM will answer based on the training materials.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-300 mb-2">Listen to Audio Overviews</h3>
            <p className="text-slate-400 text-sm">
              Generate audio summaries to learn while commuting or multitasking.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-300 mb-2">Take Notes</h3>
            <p className="text-slate-400 text-sm">
              NotebookLM can generate study guides and flashcards from the materials.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-300 mb-2">Test Yourself</h3>
            <p className="text-slate-400 text-sm">
              Ask NotebookLM to quiz you on the material to reinforce your learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
