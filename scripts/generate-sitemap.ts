import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://dailyazkar.site';

const ROUTES = [
    '/',
    '/morning-azkar',
    '/evening-azkar',
    '/quran',
    '/dua-after-salah',
    '/rabbana-duas',
    '/ruqiya',
    '/about-islam',
    '/prayer-times',
    '/islamic-calendar',
    '/community',
    '/donate',
    '/resources'
];

const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${ROUTES.map(route => `
  <url>
    <loc>${BASE_URL}${route === '/' ? '' : route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

    const publicDir = path.resolve('client', 'public'); // or adjust based on project structure
    // Need to check where public dir is. In Vite it's usually `public/` in root or `client/public`.
    // From previous list_dir, `client` has `index.html` and `public`.
    // Wait, step 419: `d:\Projects\AzkarDaily\client\public` exists.

    const outputPath = path.join(publicDir, 'sitemap.xml');

    // Ensure directory exists
    if (!fs.existsSync(publicDir)) {
        console.error(`Public directory not found at ${publicDir}`);
        // Try checking relative paths. `scripts` is in `d:\Projects\AzkarDaily\scripts`.
        // So `../client/public` should work.

        // Let's rely on absolute path construction relative to script location.
        // Or just hardcode based on known valid path
    }

    // Actually, I'll use absolute path `d:\Projects\AzkarDaily\client\public` based on my knowledge.
    const absolutePublicPath = 'd:\\Projects\\AzkarDaily\\client\\public';
    const absoluteOutputPath = path.join(absolutePublicPath, 'sitemap.xml');

    fs.writeFileSync(absoluteOutputPath, sitemap);
    console.log(`Sitemap generated at ${absoluteOutputPath}`);
};

generateSitemap();
