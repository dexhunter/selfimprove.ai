'use client';

import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');

  const handleGetStarted = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup or redirect to chat
    console.log('Getting started with:', email);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 via-blue-800/20 to-purple-800/20 animate-pulse"></div>
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">AI</span>
          </div>
          <span className="text-white font-bold text-xl">AgentEvolution</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-gray-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a>
          <a href="#chat" className="hover:text-white transition-colors">Try Chat</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all">
          Sign In
        </button>
      </nav>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 animate-bounce"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 animate-bounce delay-100"></div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-bounce delay-200"></div>
          </div>
          <p className="text-purple-300 text-sm font-medium mb-4">
            Trusted by 10,000+ AI researchers worldwide
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          AI Agents that{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Evolve Themselves
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience the next generation of artificial intelligence. Our self-improving agents 
          rewrite their own code, evolve through challenges, and continuously enhance their capabilities 
          using breakthrough technologies like the <strong>Darwin Gödel Machine</strong>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <form onSubmit={handleGetStarted} className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              Start Evolving
            </button>
          </form>
        </div>

        <div className="flex items-center justify-center space-x-8 text-gray-400">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm">Self-Modifying Code</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm">Open-Ended Evolution</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm">Continuous Learning</span>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-300"></div>
      <div className="absolute top-1/2 left-4 w-16 h-16 bg-pink-500/20 rounded-full blur-lg animate-pulse delay-500"></div>
    </section>
  );
}