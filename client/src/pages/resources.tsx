import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Islamic Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Quran Resources</h2>
            <p className="mb-4">Access online Quran resources and translations.</p>
            <Button variant="outline">Explore Quran</Button>
          </div>
          <div className="bg-card p-6 rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Hadith Collections</h2>
            <p className="mb-4">Browse authentic hadith collections and translations.</p>
            <Button variant="outline">Browse Hadith</Button>
          </div>
          <div className="bg-card p-6 rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Islamic Books</h2>
            <p className="mb-4">Discover recommended Islamic books and literature.</p>
            <Button variant="outline">Find Books</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
