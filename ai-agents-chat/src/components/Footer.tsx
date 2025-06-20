export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-white font-bold text-xl">AgentEvolution</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The leading platform for building and deploying self-improving AI agents. 
              Powered by the breakthrough Darwin Gödel Machine framework, enabling AI that 
              continuously evolves and improves itself.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/agentevolution" 
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/agentevolution" 
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/agentevolution" 
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://discord.gg/agentevolution" 
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Discord"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.9616-.6067 3.9501-1.5219 6.002-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#research" className="text-gray-400 hover:text-white transition-colors">Research</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#press" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#documentation" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#api" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#community" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
              <li><a href="#tutorials" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#support" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Research Citations */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gray-800/50 rounded-lg p-6">
            <h4 className="text-white font-semibold mb-4">Research Foundation</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>
                <strong className="text-gray-300">Darwin Gödel Machine:</strong> Based on the research by 
                <a href="https://sakana.ai/dgm/" className="text-purple-400 hover:text-purple-300 ml-1" target="_blank" rel="noopener noreferrer">
                  Sakana AI
                </a>
              </p>
              <p>
                <strong className="text-gray-300">Original Gödel Machine:</strong> Conceptualized by 
                <a href="https://people.idsia.ch/~juergen/" className="text-purple-400 hover:text-purple-300 ml-1" target="_blank" rel="noopener noreferrer">
                  Jürgen Schmidhuber
                </a>
              </p>
              <p>
                <strong className="text-gray-300">Open-Ended Evolution:</strong> Inspired by advances in 
                <a href="https://arxiv.org" className="text-purple-400 hover:text-purple-300 ml-1" target="_blank" rel="noopener noreferrer">
                  evolutionary algorithms research
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} AgentEvolution Inc. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#cookies" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}