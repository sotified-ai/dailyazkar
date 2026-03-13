import fs from 'fs';
import path from 'path';

const outDir = 'd:/Projects/AzkarDaily/client/src/data/quran';

async function generate() {
    console.log("Fetching Arabic...");
    const arRes = await fetch('https://api.alquran.cloud/v1/quran/quran-uthmani');
    const arData = await arRes.json();
    const arSurahs = arData.data.surahs;

    console.log("Fetching English (Saheeh International)...");
    const enRes = await fetch('https://api.alquran.cloud/v1/quran/en.sahih');
    const enData = await enRes.json();
    const enSurahs = enData.data.surahs;

    console.log("Fetching Urdu (Jalandhry)...");
    const urRes = await fetch('https://api.alquran.cloud/v1/quran/ur.jalandhry');
    const urData = await urRes.json();
    const urSurahs = urData.data.surahs;

    let indexExports = `import { QuranSurahContent } from "../quran-data";\n\n`;
    const bismillah = "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ";

    let surahsMapStr = `\nconst surahsMap: Record<number, QuranSurahContent> = {\n`;

    for (let i = 0; i < 114; i++) {
        const arSurah = arSurahs[i];
        const enSurah = enSurahs[i];
        const urSurah = urSurahs[i];

        const sid = arSurah.number;
        indexExports += `import { surah${sid} } from './surah-${sid}';\nexport { surah${sid} };\n`;
        surahsMapStr += `    ${sid}: surah${sid},\n`;

        const verses = arSurah.ayahs.map((a, j) => {
            let text = a.text;
            let enText = enSurah.ayahs[j].text;
            let urText = urSurah.ayahs[j].text;

            // Remove Bismillah from the first verse if it's not Surah 1 & 9
            if (sid !== 1 && sid !== 9 && a.numberInSurah === 1 && text.includes(bismillah)) {
                text = text.replace(bismillah, '').trim();
            }

            return {
                number: a.numberInSurah,
                text: text.replace(/^\uFEFF/, '').trim(),
                translationEn: enText,
                translationUr: urText
            };
        });

        const fileContent = `import { QuranSurahContent } from "../quran-data";

export const surah${sid}: QuranSurahContent = {
    "sura_name": "${arSurah.name}",
    "bismillah": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيمِ",
    "verses": ${JSON.stringify(verses, null, 4)}
};
`;
        fs.writeFileSync(path.join(outDir, `surah-${sid}.ts`), fileContent);
    }

    surahsMapStr += `};\n\nexport function getSurahContent(surahNumber: number): QuranSurahContent | undefined {\n    return surahsMap[surahNumber];\n}\n`;
    fs.writeFileSync(path.join(outDir, 'index.ts'), indexExports + surahsMapStr);
    console.log('All 114 surahs written successfully with translations.');
}

generate().catch(console.error);
