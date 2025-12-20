'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const pricingCards = [
  { id: 'p1-standard', title: 'P-1 Standard', amount: '$6,000', desc: 'Click to copy links' },
  { id: 'p1-frm', title: 'P-1 FRM', amount: '$4,000', desc: 'First Round Management' },
  { id: 'o1-standard', title: 'O-1 Standard', amount: '$8,000', desc: 'Click to copy links' },
  { id: 'o1-petitioner', title: 'O-1 + Petitioner', amount: '$10,000', desc: 'With agent service' },
  { id: 'eb1a-standard', title: 'EB-1A', amount: '$8,000', desc: 'Green card' },
  { id: 'petitioner', title: 'Petitioner Only', amount: '$2,000', desc: 'Agent service' },
];

const linkBlocks: Record<string, string> = {
  'p1-standard': `P-1 Standard ($6,000):
Payment: www.sherrodsportsvisas.com/6000
Engagement: www.sherrodsportsvisas.com/engagement6000
Details: www.sherrodsportsvisas.com/p16000`,
  'p1-frm': `P-1 FRM ($4,000):
Payment: www.sherrodsportsvisas.com/4000
Engagement: www.sherrodsportsvisas.com/engagement4000
Details: www.sherrodsportsvisas.com/p14000`,
  'o1-standard': `O-1 Standard ($8,000):
Payment: www.sherrodsportsvisas.com/8000
Engagement: www.sherrodsportsvisas.com/engagement8000
Details: www.sherrodsportsvisas.com/o18000`,
  'o1-petitioner': `O-1 + Petitioner ($10,000):
Payment: www.sherrodsportsvisas.com/10000
Engagement: www.sherrodsportsvisas.com/engagement10000
Details: www.sherrodsportsvisas.com/o110000`,
  'eb1a-standard': `EB-1A ($8,000):
Payment: www.sherrodsportsvisas.com/8000
Engagement: www.sherrodsportsvisas.com/engagement8000
Details: www.sherrodsportsvisas.com/eb1a8000`,
  'petitioner': `Petitioner Only ($2,000):
AVA: www.aventusvisaagents.com/2000
IGTA: www.innovativeglobaltalent.com/2000`,
};

const quickActions = [
  { label: 'P-1 Eligibility', icon: '🏃', prompt: 'Check P-1 eligibility for an athlete' },
  { label: 'O-1 Eligibility', icon: '⭐', prompt: 'Check O-1 eligibility' },
  { label: 'Generate Links', icon: '🔗', prompt: 'Generate pricing links for O-1 with petitioner' },
  { label: 'Draft Email', icon: '✉️', prompt: 'Draft a follow-up email for a lead who has not responded' },
  { label: 'FRM Pricing', icon: '💵', prompt: 'What is the FRM special pricing?' },
  { label: 'P-1 vs O-1', icon: '❓', prompt: 'Explain the difference between P-1 and O-1' },
];

const resources = [
  { label: 'Self Evaluation Intake Form', href: 'https://sherrodsportsvisas.report', icon: '📄' },
  { label: 'Book Consultation', href: 'https://calendly.com/innovative_global_talent_agency/consultation', icon: '📅' },
  { label: 'Knowledge Hub Community', href: 'https://oandpvisas.community', icon: '👥' },
  { label: 'SSV Website', href: 'https://www.sherrodsportsvisas.com', icon: '🌐' },
  { label: 'IGTA Website', href: 'https://www.innovativeglobaltalent.com', icon: '🌐' },
];

