import { SEOHead } from '@/components/seo-head';
import { AdSense } from '@/components/adsense';
import { Link } from 'wouter';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { RelatedContent } from '@/components/related-content';
import { useLanguage } from '@/lib/language-context';
import { cn } from '@/lib/utils';

const sehriDuas = [
    {
        title: "Dua for Starting the Fast (Sehri / Suhoor)",
        arabic: "وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ",
        transliteration: "Wa bisawmi ghadin nawaytu min shahri ramadan",
        translation: "I intend to keep the fast tomorrow in the month of Ramadan.",
        reference: "Abu Dawud",
        note: "Recite this before Sehri/Suhoor with the intention to fast"
    },
    {
        title: "Dua at the Time of Sehri (Suhoor Dua)",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ أَنْ تَغْفِرَ لِي",
        transliteration: "Allahumma inni as'aluka bi rahmatika allati wasi'at kulla shay'in an taghfira li",
        translation: "O Allah, I ask You by Your mercy which encompasses all things, to forgive me.",
        reference: "Ibn Majah",
        note: "A beautiful dua to recite during the early morning hours of Ramadan"
    }
];

const iftarDuas = [
    {
        title: "Dua for Breaking the Fast (Iftar)",
        arabic: "اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
        transliteration: "Allahumma laka sumtu wa 'ala rizqika aftartu",
        translation: "O Allah! I fasted for You and I broke my fast with Your sustenance.",
        reference: "Abu Dawud 2358",
        note: "Recite this when breaking your fast at Maghrib"
    },
    {
        title: "Iftar Dua (Second Narration)",
        arabic: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللَّهُ",
        transliteration: "Dhahaba al-zama'u wa ibtallatil 'urooqu wa thabatal-ajru in sha Allah",
        translation: "The thirst is gone, the veins are moistened, and the reward is confirmed, if Allah wills.",
        reference: "Abu Dawud 2357",
        note: "Narrated by Ibn Umar (RA) — recite after breaking the fast"
    }
];

const ramadanAzkar = [
    {
        title: "Tarawih Dua (Between Rakaahs)",
        arabic: "سُبْحَانَ ذِي الْمُلْكِ وَالْمَلَکُوتِ سُبْحَانَ ذِي الْعِزَّةِ وَالْعَظَمَةِ وَالْهَيْبَةِ وَالْقُدْرَةِ وَالْکِبْرِيَاءِ وَالْجَبَرُوتِ",
        transliteration: "Subhana dhil mulki wal malakoot, subhana dhil 'izzati wal 'azhamati wal haybati wal qudrati wal kibriyaa'i wal jabaroot",
        translation: "Glory be to the Owner of dominion and sovereignty. Glory be to the One with might, greatness, awe, power, pride and omnipotence.",
        reference: "Traditional",
        note: "Recited between sets of 4 rakaahs in Tarawih prayer"
    },
    {
        title: "Laylatul Qadr Dua (Night of Power)",
        arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
        transliteration: "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni",
        translation: "O Allah, You are Most Forgiving, and You love forgiveness; so forgive me.",
        reference: "Tirmidhi 3513",
        note: "The dua Aisha (RA) asked the Prophet ﷺ to teach her for Laylatul Qadr. Recite abundantly in the last 10 nights."
    }
];

const oddNightAzkar = [
    {
        title: "Istighfar (100 times)",
        arabic: "أَسْتَغْفِرُ اللّٰهَ",
        translation: "I seek forgiveness from Allah",
        reference: "Bukhari"
    },
    {
        title: "Durood Sharif (100 times)",
        arabic: "اَللّٰهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَّعَلَى آلِ مُحَمَّدٍ",
        translation: "O Allah, bestow Your blessings upon Muhammad and the family of Muhammad",
        reference: "Traditional"
    },
    {
        title: "Kalima Tayyaba (100 times)",
        arabic: "لَا اِلٰهَ اِلَّا اللّٰهُ",
        translation: "There is no deity except Allah",
        reference: "Traditional"
    },
    {
        title: "Laylatul Qadr Dua (100 times)",
        arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
        translation: "O Allah, You are Most Forgiving, most Generous and You love forgiveness; so forgive me.",
        reference: "Tirmidhi"
    },
    {
        title: "Dua for Paradise & Refuge from Fire",
        arabic: "اَستغفرُاللّٰه لا الٰه الّا اللّٰه اَسْأَلُکَ الْجَنّةَ وَاَعُوذُبِکَ مِنَ النّار",
        translation: "I seek forgiveness, there is no deity except Allah, I ask You for Paradise and seek refuge in You from the Fire.",
        reference: "Traditional"
    }
];

