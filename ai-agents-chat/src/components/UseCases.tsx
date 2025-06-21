export default function UseCases() {
  const useCases = [
    {
      icon: '🧪',
      title: 'Scientific Research Acceleration',
      description: 'AI researchers developing breakthrough algorithms that evolve their own hypothesis generation and experimental design.',
      benefits: ['Automated code optimization', 'Novel algorithm discovery', 'Continuous methodology improvement'],
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: '🏢',
      title: 'Enterprise Process Automation',
      description: 'Businesses deploying agents that continuously optimize their workflows and adapt to changing requirements.',
      benefits: ['Self-improving workflows', 'Adaptive process optimization', 'Cost reduction over time'],
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: '💡',
      title: 'Creative Problem Solving',
      description: 'Artists and designers using evolving AI to generate increasingly sophisticated creative solutions.',
      benefits: ['Dynamic creativity enhancement', 'Novel design approaches', 'Personalized creative evolution'],
      gradient: 'from-green-600 to-teal-600'
    },
    {
      icon: '🎯',
      title: 'Personalized Learning Systems',
      description: 'Educational platforms with AI tutors that evolve their teaching methods based on student interactions.',
      benefits: ['Adaptive teaching strategies', 'Personalized curriculum design', 'Continuous pedagogical improvement'],
      gradient: 'from-orange-600 to-red-600'
    },
    {
      icon: '🔍',
      title: 'Advanced Data Analysis',
      description: 'Research teams using agents that discover new patterns and continuously refine their analytical approaches.',
      benefits: ['Self-improving analytics', 'Novel pattern discovery', 'Autonomous insight generation'],
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      icon: '🚀',
      title: 'Rapid MVP Development',
      description: 'Startups building prototypes with AI agents that evolve the product based on user feedback and market demands.',
      benefits: ['Continuous product evolution', 'Automated A/B testing', 'Market-driven improvements'],
      gradient: 'from-yellow-600 to-orange-600'
    }
  ];

  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real-World{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Applications
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how organizations worldwide are leveraging self-improving AI agents to solve complex challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${useCase.gradient} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <span className="text-2xl">{useCase.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{useCase.description}</p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-purple-300 mb-3">Key Benefits:</h4>
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Proven Results Across Industries
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
                300%
              </div>
              <div className="text-gray-300">Average Performance Improvement</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                85%
              </div>
              <div className="text-gray-300">Reduction in Manual Optimization</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-gray-300">Self-Modifications Per Agent Daily</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-300">Continuous Evolution</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Deploy Self-Evolving AI?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join leading organizations in harnessing the power of continuously improving AI agents. 
              Start with our Darwin Gödel Machine framework today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all">
                Get Started Free
              </button>
              <button className="border border-purple-500 text-purple-300 px-8 py-3 rounded-full font-semibold hover:bg-purple-500/10 transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}