export default function SSVPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: 'Welcome! I can help with visa eligibility, pricing, email drafting, and process questions. What do you need?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentBrand, setCurrentBrand] = useState('SSV');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (messageText?: string) => {
    const text = messageText || input.trim();
    if (!text || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/ssv-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, brand: currentBrand }),
      });

      const data = await response.json();
      if (data.error) {
        setMessages(prev => [...prev, { role: 'system', content: `Error: ${data.error}` }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'system', content: 'Error connecting to the server. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyLinks = (id: string) => {
    navigator.clipboard.writeText(linkBlocks[id]);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-cyan-400">
          &quot;We solve problems for the best athletes, coaches, and organizations in the world&quot;
        </h1>
        <p className="text-xl text-slate-300 mb-6">SSV Lead Management & BD Assistant</p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://docs.google.com/spreadsheets/d/10yzVfq3aH89c2UUMJrI5PCrXv_vK1NIBm3jM2IlbIu4/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition inline-flex items-center gap-2"
          >
            📊 Open Lead Sheet
          </a>
          <a href="https://sherrodsportsvisas.report" target="_blank" rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-600 to-green-500 text-white px-5 py-3 rounded-full font-semibold hover:shadow-lg transition inline-flex items-center gap-2">
            📄 Intake Form
          </a>
          <a href="https://calendly.com/innovative_global_talent_agency/consultation" target="_blank" rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-600 to-green-500 text-white px-5 py-3 rounded-full font-semibold hover:shadow-lg transition inline-flex items-center gap-2">
            📅 Consultation
          </a>
          <a href="https://oandpvisas.community" target="_blank" rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-600 to-green-500 text-white px-5 py-3 rounded-full font-semibold hover:shadow-lg transition inline-flex items-center gap-2">
            👥 Knowledge Hub
          </a>
        </div>
      </div>

      {/* Chatbot */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 p-4 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-white text-xl font-bold flex items-center gap-2">
            🤖 SSV BD Assistant
          </h2>
          <div className="flex gap-2">
            {['SSV', 'IGTA', 'AVA'].map((brand) => (
              <button
                key={brand}
                onClick={() => {
                  setCurrentBrand(brand);
                  setMessages(prev => [...prev, { role: 'system', content: `Switched to ${brand} brand context` }]);
                }}
                className={`px-4 py-2 rounded-full font-semibold border-2 border-white transition ${
                  currentBrand === brand
                    ? 'bg-white text-cyan-600'
                    : 'bg-transparent text-white hover:bg-white/20'
                }`}
              >
                {brand === 'AVA' ? 'Aventus' : brand}
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === 'user' ? 'justify-end' : msg.role === 'system' ? 'justify-center' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[85%] p-4 rounded-2xl ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-br-md'
                    : msg.role === 'system'
                    ? 'bg-yellow-100 text-yellow-800 text-sm'
                    : 'bg-white text-slate-800 shadow-sm border border-slate-200 rounded-bl-md'
                }`}
              >
                <p className="whitespace-pre-wrap text-sm">{msg.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl rounded-bl-md shadow-sm border border-slate-200">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-2 p-3 bg-slate-100 border-t border-slate-200">
          {quickActions.map((action) => (
            <button
              key={action.label}
              onClick={() => sendMessage(action.prompt)}
              className="px-3 py-2 text-sm rounded-full border border-cyan-400 text-cyan-600 hover:bg-cyan-50 transition"
            >
              {action.icon} {action.label}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-slate-200 bg-white flex gap-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about eligibility, pricing, drafting emails, or process questions..."
            className="flex-1 px-4 py-3 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none text-sm"
            rows={1}
            disabled={isLoading}
          />
          <button
            onClick={() => sendMessage()}
            disabled={isLoading || !input.trim()}
            className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 disabled:from-slate-300 disabled:to-slate-300 text-white rounded-full flex items-center justify-center transition"
          >
            ➤
          </button>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Pricing Reference */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <h2 className="text-xl font-bold text-cyan-600 mb-4 flex items-center gap-2">
            💰 Quick Pricing Reference
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {pricingCards.map((card) => (
              <button
                key={card.id}
                onClick={() => copyLinks(card.id)}
                className={`p-4 rounded-xl border-2 transition text-center ${
                  copiedId === card.id
                    ? 'border-green-500 bg-green-50'
                    : 'border-slate-200 hover:border-cyan-400 hover:bg-cyan-50'
                }`}
              >
                <div className="font-bold text-cyan-600 text-sm">{card.title}</div>
                <div className="text-2xl font-bold text-green-600">{card.amount}</div>
                <div className="text-xs text-slate-500">
                  {copiedId === card.id ? 'Copied!' : card.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Key Resources */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <h2 className="text-xl font-bold text-cyan-600 mb-4 flex items-center gap-2">
            🔗 Key Resources
          </h2>
          <div className="space-y-3">
            {resources.map((resource) => (
              <a
                key={resource.label}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-cyan-50 transition text-cyan-600 hover:text-cyan-700"
              >
                <span className="text-xl">{resource.icon}</span>
                <span className="font-medium">{resource.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