const oddNightActions = [
    {
        title: "2 Rakat Salat al-Tawbah (Prayer of Repentance)",
        desc: "Recall your sins and repent sincerely. Ask for strength to avoid them and seek refuge from moral evils like backbiting and malice.",
        urdu: "دو رکعات نماز صلوۃ التوبہ: اپنے گناہوں سے توبہ کریں اور آئندہ ان سے بچنے کی توفیق مانگیں۔"
    },
    {
        title: "2 Rakat Salat al-Shukr (Prayer of Gratitude)",
        desc: "Thank Allah for specific blessings: faith, health, children, and sustenance.",
        urdu: "دو رکعات صلوۃ الشکر: اللہ کی نعمتوں (ایمان، صحت، اولاد) کا شکر ادا کریں۔"
    },
    {
        title: "2 Rakat Salat al-Hajat (Prayer of Need)",
        desc: "Ask for all your needs—for success in this world and the hereafter, and a good end in faith.",
        urdu: "دو رکعات صلوۃ الحاجات: اپنی تمام دینی و دنیاوی حاجات کے لیے دعائیں مانگیں۔"
    },
    {
        title: "2 Rakat Nafl (Gift for the Prophet ﷺ)",
        desc: "Gift the reward to the Prophet ﷺ and pray for his vision in dreams and his intercession.",
        urdu: "دو رکعات نفل ہدیہ نبی کریم ﷺ: آپ ﷺ کی شفاعت اور خواب میں زیارت کے لیے دعا کریں۔"
    },
    {
        title: "2 Rakat Nafl (Parents & Family)",
        desc: "Pray for your parents, children, and family members individually.",
        urdu: "والدین اور اہل خانہ کے لیے نفل: اپنے بچوں اور والدین کی خیر و عافیت کے لیے دعا کریں۔"
    },
    {
        title: "2 Rakat Nafl (Ummah & Oppressed)",
        desc: "Pray for the entire Muslim Ummah, especially those facing oppression globally.",
        urdu: "پوری امت مسلمہ کے لیے نفل: مظلوم مسلمانوں اور پوری امت کی کامیابی کے لیے دعا کریں۔"
    }
];

