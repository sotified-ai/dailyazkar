import { SEOHead } from '@/components/seo-head';
import { AdSense } from '@/components/adsense';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'wouter';

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
      case 'whatsapp':
        window.open(`https://wa.me/?text=${content} ${url}`);
        break;
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Muslim Community - Daily Azkar",
    "description": "Join our growing Muslim community. Share your journey of faith, discuss Islamic topics, and support one another in practicing daily Azkar.",
    "url": "https://dailyazkar.site/community"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can I participate in the community?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Stay connected with Daily Azkar through our regular updates and engage with fellow users who are on the same spiritual journey."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <SEOHead
        title="Muslim Community - Connect with Fellow Believers | Daily Azkar"
        description="Join our growing Muslim community. Share your journey of faith, discuss Islamic topics, and support one another in practicing daily Azkar and remembrance of Allah."
        keywords="muslim community, islamic community, ummah, muslim brothers sisters, islamic fellowship, dhikr community, azkar group"
        canonical="https://dailyazkar.site/community"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <main className="container mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-users text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Muslim Community
          </h1>
          <h2 className="text-2xl md:text-3xl font-arabic text-purple-600 dark:text-purple-400 mb-6">
            الأمة الإسلامية
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join our growing community of believers committed to daily remembrance
          </p>
        </div>

        {/* Welcome Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Welcome to Our Community
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Islam places great emphasis on community (Ummah). The Prophet Muhammad ﷺ said: <em className="text-purple-600 dark:text-purple-400">"The believers, in their mutual mercy, love, and compassion, are like a single body. If one part of it suffers, the whole body responds with sleeplessness and fever."</em> (Bukhari & Muslim)
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Daily Azkar brings together Muslims from around the world who share a common goal: strengthening their connection with Allah through daily remembrance. Together, we encourage one another to maintain consistency in our spiritual practices and support each other on this blessed journey.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Whether you're just beginning your journey of remembrance or have been practicing for years, you'll find a welcoming community here. We believe that collective worship and mutual encouragement amplify our individual efforts and strengthen the bonds of Islamic brotherhood and sisterhood.
            </p>
          </div>
        </div>

        {/* Why Community Matters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
              Why Community Matters in Islam
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Practicing Islam in community provides encouragement, accountability, and shared learning. When we come together for the sake of Allah, we benefit from each other's knowledge and gain strength from shared purpose. The Quran reminds us: <em className="text-purple-600 dark:text-purple-400">"And hold firmly to the rope of Allah all together and do not become divided"</em> (Quran 3:103).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-hand-holding-heart text-purple-600 dark:text-purple-400 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Mutual Encouragement</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Remind each other to maintain daily Azkar practice. When one of us falters, others lift us up with kind reminders.
                </p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-book-reader text-pink-600 dark:text-pink-400 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Shared Learning</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Learn from each other's experiences and knowledge. Every member brings unique insights and understanding.
                </p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-hands-helping text-blue-600 dark:text-blue-400 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Spiritual Support</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Find strength in numbers during challenging times. The community stands together through life's tests.
                </p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-heart text-emerald-600 dark:text-emerald-400 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Islamic Brotherhood/Sisterhood</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Build meaningful connections based on faith. These bonds transcend geography, culture, and language.
                </p>
              </div>
            </div>
          </div>
        </div>

        <AdSense className="my-8" />

        {/* Share Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Share Your Thoughts
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Write your thoughts about today's azkar, Islamic teachings, or share an inspiring reflection with the community.
            </p>
            <Textarea
              placeholder="Share your reflections on today's remembrance, a verse that moved you, or encouragement for your brothers and sisters..."
              className="w-full mb-4 min-h-[120px]"
            />
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => sharePost('facebook', 'Check out Daily Azkar for beautiful Islamic remembrances!')} className="bg-blue-600 hover:bg-blue-700">
                <i className="fab fa-facebook mr-2"></i>
                Share on Facebook
              </Button>
              <Button onClick={() => sharePost('twitter', 'Strengthen your connection with Allah through Daily Azkar!')} className="bg-sky-500 hover:bg-sky-600">
                <i className="fab fa-twitter mr-2"></i>
                Share on Twitter
              </Button>
              <Button onClick={() => sharePost('whatsapp', 'Assalamu Alaikum! Check out this beautiful Azkar resource:')} className="bg-green-500 hover:bg-green-600">
                <i className="fab fa-whatsapp mr-2"></i>
                Share on WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Community Features */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            How to Build Your Azkar Habit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glassmorphism border-0">
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-calendar-check text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 text-center">Daily Challenge</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Start with just one Azkar session per day. The Prophet ﷺ said: <em className="text-purple-600 dark:text-purple-400">"The most beloved deeds to Allah are the most regular, even if they are small."</em> (Bukhari)
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-purple-500">✓</span> Week 1: Morning Azkar after Fajr</li>
                  <li className="flex items-start gap-2"><span className="text-purple-500">✓</span> Week 2: Add Evening Azkar after Asr</li>
                  <li className="flex items-start gap-2"><span className="text-purple-500">✓</span> Week 3: Add post-prayer duas</li>
                </ul>
              </div>
            </Card>
            <Card className="glassmorphism border-0">
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 text-center">Group Dhikr</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Encourage your family and friends to practice together. The Prophet ﷺ said groups engaged in Dhikr are surrounded by angels.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-blue-500">✓</span> Share this site with your family</li>
                  <li className="flex items-start gap-2"><span className="text-blue-500">✓</span> Practice Morning Azkar together</li>
                  <li className="flex items-start gap-2"><span className="text-blue-500">✓</span> Remind each other via WhatsApp</li>
                </ul>
              </div>
            </Card>
            <Card className="glassmorphism border-0">
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-heart text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 text-center">Spread the Reward</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Sharing knowledge is itself an act of worship. The Prophet ﷺ said: <em className="text-emerald-600 dark:text-emerald-400">"Whoever guides someone to a good deed will have a reward similar to the doer."</em>
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2"><span className="text-emerald-500">✓</span> Share a dua with someone today</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500">✓</span> Teach children Morning Azkar</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500">✓</span> Invite others to this resource</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        {/* Islamic Tips Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
              10 Tips for Consistent Dhikr Practice
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { tip: "Set a daily reminder on your phone after Fajr and Asr", icon: "fa-bell" },
                { tip: "Keep this website bookmarked for easy access", icon: "fa-bookmark" },
                { tip: "Start with the essential 3: Subhanallah, Alhamdulillah, Allahu Akbar", icon: "fa-star" },
                { tip: "Make Dhikr while commuting or doing household chores", icon: "fa-car" },
                { tip: "Place a tasbeeh (prayer beads) where you'll see it daily", icon: "fa-pray" },
                { tip: "Read the meaning of each Azkar to deepen your connection", icon: "fa-book-open" },
                { tip: "Make dua to Allah to help you be consistent in worship", icon: "fa-hands" },
                { tip: "Track your consistency — even a simple tally on paper works", icon: "fa-chart-line" },
                { tip: "Join a local Islamic study circle for accountability", icon: "fa-users" },
                { tip: "Remember: even 5 minutes of morning Azkar is better than none", icon: "fa-clock" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${item.icon} text-purple-600 dark:text-purple-400 text-sm`}></i>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <AdSense className="my-8" />

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                How can I participate in the community?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Stay connected with Daily Azkar through our regular updates and engage with fellow users who are on the same spiritual journey. Share your reflections on social media, encourage others to practice daily remembrance, and spread the light of Dhikr in your circles.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Is there a way to connect with other community members?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Currently, you can share your experiences on social media using our share buttons. We're working on building more direct community features including discussion forums and group challenges. Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>

        {/* Internal Links */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            Start Your Spiritual Journey
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/morning-azkar" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
              Morning Azkar
            </Link>
            <Link href="/evening-azkar" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Evening Azkar
            </Link>
            <Link href="/about-islam" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Learn About Azkar
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Join the Journey Together
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              "Two are better than one... for if they fall, one will lift up his fellow." The strength of our Ummah lies in our unity.
            </p>
            <Link href="/morning-azkar" className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full font-medium transition-all">
              Start with Morning Azkar
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
