export interface AzkarItem {
  id: number;
  title: string;
  titleArabic: string;
  content: string;
  translation: string;
  reference?: string;
  repetitions: number;
  imageUrl?: string;
  authenticity?: string;
  source?: string;
  benefits?: string;
}

export interface AzkarCategory {
  id: string;
  name: string;
  nameArabic: string;
  description: string;
  icon: string;
  items: AzkarItem[];
}

export const azkarData: AzkarCategory[] = [
  {
    id: "morning",
    name: "Morning Azkar",
    nameArabic: "أذكار الصباح",
    description: "Start your day with blessed remembrance and seek Allah's protection",
    icon: "fas fa-sun",
    items: [
      {
        id: 1,
        title: "Ayat al-Kursi",
        titleArabic: "آية الكرسي",
        content: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْثَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
        translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
        reference: "Quran 2:255",
        repetitions: 1,
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
        authenticity: "Sahih (Authentic)",
        source: "Quran",
        benefits: "Protection, increased faith, spiritual strength"
      },
      {
        id: 2,
        title: "Surah Al-Ikhlas",
        titleArabic: "سورة الإخلاص",
        content: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        translation: "Say: He is Allah, the One! Allah, the Eternal, Absolute; He begets not, nor is He begotten; And there is none like unto Him.",
        reference: "Quran 112:1-4",
        repetitions: 3,
        imageUrl: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa",
        authenticity: "Sahih (Authentic)",
        source: "Quran",
        benefits: "Monotheism, spiritual purification, protection from polytheism"
      },
      {
        id: 4,
        title: "Prophetic Prescription for Sufficiency in Worldly and Hereafter Affairs",
        titleArabic: "دنیا و آخرت کے کاموں پر کفایت کا نبوى نسخہ",
        content: `بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ\nحَسْبِيَ اللّٰهُ لَآ اِلٰهَ اِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيْمِ`,
        translation: `English Translation:
Allah is sufficient for me. There is no deity except Him. On Him I have relied, and He is the Lord of the Great Throne.

Urdu Translation:
ترجمہ: اللہ تعالىٰ ہی مجھے کافی ہے، اس کے علاوہ کوئی عبادت کے لائق نہیں ہے، اُسی پر میں نے بھروسہ کیا اور وہ عظیم عرش کا مالک ہے۔`,
        reference: "Hayatus Sahabah (3/342)",
        repetitions: 7,
        imageUrl: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5",
        authenticity: "Hasan",
        source: "Hadith",
        benefits: "Allah will suffice him for the affairs of this world and the Hereafter. جو شخص صبح اور شام کے وقت یہ دعا سات مرتبہ پڑھ لے تو اللہ تعالىٰ اس کے دنیا و آخرت کے کاموں میں کفایت کرے گا۔"
      },
      {
        id: 5,
        title: "Prophetic Prescription for Sufficiency from Everything",
        titleArabic: "ہر چیز سے کفایت کا نبوى نسخہ",
        content: `بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
قُلۡ هُوَ اللّٰهُ اَحَدٌ (۱) اَللّٰهُ الصَّمَدُ (۲) لَمۡ يَلِدۡ ۙ وَلَمۡ يُوۡلَدۡ (۳) وَلَمۡ يَكُنۡ لَّهٗ كُفُوًا اَحَدٌ (۴)
بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
قُلۡ اَعُوۡذُ بِرَبِّ الۡفَلَقِۙ (۱) مِنۡ شَرِّ مَا خَلَقَۙ (۲) وَمِنۡ شَرِّ غَاسِقٍ اِذَا وَقَبَۙ (۳) وَمِنۡ شَرِّ النَّفّٰثٰتِ فِى الۡعُقَدِۙ (۴) وَمِنۡ شَرِّ حَاسِدٍ اِذَا حَسَدَ (۵)
بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
قُلْ اَعُوْذُ بِرَبِّ النَّاسِ (۱) مَلِكِ النَّاسِۙ (۲) اِلٰهِ النَّاسِۙ (۳) مِنۡ شَرِّ الۡوَسۡوَاسِ ۙ الۡخَـنَّاسِ (۴) الَّذِىۡ يُوَسۡوِسُ فِىۡ صُدُوۡرِ النَّاسِۙ (۵) مِنَ الۡجِنَّةِ وَالنَّاسِ (۶)`,
        translation: `English Translation:
Say, "He is Allah, [who is] One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent."
Say, "I seek refuge in the Lord of daybreak. From the evil of that which He created. And from the evil of darkness when it settles. And from the evil of the blowers in knots. And from the evil of an envier when he envies."
Say, "I seek refuge in the Lord of mankind. The Sovereign of mankind. The God of mankind. From the evil of the retreating whisperer. Who whispers in the breasts of mankind. From among the jinn and mankind."

Urdu Translation:
ترجمہ: آپ (ان لوگوں سے) کہہ دیجئے کہ وہ یعنی اللہ ایک ہے، اللہ ہی بے نیاز ہے، اس کے اولاد نہیں، اور نہ وہ کسی کی اولاد ہے اور نہ کوئی اس کی برابر کا ہے۔
ترجمہ : آپ کہئے کہ مَیں صبح کے مالک کی پناہ لیتا ہوں تمام مخلوق کی برائی سے ، اور اندھیری رات کی برائی سےجب وہ رات آجائے ، اور گرہوں میں پڑھ پڑھ کر پھونکنے والیوں کی برائی سے، اور حسد کرنے والے کی برائی سے جب وہ حسد کرنے لگے۔
ترجمہ: آپ کہئے کہ میں آدمیوں کے مالک، آدمیوں کے بادشاہ ، آدمیوں کے معبود کی پناہ لیتا ہوں وسوسہ ڈالنے والے، پیچھے ہٹنے والے (شیطان) کی برائی سے جو لوگوں کے دلوں میں وسوسہ ڈالتا ہے ،خواہ وہ (وسوسہ ڈالنے والا )جنات میں سے ہو یا آدمیوں میں سے ہو۔`,
        reference: "Tirmidhi (3/182), Abu Dawud (4/805)",
        repetitions: 3,
        imageUrl: "https://images.unsplash.com/photo-1519781542704-957ff19eff00",
        authenticity: "Sahih (Authentic)",
        source: "Hadith",
        benefits: "Sufficiency from everything. جو شخص سورۂ اخلاص، سورۂ فلق، سورۂ ناس صبح کے وقت تین مرتبہ پڑھ لے اس کی ہر چیز سے کفایت ہوجائے گی۔"
      },
      {
        id: 6,
        title: "Prophetic Prescription for Completing Allah's Blessings",
        titleArabic: "اپنے لئے اللہ کى نعمتوں کو مکمّل فرمانے کا نبوى نسخہ",
        content: `اَللّٰهُمَّ اِنِّي اَصْبَحْتُ مِنْكَ فِي نِعْمَةٍ وَّعَافِيَةٍ وَّسِتْرٍ فَاَتْمِمْ عَلَيَّ نِعْمَتَكَ وَعَافِيَتَكَ وَسِتْرَكَ فِي الدُّنْيَا وَالْآخِرَةِ`,
        translation: `English Translation:
O Allah, indeed I have reached the morning by You in a state of blessing, well-being, and protection, so complete Your blessing, well-being, and protection upon me in this world and the Hereafter.

Urdu Translation:
ترجمہ: اے اللہ ! بے شک میں نے آپ کی طرف سے نعمت، عافیت اور پردہ پوشی کی حالت میں صبح کی، لہٰذا آپ مجھ پر اپنے انعام اور اپنی عافیت اور اپنی پردہ پوشی دنیا اور آخرت میں مکمّل فرمائیے۔`,
        reference: "Amal Al-Yawm Wal-Laylah (No. 55)",
        repetitions: 3,
        imageUrl: "https://images.unsplash.com/photo-1444158933251-2d7c5ed2da14",
        authenticity: "Hasan",
        source: "Hadith",
        benefits: "Allah will complete His blessings upon him. جو شخص صبح اور شام کے وقت تین مرتبہ یہ دعا پڑھ لے تو اللہ تعالىٰ اس پر اپنی نعمت مکمل کر دیتے ہیں۔"
      },
      {
        id: 7,
        title: "Giving Thanks for the Blessings of Day and Night",
        titleArabic: "دن اور رات کى نعمتوں کا شکر ادا کرنے کا نبوى نسخہ",
        content: `اَللّٰهُمَّ مَا اَصْبَحَ بِي مِنْ نِّعْمَةٍ اَوْ بِاَحَدٍ مِّنْ خَلْقِکَ فَمِنْكَ وَحْدَكَ لَا شَرِيْكَ لَكَ فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ`,
        translation: `English Translation:
O Allah, whatever blessing has been received by me or anyone of Your creation this morning, it is from You alone, You have no partner. All praise is for You and thanks is to You.

Urdu Translation:
ترجمہ: اے اللہ جو بھی نعمت میرے ساتھ یا آپ کی مخلوق میں سے کسی کے ساتھ صبح کے وقت ہے وہ تنہا آپ ہی کی طرف سے ہے، ان میں آپ کا کوئی شریک نہیں ہے لہذا تمام تعریفیں آپ ہی کے لیے ہیں اور شکر گزاری آپ ہی کے لئے ہے۔`,
        reference: "Abu Dawud (4/318)",
        repetitions: 1,
        imageUrl: "https://images.unsplash.com/photo-1473229672688-6603a110bbbd",
        authenticity: "Sahih (Authentic)",
        source: "Hadith",
        benefits: "Fulfills the gratitude for the day. جو شخص صبح کے وقت ایک مرتبہ پڑھ لے تو اس نے اس دن کی نعمتوں کا شکر ادا کر لیا۔"
      },
      {
        id: 8,
        title: "Morning and Evening Additional Supplications",
        titleArabic: "صبح و شام کی مزید دعائیں",
        content: `بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ\n\nاَللّٰهُمَّ بِكَ اَصْبَحْنَا وَبِكَ اَمْسَيْنَا وَبِكَ نَحْيٰى وَبِكَ نَمُوْتُ وَاِلَيْكَ الْمَصِيْرُ\n\nاَصْبَحْنَا وَاَصْبَحَ الْمُلْكُ لِلّٰهِ رَبِّ الْعَالَمِينَ اَللّٰهُمَّ اِنِّيۤ اَسْاَلُكَ خَيْرَ هَذَا الْيَوْمِ فَتْحَهُ وَنَصْرَهُ وَنُوْرَهُ وَبَرَكَتَهُ وَهُدَاهُ وَاَعُوْذُ بِكَ مِنْ شَرِّ مَا فِيْهِ وَشَرِّ مَا بَعْدَهُ\n\nاَصْبَحْنا عَلٰى فِطْرَةِ الْاِسْلاَمِ وَ كَلِمَةِ الْاِخْلاَصِ وَعَلٰى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ وَعَلٰى مِلَّةِ اَبِيْنَاۤ اِبْرَاهِيْمَ حَنِيْفاً مُّسْلِماً وَّمَا كَانَ مِنَ الْمُشرِكِيْنَ\n\nشام کو اَصْبَحْنَا کی جگہ اَمْسَيْنَا اور اَصْبَحَ کی جگہ اَمْسَي پڑھیں`,
        translation: `English Translation:
O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the final return.
We have entered a new morning and with it all dominion is Allah's, Lord of all that exists. O Allah, I ask You for the goodness of this day, its victory, its help, its light, its blessings, and its guidance. I seek refuge in You from the evil that is in it and from the evil that follows it.
We have entered a new morning upon the natural religion of Islam, the word of sincere devotion, the religion of our Prophet Muhammad ﷺ, and the faith of our father Ibrahim. He was upright and a Muslim, and he was not of those who associate others with Allah.

Urdu Translation:
ترجمہ: اے اللہ ہمیں آپ ہی کی توفیق سے صبح نصیب ہوئی اور آپ ہی کی توفیق سے شام ملی، آپ ہی کی قدرت سے ہم جیتے ہیں اور آپ ہی کی قدرت سے مریں گے اور آپ ہی کی طرف واپس جانا ہے ۔`,
        reference: "Tirmidhi 5/466",
        repetitions: 1,
        imageUrl: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53",
        authenticity: "Sahih/Hasan",
        source: "Hadith",
        benefits: "A comprehensive supplication seeking Allah's guidance, blessings, and protection for the entire day and night."
      },
      {
        id: 9,
        title: "Five Sentences for Worldly Life and Five for the Hereafter",
        titleArabic: "پانچ جملے دنیا کے لئے ،پانچ آخرت کے لئے",
        content: `بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ\n\nحَسْبِيَ اللّٰهُ لِدِيْنِيْ\nحَسْبِيَ اللّٰهُ لِمَآ اَھَمَّنِىْ\nحَسْبِيَ اللّٰهُ لِمَنْ بَغٰى عَلَىَّ\nحَسْبِيَ اللّٰهُ لِمَنْ حَسَدَنِىْ\nحَسْبِيَ اللّٰهُ لِمَنْ کَادَنِىْ بِسُوْءٍ\nحَسْبِيَ اللّٰهُ عِنْدَ الْمَوْتِ\nحَسْبِيَ اللّٰهُ عِنْدَ الْمَسْئَلَةِ فِي الْقَبْرِ\nحَسْبِيَ اللّٰهُ عِنْدَ الْمِيْزَانِ\nحَسْبِيَ اللّٰهُ عِنْدَ الصِّرَاطِ\nحَسْبِيَ اللّٰهُ لَآ اِلٰهَ اِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَاِلَيْهِ اُنِيْبُ`,
        translation: `English Translation:
For the World:
Sufficient is Allah for me for my religion.
Sufficient is Allah for me for what worries me.
Sufficient is Allah for me against whoever transgresses against me.
Sufficient is Allah for me against whoever envies me.
Sufficient is Allah for me against whoever plots evil against me.

For the Hereafter:
Sufficient is Allah for me at the time of death.
Sufficient is Allah for me at the time of questioning in the grave.
Sufficient is Allah for me at the time of the weighing of deeds (Mizan).
Sufficient is Allah for me at the bridge (Sirat).
Sufficient is Allah for me; there is no deity except Him. On Him I have relied, and to Him I turn in repentance.

Urdu Translation:
دنیا
ترجمہ:
کافی ہے اللہ مجھ کو میرے دین کے لئے۔
کافی ہے اللہ مجھ کو میرے کل کی فکر کے لئے۔
کافی ہے اللہ مجھ کو اس شخص کے لئے جو مجھ پر زیادتی کرے۔
کافی ہے اللہ مجھ کواس شخص کے لئے جو مجھ پر حسد کرے۔
کافی ہے اللہ مجھ کو اس شخص کے لئے جو برائی کے ساتھ مجھے دھوکہ اور فریب دے۔

آخرت
ترجمہ:
کافی ہے اللہ مجھ کو موت کے وقت
کافی ہے اللہ مجھ کو قبر میں سوال کے وقت
کافی ہے اللہ مجھ کو میزان (اعمال) کے وقت
کافی ہے اللہ مجھ کو پل صراط کے پاس
کافی ہے اللہ مجھ کو اس کے سوا کوئی معبود نہیں، میں نے اسی پر توکّل کیا اور میں اسی کی طرف رجوع کرتا ہوں۔`,
        reference: "Dur Al-Manthur Vol 2 Pg 103",
        repetitions: 1,
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
        authenticity: "Narrated by Hz Buraidah (RA)",
        source: "Hadith",
        benefits: "حضرت بریدہ رضی اللہ عنہ سے مروی ہے جس کا مفہوم یہ ہے کہ رسول اللہ ﷺ نے فرمایا کہ جو شخص مذکورہ دس کلمات کو صبح کے وقت پڑھ لے تو وہ شخص ان کلمات کو پڑھتے ہی اللہ تعالىٰ کو اس کے حق میں کافی اور کلمات پڑھنے پر اجر و ثواب دیتے ہوئے پائے گا"
      }
    ]
  },
  {
    id: "evening",
    name: "Evening Azkar",
    nameArabic: "أذكار المساء",
    description: "End your day with gratitude and seek Allah's forgiveness",
    icon: "fas fa-moon",
    items: [
      {
        id: 3,
        title: "Seeking Allah's Forgiveness",
        titleArabic: "الاستغفار",
        content: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
        translation: "I seek forgiveness from Allah the Mighty, whom there is none worthy of worship except Him, the Living, the Eternal, and I repent to Him.",
        reference: "Abu Dawud",
        repetitions: 3,
        imageUrl: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869",
        authenticity: "Hasan (Good)",
        source: "Sunan Abu Dawud",
        benefits: "Forgiveness of sins, spiritual cleansing, acceptance of repentance"
      }
    ]
  }
];

