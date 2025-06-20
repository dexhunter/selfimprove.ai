import ChatBox from '@/components/ChatBox';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import UseCases from '@/components/UseCases';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <Hero />
      <Features />
      <UseCases />
      <ChatBox />
      <FAQ />
      <Footer />
    </main>
  );
}
