'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
  agentVersion?: string;
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m an evolving AI agent powered by the Darwin Gödel Machine. I can rewrite my own code to better solve your problems. How can I help you today?',
      sender: 'agent',
      timestamp: new Date(),
      agentVersion: 'v2.1.3-evolved'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentAgentVersion, setCurrentAgentVersion] = useState('v2.1.3-evolved');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAgentResponse = (userMessage: string): string => {
    const responses = [
      `I'm analyzing your request and evolving my approach... Based on my latest self-modifications, I can suggest several optimized solutions.`,
      `Interesting challenge! I just rewrote part of my reasoning module to better handle this type of problem. Here's my enhanced perspective:`,
      `My evolutionary algorithm has discovered a novel approach to this. Let me apply my latest code improvements to provide you with a breakthrough solution.`,
      `I've just updated my knowledge integration system. This allows me to provide you with a more sophisticated answer than my previous version could.`,
      `Fascinating! This question triggered an automatic self-improvement cycle. I've evolved my problem-solving capabilities and can now offer you this enhanced solution:`
    ];
    
    return responses[Math.floor(Math.random() * responses.length)] + ` 

Regarding "${userMessage.slice(0, 50)}${userMessage.length > 50 ? '...' : ''}", I believe the key insight is to approach this through the lens of open-ended exploration and continuous adaptation.

Would you like me to evolve my response further or explore a different angle?`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate agent thinking and evolution
    setTimeout(() => {
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: simulateAgentResponse(inputText),
        sender: 'agent',
        timestamp: new Date(),
        agentVersion: `v2.1.${Math.floor(Math.random() * 10) + 4}-evolved`
      };
      
      setMessages(prev => [...prev, agentResponse]);
      setCurrentAgentVersion(agentResponse.agentVersion!);
      setIsTyping(false);
    }, 2000 + Math.random() * 2000);
  };

  return (
    <section id="chat" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900 to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Chat with an{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Evolving Agent
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience real-time interaction with a self-improving AI that continuously evolves its capabilities
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 px-6 py-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">AI</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Darwin Agent</h3>
                  <p className="text-gray-300 text-sm">Currently: {currentAgentVersion}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Evolving</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-gray-700 text-gray-100'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <div className="flex items-center justify-between mt-2 text-xs opacity-70">
                    <span>{message.timestamp.toLocaleTimeString()}</span>
                    {message.agentVersion && (
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded">
                        {message.agentVersion}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-700 text-gray-100 max-w-xs lg:max-w-md px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                    <span className="text-sm text-purple-300">Agent is evolving response...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-6 border-t border-gray-700">
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask the evolving agent anything..."
                className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={isTyping}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
            <p className="text-gray-400 text-xs mt-2">
              This agent continuously improves itself through the Darwin Gödel Machine framework
            </p>
          </form>
        </div>

        {/* Evolution Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center bg-gray-800/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">47</div>
            <div className="text-gray-300 text-sm">Self-Modifications Today</div>
          </div>
          <div className="text-center bg-gray-800/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-400">92.3%</div>
            <div className="text-gray-300 text-sm">Problem-Solving Accuracy</div>
          </div>
          <div className="text-center bg-gray-800/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-400">∞</div>
            <div className="text-gray-300 text-sm">Learning Potential</div>
          </div>
        </div>
      </div>
    </section>
  );
}