export const anasDua: AzkarItem = {
  id: 998,
  title: "Dua of Hazrat Anas (RA) for Protection",
  titleArabic: "دعاء حضرت انس رضی اللہ عنہ",
  content: "بِسْمِ اللّٰہِ وَالْحَمْدُ لِلّٰہِ مُحَمَّدٌ رَّسُوْلُ اللّٰہِ لَا قُوَّۃَ اِلَّا بِاللّٰہِ بِسْمِ اللّٰہِ عَلٰی دِیْنِیْ وَنَفْسِیْ بِسْمِ اللّٰہِ عَلٰی اَھْلِیْ وَمَالِیْ بِسْمِ اللّٰہِ عَلٰی کُلِّ شَیْئٍ اَعْطَانِیْہِ رَبِّیْ بِسْمِ اللّٰہِ خَیْرِ الْاَسْمَاءِ بِسْمِ اللّٰہِ رَبِّ الْاَرْضِ وَالسَّمَآءِ بِسْمِ اللّٰہِ الَّذِیْ لَایَضُرُّ مَعَ اسْمِہٖ دَآءٌ بِسْمِ اللّٰہِ افْتَتَحْتُ وَعَلَی اللّٰہِ تَوَکَّلْتُ لَا قُوَّۃَ اِلَّا بِاللّٰہِ لَا قُوَّۃَ اِلَّا بِاللّٰہِ لَا قُوَّۃَ اِلَّا بِاللّٰہِ وَ اللّٰہُ اَکْبَرُ اَللّٰہُ اَکْبَرُ اَللّٰہُ اَکْبَرُ اَللّٰہُ اَکْبَرُ لَآ اِلٰہَ اِلَّا اللّٰہُ الْحَلِیْمُ الْکَرِیْمُ لَآ اِلٰہَ اِلَّا اللّٰہُ الْعَلِیُّ الْعَظِیْمُ تَبَارَکَ اللّٰہُ رَبُّ السَّمٰوَاتِ السَّبْعِ وَرَبُّ الْعَرْشِ الْعَظِیْمِ وَرَبُّ الْاَرْضِیْنَ وَمَا بَیْنَھُمَا وَالْحَمْدُ لِلّٰہِ رَبِّ الْعٰلَمِیْنَ عَزَّ جَارُکَ وَجَلَّ ثَنَاؤُکَ وَلَآ اِلٰہَ غَیْرُکَ اِجْعَلْنِی فِیْ جِوَارِکَ مِنْ شَرِّ کُلِّ ذِیْ شَرٍّ وَمِنْ شَرِّ الشَّیْطٰنِ الرَّجِیْمِ اِنَّ وَلِیِّ ےََ اللّٰہُ الَّذِیْ نَزَّلَ الْکِتٰبَ وَھُوَ یَتَوَلَّی الصّٰلِحِیْنَ فَاِنْ تَوَلَّوْا فَقُلْ حَسْبِیَ اللّٰہُ لَآ اِلٰہَ اِلَّا ھُوَ عَلَیْہِ تَوَکَّلْتُ وَھُوَ رَبُّ الْعَرْشِ الْعَظِیْمِ",
  translation: `English Translation:
In the name of Allah, and all praise is for Allah, Muhammad is the Messenger of Allah. There is no power or might except with Allah. In the name of Allah upon my religion and my soul. In the name of Allah upon my family and my wealth. In the name of Allah upon everything my Lord has bestowed upon me. In the name of Allah, the best of names. In the name of Allah, the Lord of the earth and the heaven. In the name of Allah, with whose name nothing can cause harm. In the name of Allah I begin, and upon Allah I rely. There is no power except with Allah. (3 times) And Allah is the Greatest. (4 times) There is no deity worthy of worship except Allah, the Forbearing, the Generous. There is no deity worthy of worship except Allah, the Most High, the Supreme. Blessed is Allah, the Lord of the seven heavens, and the Lord of the Great Throne, and the Lord of the earths and whatever is between them. And all praise is due to Allah, the Lord of all the worlds. Mighty is Your protection, and glorious is Your praise, and there is no deity besides You. Place me in Your protection from the evil of every evil-doer, and from the evil of the accursed Satan. Indeed, my protector is Allah, who has sent down the Book; and He is an ally to the righteous. But if they turn away, [O Muhammad], say, 'Sufficient for me is Allah; there is no deity except Him. On Him I have relied, and He is the Lord of the Great Throne.'

Urdu Translation:
شروع اللہ کے نام سے اور سب تعریف اللہ کے لیے ہے ،محمد اللہ کے رسول ہیں، نہیں ہے قوت مگر اللہ کی امداد سے، اللہ کے نام کی برکت میرے دین اور جان پر، اللہ کے نام کی برکت میرے گھر والوں پر اور میرے مال پر۔ اللہ کے نام کی برکت ہر اس چیز پر جو میرے رب نے مجھے عطا کی ہے۔ اللہ کے نام سے جو سب ناموں سے بہتر ہے ،اللہ کے نام سے جو زمین وآسمان کارب ہے ، اللہ کے نام سے جس کے نام کے ساتھ کوئی بیماری نقصان نہیں پہنچا سکتی، اللہ کے نام کے ساتھ میں نے شروع کیا اور اللہ میں نے بھروسہ کیا، نہیں ہے قوت مگر اللہ کی امداد سے ، نہیں ہے قوت مگر اللہ کی امداد سے ، اور اللہ سب سے بڑا ہے، اللہ سب سے بڑا ہے، اللہ سب سے بڑا ہے ،اللہ سب سے بڑا ہے،اللہ کے سوا کوئی لائق عبادت نہیں، وہ حلیم وکریم ہے ، اللہ کے سوا کوئی لائق عبادت نہیں ، وہ عالیشان و بزرگ ہے ،برکت والا ہے اللہ جو ساتوں آسمانوں کا رب ہے اور عرش عظیم کا مالک ہے اور تمام زمینوں اورز مین وآسمان کے درمیان کی چیزوں کا رب ہے اور تمام تعریفیں اللہ کے لیے ہیں جو ساری کائنات کا پالنے والا ہے ،تیری پناہ لینے والاغالب ہوا اور تیری تعریف بڑی ہے اور تیرے سوا کوئی معبود نہیں، مجھ کو اپنی پناہ میں لے لے ہر شریر کے شر سےاور شیطان مردود کے شر سے ، میرا محافظ اللہ ہے جس نے کتاب نازل کی اور وہ نیک لوگوں کی حفاظت کرتا ہے پھر بھی اگر یہ لوگ منہ موڑیں تو کہہ دیجئے کہ میرے لیے اللہ کافی ہے ،اس کے سوا کوئی مستحق عبادت نہیں ،اسی پر میں نے بھروسہ کیا اور وہ عرش عظیم کا مالک ہے`,
  reference: "Kanzul Ummal (2/267)",
  repetitions: 1,
  imageUrl: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53",
  authenticity: "Kanzul Ummal",
  source: "Hadrat Anas (RA)",
  benefits: "Protection from tyrants, accidents, evil eye, and satanic forces. A powerful shield for daily life."
};

