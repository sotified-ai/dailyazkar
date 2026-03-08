import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { azkarData } from "@/data/azkar-data";
import { Link } from "wouter";

interface LocalResult {
  title: string;
  arabic?: string;
  translation?: string;
  reference?: string;
  link: string;
  category: string;
}

interface QuranVerse {
  number: number;
  text: string;
  surah: { number: number; englishName: string; englishNameTranslation: string };
  numberInSurah: number;
}

// Static Islamic knowledge index — broad tags for fuzzy matching
const islamicKnowledge: (LocalResult & { tags: string[] })[] = [
  {
    title: "Morning Azkar (أذكار الصباح)", arabic: "أَذْكَارُ الصَّبَاح",
    translation: "Supplications recited after Fajr prayer until sunrise. They provide spiritual protection and blessings throughout the day.",
    reference: "Hisnul Muslim", link: "/morning-azkar", category: "Morning",
    tags: ["morning", "dua", "fajr", "subh", "dawn", "azkar", "dhikr", "prayer", "صباح"]
  },
  {
    title: "Evening Azkar (أذكار المساء)", arabic: "أَذْكَارُ الْمَسَاء",
    translation: "Supplications recited after Asr prayer until Maghrib. They protect through the night and help seek forgiveness.",
    reference: "Hisnul Muslim", link: "/evening-azkar", category: "Evening",
    tags: ["evening", "night", "asr", "maghrib", "dua", "azkar", "dhikr", "مساء", "remembrance"]
  },
  {
    title: "Ramadan Azkar (أذكار رمضان)", arabic: "أذكار رمضان",
    translation: "Special supplications for the blessed month of Ramadan: Sehri dua, Iftar dua, Tarawih dua, Laylatul Qadr dua.",
    reference: "Various", link: "/ramadan-azkar", category: "Ramadan",
    tags: ["ramadan", "ramzan", "ramzaan", "fasting", "roza", "sehri", "iftar", "tarawih", "laylatul", "qadr", "dua"]
  },
  {
    title: "Iftar Dua — Breaking the Fast", arabic: "اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
    translation: "O Allah! I fasted for You and I broke my fast with Your sustenance.",
    reference: "Abu Dawud 2358", link: "/ramadan-azkar", category: "Ramadan",
    tags: ["iftar", "fast", "fasting", "break", "dua", "ramadan", "roza", "ramzan", "maghrib"]
  },
  {
    title: "Sehri / Suhoor Dua (Fasting Intention)", arabic: "وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ",
    translation: "I intend to keep the fast tomorrow in the month of Ramadan.",
    reference: "Abu Dawud", link: "/ramadan-azkar", category: "Ramadan",
    tags: ["sehri", "suhoor", "fast", "niyyah", "intention", "ramadan", "dua", "fasting", "roza"]
  },
  {
    title: "Laylatul Qadr Dua (Night of Power)", arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    translation: "O Allah, You are Most Forgiving and You love forgiveness, so forgive me.",
    reference: "Tirmidhi 3513", link: "/ramadan-azkar", category: "Ramadan",
    tags: ["laylatul", "qadr", "night", "power", "forgiveness", "dua", "ramadan", "27"]
  },
  {
    title: "Subhanallah (سبحان الله)", arabic: "سُبْحَانَ اللَّهِ",
    translation: "Glory be to Allah — praise and glorification. Reciting 33 times after each prayer is Sunnah.",
    reference: "Sahih Muslim 597", link: "/morning-azkar", category: "Dhikr",
    tags: ["subhanallah", "subhan", "glory", "praise", "dhikr", "tasbeeh", "prayer"]
  },
  {
    title: "Alhamdulillah (الحمد لله)", arabic: "الْحَمْدُ لِلَّهِ",
    translation: "All praise is due to Allah — an expression of gratitude. Fills the scale of good deeds.",
    reference: "Sahih Muslim 223", link: "/morning-azkar", category: "Dhikr",
    tags: ["alhamdulillah", "praise", "gratitude", "thanks", "dhikr", "hamd"]
  },
  {
    title: "Allahu Akbar (الله أكبر)", arabic: "اللَّهُ أَكْبَرُ",
    translation: "Allah is the Greatest — a declaration of Allah's supremacy over everything.",
    reference: "Bukhari & Muslim", link: "/morning-azkar", category: "Dhikr",
    tags: ["allahu", "akbar", "greatest", "takbeer", "dhikr", "prayer", "adhan"]
  },
  {
    title: "Astaghfirullah (أستغفر الله)", arabic: "أَسْتَغْفِرُ اللَّهَ",
    translation: "I seek forgiveness from Allah — the Prophet ﷺ sought forgiveness more than 70 times a day.",
    reference: "Bukhari 6307", link: "/evening-azkar", category: "Istighfar",
    tags: ["astaghfirullah", "istighfar", "forgiveness", "repentance", "tawbah", "dhikr", "evening"]
  },
  {
    title: "Ayat al-Kursi (آية الكرسي)", arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
    translation: "Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence. The greatest verse in the Quran.",
    reference: "Quran 2:255", link: "/ruqiya", category: "Quran",
    tags: ["ayat", "kursi", "throne", "verse", "quran", "protection", "2:255", "greatest"]
  },
  {
    title: "Bismillah (بسم الله)", arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    translation: "In the name of Allah, the Most Gracious, the Most Merciful. Said before any important action.",
    reference: "Quran 1:1", link: "/morning-azkar", category: "Daily Azkar",
    tags: ["bismillah", "name", "allah", "gracious", "merciful", "basmala", "begin"]
  },
  {
    title: "Dua after Salah / Prayer", arabic: "أَسْتَغْفِرُ اللَّهَ × 3",
    translation: "Supplications recited after completing the 5 daily prayers, following the Sunnah of the Prophet ﷺ.",
    reference: "Sahih Muslim", link: "/dua-after-salah", category: "Prayer",
    tags: ["dua", "salah", "prayer", "after", "namaz", "post", "tasbih", "dhikr"]
  },
  {
    title: "Rabbana Duas (ربنا دعاء)", arabic: "رَبَّنَا",
    translation: "Quranic duas beginning with 'Rabbana' (Our Lord). Among the most powerful supplications from the Quran.",
    reference: "Various Quran verses", link: "/rabbana-duas", category: "Quran Duas",
    tags: ["rabbana", "our lord", "quran", "dua", "supplication", "quranic"]
  },
  {
    title: "La ilaha illallah (لا إله إلا الله)", arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ",
    translation: "There is no deity except Allah — the declaration of faith (Shahada). The best of dhikr.",
    reference: "Tirmidhi 3383", link: "/morning-azkar", category: "Tawheed",
    tags: ["la ilaha", "illallah", "shahada", "faith", "monotheism", "tawheed", "kalima", "dhikr"]
  },
  {
    title: "Ruqyah / Ruqiya (رقية شرعية)", arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ",
    translation: "Islamic spiritual healing using Quranic verses and authentic duas for protection from evil eye, jinn, and illness.",
    reference: "Hisnul Muslim", link: "/ruqiya", category: "Protection",
    tags: ["ruqyah", "ruqiya", "healing", "protection", "evil", "eye", "jinn", "spiritual", "sick"]
  },
  {
    title: "Surah Al-Fatiha (الفاتحة)", arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    translation: "The Opening — recited in every rakat of prayer. Known as the 'mother of the Quran'.",
    reference: "Quran 1:1-7", link: "/quran", category: "Quran",
    tags: ["fatiha", "opening", "surah", "quran", "prayer", "namaz", "recite"]
  },
  {
    title: "Manzil (منزل)", arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ...",
    translation: "A collection of verses from the Quran highly effective for protection from black magic, evil eye, jinn, and other harms. (یہ منزل آسیب، سحر اور خطرات سے حفاظت کیلئے ایک مجرب عمل ہے)",
    reference: "Quran (Various Surahs)", link: "/manzil", category: "Protection",
    tags: [
      "manzil", "protection", "evil eye", "black magic", "jinn", "sihr", "ruqyah", "ruqiya",
      "jadu se hifazat", "aseeb se hifazat", "jinnat", "satan", "hifazat ki dua", "منزل",
      "jadoo", "nazar e bad", "nazre bad", "shaitan"
    ]
  },
  {
    title: "Dua of Hazrat Anas (RA) for Protection", arabic: "بِسْمِ اللّٰہِ وَالْحَمْدُ لِلّٰہِ...",
    translation: "A powerful daily protection dua against all harm, tyrants, accidents, and evil eye.",
    reference: "Kanzul Ummal", link: "/morning-azkar", category: "Protection",
    tags: [
      "hazrat anas", "anas dua", "protection", "dua", "hadrat anas", "zalim se hifazat",
      "tyrant", "accident", "hifazat", "دعاء حضرت انس", "mahfooz", "hadesat"
    ]
  },
  {
    title: "Prophetic Prescription for Sufficiency (کفایت کا نسخہ)", arabic: "حَسْبِيَ اللّٰهُ لَآ اِلٰهَ اِلَّا هُوَ...",
    translation: "Allah is sufficient for me. For sufficiency in worldly and hereafter affairs.",
    reference: "Hayatus Sahabah", link: "/morning-azkar", category: "Morning",
    tags: [
      "kifayat ka nuskha", "sufficiency", "dunya aur akhirat", "hasbiyallah", "hasbiyallahu",
      "allah kafi hai", "prophetic prescription", "نبوى نسخہ", "kifayat"
    ]
  },
  {
    title: "Giving Thanks for the Blessings (نعمتوں کا شکر)", arabic: "اَللّٰهُمَّ مَا اَصْبَحَ بِي مِنْ نِّعْمَةٍ...",
    translation: "O Allah, whatever blessing has been received by me... is from You alone. Fulfills gratitude for the day.",
    reference: "Abu Dawud", link: "/morning-azkar", category: "Morning",
    tags: [
      "shukar", "shukr", "gratitude", "thanks", "neamat", "niamat", "blessings", "shukrana",
      "allah ka shukar", "نعمتوں کا شکر", "morning"
    ]
  },
];

