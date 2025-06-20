'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the Darwin Gödel Machine?",
      answer: "The Darwin Gödel Machine is a breakthrough AI system that combines evolutionary algorithms with self-modifying code. Unlike traditional AI that learns only during training, DGM continuously improves itself by rewriting its own code to become better at solving problems. It's based on Jürgen Schmidhuber's theoretical Gödel Machine but made practical through evolutionary principles."
    },
    {
      question: "How do self-improving AI agents work?",
      answer: "Our agents operate on three core principles: 1) Self-modification - they can read and modify their own code, 2) Evaluation - they test if changes improve performance on real tasks, and 3) Evolution - they maintain an archive of successful variants and explore multiple improvement paths simultaneously. This creates a continuous cycle of autonomous enhancement."
    },
    {
      question: "Is self-modifying AI safe?",
      answer: "Safety is our top priority. All self-modifications occur in secure, sandboxed environments with strict limitations. We maintain complete transparency with traceable lineages of every change, human oversight, and robust monitoring systems. Our research shows that self-improvement can actually enhance AI safety by allowing systems to identify and fix their own biases and errors."
    },
    {
      question: "What makes this different from traditional machine learning?",
      answer: "Traditional ML learns during training then freezes. Our agents learn continuously during deployment. While traditional systems require human engineers to optimize and update them, our agents automatically discover and implement their own improvements. This leads to exponential rather than linear improvement over time."
    },
    {
      question: "What programming languages and tasks are supported?",
      answer: "Our agents have demonstrated success across multiple programming languages including Python, Rust, C++, Go, and JavaScript. They excel at coding challenges, algorithm optimization, workflow automation, and creative problem-solving. The improvements discovered by agents trained on one language often transfer to others."
    },
    {
      question: "How do I get started with AgentEvolution?",
      answer: "You can start by trying our interactive chat demo above, which connects you with a live self-improving agent. For development, we offer APIs, SDKs, and hosted solutions. Our team provides guidance on integrating evolving agents into your existing workflows and scaling them for production use."
    },
    {
      question: "What are the computational requirements?",
      answer: "The beauty of our approach is that agents become more efficient over time. Initial setup requires standard deep learning infrastructure, but as agents self-optimize, they often discover more efficient algorithms that reduce computational costs. Many of our clients see cost reductions of 40-60% within the first month of deployment."
    },
    {
      question: "Can I control what changes the agents make?",
      answer: "Absolutely. You can set constraints on what types of modifications are allowed, define evaluation criteria, and maintain approval workflows for sensitive changes. All modifications are logged and can be reviewed, reverted, or approved. The system provides complete transparency into the evolution process."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900 to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Got questions about self-improving AI? We've got answers. If you can't find what you're looking for, 
            feel free to contact our support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-purple-500/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <div className={`transform transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openQuestion === index && (
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-800/20 to-blue-800/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our team of AI researchers and engineers is here to help you understand 
              and implement self-improving AI agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all">
                Contact Support
              </button>
              <button className="border border-purple-500 text-purple-300 px-8 py-3 rounded-full font-semibold hover:bg-purple-500/10 transition-all">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}