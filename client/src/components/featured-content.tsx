import { Link } from "wouter";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export function FeaturedContent() {
  const { lang, t, isUrdu } = useLanguage();

  const contentCards = [
    {
      id: "morning-azkar",
      title: t("cards.morning.title"),
      titleArabic: "أذكار الصباح",
      description: t("cards.morning.description"),
      icon: "fas fa-sun",
      color: "from-amber-400 to-orange-500",
      iconBg: "from-amber-400 to-orange-500",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      link: "/morning-azkar",
      count: isUrdu ? "7 اہم دعائیں" : "7 Essential Prayers"
    },
    {
      id: "evening-azkar",
      title: t("cards.evening.title"),
      titleArabic: "أذكار المساء",
      description: t("cards.evening.description"),
      icon: "fas fa-moon",
      color: "from-purple-500 via-blue-600 to-indigo-700",
      iconBg: "from-emerald-500 to-blue-600",
      imageUrl: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      link: "/evening-azkar",
      count: isUrdu ? "10 مقدس دعائیں" : "10 Sacred Prayers"
    },
    {
      id: "quran",
      title: t("cards.quran.title"),
      titleArabic: "القرآن الكريم",
      description: t("cards.quran.description"),
      icon: "fas fa-book-open",
      color: "from-green-500 via-emerald-600 to-teal-700",
      iconBg: "from-emerald-500 to-teal-600",
      imageUrl: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      link: "/quran",
      count: isUrdu ? "114 سورتیں" : "114 Surahs"
    },
    {
      id: "dua-after-salah",
      title: t("cards.dua_after_salah.title"),
      titleArabic: "دعاء بعد الصلاة",
      description: t("cards.dua_after_salah.description"),
      icon: "fas fa-hands",
      color: "from-blue-500 via-indigo-600 to-purple-700",
      iconBg: "from-blue-500 to-purple-600",
      imageUrl: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      link: "/dua-after-salah",
      count: isUrdu ? "نماز کے بعد کی دعائیں" : "Post-Prayer Duas"
    },
    {
      id: "rabbana-duas",
      title: t("cards.rabbana.title"),
      titleArabic: "ربنا ادعية",
      description: t("cards.rabbana.description"),
      icon: "fas fa-heart",
      color: "from-teal-500 via-cyan-600 to-blue-700",
      iconBg: "from-teal-500 to-cyan-600",
      imageUrl: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      link: "/rabbana-duas",
      count: isUrdu ? "قرآنی دعائیں" : "Quranic Duas"
    },
    {
      id: "ruqiya",
      title: t("cards.ruqiya.title"),
      titleArabic: "رقية شرعية",
      description: t("cards.ruqiya.description"),
      icon: "fas fa-shield-alt",
      color: "from-violet-500 via-purple-600 to-indigo-700",
      iconBg: "from-violet-500 to-purple-600",
      imageUrl: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      link: "/ruqiya",
      count: isUrdu ? "روحانی شفا" : "Spiritual Healing"
    },
    {
      id: "tasbeeh-counter",
      title: t("cards.tasbeeh.title"),
      titleArabic: "المسبحة الإلكترونية",
      description: t("cards.tasbeeh.description"),
      icon: "fas fa-calculator",
      color: "from-teal-500 via-emerald-600 to-green-700",
      iconBg: "from-teal-500 to-emerald-600",
      imageUrl: "/images/tasbeeh-hero.png",
      link: "/tasbeeh-counter",
      count: isUrdu ? "ڈیجیٹل ذکر ٹول" : "Digital Zikr Tool"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentCards.map((card) => (
            <Link key={card.id} href={card.link}>
              <div className="content-card glassmorphism rounded-2xl p-6 group cursor-pointer h-full flex flex-col">
                <div className={`image-gallery-item mb-6 h-48 bg-gradient-to-br ${card.color} rounded-xl shrink-0`}>
                  <img
                    src={card.imageUrl}
                    alt={`${card.title}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="image-overlay rounded-xl">
                    <i className={`${card.icon} text-white text-4xl`}></i>
                  </div>
                </div>

                <div className="flex items-center mb-4 rtl:space-x-reverse space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${card.iconBg} rounded-full flex items-center justify-center shrink-0`}>
                    <i className={`${card.icon} text-white text-lg`}></i>
                  </div>
                  <div>
                    <h3 className={cn(
                      "text-xl font-display font-semibold text-gray-800 dark:text-white",
                      isUrdu ? "font-urdu text-lg leading-relaxed" : ""
                    )}>
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-arabic">
                      {card.titleArabic}
                    </p>
                  </div>
                </div>

                <p className={cn(
                  "text-gray-600 dark:text-gray-300 mb-6 flex-grow",
                  isUrdu ? "font-urdu text-base leading-relaxed text-right" : ""
                )}>
                  {card.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/50">
                  <span className={cn(
                    "text-emerald-600 dark:text-emerald-400 font-medium",
                    isUrdu ? "font-urdu text-sm" : ""
                  )}>
                    {card.count}
                  </span>
                  <i className={cn(
                    "fas fa-arrow-right text-gray-400 group-hover:text-emerald-500 transition-all",
                    isUrdu ? "fa-arrow-left group-hover:-translate-x-1" : "group-hover:translate-x-1"
                  )}></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
