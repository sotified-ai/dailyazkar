import fs from 'fs';
import path from 'path';
import https from 'https';

const outDir = 'd:/Projects/AzkarDaily/client/src/data/quran';

https.get('https://api.alquran.cloud/v1/quran/quran-uthmani', (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        const data = JSON.parse(rawData);
        const surahs = data.data.surahs;

        let indexExports = `import { QuranSurahContent } from "../quran-data";\n\n`;
        const bismillah = "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ";

        let surahsMapStr = `\nconst surahsMap: Record<number, QuranSurahContent> = {\n`;

        for (const surah of surahs) {
            const sid = surah.number;
            indexExports += `import { surah${sid} } from './surah-${sid}';\nexport { surah${sid} };\n`;
            surahsMapStr += `    ${sid}: surah${sid},\n`;

            const verses = surah.ayahs.map(a => {
                let text = a.text;
                // Remove Bismillah from the first verse if it's not Surah 1
                if (sid !== 1 && a.numberInSurah === 1 && text.startsWith(bismillah)) {
                    text = text.replace(bismillah, '').trim();
                } else if (sid !== 1 && a.numberInSurah === 1 && text.includes(bismillah)) {
                    text = text.replace(bismillah, '').trim();
                }

                return {
                    number: a.numberInSurah,
                    text: text
                };
            });

            // Add zero-width non-joiner removal or other cleanups if needed, but ALQuran cloud is usually clean.
            verses.forEach(v => {
                v.text = v.text.replace(/^\uFEFF/, '').trim(); // Remove BOM if present inside string
            });

            // Keep the previous formatting style
            const fileContent = `import { QuranSurahContent } from "../quran-data";

export const surah${sid}: QuranSurahContent = {
    "sura_name": "${surah.name}",
    "bismillah": "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيمِ",
    "verses": ${JSON.stringify(verses, null, 4)}
};
`;
            fs.writeFileSync(path.join(outDir, `surah-${sid}.ts`), fileContent);
        }

        surahsMapStr += `};\n\nexport function getSurahContent(surahNumber: number): QuranSurahContent | undefined {\n    return surahsMap[surahNumber];\n}\n`;

        fs.writeFileSync(path.join(outDir, 'index.ts'), indexExports + surahsMapStr);
        console.log('All 114 surahs written successfully.');
    });
}).on('error', (e) => {
    console.error(e);
});
