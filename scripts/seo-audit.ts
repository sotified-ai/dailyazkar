import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

interface AuditResult {
  url: string;
  wordCount: number;
  status: 'HEALTHY' | 'THIN' | 'BLANK_RISKY';
  recommendedAction: string;
  error?: string;
}

// Use existing dev server on port 5173
const PORT = 5173;
const BASE_URL = `http://localhost:${PORT}`;

async function main() {
  console.log('Starting SEO Audit...');
  console.log(`Using existing dev server at ${BASE_URL}`);

  let browser;
  try {
    // Launch browser with more options
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // Set a realistic viewport
    await page.setViewport({ width: 1280, height: 800 });

    const results: AuditResult[] = [];

    for (const route of ROUTES) {
      const url = `${BASE_URL}${route}`;
      console.log(`Auditing: ${url}`);

      try {
        // Navigate and wait for network to be idle
        await page.goto(url, {
          waitUntil: 'networkidle0',
          timeout: 60000
        });

        // Wait a bit more for React to hydrate
        await page.waitForFunction(() => {
          const main = document.querySelector('main');
          return main && main.innerText.length > 0;
        }, { timeout: 10000 }).catch(() => {
          console.log(`  Warning: Could not find main content on ${route}`);
        });

        // Additional wait for any lazy-loaded content
        await new Promise(r => setTimeout(r, 2000));

        // Extract word count from main content
        const wordCount = await page.evaluate(() => {
          const main = document.querySelector('main') || document.body;
          const text = main.innerText || '';
          // Simple word count: split by whitespace
          return text.trim().split(/\s+/).filter(w => w.length > 0).length;
        });

        console.log(`  Word count: ${wordCount}`);

        let status: AuditResult['status'] = 'HEALTHY';
        let action = 'NONE';

        if (wordCount < 80) {
          status = 'BLANK_RISKY';
          action = 'NOINDEX_OR_FIX';
        } else if (wordCount < 250) {
          status = 'THIN';
          action = 'IMPROVE';
        }

        results.push({
          url: route,
          wordCount,
          status,
          recommendedAction: action
        });

      } catch (e: any) {
        console.error(`Failed to audit ${url}:`, e.message);
        results.push({
          url: route,
          wordCount: 0,
          status: 'BLANK_RISKY',
          recommendedAction: 'CHECK_ERROR',
          error: e.message
        });
      }
    }

    await browser.close();

    // Ensure output directory exists
    const outputDir = path.resolve(__dirname, '..', 'seo');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write report
    const reportPath = path.join(outputDir, 'audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
    console.log(`Audit complete. Report saved to ${reportPath}`);

  } catch (err) {
    console.error('Fatal error during audit:', err);
    if (browser) await browser.close();
    process.exit(1);
  }
}

main();
