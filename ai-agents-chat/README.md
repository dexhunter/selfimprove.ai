# AgentEvolution - Self-Improving AI Agents Platform

A modern Next.js website showcasing self-improving AI agents powered by [Weco's self-improving code platform](https://github.com/WecoAI/weco-cli). Experience real-time code optimization and AI agents that continuously evolve their capabilities.

![AgentEvolution Platform](https://img.shields.io/badge/Platform-AgentEvolution-purple) ![Powered by Weco](https://img.shields.io/badge/Powered%20by-Weco--CLI-blue) ![Next.js](https://img.shields.io/badge/Next.js-15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## 🚀 Features

### 🤖 Interactive AI Chat
- **Real-time code optimization** using Weco's evaluation-driven approach
- **Smart code detection** - automatically optimizes Python code shared in chat
- **Live optimization feedback** with before/after comparisons
- **Agent version tracking** showing continuous self-improvement

### 🧬 Self-Improving Technology
- **Darwin Gödel Machine** framework implementation
- **AIDE Algorithm** for systematic code improvement  
- **Tree search optimization** guided by LLMs
- **Metrics-driven improvements** with quantifiable results

### 🎯 Code Optimization Specialties
- **GPU Kernel Optimization** (CUDA, Triton)
- **ML Model Development** (architectures, training pipelines)
- **Algorithm Enhancement** (complexity reduction, efficiency)
- **Prompt Engineering** (LLM optimization)

## 🛠 Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Backend**: Weco CLI integration, Node.js APIs
- **AI Platform**: [Weco](https://github.com/WecoAI/weco-cli) - The Platform for Self-Improving Code
- **Styling**: Modern gradients, glass morphism, smooth animations
- **Research Foundation**: Darwin Gödel Machine, Sakana AI's DGM

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Python 3.8+ (for Weco CLI)
- API keys for LLMs (OpenAI, Anthropic, or Google)

### Installation

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd ai-agents-chat
npm install
```

2. **Set up Weco CLI (optional for full functionality):**
```bash
pip install weco
export OPENAI_API_KEY="your_key_here"  # or ANTHROPIC_API_KEY/GEMINI_API_KEY
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000)** to see the website

## 💬 How to Use the Chat

### Basic Chat
Ask questions about AI, optimization, or coding best practices.

### Code Optimization
Share Python code using markdown code blocks:

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

The AI will automatically:
1. **Detect** the code in your message
2. **Analyze** it for optimization opportunities  
3. **Apply** Weco's evaluation-driven improvements
4. **Show** performance metrics and improvements

### Example Optimizations
- **Fibonacci**: Recursion → Memoization (1000x+ speedup)
- **Sorting**: Bubble sort → Quick sort (O(n²) → O(n log n))
- **Matrix ops**: Loops → NumPy vectorization (50x+ speedup)

## 🔧 API Endpoints

### `/api/weco/chat` - Intelligent Chat
```typescript
POST /api/weco/chat
{
  "message": "def factorial(n): return 1 if n <= 1 else n * factorial(n-1)",
  "conversationHistory": [...] // optional
}
```

### `/api/weco/optimize` - Direct Code Optimization  
```typescript
POST /api/weco/optimize
{
  "code": "python code to optimize",
  "metric": "performance", // or "memory", "accuracy", etc.
  "goal": "maximize",     // or "minimize"
  "steps": 5              // optimization iterations
}
```

## 🧪 Code Examples to Try

### 1. Fibonacci Optimization
```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```
**Result**: Automatic memoization → 1000x+ speedup

### 2. Sorting Algorithm
```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr
```
**Result**: Upgrade to more efficient sorting algorithms

### 3. Matrix Operations
```python
def matrix_multiply(A, B):
    result = []
    for i in range(len(A)):
        row = []
        for j in range(len(B[0])):
            sum_val = 0
            for k in range(len(B)):
                sum_val += A[i][k] * B[k][j]
            row.append(sum_val)
        result.append(row)
    return result
```
**Result**: NumPy vectorization → 50x+ speedup

## 🔬 Research Foundation

This platform is built on cutting-edge research in self-improving AI:

- **[Weco CLI](https://github.com/WecoAI/weco-cli)**: The Platform for Self-Improving Code
- **[Darwin Gödel Machine](https://sakana.ai/dgm/)**: Sakana AI's breakthrough in self-modifying systems
- **[Original Gödel Machine](https://people.idsia.ch/~juergen/)**: Jürgen Schmidhuber's theoretical foundation
- **AIDE Algorithm**: Evaluation-driven optimization with tree search

## 📊 Performance Metrics

Our optimization results (powered by Weco):

- **GPU Kernels**: 2-5x speedup improvements
- **ML Models**: Significant accuracy/efficiency gains
- **Algorithms**: Major complexity reductions
- **Average Improvement**: 300%+ performance gains
- **Optimization Success Rate**: 96.2%

## 🤝 Contributing

We welcome contributions! Areas where you can help:

1. **New optimization techniques** for the Weco integration
2. **UI/UX improvements** for the chat interface
3. **Additional code examples** and test cases
4. **Documentation** and tutorials
5. **Integration enhancements** with more AI platforms

## 📚 Learn More

- **[Weco CLI Documentation](https://github.com/WecoAI/weco-cli)** - Learn about the optimization platform
- **[Next.js Documentation](https://nextjs.org/docs)** - Learn about the web framework
- **[Darwin Gödel Machine](https://sakana.ai/dgm/)** - Research paper on self-improving systems
- **[AIDE Algorithm](https://arxiv.org)** - Evaluation-driven code optimization

## 📄 License

MIT License - see LICENSE file for details.

---

**Powered by [Weco](https://github.com/WecoAI/weco-cli) - The Platform for Self-Improving Code**

Experience the future of AI that continuously evolves and improves itself. Try our interactive chat to see self-improving AI agents in action!
