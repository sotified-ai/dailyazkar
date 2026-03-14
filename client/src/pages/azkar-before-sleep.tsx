import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function AzkarBeforeSleep() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Azkar Before Sleep: The Ultimate Guide to Islamic Bedtime Duas & Protection",
    "description": "Unlock the spiritual secrets of azkar before sleep. Discover authentic Islamic sleep supplications, protection duas for sleep, and the Prophetic sunnah of bedtime remembrance.",
    "author": {
      "@type": "Organization",
      "name": "Daily Azkar"
    },
    "image": "https://dailyazkar.site/sleep-azkar-hero.png"
  };

  return (
    <div className="pt-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 min-h-screen text-slate-200">
      <SEOHead
        title="Azkar Before Sleep: Bedtime Duas & Protection (Islamic Guide)"
        description="Master your nightly routine with authentic azkar before sleep. Learn powerful protection duas for sleep, night duas for peace, and the sunnah of bedtime remembrance."
        keywords="azkar before sleep, dua before sleeping, night duas, sleep supplication, protection duas for sleep, sunnah of sleeping, islamic bedtime routine, bedtime azkar, night dhikr"
        canonical="https://dailyazkar.site/azkar-before-sleep"
        structuredData={structuredData}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Dua Hub", href: "/dua" },
          { label: "Azkar Before Sleep" }
        ]} />

        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in pt-10">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(79,70,229,0.4)] animate-pulse">
            <i className="fas fa-moon text-white text-4xl"></i>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Azkar Before Sleep: <span className="text-indigo-400">Nightly Protection</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Transform your sleep into an act of worship. Discover the authentic <span className="text-white font-semibold italic">azkar before sleep</span> and powerful <span className="text-white font-semibold italic">night duas</span> that build a spiritual fortress around you until morning.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-20 prose prose-invert prose-lg">
          <h2 className="text-3xl font-display font-bold text-white mb-6 border-l-4 border-indigo-500 pl-4">The Importance of Bedtime Azkar in Islam</h2>
          <p>
            In the fast-paced world we live in, sleep is often viewed merely as a physiological necessity. However, in Islam, the transition into the state of rest is a sacred moment of surrender. Reciting <strong>azkar before sleep</strong> is not just a ritual; it is a profound declaration of faith. It is the moment where a believer acknowledges that even in the vulnerability of sleep, they are in the constant care of Al-Hafiz (The Preserver).
          </p>
          <p>
            Implementing a consistent <strong>islamic bedtime routine</strong> filled with <strong>sleep supplications</strong> and <strong>night dhikr</strong> allows the heart to remain connected to the Divine while the body rests. The Prophet Muhammad ﷺ taught us that these moments are opportunities to seek forgiveness, find peace, and gain protection from the whisperings of Shaytan and the trials of the night.
          </p>
          <p>
            By making <strong>dua before sleeping</strong> a non-negotiable part of your night, you ensure that your last conscious thoughts are focused on the remembrance of Allah. This spiritual mindfulness has a profound impact on the quality of your rest and the state of your soul upon waking.
          </p>
        </div>

        {/* The Sunnah of Sleeping */}
        <div className="max-w-5xl mx-auto mb-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="glassmorphism p-10 rounded-3xl border border-white/10 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-star-and-crescent text-indigo-400 mr-3"></i>
              The Sunnah of Sleeping
            </h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Before delving into specific <strong>night duas</strong>, it's essential to understand the physical and spiritual etiquettes taught by the Prophet ﷺ:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                  <i className="fas fa-check text-indigo-400 text-sm"></i>
                </span>
                <span className="text-slate-300"><strong>Performing Wudu:</strong> Sleeping in a state of purity is highly recommended.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                  <i className="fas fa-check text-indigo-400 text-sm"></i>
                </span>
                <span className="text-slate-300"><strong>Dusting the Bed:</strong> A practical and spiritual preparation of the sleeping space.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                  <i className="fas fa-check text-indigo-400 text-sm"></i>
                </span>
                <span className="text-slate-300"><strong>Sleeping on the Right Side:</strong> Following the heart-centered posture of the Prophet ﷺ.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                  <i className="fas fa-check text-indigo-400 text-sm"></i>
                </span>
                <span className="text-slate-300"><strong>Hand Under the Cheek:</strong> Placing the right hand under the right cheek.</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-display font-bold text-white mb-6">Why These Practices Matter</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              These physical actions are the "vessel" for your <strong>azkar before sleep</strong>. When the body is aligned with the Sunnah, the heart finds it easier to focus on the <strong>dua before sleeping</strong>. It creates a holistic environment where every aspect of your rest is dedicated to the Creator.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Whether you're reciting a short <strong>sleep supplication</strong> or engaging in lengthy <strong>night dhikr</strong>, these Sunnah practices prepare your mind for the spiritual journey of sleep.
            </p>
          </div>
        </div>

        {/* Primary Sleep Azkar Sections */}
        <div className="max-w-5xl mx-auto mb-20 space-y-12">
          <h2 className="text-4xl font-display font-bold text-center text-white mb-12 underline decoration-indigo-500/30 underline-offset-8">
            Core Protection Duas for Sleep
          </h2>

          {/* Ayat al-Kursi */}
          <Card className="glassmorphism border-white/5 bg-white/5 overflow-hidden group hover:border-indigo-500/40 transition-all duration-500 shadow-2xl">
            <CardContent className="p-10">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="md:w-1/3">
                  <span className="inline-block px-4 py-1 rounded-full bg-indigo-500 text-xs font-bold uppercase tracking-widest text-white mb-4">The Greatest Ayah</span>
                  <h3 className="text-2xl font-bold text-white mb-4">Ayat al-Kursi</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    This is perhaps the most powerful <strong>protection dua for sleep</strong>. The Prophet ﷺ mentioned that reciting this before bed ensures a guardian remains with you from Allah throughout the night.
                  </p>
                  <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700">
                    <p className="text-sm italic text-slate-300">"Whoever recites this when he goes to bed, there will come to him a protector from Allah..." (Bukhari)</p>
                  </div>
                </div>
                <div className="md:w-2/3 w-full bg-slate-900/80 p-8 rounded-3xl border border-white/10">
                  <p className="text-right text-3xl font-arabic text-white mb-8 leading-[2.5]" dir="rtl">
                    اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهما ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
                  </p>
                  <div className="space-y-4 pt-6 border-t border-white/10">
                    <p className="text-sm text-indigo-300 leading-relaxed italic">
                      <strong>Transliteration:</strong> Allahu la ilaha illa Huwal-Hayyul-Qayyum. La ta'khudhuhu sinatun wa la nawm...
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      <strong>Benefit:</strong> Spiritual guardian and protection from Shaytan until morning.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Three Quls */}
          <Card className="glassmorphism border-white/5 bg-white/5 overflow-hidden group hover:border-purple-500/40 transition-all duration-500 shadow-2xl">
            <CardContent className="p-10">
              <div className="flex flex-col md:flex-row-reverse gap-10 items-start">
                <div className="md:w-1/3">
                  <span className="inline-block px-4 py-1 rounded-full bg-purple-500 text-xs font-bold uppercase tracking-widest text-white mb-4">Complete Shifa</span>
                  <h3 className="text-2xl font-bold text-white mb-4">The Three Quls</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    The sunnah technique for these <strong>night duas</strong> is to join your hands, blow into them, and recite Surah Al-Ikhlas, Al-Falaq, and An-Nas, then wipe your body. Repeat this three times.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    This provides a layer of healing (Shifa) and protection against the evil eye and magic while you sleep.
                  </p>
                </div>
                <div className="md:w-2/3 w-full space-y-6">
                  <div className="bg-slate-900/80 p-6 rounded-3xl border border-white/10">
                    <p className="text-right text-2xl font-arabic text-white mb-2" dir="rtl">قُلْ هُوَ اللَّهُ أَحَدٌ ...</p>
                    <p className="text-xs text-slate-500">Surah Al-Ikhlas</p>
                  </div>
                  <div className="bg-slate-900/80 p-6 rounded-3xl border border-white/10">
                    <p className="text-right text-2xl font-arabic text-white mb-2" dir="rtl">قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ...</p>
                    <p className="text-xs text-slate-500">Surah Al-Falaq</p>
                  </div>
                  <div className="bg-slate-900/80 p-6 rounded-3xl border border-white/10">
                    <p className="text-right text-2xl font-arabic text-white mb-2" dir="rtl">قُلْ أَعُوذُ بِرَبِّ النَّاسِ ...</p>
                    <p className="text-xs text-slate-500">Surah An-Nas</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Educational Content Deep-Dive */}
        <div className="max-w-4xl mx-auto mb-20 prose prose-invert prose-lg">
          <h2 className="text-3xl font-display font-bold text-white mb-6">The Power of Night Duas: Seeking Forgiveness and Tranquility</h2>
          <p>
            Beyond protection, <strong>night duas</strong> serve as a platform for <strong>istighfar</strong> (seeking forgiveness). We often carry the weight of our daily sins into our beds. By reciting specific <strong>azkar before sleep</strong>, we cleanse our spiritual slates. One of the most beloved <strong>dua before sleeping</strong> for this purpose is the Sayyid al-Istighfar, although even a simple "Astaghfirullah" repeated as part of your <strong>night dhikr</strong> holds immense value.
          </p>
          <p>
            Furthermore, <strong>sleep supplications</strong> help manage anxiety. Many Muslims suffer from insomnia or restless nights due to worldly worries. The act of performing <strong>azkar before sleep</strong> is a form of spiritual meditation. It lowers the heart rate, focuses the mind on the Infinite, and reminds the soul that "with every hardship, there is ease."
          </p>
          <h3 className="text-white">Authentic Tasbih Before Sleep</h3>
          <p>
            Another essential part of the <strong>islamic bedtime routine</strong> is the Tasbih of Fatima (RA). The Prophet ﷺ advised his daughter to recite:
          </p>
          <ul>
            <li><strong>SubhanAllah</strong> (Glory be to Allah) - 33 Times</li>
            <li><strong>Alhamdulillah</strong> (All praise is to Allah) - 33 Times</li>
            <li><strong>Allahu Akbar</strong> (Allah is the Greatest) - 34 Times</li>
          </ul>
          <p>
            This specific <strong>night dhikr</strong> was described by the Prophet ﷺ as being better for one than a servant. It provides the believer with strength and energy for the coming day, proving that <strong>bedtime azkar</strong> have physical benefits that extend beyond the night itself.
          </p>
        </div>

        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-display font-bold text-center text-white mb-16">Bedtime Azkar FAQs</h2>
          <div className="grid gap-6">
            {[
              {
                q: "What is the best dua before sleeping for protection?",
                a: "Reciting Ayat al-Kursi is widely considered the best practice for protection, followed by the Three Quls (joined hands technique). These are primary 'protection duas for sleep' mentioned in authentic Hadith."
              },
              {
                q: "Can I recite azkar before sleep without Wudu?",
                a: "Yes, you can recite them without Wudu, but it is a highly recommended Sunnah to be in a state of purity. The focus should be on the 'night dhikr' even if you couldn't perform wudu."
              },
              {
                q: "What should I do if I forget my bedtime azkar?",
                a: "Simply recite them whenever you remember. If you wake up in the middle of the night, you can still perform your 'sleep supplication' and seek Allah's protection for the remainder of the night."
              },
              {
                q: "How do night duas help with nightmares?",
                a: "By seeking refuge in Allah from the whisperings of evil (as found in Surah Al-Falaq and An-Nas), you create a spiritual barrier that often results in more peaceful, nightmare-free rest."
              }
            ].map((faq, i) => (
              <div key={i} className="glassmorphism p-8 rounded-3xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">?</span>
                  {faq.q}
                </h3>
                <p className="text-slate-400 pl-14 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion CTA */}
        <div className="text-center bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[3rem] p-16 shadow-[0_20px_60px_rgba(79,70,229,0.5)] border border-white/20">
          <h2 className="text-4xl font-display font-bold text-white mb-6">Experience a Blessed Night</h2>
          <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto">
            Make <strong>azkar before sleep</strong> your lifelong companion. Join thousands of Muslims using Daily Azkar to perfect their <strong>nightly remembrance</strong> and find true spiritual peace.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/azkar" className="bg-white text-indigo-700 px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
              Explore All Azkar
            </Link>
            <Link href="/dua/rabbana" className="bg-indigo-900/50 text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-indigo-900 transition-colors shadow-xl">
              Read Quranic Duas
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <AdSense />
        </div>
      </div>
    </div>
  );
}