export const manzilDua: AzkarItem = {
  id: 999,
  title: "Manzil (منزل)",
  titleArabic: "منزل",
  content: `
بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ

اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ (۲) الرَّحْمٰنِ الرَّحِيْمِ (۳) مٰلِكِ يَوْمِ الدِّيْنِ (۴) اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ (۵) اِھْدِنَا الصِّرَاطَ الْمُسْتَـقِيْمَ (۶) صِرَاطَ الَّذِيۡنَ اَنۡعَمۡتَ عَلَيۡهِمۡ ۙ غَيۡرِ الۡمَغۡضُوۡبِ عَلَيۡهِمۡ وَلَا الضَّآلِّيۡنَ (۷)

بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ

الٓمّٓۚ (۱) ذٰلِكَ الْكِتٰبُ لَا رَيْبَ ۛ فِيْهِ ۛ ھُدًى لِّلْمُتَّقِيْنَ (۲) الَّذِيْنَ يُؤْمِنُوْنَ بِالْغَيْبِ وَ يُـقِيْمُوْنَ الصَّلٰوةَ وَ مِمَّا رَزَقْنٰھُمْ يُنْفِقُوْنَ (۳) وَ الَّذِيْنَ يُؤْمِنُوْنَ بِمَآ اُنْزِلَ اِلَيْكَ وَمَآ اُنْزِلَ مِنْ قَبْلِكَ ۚ وَبِالْاٰخِرَةِ ھُمْ يُوْقِنُوْنَ (۴) اُولٰٓٮِٕكَ عَلٰى هُدًى مِّنۡ رَّبِّهِمۡ وَاُولٰٓٮِٕكَ هُمُ الۡمُفۡلِحُوۡنَ (۵)
وَاِلٰهُكُمۡ اِلٰهٌ وَّاحِدٌ  ۚ لَآ اِلٰهَ اِلَّا هُوَ الرَّحۡمٰنُ الرَّحِيۡمُ (۲:۱۶۳) اللّٰهُ لَاۤ اِلٰهَ اِلَّا هُوَ الۡحَـىُّ الۡقَيُّوۡمُۚ  لَا تَاۡخُذُهٗ سِنَةٌ وَّلَا نَوۡمٌؕ لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الۡاَرۡضِؕ مَنۡ ذَا الَّذِىۡ يَشۡفَعُ عِنۡدَهٗۤ اِلَّا بِاِذۡنِهٖؕ يَعۡلَمُ مَا بَيۡنَ اَيۡدِيۡهِمۡ وَمَا خَلۡفَهُمۡۚ وَلَا يُحِيۡطُوۡنَ بِشَىۡءٍ مِّنۡ عِلۡمِهٖۤ اِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرۡسِيُّهُ السَّمٰوٰتِ وَالۡاَرۡضَۚ وَلَا يَـــُٔوۡدُهٗ حِفۡظُهُمَا ۚ وَ هُوَ الۡعَلِىُّ الۡعَظِيۡمُ (۲:۲۵۵) لَاۤ اِكۡرَاهَ فِى الدِّيۡنِۙ قَد تَّبَيَّنَ الرُّشۡدُ مِنَ الۡغَىِّۚ فَمَنۡ يَّكۡفُرۡ بِالطَّاغُوۡتِ وَيُؤۡمِنۡۢ بِاللّٰهِ فَقَدِ اسۡتَمۡسَكَ بِالۡعُرۡوَةِ الۡوُثۡقٰى لَا انْفِصَامَ لَهَا ؕ وَاللّٰهُ سَمِيۡعٌ عَلِيۡمٌ (۲:۲۵۶) اَللّٰهُ وَلِىُّ الَّذِيۡنَ اٰمَنُوۡا يُخۡرِجُهُمۡ مِّنَ الظُّلُمٰتِ اِلَى النُّوۡرِؕ وَالَّذِيۡنَ كَفَرُوۡۤا اَوۡلِيٰٓـــُٔهُمُ الطَّاغُوۡتُۙ يُخۡرِجُوۡنَهُمۡ مِّنَ النُّوۡرِ اِلَى الظُّلُمٰتِؕ اُولٰٓٮِٕكَ اَصۡحٰبُ النَّارِۚ هُمۡ فِيۡهَا خٰلِدُوۡنَ (۲:۲۵۷) لِلّٰهِ مَا فِى السَّمٰوٰتِ وَمَا فِى الۡاَرۡضِؕ وَاِنۡ تُبۡدُوۡا مَا فِىۡۤ اَنۡفُسِكُمۡ اَوۡ تُخۡفُوۡهُ يُحَاسِبۡكُمۡ بِهِ اللّٰهُؕ فَيَـغۡفِرُ لِمَنۡ يَّشَآءُ وَيُعَذِّبُ مَنۡ يَّشَآءُ ؕ وَاللّٰهُ عَلٰى كُلِّ شَىۡءٍ قَدِيۡرٌ (۲:۲۸۴) اٰمَنَ الرَّسُوۡلُ بِمَاۤ اُنۡزِلَ اِلَيۡهِ مِنۡ رَّبِّهٖ وَ الۡمُؤۡمِنُوۡنَؕ كُلٌّ اٰمَنَ بِاللّٰهِ وَمَلٰٓٮِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖ ۚ لَا نُفَرِّقُ بَيۡنَ اَحَدٍ مِّنۡ رُّسُلِهٖ ۚ وَقَالُوۡا سَمِعۡنَا وَاَطَعۡنَا ۖ غُفۡرَانَكَ رَبَّنَا وَاِلَيۡكَ الۡمَصِيۡرُ (۲:۲۸۵) لَا يُكَلِّفُ اللّٰهُ نَفۡسًا اِلَّا وُسۡعَهَا ؕ لَهَا مَا كَسَبَتۡ وَعَلَيۡهَا مَا اكۡتَسَبَتۡؕ رَبَّنَا لَا تُؤَاخِذۡنَاۤ اِنۡ نَّسِيۡنَاۤ اَوۡ اَخۡطَاۡنَا ۚ رَبَّنَا وَلَا تَحۡمِلۡ عَلَيۡنَاۤ اِصۡرًا كَمَا حَمَلۡتَهٗ عَلَى الَّذِيۡنَ مِنۡ قَبۡلِنَا ۚرَبَّنَا وَلَا تُحَمِّلۡنَا مَا لَا طَاقَةَ لَنَا بِهٖ ۚ وَاعۡفُ عَنَّا وَاغۡفِرۡ لَنَا وَارۡحَمۡنَا ۚ اَنۡتَ مَوۡلٰٮنَا فَانۡصُرۡنَا عَلَى الۡقَوۡمِ الۡكٰفِرِيۡنَ (۲:۲۸۶)
شَهِدَ اللّٰهُ اَنَّهٗ لَاۤ اِلٰهَ اِلَّا هُوَۙ وَالۡمَلٰٓٮِٕكَةُ وَاُولُوا الۡعِلۡمِ قَآٮِٕمًا ۢ بِالۡقِسۡطِؕ لَاۤ اِلٰهَ اِلَّا هُوَ الۡعَزِيۡزُ الۡحَكِيۡمُؕ (۳:۱۸)
اِنَّ رَبَّكُمُ اللّٰهُ الَّذِىۡ خَلَقَ السَّمٰوٰتِ وَ الۡاَرۡضَ فِىۡ سِتَّةِ اَيَّامٍ ثُمَّ اسۡتَوٰى عَلَى الۡعَرۡشِ يُغۡشِى الَّيۡلَ النَّهَارَ يَطۡلُبُهٗ حَثِيۡثًا ۙ وَّالشَّمۡسَ وَالۡقَمَرَ وَالنُّجُوۡمَ مُسَخَّرٰتٍۢ بِاَمۡرِهٖ ؕ اَلَا لَـهُ الۡخَـلۡقُ وَالۡاَمۡرُ ؕ تَبٰرَكَ اللّٰهُ رَبُّ الۡعٰلَمِيۡنَ (۷:۵۴) اُدۡعُوۡا رَبَّكُمۡ تَضَرُّعًا وَّخُفۡيَةً ؕ اِنَّهٗ لَا يُحِبُّ الۡمُعۡتَدِيۡنَ (۷:۵۵) وَلَا تُفۡسِدُوۡا فِى الۡاَرۡضِ بَعۡدَ اِصۡلَاحِهَا وَادۡعُوۡهُ خَوۡفًا وَّطَمَعًا ؕ اِنَّ رَحۡمَتَ اللّٰهِ قَرِيۡبٌ مِّنَ الۡمُحۡسِنِيۡنَ (۷:۵۶)
قُلِ ادۡعُوا اللّٰهَ اَوِ ادۡعُوا الرَّحۡمٰنَ ؕ اَ يًّا مَّا تَدۡعُوۡا فَلَهُ الۡاَسۡمَآءُ الۡحُسۡنٰى ۚ وَلَا تَجۡهَرۡ بِصَلَاتِكَ وَلَا تُخَافِتۡ بِهَا وَابۡتَغِ بَيۡنَ ذٰ لِكَ سَبِيۡلًا (۱۷:۱۱۰) وَقُلِ الۡحَمۡدُ لِلّٰهِ الَّذِىۡ لَمۡ يَتَّخِذۡ وَلَدًا وَّلَمۡ يَكُنۡ لَّهٗ شَرِيۡكٌ فِى الۡمُلۡكِ وَلَمۡ يَكُنۡ لَّهٗ وَلِىٌّ مِّنَ الذُّلِّ وَكَبِّرۡهُ تَكۡبِيۡرًا (۱7:۱۱۱)
فَتَعٰلَى اللّٰهُ الۡمَلِكُ الۡحَـقُّ ۚ لَاۤ اِلٰهَ اِلَّا هُوَۚ رَبُّ الۡعَرۡشِ الۡـكَرِيۡمِ (۲۳:۱۱۶) وَمَنۡ يَّدۡعُ مَعَ اللّٰهِ اِلٰهًا اٰخَرَۙ لَا بُرۡهَانَ لَهٗ بِهٖۙ فَاِنَّمَا حِسَابُهٗ عِنۡدَ رَبِّهٖؕ اِنَّهٗ لَا يُفۡلِحُ الۡـكٰفِرُوۡنَ (۲۳:۱۱۷) وَقُلْ رَّبِّ اغۡفِرۡ وَارۡحَمۡ وَاَنۡتَ خَيۡرُ الرّٰحِمِيۡنَ (۲۳:۱۱۸)

بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ

وَالصّٰٓفّٰتِ صَفًّا (۱) فَالزّٰجِرٰتِ زَجۡرًا (۲) فَالتّٰلِيٰتِ ذِكۡرًا (۳) اِنَّ اِلٰهَكُمۡ لَوَاحِدٌ (۴) رَبُّ السَّمٰوٰتِ وَالۡاَرۡضِ وَمَا بَيۡنَهُمَا وَرَبُّ الۡمَشَارِقِ (۵) اِنَّا زَيَّنَّا السَّمَآءَ الدُّنۡيَا بِزِيۡنَةِ اۨلۡكَوَاكِبِۙ (۶) وَحِفۡظًا مِّنۡ كُلِّ شَيۡطٰنٍ مَّارِدٍۚ (۷) لَّا يَسَّمَّعُوۡنَ اِلَى الۡمَلَاِ الۡاَعۡلٰى وَيُقۡذَفُوۡنَ مِنۡ كُلِّ جَانِبٍۖ (۸) دُحُوۡرًا ۖ وَّلَهُمۡ عَذَابٌ وَّاصِبٌ (۹) اِلَّا مَنۡ خَطِفَ الۡخَطۡفَةَ فَاَتۡبَعَهٗ شِهَابٌ ثَاقِبٌ (۱۰) فَاسۡتَفۡتِهِمۡ اَهُمۡ اَشَدُّ خَلۡقًا اَمۡ مَّنۡ خَلَقۡنَاؕ اِنَّا خَلَقۡنٰهُمۡ مِّنۡ طِيۡنٍ لَّازِبٍ (۱۱)
يٰمَعۡشَرَ الۡجِنِّ وَالۡاِنۡسِ اِنِ اسۡتَطَعۡتُمۡ اَنۡ تَنۡفُذُوۡا مِنۡ اَقۡطَارِ السَّمٰوٰتِ وَالۡاَرۡضِ فَانْفُذُوۡاؕ لَا تَنۡفُذُوۡنَ اِلَّا بِسُلۡطٰنٍۚ (۵۵:۳۳) فَبِاَىِّ اٰلَاۤءِ رَبِّكُمَا تُكَذِّبٰنِ (۵۵:۳۴) يُرۡسَلُ عَلَيۡكُمَا شُوَاظٌ مِّنۡ نَّارٍ وَّنُحَاسٌ فَلَا تَنۡتَصِرٰنِۚ (۵۵:۳۵)
لَوۡ اَنۡزَلۡنَا هٰذَا الۡقُرۡاٰنَ عَلٰى جَبَلٍ لَّرَاَيۡتَهٗ خَاشِعًا مُّتَصَدِّعًا مِّنۡ خَشۡيَةِ اللّٰهِؕ وَتِلۡكَ الۡاَمۡثَالُ نَضۡرِبُهَا لِلنَّاسِ لَعَلَّهُمۡ يَتَفَكَّرُوۡنَ (۵۹:۲۱) هُوَ اللّٰهُ الَّذِىۡ لَاۤ اِلٰهَ اِلَّا هُوَ ۚ عٰلِمُ الۡغَيۡبِ وَالشَّهَادَةِ ۚ هُوَ الرَّحۡمٰنُ الرَّحِيۡمُ (۵۹:۲۲) هُوَ اللّٰهُ الَّذِىۡ لَاۤ اِلٰهَ اِلَّا هُوَۚ اَلۡمَلِكُ الۡقُدُّوۡسُ السَّلٰمُ الۡمُؤۡمِنُ الۡمُهَيۡمِنُ الۡعَزِيۡزُ الۡجَـبَّارُ الۡمُتَكَبِّرُؕ سُبۡحٰنَ اللّٰهِ عَمَّا يُشۡرِكُوۡنَ (۵۹:۲۳) هُوَ اللّٰهُ الۡخَـالِـقُ الۡبَارِئُ الۡمُصَوِّرُ لَـهُ الۡاَسۡمَآءُ الۡحُسۡنٰىؕ يُسَبِّحُ لَهٗ مَا فِى السَّمٰوٰتِ وَالۡاَرۡضِۚ وَهُوَ الۡعَزِيۡزُ الۡحَكِيۡمُ (۵۹:۲۴)

بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ

قُلۡ اُوۡحِىَ اِلَىَّ اَنَّهُ اسۡتَمَعَ نَفَرٌ مِّنَ الۡجِنِّ فَقَالُوۡۤا اِنَّا سَمِعۡنَا قُرۡاٰنًاعَجَبًا (۱) يَّهۡدِىۡۤ اِلَى الرُّشۡدِ فَاٰمَنَّا بِهٖ ؕ وَلَنۡ نُّشۡرِكَ بِرَبِّنَاۤ اَحَدًا (۲) وَّاَنَّهٗ تَعٰلٰى جَدُّ رَبِّنَا مَا اتَّخَذَ صَاحِبَةً وَّلَا وَلَدًا (۳) وَّ اَنَّهٗ كَانَ يَقُوۡلُ سَفِيۡهُنَا عَلَى اللّٰهِ شَطَطًا (۴)

بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ

قُلۡ هُوَ اللّٰهُ اَحَدٌ (۱) اَللّٰهُ الصَّمَدُ (۲) لَمۡ يَلِدۡ ۙ وَلَمۡ يُوۡلَدۡ (۳) وَلَمۡ يَكُنۡ لَّهٗ كُفُوًا اَحَدٌ (۴)

بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ

قُلۡ اَعُوۡذُ بِرَبِّ الۡفَلَقِۙ (۱) مِنۡ شَرِّ مَا خَلَقَۙ (۲) وَمِنۡ شَرِّ غَاسِقٍ اِذَا وَقَبَۙ (۳) وَمِنۡ شَرِّ النَّفّٰثٰتِ فِى الۡعُقَدِۙ (۴) وَمِنۡ شَرِّ حَاسِدٍ اِذَا حَسَدَ (۵)

بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ

قُلْ اَعُوْذُ بِرَبِّ النَّاسِ (۱) مَلِكِ النَّاسِۙ (۲) اِلٰهِ النَّاسِۙ (۳) مِنۡ شَرِّ الۡوَسۡوَاسِ ۙ الۡخَـنَّاسِ (۴) الَّذِىۡ يُوَسۡوِسُ فِىۡ صُدُوۡرِ النَّاسِۙ (۵) مِنَ الۡجِنَّةِ وَالنَّاسِ (۶)`,
  translation: `English Translation:
Manzil is a collection of verses from the Quran that are highly effective for protection from black magic, evil eye, jinn, and other harms. Shah Waliullah Dehlawi highlights its immense benefits in securing protection against satan, thieves, and wild beasts.

Urdu Translation:
یہ منزل آسیب، سحر اور بعض دوسرے خطرات سے حفاظت کیلئے ایک مجرب عمل ہے۔
نیز اس کے پڑھنے سے شیاطین ،چوروں اور درندے جانوروں سے پناہ ہوجاتی ہے۔(شاہ ولی اللہ محدث دہلوىؒ)`,
  reference: "Quran (Various Surahs)",
  repetitions: 1,
  imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
  authenticity: "Authentic Quranic Verses",
  source: "Quran",
  benefits: "Protection from evil, black magic, evil eye, jinn and satanic forces."
};
