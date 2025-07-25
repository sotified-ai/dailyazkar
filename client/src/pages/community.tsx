import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

export default function CommunityPage() {
  const sharePost = (platform: string, content: string) => {
    const url = window.location.href;
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${content}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${content}`);
        break;
      case 'thread':
        window.open(`https://twitter.com/i/flow/login?redirect_after_login=%2Fcompose%2Fthread`);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Community</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Share Your Thoughts</h2>
          <Textarea
            placeholder="Write your thoughts about today's azkar or Islamic teachings..."
            className="w-full mb-4"
          />
          <div className="flex gap-2">
            <Button onClick={() => sharePost('facebook', '')}>
              Share on Facebook
            </Button>
            <Button onClick={() => sharePost('twitter', '')}>
              Share on Twitter
            </Button>
            <Button onClick={() => sharePost('thread', '')}>
              Start a Thread
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Daily Reflections</h3>
              <p className="mb-4">Share your daily reflections on azkar and Quranic verses.</p>
              <Button variant="outline">View All</Button>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Community Discussions</h3>
              <p className="mb-4">Join discussions about Islamic teachings and practices.</p>
              <Button variant="outline">Join Discussion</Button>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Success Stories</h3>
              <p className="mb-4">Read and share stories of spiritual growth and transformation.</p>
              <Button variant="outline">Read Stories</Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
