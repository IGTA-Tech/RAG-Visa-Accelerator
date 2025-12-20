'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const suggestedQuestions = [
    "What are the 8 O-1 criteria?",
    "How do I handle price objections?",
    "What's the difference between Profile Builder and Elite?",
    "How does agent-based petitioning work?",
    "What score means someone is ready to file?",
    "How long does evidence building take?",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, history: messages }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please make sure the API key is configured in Netlify environment variables.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">Ask AI</h1>
        <p className="text-xl text-slate-600 mt-2">Get instant answers about IGTA products, processes, and sales</p>
      </div>

      {/* Chat Container */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden" style={{ height: 'calc(100vh - 320px)', minHeight: '400px' }}>
        {/* Messages Area */}
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎓</div>
                <h2 className="text-xl font-semibold text-slate-700 mb-2">IGTA Training Assistant</h2>
                <p className="text-slate-500 mb-6">Ask me anything about our products, processes, pricing, or sales techniques.</p>

                {/* Suggested Questions */}
                <div className="max-w-2xl mx-auto">
                  <p className="text-sm text-slate-400 mb-3">Try asking:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {suggestedQuestions.map((question, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestedQuestion(question)}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-lg text-sm transition"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {messages.map((message, idx) => (
              <div
                key={idx}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-green-600 text-white'
                      : 'bg-slate-100 text-slate-800'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{message.content}</div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 rounded-2xl px-4 py-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-slate-200 p-4">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question about IGTA..."
                className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-green-600 hover:bg-green-700 disabled:bg-slate-300 text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 rounded-xl p-4 text-sm text-blue-800">
        <strong>Note:</strong> This AI assistant is trained on the complete IGTA training curriculum including products, pricing, O-1 criteria, sales techniques, and objection handling.
      </div>
    </div>
  );
}