// Word-by-word fuzzy matching — any query word hitting a tag scores a match
function scoreResult(item: typeof islamicKnowledge[0], queryWords: string[]): number {
  let score = 0;
  for (const word of queryWords) {
    if (word.length < 2) continue;
    if (item.tags.some(t => t.includes(word) || word.includes(t))) score += 2;
    if (item.title.toLowerCase().includes(word)) score += 3;
    if (item.translation?.toLowerCase().includes(word)) score += 1;
    if (item.category.toLowerCase().includes(word)) score += 1;
  }
  return score;
}

function searchLocal(query: string): LocalResult[] {
  const queryWords = query.toLowerCase().trim().split(/\s+/);

  // Score and filter knowledge index
  const knowledgeResults = islamicKnowledge
    .map(item => ({ item, score: scoreResult(item, queryWords) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item as LocalResult);

  // Search azkar data items
  const azkarResults: LocalResult[] = [];
  azkarData.forEach(category => {
    category.items.forEach(item => {
      const haystack = [item.translation, item.title, item.titleArabic, item.content, category.name, category.nameArabic]
        .join(" ").toLowerCase();
      const matches = queryWords.some(w => w.length > 2 && haystack.includes(w));
      if (matches) {
        const link = category.id === "morning" ? "/morning-azkar" :
          category.id === "evening" ? "/evening-azkar" : `/${category.id}`;
        azkarResults.push({
          title: item.title || `${category.name} Dhikr`,
          arabic: item.content,
          translation: item.translation,
          reference: item.reference,
          link,
          category: category.name
        });
      }
    });
  });

  // Merge, deduplicate by title
  const seen = new Set<string>();
  return [...knowledgeResults, ...azkarResults]
    .filter(r => { if (seen.has(r.title)) return false; seen.add(r.title); return true; })
    .slice(0, 5);
}

async function searchQuran(query: string): Promise<QuranVerse[]> {
  // Use the first meaningful word for Quran search (skip short/common words)
  const word = query.trim().split(/\s+/).find(w => w.length >= 4) || query.trim().split(/\s+/)[0];
  try {
    const res = await fetch(`https://api.alquran.cloud/v1/search/${encodeURIComponent(word)}/all/en.asad`);
    const json = await res.json();
    if (json.code === 200 && json.data?.matches?.length > 0) {
      return json.data.matches.slice(0, 3);
    }
  } catch {
    // silently ignore network errors
  }
  return [];
}

export function EnhancedSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [localResults, setLocalResults] = useState<LocalResult[]>([]);
  const [quranResults, setQuranResults] = useState<QuranVerse[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const popularSearches = ["Subhanallah", "Morning Dua", "Astaghfirullah", "Ayat al-Kursi", "Evening Remembrance"];

  const handleSearch = async (query?: string) => {
    const q = query !== undefined ? query : searchQuery;
    if (!q.trim()) return;
    if (query !== undefined) setSearchQuery(query);

    setIsLoading(true);
    setHasSearched(false);
    setLocalResults([]);
    setQuranResults([]);

    // Run local search + Quran API in parallel
    const [local, quran] = await Promise.all([
      Promise.resolve(searchLocal(q)),
      searchQuran(q)
    ]);

    setLocalResults(local);
    setQuranResults(quran);
    setHasSearched(true);
    setIsLoading(false);
  };

  const totalResults = localResults.length + quranResults.length;

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Discover <span className="gradient-text">Islamic Knowledge</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Search for Azkar, duas, or Islamic topics — includes live Quran verse search
            </p>
          </div>

          <div className="glassmorphism rounded-2xl p-8">
            {/* Search Input */}
            <div className="relative mb-6">
              <Input
                type="text"
                placeholder="Search 'Morning Dua', 'Subhanallah', 'forgiveness', 'protection'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full px-6 py-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-lg"
              />
              <Button
                onClick={() => handleSearch()}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium rounded-lg"
              >
                <i className="fas fa-search mr-2"></i>Search
              </Button>
            </div>

            {/* Loader */}
            {isLoading && (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
                <p className="text-gray-600 dark:text-gray-400 mt-3">Searching Azkar & Quran...</p>
              </div>
            )}

            {/* Results */}
            {hasSearched && !isLoading && (
              <div className="mt-2 space-y-6">
                {totalResults === 0 ? (
                  <div className="text-center py-6 text-gray-500 dark:text-gray-400">
                    <i className="fas fa-search text-3xl mb-3 block opacity-30"></i>
                    <p>No results found for <strong>"{searchQuery}"</strong></p>
                    <p className="text-sm mt-1">Try: Subhanallah, Morning Dua, Ruqyah, Forgiveness</p>
                  </div>
                ) : (
                  <>
                    {/* ── Azkar & Duas Results ── */}
                    {localResults.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center">
                            <i className="fas fa-moon text-emerald-500 text-xs"></i>
                          </span>
                          Azkar & Duas ({localResults.length})
                        </h4>
                        <div className="space-y-3">
                          {localResults.map((result, i) => (
                            <Link key={i} href={result.link}>
                              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4 border-l-4 border-emerald-500 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-all cursor-pointer group">
                                <div className="flex items-start justify-between gap-3">
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                                      <span className="text-xs px-2 py-0.5 bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300 rounded-full">{result.category}</span>
                                    </div>
                                    <h5 className="font-semibold text-gray-800 dark:text-white text-sm mb-1">{result.title}</h5>
                                    {result.arabic && (
                                      <p className="text-right font-arabic text-gray-700 dark:text-gray-200 text-lg mb-1 leading-loose">{result.arabic}</p>
                                    )}
                                    {result.translation && (
                                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2">{result.translation}</p>
                                    )}
                                    {result.reference && (
                                      <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                                        <i className="fas fa-book mr-1"></i>{result.reference}
                                      </p>
                                    )}
                                  </div>
                                  <i className="fas fa-arrow-right text-gray-400 group-hover:text-emerald-500 transition-colors mt-1 flex-shrink-0"></i>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ── Quran Verse Results ── */}
                    {quranResults.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                          <span className="w-6 h-6 bg-amber-100 dark:bg-amber-900/40 rounded-full flex items-center justify-center">
                            <i className="fas fa-book-open text-amber-500 text-xs"></i>
                          </span>
                          Quran Verses — Al-Quran Cloud ({quranResults.length})
                        </h4>
                        <div className="space-y-3">
                          {quranResults.map((verse, i) => (
                            <Link key={i} href={`/quran/surahs/${verse.surah.number}`}>
                              <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-4 border-l-4 border-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/20 transition-all cursor-pointer group">
                                <div className="flex items-start justify-between gap-3">
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                                      <span className="text-xs px-2 py-0.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 rounded-full font-medium">
                                        {verse.surah.englishName} ({verse.surah.englishNameTranslation}) — Verse {verse.numberInSurah}
                                      </span>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 italic">"{verse.text}"</p>
                                    <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                                      <i className="fas fa-quran mr-1"></i>Quran {verse.surah.number}:{verse.numberInSurah} · Translation: Muhammad Asad
                                    </p>
                                  </div>
                                  <i className="fas fa-arrow-right text-gray-400 group-hover:text-amber-500 transition-colors mt-1 flex-shrink-0"></i>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-center">
                          <i className="fas fa-external-link-alt mr-1"></i>
                          Quran data provided by <a href="https://alquran.cloud" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Al-Quran Cloud</a> (free API)
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {/* Popular Searches */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Popular Searches</h4>
              <div className="flex flex-wrap gap-3">
                {popularSearches.map((search) => (
                  <Button
                    key={search}
                    variant="outline"
                    onClick={() => handleSearch(search)}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {search}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
