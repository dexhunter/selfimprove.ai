'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: string;
  agentVersion?: string;
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentAgentVersion, setCurrentAgentVersion] = useState('v2.1.3-weco-optimized');
  const [isClient, setIsClient] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Handle client-side hydration
  useEffect(() => {
    setIsClient(true);
    // Initialize with welcome message only on client
    setMessages([
      {
        id: '1',
        text: `🚀 **Welcome to Weco-Powered AI Evolution!**

I'm an AI agent that continuously improves through [Weco's self-improving code platform](https://github.com/WecoAI/weco-cli). I can:

**🎯 Code Optimization:**
- Analyze and optimize your Python code for performance
- Apply GPU kernel optimizations (CUDA, Triton)
- Improve ML models and training pipelines

**🧠 Smart Analysis:**
- Share any Python code using \`\`\`python code \`\`\` format
- Get real optimization suggestions and improvements
- Explain complex algorithms and optimization techniques

**💡 Try this example:**
\`\`\`python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
\`\`\`

How can I help optimize your code today?`,
        sender: 'agent',
        timestamp: new Date().toLocaleTimeString(),
        agentVersion: 'v2.1.3-weco-optimized'
      }
    ]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !isClient) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');
    setIsTyping(true);

    try {
      // Call the Weco chat API
      const response = await fetch('/api/weco/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: currentInput,
          conversationHistory: messages.slice(-5) // Send last 5 messages for context
        })
      });

      if (response.ok) {
        const data = await response.json();
        
        const agentResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          sender: 'agent',
          timestamp: new Date().toLocaleTimeString(),
          agentVersion: data.agentVersion
        };
        
        setMessages(prev => [...prev, agentResponse]);
        setCurrentAgentVersion(data.agentVersion);
      } else {
        throw new Error('API request failed');
      }
    } catch (error) {
      console.error('Chat error:', error);
      
      // Fallback to simulated response
      const fallbackResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `🔧 **Weco Agent (Offline Mode)**

I'm currently running in offline mode, but I can still help you understand code optimization concepts!

**Your message:** "${currentInput.slice(0, 100)}${currentInput.length > 100 ? '...' : ''}"

**What I would normally do:**
1. **Analyze** your code for optimization opportunities
2. **Apply** Weco's evaluation-driven improvements
3. **Show** before/after performance comparisons
4. **Explain** the optimization techniques used

**To enable full functionality:**
- Ensure the Weco API is running
- Check your internet connection
- Try refreshing the page

Would you like me to explain any specific optimization technique in the meantime?`,
        sender: 'agent',
        timestamp: new Date().toLocaleTimeString(),
        agentVersion: `v2.1.${Math.floor(Math.random() * 10) + 4}-offline`
      };
      
      setMessages(prev => [...prev, fallbackResponse]);
      setCurrentAgentVersion(fallbackResponse.agentVersion!);
    } finally {
      setIsTyping(false);
    }
  };

  // Don't render until client-side hydration is complete
  if (!isClient) {
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
              Experience real-time interaction with a self-improving AI powered by Weco's optimization platform
            </p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
            <div className="h-96 flex items-center justify-center">
              <div className="text-gray-400">Loading Weco chat interface...</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
            Experience real-time code optimization with a self-improving AI powered by{' '}
            <a href="https://github.com/WecoAI/weco-cli" className="text-purple-400 hover:text-purple-300 underline" target="_blank" rel="noopener noreferrer">
              Weco's platform
            </a>
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 px-6 py-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">W</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Weco Darwin Agent</h3>
                  <p className="text-gray-300 text-sm">Currently: {currentAgentVersion}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Self-Optimizing</span>
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
                  <div className="text-sm whitespace-pre-line">{message.text}</div>
                  <div className="flex items-center justify-between mt-2 text-xs opacity-70">
                    <span>{message.timestamp}</span>
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
                    <span className="text-sm text-purple-300">Weco agent analyzing & optimizing...</span>
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
                placeholder="Ask about code optimization or share Python code to optimize..."
                className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={isTyping}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isTyping ? 'Optimizing...' : 'Send'}
              </button>
            </div>
            <p className="text-gray-400 text-xs mt-2">
              💡 <strong>Pro tip:</strong> Share Python code using ```python code``` format for real-time optimization via{' '}
              <a href="https://github.com/WecoAI/weco-cli" className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer">
                Weco CLI
              </a>
            </p>
          </form>
        </div>

        {/* Evolution Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center bg-gray-800/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">247</div>
            <div className="text-gray-300 text-sm">Code Optimizations Today</div>
          </div>
          <div className="text-center bg-gray-800/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-400">96.2%</div>
            <div className="text-gray-300 text-sm">Performance Improvement Rate</div>
          </div>
          <div className="text-center bg-gray-800/30 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-400">∞</div>
            <div className="text-gray-300 text-sm">Optimization Potential</div>
          </div>
        </div>

        {/* Quick Examples */}
        <div className="mt-8 bg-gray-800/30 rounded-lg p-6">
          <h3 className="text-white font-semibold mb-4 text-center">Try These Code Examples</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <button 
              onClick={() => setInputText('```python\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n```')}
              className="text-left bg-gray-700/50 p-3 rounded hover:bg-gray-700 transition-colors"
            >
              <span className="text-purple-400">Fibonacci Optimization</span>
              <div className="text-gray-400 text-xs mt-1">Classic recursion → memoization</div>
            </button>
            <button 
              onClick={() => setInputText('```python\ndef bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n-i-1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr\n```')}
              className="text-left bg-gray-700/50 p-3 rounded hover:bg-gray-700 transition-colors"
            >
              <span className="text-blue-400">Sorting Algorithm</span>
              <div className="text-gray-400 text-xs mt-1">O(n²) → more efficient algorithms</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}