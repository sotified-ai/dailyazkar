import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { SEOHead } from '@/components/seo-head';
import { AdSense } from '@/components/adsense';
import { Link } from 'wouter';

const months = [
  { name: 'Muharram', arabic: 'مُحَرَّم', meaning: 'Forbidden month' },
  { name: 'Safar', arabic: 'صَفَر', meaning: 'Empty/Yellow' },
  { name: 'Rabi al-Awwal', arabic: 'رَبِيع الأَوَّل', meaning: 'First Spring' },
  { name: 'Rabi al-Thani', arabic: 'رَبِيع الثَّانِي', meaning: 'Second Spring' },
  { name: 'Jumada al-Ula', arabic: 'جُمَادَى الأُولَى', meaning: 'First Freeze' },
  { name: 'Jumada al-Thania', arabic: 'جُمَادَى الثَّانِيَة', meaning: 'Second Freeze' },
  { name: 'Rajab', arabic: 'رَجَب', meaning: 'Respect/Honor' },
  { name: 'Shaban', arabic: 'شَعْبَان', meaning: 'Scattered' },
  { name: 'Ramadan', arabic: 'رَمَضَان', meaning: 'Burning Heat' },
  { name: 'Shawwal', arabic: 'شَوَّال', meaning: 'Raise/Light' },
  { name: 'Dhu al-Qadah', arabic: 'ذُو القَعْدَة', meaning: 'Month of Rest' },
  { name: 'Dhu al-Hijjah', arabic: 'ذُو الحِجَّة', meaning: 'Month of Hajj' }
];

const events: Record<string, Array<{ date: string; event: string; importance: 'high' | 'medium' | 'low' }>> = {
  'Muharram': [
    { date: '1st', event: 'Islamic New Year', importance: 'high' },
    { date: '10th', event: 'Day of Ashura (Fasting)', importance: 'high' }
  ],
  'Rabi al-Awwal': [
    { date: '12th', event: 'Mawlid an-Nabi (Birth of Prophet ﷺ)', importance: 'high' }
  ],
  'Rajab': [
    { date: '27th', event: 'Isra and Mi\'raj (Night Journey)', importance: 'high' }
  ],
  'Shaban': [
    { date: '15th', event: 'Laylat al-Bara\'ah (Night of Forgiveness)', importance: 'medium' }
  ],
  'Ramadan': [
    { date: '1st', event: 'Beginning of Fasting', importance: 'high' },
    { date: '21st-29th', event: 'Last 10 Nights (Laylat al-Qadr)', importance: 'high' },
    { date: '27th', event: 'Laylat al-Qadr (Night of Power)', importance: 'high' }
  ],
  'Shawwal': [
    { date: '1st', event: 'Eid al-Fitr', importance: 'high' },
    { date: '2nd-7th', event: 'Six Days of Shawwal Fasting', importance: 'medium' }
  ],
  'Dhu al-Hijjah': [
    { date: '1st-10th', event: 'First 10 Days (Best Days)', importance: 'high' },
    { date: '8th', event: 'Day of Tarwiyah (Hajj Begins)', importance: 'medium' },
    { date: '9th', event: 'Day of Arafah (Fasting)', importance: 'high' },
    { date: '10th', event: 'Eid al-Adha', importance: 'high' },
    { date: '11th-13th', event: 'Days of Tashreeq', importance: 'medium' }
  ]
};

const importanceColors = {
  high: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
  medium: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
  low: 'bg-gray-100 dark:bg-gray-800/30 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700'
};

