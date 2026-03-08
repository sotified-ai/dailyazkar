import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";
import { DuaBlock } from "@/components/dua-block";
import { azkarData } from "@/data/azkar-data";

export default function BenefitsOfMorningAzkar() {
  const morningAzkar = azkarData.find(category => category.id === "morning");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Benefits of Morning Azkar - Spiritual and Psychological Advantages",
    "description": "Discover the profound benefits of reciting morning azkar (أذكار الصباح) including spiritual protection, mental clarity, and divine blessings.",
    "author": {
      "@type": "Organization",
      "name": "Daily Azkar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Daily Azkar",
      "url": "https://dailyazkar.site"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the main benefits of reciting morning azkar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The main benefits include spiritual protection throughout the day, mental clarity and focus, peace of mind, earning tremendous rewards, and following the blessed Sunnah of Prophet Muhammad ﷺ."
        }
      },
      {
        "@type": "Question",
        "name": "How long should I spend on morning azkar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A complete recitation typically takes 10-15 minutes, though this varies based on the number of repetitions. Even a few minutes of daily remembrance is beneficial if time is limited."
        }
      },
      {
        "@type": "Question",
        "name": "Can morning azkar help with anxiety?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, morning azkar can significantly help with anxiety by providing spiritual grounding, peace of mind, and a sense of divine protection that carries throughout the day."
        }
      }
    ]
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="Benefits of Morning Azkar - Spiritual and Psychological Advantages | Daily Azkar"
        description="Discover the profound benefits of reciting morning azkar (أذكار الصباح) including spiritual protection, mental clarity, and divine blessings. Learn how starting your day with remembrance transforms your life."
        keywords="benefits of morning azkar, morning azkar advantages, spiritual benefits of morning remembrance, psychological benefits of morning azkar, morning azkar protection, morning azkar peace of mind, morning azkar rewards, morning azkar mental health"
        canonical="https://dailyazkar.site/benefits-of-morning-azkar"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-star text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Benefits of Morning Azkar
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the profound spiritual, psychological, and physical advantages of starting your day with authentic Islamic remembrance
          </p>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Transform Your Day with Morning Remembrance
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Morning Azkar (أذكار الصباح) are not merely ritualistic recitations; they are transformative practices that shape our spiritual, emotional, and mental well-being. The Prophet Muhammad ﷺ emphasized the importance of morning remembrance, highlighting its role in securing Allah's protection throughout the day.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              In today's fast-paced world, where anxiety and stress often dominate our mornings, these blessed remembrances offer a sanctuary of peace and spiritual grounding. The practice of reciting morning azkar sets a positive tone for the entire day, influencing our mindset, decisions, and interactions with others.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-8 text-center">
            Key Benefits of Morning Azkar
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glassmorphism rounded-2xl p-6">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-shield-alt text-amber-600 dark:text-amber-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Divine Protection
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Reciting morning azkar provides spiritual armor that protects you from harm, evil eye, and negative influences throughout the day.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-brain text-emerald-600 dark:text-emerald-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Mental Clarity
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Starting with dhikr brings focus, concentration, and mental peace that enhances decision-making throughout the day.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-heart text-blue-600 dark:text-blue-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Peace of Mind
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Morning remembrance fills the heart with tranquility and reduces anxiety, creating emotional stability.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-praying-hands text-purple-600 dark:text-purple-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Tremendous Rewards
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Each word of remembrance is recorded as good deeds and earns immense rewards in the sight of Allah.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Benefits */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6">
            Spiritual and Psychological Depth
          </h2>
          
          <div className="space-y-6">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Connection with the Divine
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                Morning azkar establishes a direct connection with Allah before engaging in worldly activities. This spiritual communion provides a sense of purpose and direction that guides our actions throughout the day.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The practice reinforces our dependence on Allah and reminds us of our ultimate goal in life. This spiritual grounding helps us navigate challenges with patience and wisdom.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Stress Reduction and Anxiety Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                Scientific research has shown that mindful recitation and meditation have significant effects on reducing cortisol levels and calming the nervous system. Morning azkar incorporates these benefits through focused remembrance.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The rhythmic nature of recitation activates the parasympathetic nervous system, promoting relaxation and mental clarity. This prepares us mentally for the challenges of the day ahead.
              </p>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Habit Formation and Discipline
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Consistently practicing morning azkar builds discipline and self-control, qualities that positively influence all areas of life. This routine creates a healthy habit that promotes spiritual and personal growth.
              </p>
            </div>
          </div>
        </div>

        {/* Sample Azkar */}
        {morningAzkar && (
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
              Sample Morning Azkar
            </h2>
            <div className="space-y-4">
              {morningAzkar.items.slice(0, 2).map((azkar, index) => (
                <DuaBlock key={azkar.id} azkar={azkar} index={index} />
              ))}
            </div>
          </div>
        )}

        <AdSense className="my-8" />

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                What are the main benefits of reciting morning azkar?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The main benefits include spiritual protection throughout the day, mental clarity and focus, peace of mind, earning tremendous rewards, and following the blessed Sunnah of Prophet Muhammad ﷺ. These remembrances also provide divine blessings and help maintain constant awareness of Allah.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                How long should I spend on morning azkar?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                A complete recitation typically takes 10-15 minutes, though this varies based on the number of repetitions. Even a few minutes of daily remembrance is beneficial if time is limited. The key is consistency rather than duration.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Can morning azkar help with anxiety?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, morning azkar can significantly help with anxiety by providing spiritual grounding, peace of mind, and a sense of divine protection that carries throughout the day. The practice centers the mind on Allah's attributes and promises, reducing worry and fear.
              </p>
            </div>
          </div>
        </div>

        {/* Internal Links */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            Related Topics
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/morning-azkar" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
              Complete Morning Azkar
            </Link>
            <Link href="/benefits-of-evening-azkar" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Evening Azkar Benefits
            </Link>
            <Link href="/authentic-hadith-on-azkar" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors">
              Authentic Hadith on Azkar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}