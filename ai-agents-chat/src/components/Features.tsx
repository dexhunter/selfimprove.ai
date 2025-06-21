export default function Features() {
  const traditionalFeatures = [
    { name: 'Code Generation', description: 'Manual prompt engineering', icon: '⚙️' },
    { name: 'Learning', description: 'Fixed training data', icon: '📚' },
    { name: 'Improvement', description: 'Human-driven updates', icon: '👨‍💻' },
    { name: 'Adaptation', description: 'Limited flexibility', icon: '🔒' },
    { name: 'Evolution', description: 'Version-based releases', icon: '📦' },
    { name: 'Problem Solving', description: 'Static approaches', icon: '🧩' },
  ];

  const evolutionFeatures = [
    { name: 'Code Generation', description: 'Self-modifying algorithms', icon: '🔄' },
    { name: 'Learning', description: 'Continuous self-improvement', icon: '🧠' },
    { name: 'Improvement', description: 'Autonomous code rewriting', icon: '✨' },
    { name: 'Adaptation', description: 'Dynamic strategy evolution', icon: '🦋' },
    { name: 'Evolution', description: 'Open-ended development', icon: '🌱' },
    { name: 'Problem Solving', description: 'Creative breakthrough discovery', icon: '💡' },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Traditional AI vs{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Self-Evolving Agents
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our Darwin Gödel Machine revolutionizes AI development compared to traditional approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Traditional AI */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Traditional AI Systems</h3>
            </div>
            <div className="space-y-4">
              {traditionalFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-300">{feature.name}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-orange-400 font-medium">
              Hours spent on manual optimization and limited adaptation
            </div>
          </div>

          {/* Self-Evolving AI */}
          <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white">AgentEvolution</h3>
            </div>
            <div className="space-y-4">
              {evolutionFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h4 className="font-semibold text-white">{feature.name}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-green-400 font-medium">
              Autonomous evolution with unlimited potential for growth
            </div>
          </div>
        </div>

        {/* Key Innovations */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧬</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Darwin Gödel Machine</h3>
            <p className="text-gray-300">
              Combines evolutionary algorithms with self-modifying code for unprecedented adaptation
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌊</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Open-Ended Exploration</h3>
            <p className="text-gray-300">
              Discovers novel solutions through continuous exploration of the solution space
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">♾️</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Infinite Learning</h3>
            <p className="text-gray-300">
              Agents that learn indefinitely, continuously improving their own capabilities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}