import { SEOHead } from '@/components/seo-head';
import { AdSense } from '@/components/adsense';
import { Card } from '@/components/ui/card';
import { Link } from 'wouter';

const externalResources = [
  {
    name: 'Quran.com',
    description: 'Read the Holy Quran with translations in multiple languages, tafsir, and audio recitations.',
    icon: 'fa-book-quran',
    color: 'from-emerald-500 to-green-600',
    url: 'https://quran.com'
  },
  {
    name: 'Sunnah.com',
    description: 'Access authentic hadith collections including Bukhari, Muslim, Abu Dawood, and more.',
    icon: 'fa-scroll',
    color: 'from-amber-500 to-orange-600',
    url: 'https://sunnah.com'
  },
  {
    name: 'SeekersGuidance',
    description: 'Free Islamic courses, answers to questions, and reliable scholarship.',
    icon: 'fa-graduation-cap',
    color: 'from-blue-500 to-indigo-600',
    url: 'https://seekersguidance.org'
  },
  {
    name: 'IslamQA',
    description: 'Authentic answers to Islamic questions based on Quran and Sunnah.',
    icon: 'fa-question-circle',
    color: 'from-purple-500 to-violet-600',
    url: 'https://islamqa.info'
  }
];

export default function ResourcesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Islamic Resources - Daily Azkar",
    "description": "Curated collection of authentic Islamic resources including Quran, Hadith, books, and educational materials for learning and practicing Islam.",
    "url": "https://dailyazkar.site/resources"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I find authentic Islamic resources?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reliable Islamic resources include Quran.com for Quran recitation and translation, Sunnah.com for hadith collections, and SeekersGuidance for structured learning."
        }
      },
      {
        "@type": "Question",
        "name": "What books are recommended for learning about Islam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Classic texts like 'Riyad as-Salihin', 'Fortress of the Muslim' (Hisnul Muslim), and 'The Book of Remembrances' by Imam al-Nawawi are excellent starting points."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <SEOHead
        title="Islamic Resources - Quran, Hadith & Educational Materials | Daily Azkar"
        description="Curated collection of authentic Islamic resources including Quran, Hadith, books, and educational materials for learning and practicing Islam."
        keywords="islamic resources, quran online, hadith collection, islamic books, learn islam, muslim education, islamic learning, authentic sources"
        canonical="https://dailyazkar.site/resources"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <main className="container mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-book-open text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Islamic Resources
          </h1>
          <h2 className="text-2xl md:text-3xl font-arabic text-blue-600 dark:text-blue-400 mb-6">
            المصادر الإسلامية
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Curated collection of authentic Islamic resources for your spiritual journey
          </p>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Your Path to Islamic Knowledge
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Seeking knowledge is an obligation upon every Muslim. The Prophet Muhammad ﷺ said: <em className="text-blue-600 dark:text-blue-400">"Whoever travels a path in search of knowledge, Allah will make easy for him the path to Paradise"</em> (Muslim). This page brings together authentic Islamic resources to help you on your journey of learning and spiritual growth.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              In today's digital age, we are blessed with unprecedented access to Islamic knowledge. From reading the Quran with various translations and tafsir (explanations), to studying the sayings of the Prophet ﷺ in their original form, the resources available can transform our understanding and practice of the faith.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We've carefully curated this collection to include only reliable, authentic sources that align with traditional Islamic scholarship. Whether you're a new Muslim seeking fundamental knowledge or a lifelong learner deepening your understanding, these resources will serve you well.
            </p>
          </div>
        </div>

        {/* Our Azkar Collections */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            Daily Azkar Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/morning-azkar">
              <Card className="glassmorphism border-0 hover:shadow-xl transition-all cursor-pointer group">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <i className="fas fa-sun text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Morning Azkar</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Complete collection of blessed morning remembrances</p>
                </div>
              </Card>
            </Link>
            <Link href="/evening-azkar">
              <Card className="glassmorphism border-0 hover:shadow-xl transition-all cursor-pointer group">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <i className="fas fa-moon text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Evening Azkar</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Night supplications for protection and peace</p>
                </div>
              </Card>
            </Link>
            <Link href="/ruqiya">
              <Card className="glassmorphism border-0 hover:shadow-xl transition-all cursor-pointer group">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <i className="fas fa-shield-alt text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Ruqyah</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Quranic healing and spiritual protection</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        <AdSense className="my-8" />

        {/* External Resources */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            Trusted External Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {externalResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="glassmorphism border-0 hover:shadow-xl transition-all h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${resource.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <i className={`fas ${resource.icon} text-white text-2xl`}></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{resource.name}</h3>
                        <span className="text-sm text-blue-500">
                          <i className="fas fa-external-link-alt mr-1"></i>Visit Site
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{resource.description}</p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>

        {/* Recommended Books */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
              Recommended Books for Daily Practice
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-book text-emerald-600 dark:text-emerald-400"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Fortress of the Muslim (Hisnul Muslim)</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">A comprehensive collection of duas for every occasion. This pocket-sized book is an essential companion for every Muslim.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-book text-blue-600 dark:text-blue-400"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Riyad as-Salihin</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">By Imam al-Nawawi. Gardens of the Righteous - a collection of authentic hadiths covering all aspects of Islamic life and conduct.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-book text-purple-600 dark:text-purple-400"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">The Book of Remembrances (Al-Adhkar)</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Also by Imam al-Nawawi. A detailed compilation of authentic adhkar with explanations and benefits.</p>
                </div>
              </div>
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
                Where can I find authentic Islamic resources?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Reliable Islamic resources include Quran.com for Quran recitation and translation, Sunnah.com for hadith collections, SeekersGuidance for structured learning, and IslamQA for answers to specific questions. Always verify information with qualified scholars when in doubt.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                What books are recommended for learning about Islam?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Classic texts like 'Riyad as-Salihin', 'Fortress of the Muslim' (Hisnul Muslim), and 'The Book of Remembrances' by Imam al-Nawawi are excellent starting points. For comprehensive Islamic knowledge, 'The Sealed Nectar' (biography of the Prophet ﷺ) is also highly recommended.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                How do I verify if an Islamic source is authentic?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Check if the source references authentic hadiths from recognized collections (Bukhari, Muslim, etc.), cites the Quran correctly, is endorsed by reputable scholars, and aligns with mainstream Islamic scholarship. Be cautious of sources that promote extreme views or lack proper citations.
              </p>
            </div>
          </div>
        </div>

        {/* Internal Links */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            Explore More Azkar Collections
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dua-after-salah" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors">
              Post-Prayer Duas
            </Link>
            <Link href="/rabbana-duas" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
              Quranic Duas
            </Link>
            <Link href="/azkar-before-sleep" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Sleep Azkar
            </Link>
            <Link href="/about-islam" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              About Azkar
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Continue Your Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              "The best of you are those who learn the Quran and teach it." - Prophet Muhammad ﷺ
            </p>
            <Link href="/morning-azkar" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full font-medium transition-all">
              Begin with Morning Azkar
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
