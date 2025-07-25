import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function AboutIslamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">About Islam</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">The Five Pillars</h2>
            <p className="mb-4">Learn about the five fundamental practices of Islam.</p>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Islamic Beliefs</h2>
            <p className="mb-4">Understand the core beliefs of Muslims.</p>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Islamic History</h2>
            <p className="mb-4">Explore the rich history of Islam and its spread.</p>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Islamic Ethics</h2>
            <p className="mb-4">Discover the moral principles of Islam.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