export default function RamadanAzkarPage() {
    const { t, isUrdu } = useLanguage();
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Ramadan Azkar - Sehri, Iftar & Odd Night Azkar for Laylatul Qadr",
        "description": "Complete guide to Ramadan Azkar including Sehri dua, Iftar dua, Laylatul Qadr dua, Odd Night Azkar actions, and fasting supplications. Authentic duas for Ramzan with Arabic text and translation.",
        "author": { "@type": "Organization", "name": "Daily Azkar" },
        "publisher": { "@type": "Organization", "name": "Daily Azkar", "url": "https://dailyazkar.site" },
        "url": "https://dailyazkar.site/ramadan-azkar"
    };

    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the dua for breaking the fast (Iftar dua)?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The dua for breaking the fast is: Allahumma laka sumtu wa 'ala rizqika aftartu — meaning 'O Allah! I fasted for You and I broke my fast with Your sustenance.' (Abu Dawud 2358)"
                }
            },
            {
                "@type": "Question",
                "name": "What is the sehri (suhoor) dua in Ramadan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The intention for fasting (niyyah) is: Wa bisawmi ghadin nawaytu min shahri Ramadan — meaning 'I intend to keep the fast tomorrow in the month of Ramadan.' You should make this intention in your heart before the Fajr time."
                }
            },
            {
                "@type": "Question",
                "name": "What is the best dua for Laylatul Qadr?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The best dua for Laylatul Qadr (Night of Power) is: Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni — meaning 'O Allah, You are Most Forgiving, and You love forgiveness; so forgive me.' This was taught by the Prophet ﷺ to Aisha (RA). (Tirmidhi 3513)"
                }
            },
            {
                "@type": "Question",
                "name": "What azkar should I recite during Ramadan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "During Ramadan, focus on: the Morning Azkar (after Fajr), Evening Azkar (after Asr), Iftar Dua (at Maghrib), Tarawih duas, Laylatul Qadr dua (in the last 10 nights), and abundant Istighfar (seeking forgiveness). Increase your recitation of SubhanAllah, Alhamdulillah, Allahu Akbar, and La ilaha illallah."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <SEOHead
                title="Ramadan Azkar - Sehri, Iftar & Laylatul Qadr (Odd Night) Duas | Daily Azkar"
                description="Complete Ramadan Azkar guide: Dua for suhoor, Iftar dua, Laylatul Qadr dua, Odd Night Azkar & actions, Tarawih duas & Ramzan supplications. Authentic Arabic text with English translation."
                keywords="dua for suhoor, ramadan azkar, ramzan azkar, laylatul qadr dua, odd night azkar, odd night actions, laylatul qadr amal, sehri dua, iftar dua, fasting duas, roza ki dua, ramadan dua, ramzaan azkar, tarawih dua, ramadan mubarak dua, suhoor dua, dua for breaking fast, ramadan 2025, azkar ramadan"
                canonical="https://dailyazkar.site/ramadan-azkar"
                structuredData={structuredData}
            />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />

            <main className="pt-24 container mx-auto px-4 py-8">
                <Breadcrumbs items={[
                    { label: "Home", href: "/" },
                    { label: "Azkar Hub", href: "/azkar" },
                    { label: "Ramadan Azkar" }
                ]} />

                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-moon text-white text-3xl"></i>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
                        Ramadan Azkar & Duas
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-arabic text-amber-600 dark:text-amber-400 mb-6">
                        أذكار رمضان
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Complete collection of authentic Ramadan duas — Sehri, Iftar, Laylatul Qadr, Tarawih and fasting supplications with Arabic text and translations.
                    </p>
                </div>

                {/* Intro */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="glassmorphism rounded-2xl p-8">
                        <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-4">
                            Ramadan Duas: From Dua for Suhoor to Iftar
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            Ramadan (also spelled Ramzan or Ramzaan) is the holiest month in the Islamic calendar — the month in which the Quran was revealed. Reciting a **dua for suhoor** and staying in remembrance of Allah throughout the day is the essence of this month. Allah says: <em className="text-amber-600 dark:text-amber-400">"The month of Ramadan is that in which the Quran was revealed, a guidance for the people and clear proofs of guidance and criterion."</em> (Quran 2:185)
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            During Ramadan, Muslims fast (roza) from Sehri (Suhoor — pre-dawn meal) until Iftar (sunset), abstaining from food, drink, and sinful behavior. This month is a time of heightened worship, increased Quran recitation, charity (Zakat and Sadaqah), and abundant Azkar (remembrance of Allah).
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            The Prophet Muhammad ﷺ said: <em className="text-amber-600 dark:text-amber-400">"When Ramadan enters, the gates of Paradise are opened, the gates of Hellfire are closed, and the devils are chained."</em> (Bukhari 1899) — Make the most of this blessed month with these authentic duas and azkar.
                        </p>
                    </div>
                </div>

                <AdSense className="my-8" />

                {/* Sehri Duas */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-2 text-center">
                        🌙 Sehri / Suhoor Duas
                    </h2>
                    <p className="text-center text-gray-500 dark:text-gray-400 mb-6 text-sm">Duas for the pre-dawn meal and fasting intention</p>
                    <div className="space-y-6">
                        {sehriDuas.map((dua, i) => (
                            <div key={i} className="glassmorphism rounded-2xl p-6 md:p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{dua.title}</h3>
                                    <span className="text-xs px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full ml-2 flex-shrink-0">{dua.reference}</span>
                                </div>
                                <p className="text-3xl font-arabic text-right text-gray-800 dark:text-white leading-loose mb-4 bg-amber-50/50 dark:bg-amber-900/10 rounded-xl p-4">
                                    {dua.arabic}
                                </p>
                                <p className="text-base text-amber-600 dark:text-amber-400 italic mb-2">{dua.transliteration}</p>
                                <p className="text-gray-600 dark:text-gray-300 mb-3"><strong>Translation:</strong> {dua.translation}</p>
                                <div className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                                    <i className="fas fa-info-circle mt-0.5 text-amber-500 flex-shrink-0"></i>
                                    <span>{dua.note}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Iftar Duas */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-2 text-center">
                        🌅 Iftar Duas
                    </h2>
                    <p className="text-center text-gray-500 dark:text-gray-400 mb-6 text-sm">Duas for breaking the fast at Maghrib — Roza Kholne Ki Dua</p>
                    <div className="space-y-6">
                        {iftarDuas.map((dua, i) => (
                            <div key={i} className="glassmorphism rounded-2xl p-6 md:p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{dua.title}</h3>
                                    <span className="text-xs px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full ml-2 flex-shrink-0">{dua.reference}</span>
                                </div>
                                <p className="text-3xl font-arabic text-right text-gray-800 dark:text-white leading-loose mb-4 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-xl p-4">
                                    {dua.arabic}
                                </p>
                                <p className="text-base text-emerald-600 dark:text-emerald-400 italic mb-2">{dua.transliteration}</p>
                                <p className="text-gray-600 dark:text-gray-300 mb-3"><strong>Translation:</strong> {dua.translation}</p>
                                <div className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                                    <i className="fas fa-info-circle mt-0.5 text-emerald-500 flex-shrink-0"></i>
                                    <span>{dua.note}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <AdSense className="my-8" />

                {/* Ramadan Azkar */}
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl font-display font-bold text-gray-800 dark:text-white mb-2 text-center">
                        ✨ Special Ramadan Azkar
                    </h2>
                    <p className="text-center text-gray-500 dark:text-gray-400 mb-6 text-sm">Tarawih, Laylatul Qadr & essential Ramadan supplications</p>
                    <div className="space-y-6">
                        {ramadanAzkar.map((dua, i) => (
                            <div key={i} className="glassmorphism rounded-2xl p-6 md:p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{dua.title}</h3>
                                    <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full ml-2 flex-shrink-0">{dua.reference}</span>
                                </div>
                                <p className="text-3xl font-arabic text-right text-gray-800 dark:text-white leading-loose mb-4 bg-purple-50/50 dark:bg-purple-900/10 rounded-xl p-4">
                                    {dua.arabic}
                                </p>
                                <p className="text-base text-purple-600 dark:text-amber-400 italic mb-2">{dua.transliteration}</p>
                                <p className="text-gray-600 dark:text-gray-300 mb-3"><strong>Translation:</strong> {dua.translation}</p>
                                <div className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                                    <i className="fas fa-info-circle mt-0.5 text-purple-500 flex-shrink-0"></i>
                                    <span>{dua.note}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Odd Night Section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="text-center mb-10">
                        <h2 className={cn(
                            "text-3xl md:text-4xl font-display font-bold text-gray-800 dark:text-white mb-4",
                            isUrdu ? "font-urdu" : ""
                        )}>
                            {isUrdu ? "🌟 طاق راتوں کے اعمال" : "🌟 Odd Night Actions (Laylatul Qadr)"}
                        </h2>
                        <p className={cn(
                            "text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto",
                            isUrdu ? "font-urdu leading-relaxed" : ""
                        )}>
                            {isUrdu
                                ? "(نوٹ ) یہ تمام اعمال طاق راتوں کے لئے خاص یا لازم نہیں ھیں اسلئے ان میں سے جو کرنا چاھیں کر لیں اسکے علاوہ کوئی اور کرنا چاھیں تو وہ کر لیں۔ جاۓ نماز پر قبلہ رو ہو کر پوری توجہ اور یکسوئی کیساتھ پڑھیں۔"
                                : "(Note) These actions are not exclusive or mandatory for odd nights; you can perform any of these or any other righteous deeds you prefer. Sit facing the Qibla with full focus and devotion."
                            }
                        </p>
                    </div>

                    {/* Odd Night Azkar */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {oddNightAzkar.map((dua, i) => (
                            <div key={i} className="glassmorphism rounded-2xl p-6 border-l-4 border-amber-500">
                                <h3 className="font-bold text-gray-800 dark:text-white mb-2">{dua.title}</h3>
                                <p className="text-2xl font-arabic text-right mb-3 text-emerald-600 dark:text-emerald-400">{dua.arabic}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300 italic">{dua.translation}</p>
                            </div>
                        ))}
                    </div>

                    {/* Odd Night Nawafil & Actions */}
                    <div className="space-y-4">
                        {oddNightActions.map((action, i) => (
                            <div key={i} className="glassmorphism rounded-2xl p-6 flex items-start gap-4 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all">
                                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center shrink-0">
                                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">{i + 1}</span>
                                </div>
                                <div>
                                    <h4 className={cn("text-lg font-bold text-gray-800 dark:text-white mb-1", isUrdu ? "font-urdu" : "")}>
                                        {isUrdu ? action.urdu.split(':')[0] : action.title}
                                    </h4>
                                    <p className={cn("text-gray-600 dark:text-gray-300 text-sm", isUrdu ? "font-urdu leading-relaxed" : "")}>
                                        {isUrdu ? action.urdu.split(':')[1] || action.urdu : action.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="glassmorphism p-6 rounded-2xl bg-amber-50/50 dark:bg-amber-900/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center">
                                    <i className="fas fa-book-open text-amber-600"></i>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-800 dark:text-white">Quran Recitation</h5>
                                    <p className="text-xs text-gray-500">As much as possible</p>
                                </div>
                            </div>
                            {isUrdu && <span className="font-urdu text-amber-700">تلاوتِ قرآن</span>}
                        </div>
                        <div className="glassmorphism p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-900/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                                    <i className="fas fa-hand-holding-heart text-emerald-600"></i>
                                </div>
                                <div>
                                    <h5 className="font-bold text-gray-800 dark:text-white">Sadaqah (Charity)</h5>
                                    <p className="text-xs text-gray-500">Even a small amount</p>
                                </div>
                            </div>
                            {isUrdu && <span className="font-urdu text-emerald-700">صدقہ و خیرات</span>}
                        </div>
                    </div>
                </div>

                {/* Ramadan Tips */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="glassmorphism rounded-2xl p-8">
                        <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
                            10 Ways to Maximize Your Ramadan
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { icon: "fa-book-open", text: "Recite at least one Juz (part) of Quran daily to complete it in Ramadan", color: "text-emerald-500" },
                                { icon: "fa-moon", text: "Wake up for Tahajjud in the last third of the night, especially the last 10 nights", color: "text-purple-500" },
                                { icon: "fa-hand-holding-heart", text: "Give Sadaqah (charity) daily — even a small amount multiplied in Ramadan", color: "text-rose-500" },
                                { icon: "fa-sun", text: "Recite Morning Azkar after Fajr every single day without fail", color: "text-amber-500" },
                                { icon: "fa-star", text: "Seek Laylatul Qadr in the odd nights of the last 10 days (21, 23, 25, 27, 29)", color: "text-yellow-500" },
                                { icon: "fa-pray", text: "Pray all 5 daily prayers on time and add Tarawih prayers nightly", color: "text-blue-500" },
                                { icon: "fa-comments", text: "Increase Dhikr: SubhanAllah, Alhamdulillah, Allahu Akbar, La ilaha illallah", color: "text-teal-500" },
                                { icon: "fa-ban", text: "Avoid sinful speech, arguments, and watching inappropriate content", color: "text-red-400" },
                                { icon: "fa-users", text: "Break fast with family and invite others to share your Iftar", color: "text-indigo-500" },
                                { icon: "fa-heart", text: "Make extra dua at the time of Iftar — it is a time when duas are accepted", color: "text-pink-500" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                                    <i className={`fas ${item.icon} ${item.color} mt-0.5 w-4 flex-shrink-0`}></i>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
                        Frequently Asked Questions About Ramadan Duas
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: "What is the dua for breaking the fast (Iftar)?",
                                a: "The most commonly recited Iftar dua is: 'Allahumma laka sumtu wa 'ala rizqika aftartu' — O Allah! I fasted for You and I broke my fast with Your sustenance. (Abu Dawud 2358). Another narration is: 'Dhahaba al-zama'u...' — meaning the thirst has gone and the reward is confirmed."
                            },
                            {
                                q: "What is the Sehri dua (Niyyah for fasting)?",
                                a: "The intention (niyyah) for fasting is made in the heart. You can say: 'Wa bisawmi ghadin nawaytu min shahri Ramadan' — I intend to keep the fast tomorrow in the month of Ramadan. The key is the sincere intention before Fajr time."
                            },
                            {
                                q: "What is the best dua for Laylatul Qadr?",
                                a: "The Prophet ﷺ taught Aisha (RA) to recite: 'Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni' — O Allah, You are Most Forgiving and You love forgiveness, so forgive me. Recite this abundantly in the last 10 nights of Ramadan. (Tirmidhi 3513)"
                            },
                            {
                                q: "Is Ramadan and Ramzan the same?",
                                a: "Yes! Ramadan, Ramzan, and Ramzaan are all different spellings/pronunciations of the same Arabic word رمضان. Ramzan is commonly used in Pakistan, India, and Persian-influenced regions, while Ramadan is the standard Arabic/English spelling used in Arab countries and most international contexts."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="glassmorphism rounded-xl p-6">
                                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{faq.q}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <AdSense className="my-8" />

                {/* Internal Links */}
                <RelatedContent hub="azkar" currentHref="/ramadan-azkar" />
            </main>
        </div>
    );
}
