import { SEOHead } from '@/components/seo-head';
import { AdSense } from '@/components/adsense';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'wouter';

const bankAccounts = [
  {
    name: 'Mashriq Bank',
    accountNumber: 'PK16MSHQ0000089200017509',
    icon: 'fa-mobile-alt',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'NayaPay/SadaPay/RaastID',
    accountNumber: '03214029297',
    icon: 'fa-university',
    color: 'from-blue-500 to-indigo-600'
  },
];

export default function DonatePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Support Daily Azkar - Sadaqah Jariyah",
    "description": "Support Daily Azkar and earn Sadaqah Jariyah (ongoing charity). Your donation helps spread Islamic knowledge and maintain this free resource for Muslims worldwide.",
    "url": "https://dailyazkar.site/donate"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is my donation considered Sadaqah Jariyah?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! When you support Islamic educational resources like Daily Azkar, your donation becomes Sadaqah Jariyah - every person who benefits from the site adds to your rewards."
        }
      }
    ]
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <SEOHead
        title="Support Daily Azkar - Sadaqah Jariyah | Donate"
        description="Support Daily Azkar and earn Sadaqah Jariyah (ongoing charity). Your donation helps spread Islamic knowledge and maintain this free resource for Muslims worldwide."
        keywords="sadaqah jariyah, islamic donation, muslim charity, support islamic app, donate islam, ongoing charity, صدقة جارية"
        canonical="https://dailyazkar.site/donate"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <main className="container mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-hand-holding-heart text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Support Daily Azkar
          </h1>
          <h2 className="text-2xl md:text-3xl font-arabic text-emerald-600 dark:text-emerald-400 mb-6">
            صدقة جارية
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Invest in your Akhirah with Sadaqah Jariyah - ongoing charity that keeps rewarding
          </p>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Support This Work
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Daily Azkar is a free resource dedicated to helping Muslims maintain their daily remembrance of Allah. We believe that access to authentic Islamic knowledge and resources should be available to everyone, regardless of their financial situation. Your generous support helps us continue this mission.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Every donation, no matter how small, contributes to keeping this platform running and developing new features to better serve the Ummah. Our team works tirelessly to ensure that the content provided is authentic, accurate, and beneficial to all who seek it.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When you support Daily Azkar, you're not just making a one-time donation - you're investing in a resource that will continue to benefit Muslims worldwide for years to come. This is the essence of Sadaqah Jariyah.
            </p>
          </div>
        </div>

        {/* Sadaqah Jariyah Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              The Reward of Sadaqah Jariyah
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              The Prophet Muhammad ﷺ said: <em className="text-emerald-600 dark:text-emerald-400">"When a person dies, their deeds come to an end except for three: ongoing charity (Sadaqah Jariyah), knowledge that benefits others, or a righteous child who prays for them"</em> (Muslim).
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              By supporting Daily Azkar, your contribution becomes <strong>Sadaqah Jariyah</strong> - every person who:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Recites their Morning or Evening Azkar using this platform</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Learns a new dua or supplication from our collection</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Strengthens their relationship with Allah through Dhikr</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Shares the resource with family and friends</span>
              </li>
            </ul>
            <p className="text-emerald-700 dark:text-emerald-400 font-medium">
              ...adds to your rewards, in sha Allah. This reward continues even after you pass away.
            </p>
          </div>
        </div>

        <AdSense className="my-8" />

        {/* How Donation Helps */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            How Your Donation Helps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glassmorphism rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-server text-blue-600 dark:text-blue-400 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Server Costs</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Keeping Daily Azkar accessible 24/7 worldwide requires reliable hosting infrastructure. Your support ensures the site remains fast and available to all.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-pen-fancy text-purple-600 dark:text-purple-400 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Content Development</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Adding new Azkar collections, translations in more languages, audio recitations, and scholarly explanations to enrich the content.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-mobile-alt text-emerald-600 dark:text-emerald-400 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Mobile App Development</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Developing native mobile applications for iOS and Android to make Azkar practice more accessible on the go.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-ban text-amber-600 dark:text-amber-400 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Ad-Free Experience</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Working towards removing advertisements so users can focus purely on worship without distractions.
              </p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
              Donation Methods
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Choose your preferred payment method. All payments are secure and go directly towards maintaining Daily Azkar.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bankAccounts.map((account, index) => (
                <Card key={index} className="glassmorphism border-0 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${account.color} rounded-full flex items-center justify-center`}>
                        <i className={`fas ${account.icon} text-white text-xl`}></i>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{account.name}</h3>
                    </div>
                    <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                      <span className="font-mono text-lg text-gray-800 dark:text-white">{account.accountNumber}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(account.accountNumber)}
                        className="hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        <i className="fas fa-copy"></i>
                      </Button>
                    </div>
                  </div>
                </Card>
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
                Is my donation considered Sadaqah Jariyah?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! When you support Islamic educational resources like Daily Azkar, your donation becomes Sadaqah Jariyah. Every person who benefits from this site adds to your rewards, in sha Allah, and this continues even after you pass away.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Can I donate any amount?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutely! No amount is too small. The Prophet ﷺ said: "Protect yourself from the Fire even with half a date" (Bukhari). Every contribution, regardless of size, is valuable and appreciated.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Is my donation tax-deductible?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Please consult with your local tax advisor regarding deductibility in your jurisdiction. Rules vary by country and region.
              </p>
            </div>
          </div>
        </div>

        {/* Internal Links */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            Explore What Your Support Enables
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/morning-azkar" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
              Morning Azkar
            </Link>
            <Link href="/evening-azkar" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Evening Azkar
            </Link>
            <Link href="/ruqiya" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Ruqyah Collection
            </Link>
            <Link href="/rabbana-duas" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors">
              Quranic Duas
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              May Allah Bless Your Generosity
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              "The charity you give will be your shade on the Day of Judgment." - Prophet Muhammad ﷺ
            </p>
            <p className="text-emerald-600 dark:text-emerald-400 font-arabic text-xl">
              جزاكم الله خيراً
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              May Allah reward you with goodness
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
