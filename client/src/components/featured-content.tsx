import { Link } from "wouter";

export function FeaturedContent() {
  const contentCards = [
    {
      id: "morning-azkar",
      title: "Morning Azkar",
      titleArabic: "صباح الخير",
      description: "Start your day with blessed remembrance. Beautiful collection of authentic morning Azkar to seek Allah's protection and blessings.",
      icon: "fas fa-sun",
      color: "from-amber-400 to-orange-500",
      iconBg: "from-amber-400 to-orange-500",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      link: "/morning-azkar",
      count: "7 Essential Prayers"
    },
    {
      id: "evening-azkar",
      title: "Evening Azkar",
      titleArabic: "مساء الخير",
      description: "End your day in peace and gratitude. Essential evening remembrance to seek forgiveness and reflect on Allah's blessings.",
      icon: "fas fa-moon",
      color: "from-purple-500 via-blue-600 to-indigo-700",
      iconBg: "from-emerald-500 to-blue-600",
      imageUrl: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      link: "/evening-azkar",
      count: "10 Sacred Prayers"
    },
    {
      id: "quran",
      title: "Holy Quran",
      titleArabic: "القرآن الكريم",
      description: "Read and reflect upon Allah's words. Complete Quran with beautiful Arabic text, translations, and spiritual guidance.",
      icon: "fas fa-book-open",
      color: "from-green-500 via-emerald-600 to-teal-700",
      iconBg: "from-emerald-500 to-teal-600",
      imageUrl: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      link: "/quran",
      count: "114 Surahs"
    },
    {
      id: "dua-after-salah",
      title: "Dua after Salah",
      titleArabic: "دعاء بعد الصلاة",
      description: "Complete your prayer with blessed supplications. Essential duas to recite after each of the five daily prayers.",
      icon: "fas fa-hands",
      color: "from-blue-500 via-indigo-600 to-purple-700",
      iconBg: "from-blue-500 to-purple-600",
      imageUrl: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      link: "/dua-after-salah",
      count: "Post-Prayer Duas"
    },
    {
      id: "rabbana-duas",
      title: "Rabbana Duas",
      titleArabic: "ربنا ادعية",
      description: "Powerful supplications from the Quran. Beautiful collection of \"Our Lord\" duas for guidance, forgiveness, and blessings.",
      icon: "fas fa-heart",
      color: "from-teal-500 via-cyan-600 to-blue-700",
      iconBg: "from-teal-500 to-cyan-600",
      imageUrl: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      link: "/rabbana-duas",
      count: "Quranic Duas"
    },
    {
      id: "ruqiya",
      title: "Ruqiya",
      titleArabic: "رقية شرعية",
      description: "Spiritual protection through Quranic verses. Authentic Islamic healing and protection prayers for spiritual well-being.",
      icon: "fas fa-shield-alt",
      color: "from-violet-500 via-purple-600 to-indigo-700",
      iconBg: "from-violet-500 to-purple-600",
      imageUrl: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      link: "/ruqiya",
      count: "Spiritual Healing"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Explore Islamic <span className="gradient-text">Remembrance</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Strengthen your faith with our comprehensive collection of authentic Islamic prayers and remembrance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentCards.map((card) => (
            <Link key={card.id} href={card.link}>
              <div className="content-card glassmorphism rounded-2xl p-6 group cursor-pointer">
                <div className={`image-gallery-item mb-6 h-48 bg-gradient-to-br ${card.color} rounded-xl`}>
                  <img
                    src={card.imageUrl}
                    alt={`${card.title} - ${card.description}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="image-overlay rounded-xl">
                    <i className={`${card.icon} text-white text-4xl`}></i>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${card.iconBg} rounded-full flex items-center justify-center mr-4`}>
                    <i className={`${card.icon} text-white text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-gray-800 dark:text-white">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-arabic">
                      {card.titleArabic}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {card.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    {card.count}
                  </span>
                  <i className="fas fa-arrow-right text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
