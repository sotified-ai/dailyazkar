import { SEOHead } from '@/components/seo-head';
import { AdSense } from '@/components/adsense';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { useState } from 'react';
import { Link } from 'wouter';

type City = string;
type Country = 'Pakistan' | 'UK' | 'Other';

const cities: Record<Country, City[]> = {
  Pakistan: ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad'],
  UK: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow'],
  Other: ['New York', 'Dubai', 'Istanbul', 'Cairo']
};

export default function PrayerTimesPage() {
  const [selectedCountry, setSelectedCountry] = useState<Country>('Pakistan');
  const [selectedCity, setSelectedCity] = useState<City>('Karachi');

  const getPrayerTimes = () => {
    // TODO: Implement prayer times API integration
    return {
      fajr: '04:30',
      sunrise: '05:45',
      dhuhr: '12:30',
      asr: '15:45',
      maghrib: '18:30',
      isha: '19:45'
    };
  };

  const prayerTimes = getPrayerTimes();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Islamic Prayer Times Calculator",
    "description": "Find accurate Islamic prayer times for your location. Track Fajr, Dhuhr, Asr, Maghrib, and Isha prayer times.",
    "applicationCategory": "ReligiousApp",
    "operatingSystem": "Web",
    "url": "https://dailyazkar.site/prayer-times"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best time to pray each Salah?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best time is at the beginning of each prayer window, though the entire window is valid. Praying early shows eagerness to worship Allah."
        }
      },
      {
        "@type": "Question",
        "name": "How are prayer times calculated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prayer times are calculated based on the position of the sun relative to your location. Different calculation methods exist, with slight variations."
        }
      }
    ]
  };

  const prayerInfo = [
    {
      name: 'Fajr',
      arabic: 'الفجر',
      time: prayerTimes.fajr,
      description: 'The dawn prayer, performed from the beginning of twilight until just before sunrise.',
      rakah: '2 Fard',
      icon: 'fa-sun'
    },
    {
      name: 'Dhuhr',
      arabic: 'الظهر',
      time: prayerTimes.dhuhr,
      description: 'The noon prayer, performed after the sun passes its zenith until the afternoon.',
      rakah: '4 Fard',
      icon: 'fa-cloud-sun'
    },
    {
      name: 'Asr',
      arabic: 'العصر',
      time: prayerTimes.asr,
      description: 'The afternoon prayer, performed from mid-afternoon until just before sunset.',
      rakah: '4 Fard',
      icon: 'fa-sun'
    },
    {
      name: 'Maghrib',
      arabic: 'المغرب',
      time: prayerTimes.maghrib,
      description: 'The sunset prayer, performed just after sunset when the sun dips below the horizon.',
      rakah: '3 Fard',
      icon: 'fa-moon'
    },
    {
      name: 'Isha',
      arabic: 'العشاء',
      time: prayerTimes.isha,
      description: 'The night prayer, performed from nightfall until midnight or before Fajr.',
      rakah: '4 Fard',
      icon: 'fa-star'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <SEOHead
        title="Islamic Prayer Times - Daily Salah Schedule | Daily Azkar"
        description="Find accurate Islamic prayer times for your location. Learn about the five daily prayers (Salah), their importance, and the best times for Fajr, Dhuhr, Asr, Maghrib, and Isha."
        keywords="prayer times, salah times, namaz times, islamic prayer schedule, fajr time, dhuhr time, asr time, maghrib time, isha time, muslim prayer"
        canonical="https://dailyazkar.site/prayer-times"
        structuredData={structuredData}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

      <main className="container mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-clock text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Prayer Times
          </h1>
          <h2 className="text-2xl md:text-3xl font-arabic text-blue-600 dark:text-blue-400 mb-6">
            أوقات الصلاة
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find accurate prayer times for your location and never miss a Salah
          </p>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glassmorphism rounded-2xl p-8">
            <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Understanding Islamic Prayer Times
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              The five daily prayers (Salah) are one of the Five Pillars of Islam, obligatory for every Muslim who has reached the age of puberty. Each prayer has a specific time window determined by the position of the sun, making prayer times vary by location and season. Understanding these times helps Muslims fulfill this essential act of worship properly.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Allah says in the Quran: <em className="text-blue-600 dark:text-blue-400">"Indeed, prayer has been decreed upon the believers a decree of specified times"</em> (Quran 4:103). This verse emphasizes that prayers must be performed within their designated time windows, and praying on time is highly emphasized in Islam.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The reward for consistent, timely prayer is immense. The Prophet Muhammad ﷺ said: <em className="text-blue-600 dark:text-blue-400">"The first matter that the slave will be brought to account for on the Day of Judgment is the prayer"</em> (Tirmidhi). Establishing regular prayer is the foundation of a Muslim's daily spiritual routine.
            </p>
          </div>
        </div>

        {/* Location Selection */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="glassmorphism rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Select Your Location</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Select
                value={selectedCountry}
                onValueChange={(value) => setSelectedCountry(value as Country)}
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(cities).map(country => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedCity}
                onValueChange={(value) => setSelectedCity(value as City)}
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  {cities[selectedCountry].map(city => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button onClick={() => {
                if ('geolocation' in navigator) {
                  navigator.geolocation.getCurrentPosition(
                    (position) => {
                      console.log('Latitude:', position.coords.latitude);
                      console.log('Longitude:', position.coords.longitude);
                    },
                    (error) => {
                      console.error('Error getting location:', error);
                    }
                  );
                }
              }} className="bg-blue-500 hover:bg-blue-600">
                <i className="fas fa-location-arrow mr-2"></i>
                Use My Location
              </Button>
            </div>
          </div>
        </div>

        <AdSense className="my-8" />

        {/* Prayer Times Grid */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
            Today's Prayer Times for {selectedCity}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prayerInfo.map((prayer) => (
              <div key={prayer.name} className="glassmorphism rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${prayer.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                  {prayer.name}
                </h3>
                <p className="text-lg font-arabic text-blue-600 dark:text-blue-400 mb-2">
                  {prayer.arabic}
                </p>
                <p className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {prayer.time}
                </p>
                <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-3">
                  {prayer.rakah}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {prayer.description}
                </p>
              </div>
            ))}
            {/* Sunrise Card */}
            <div className="glassmorphism rounded-xl p-6 text-center bg-amber-50 dark:bg-amber-900/20">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-sun text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                Sunrise
              </h3>
              <p className="text-lg font-arabic text-amber-600 dark:text-amber-400 mb-2">
                الشروق
              </p>
              <p className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {prayerTimes.sunrise}
              </p>
              <p className="text-sm text-amber-600 dark:text-amber-400 mb-3">
                No Prayer
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Fajr prayer must be completed before this time.
              </p>
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
                What is the best time to pray each Salah?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The best and most rewarded time is at the beginning of each prayer window. However, the entire window is valid. The Prophet ﷺ said: "The most beloved deed to Allah is the prayer at its proper time" (Bukhari). Praying early shows eagerness to worship Allah.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                How are prayer times calculated?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Prayer times are calculated based on the position of the sun relative to your geographic location. Different Islamic calculation methods exist (such as ISNA, Muslim World League, Egyptian, etc.) with slight variations in twilight angles. The times change daily based on the Earth's position relative to the sun.
              </p>
            </div>
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                What if I miss a prayer time?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                If you miss a prayer unintentionally (due to sleep or forgetfulness), you should pray it as soon as you remember. The Prophet ﷺ said: "Whoever forgets a prayer, let him pray it when he remembers it." However, deliberately delaying prayers is a serious matter in Islam.
              </p>
            </div>
          </div>
        </div>

        {/* Internal Links */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            Continue Your Worship
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dua-after-salah" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors">
              Duas After Prayer
            </Link>
            <Link href="/morning-azkar" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition-colors">
              Morning Azkar
            </Link>
            <Link href="/evening-azkar" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
              Evening Azkar
            </Link>
            <Link href="/islamic-calendar" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
              Islamic Calendar
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Establish Your Prayer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Prayer is the pillar of religion. It is the first thing you will be asked about on the Day of Judgment.
            </p>
            <Link href="/dua-after-salah" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full font-medium transition-all">
              Learn Post-Prayer Duas
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