export default function IslamicCalendarPage() {
  const [selectedYear, setSelectedYear] = useState(1446);

  const getEventsForMonth = (month: string) => events[month] || [];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Islamic (Hijri) Calendar - Important Islamic Dates",
    "description": "Explore the Islamic Hijri Calendar with all 12 months, important dates, and Islamic events. Track Ramadan, Eid, Hajj, and other significant occasions.",
    "url": "https://dailyazkar.site/islamic-calendar"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Islamic (Hijri) Calendar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Islamic Calendar, also known as the Hijri Calendar, is a lunar calendar consisting of 12 months. It began in 622 CE when Prophet Muhammad ﷺ migrated from Mecca to Medina (Hijrah)."
        }
      },
      {
        "@type": "Question",
        "name": "What are the sacred months in Islam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The four sacred months are Dhul-Qa'dah, Dhul-Hijjah, Muharram, and Rajab. Fighting was forbidden during these months, and good deeds carry extra reward."
        }
      },
      {
        "@type": "Question",
        "name": "When is Ramadan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ramadan is the 9th month of the Islamic calendar. Muslims fast from dawn to sunset during this blessed month, which contains Laylat al-Qadr (Night of Power)."
        }
      }
    ]
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <SEOHead
        title="Islamic Calendar (Hijri) - Important Islamic Dates & Events | Daily Azkar"
        description="Explore the Islamic Hijri Calendar with all 12 months and important dates. Track Ramadan, Eid al-Fitr, Eid al-Adha, Hajj, and other significant Islamic occasions."
        keywords="islamic calendar, hijri calendar, muslim calendar, ramadan dates, eid dates, islamic months, التقويم الهجري, islamic events"
        canonical="https://dailyazkar.site/islamic-calendar"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-calendar-alt text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Islamic Calendar
          </h1>
          <h2 className="text-2xl md:text-3xl font-arabic text-purple-600 dark:text-purple-400 mb-6">
            التقويم الهجري
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The Hijri Calendar marks important Islamic dates and events throughout the year
          </p>
        </div>

        {/* Introduction Section - SEO Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Understanding the Islamic (Hijri) Calendar
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              The Islamic Calendar, known as the Hijri Calendar (التقويم الهجري), is a lunar calendar consisting of 12 months in a year of 354 or 355 days. It is used by Muslims worldwide to determine the proper days for Islamic holidays, rituals, and events. The calendar began in 622 CE when Prophet Muhammad ﷺ migrated from Mecca to Medina, an event known as the Hijrah.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Unlike the Gregorian solar calendar, the Islamic months follow the lunar cycle. Each month begins with the sighting of the new crescent moon. This means Islamic dates shift approximately 11 days earlier each year relative to the Gregorian calendar, making the Hijri calendar essential for tracking religious observances like Ramadan and Hajj.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Allah mentions in the Quran: <em className="text-purple-600 dark:text-purple-400">"Indeed, the number of months with Allah is twelve [lunar] months in the register of Allah [from] the day He created the heavens and the earth; of these, four are sacred"</em> (Quran 9:36). The four sacred months are Dhul-Qa'dah, Dhul-Hijjah, Muharram, and Rajab.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              Key Features of the Hijri Calendar
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Lunar-Based:</strong> Each month begins with the new moon sighting.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>12 Months:</strong> 29 or 30 days per month, totaling 354-355 days per year.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Sacred Months:</strong> Four months have special significance and sanctity.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                <span className="text-gray-600 dark:text-gray-300"><strong>Determines Worship:</strong> Essential for Ramadan, Hajj, and Islamic holidays.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Year Selector */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Button
            onClick={() => setSelectedYear(selectedYear - 1)}
            className="bg-purple-500 hover:bg-purple-600"
          >
            <i className="fas fa-chevron-left mr-2"></i>
            Previous Year
          </Button>
          <span className="text-3xl font-bold text-purple-600 dark:text-purple-400 px-6">
            {selectedYear} AH
          </span>
          <Button
            onClick={() => setSelectedYear(selectedYear + 1)}
            className="bg-purple-500 hover:bg-purple-600"
          >
            Next Year
            <i className="fas fa-chevron-right ml-2"></i>
          </Button>
        </div>

        <AdSense className="my-8" />

        {/* Months Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {months.map((month, index) => (
            <Card key={month.name} className="glassmorphism border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {month.name}
                      </h3>
                      <p className="text-xl font-arabic text-purple-600 dark:text-purple-400">
                        {month.arabic}
                      </p>
                    </div>
                  </div>
                </CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {month.meaning}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {getEventsForMonth(month.name).length > 0 ? (
                    getEventsForMonth(month.name).map((event, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-2 p-2 rounded-lg border ${importanceColors[event.importance]}`}
                      >
                        <span className="font-semibold text-sm whitespace-nowrap">{event.date}</span>
                        <span className="text-sm">{event.event}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400 dark:text-gray-500 italic">
                      Regular month - no major events
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <AdSense className="my-8" />

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                What is the Islamic (Hijri) Calendar?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The Islamic Calendar, also known as the Hijri Calendar, is a lunar calendar consisting of 12 months. It began in 622 CE when Prophet Muhammad ﷺ migrated from Mecca to Medina (Hijrah). It is used to determine Islamic holidays and religious observances.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                What are the sacred months in Islam?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The four sacred months (Al-Ashhur Al-Hurum) are Dhul-Qa'dah, Dhul-Hijjah, Muharram, and Rajab. Fighting was forbidden during these months, and good deeds carry extra reward while sins are more serious.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                When is Ramadan?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ramadan is the 9th month of the Islamic calendar. Muslims fast from dawn to sunset during this blessed month. It contains Laylat al-Qadr (Night of Power), which is better than a thousand months.
              </p>
            </div>
          </div>
        </div>

        {/* Internal Links */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            Plan Your Worship
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/prayer-times" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Prayer Times
            </Link>
            <Link href="/morning-azkar" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
              Morning Azkar
            </Link>
            <Link href="/evening-azkar" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full transition-colors">
              Evening Azkar
            </Link>
            <Link href="/quran" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Read Quran
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Never Miss an Important Date
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Stay connected to the Islamic calendar and prepare for blessed occasions like Ramadan, the two Eids, and the days of Hajj.
            </p>
            <p className="text-purple-600 dark:text-purple-400 font-arabic text-xl">
              وَافْعَلُوا الْخَيْرَ لَعَلَّكُمْ تُفْلِحُونَ
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              And do good that you may succeed. (Quran 22:77)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
