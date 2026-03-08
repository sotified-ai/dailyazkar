import { SEOHead } from '@/components/seo-head';
import { Link } from 'wouter';

export default function PrivacyPolicyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Daily Azkar",
    "description": "Privacy Policy for Daily Azkar. Learn how we collect, use, and protect your information.",
    "url": "https://dailyazkar.site/privacy-policy"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <SEOHead
        title="Privacy Policy | Daily Azkar"
        description="Privacy Policy for Daily Azkar. Learn how we collect, use, and protect your information when you use our Islamic supplications and Azkar website."
        keywords="privacy policy, daily azkar privacy, data protection"
        canonical="https://dailyazkar.site/privacy-policy"
        structuredData={structuredData}
      />

      <main className="container mx-auto px-4 py-8 pt-24 max-w-4xl">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-shield-alt text-white text-3xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 dark:text-gray-400">Last updated: February 2025</p>
        </div>

        <div className="glassmorphism rounded-2xl p-8 space-y-8">

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">1. Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Welcome to Daily Azkar ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>dailyazkar.site</strong> (the "Site"). Please read this policy carefully. If you disagree with its terms, please discontinue use of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Automatically Collected Information</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              When you visit our Site, we may automatically collect certain information about your device and usage, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring URLs</li>
              <li>IP address (anonymized)</li>
              <li>Device type (desktop, mobile, tablet)</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Information You Provide</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We do not require you to create an account or provide personal information to use our Site. Daily Azkar is a free resource available to all users without registration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Operate, maintain, and improve our Site</li>
              <li>Understand how users interact with our content</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Provide a better user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity on our Site and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Types of cookies we use:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong>Analytics Cookies (Google Analytics):</strong> We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information such as how often users visit the site, what pages they visit, and what other sites they used prior to coming to our site.</li>
              <li><strong>Advertising Cookies (Google AdSense):</strong> We use Google AdSense to display advertisements on our Site. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites on the Internet.</li>
              <li><strong>Preference Cookies:</strong> We use cookies to remember your preferences such as dark mode or language settings.</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">5. Google AdSense & Advertising</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We use Google AdSense to display advertisements. Google AdSense is an advertising service provided by Google LLC. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to our website or other websites.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline">Google Ads Settings</a>.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              For more information about how Google uses information from sites that use its services, visit <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline">Google's Privacy & Terms</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">6. Third-Party Services</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Our Site may use the following third-party services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong>Google Analytics</strong> – for website analytics</li>
              <li><strong>Google AdSense</strong> – for serving advertisements</li>
              <li><strong>Google Tag Manager</strong> – for managing tracking scripts</li>
              <li><strong>Font Awesome</strong> – for icons (no personal data collected)</li>
              <li><strong>Google Fonts</strong> – for typography (no personal data collected)</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              These third-party services have their own privacy policies. We encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">7. Data Security</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We use commercially reasonable security measures to protect your information. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security. Since we do not collect personal information beyond what analytics tools collect automatically, the risk to your personal data is minimal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">8. Children's Privacy</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our Site is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">9. Your Rights (GDPR / CCPA)</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to opt out of targeted advertising</li>
              <li>The right to lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              To exercise any of these rights, please contact us using the information below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">11. Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
              <p className="text-gray-700 dark:text-gray-200 font-medium">Daily Azkar</p>
              <p className="text-gray-600 dark:text-gray-300">Website: <a href="https://dailyazkar.site" className="text-emerald-600 dark:text-emerald-400 hover:underline">dailyazkar.site</a></p>
              <p className="text-gray-600 dark:text-gray-300">Contact: <Link href="/contact" className="text-emerald-600 dark:text-emerald-400 hover:underline">Contact Us Page</Link></p>
            </div>
          </section>

        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
            Return Home
          </Link>
          <Link href="/contact" className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-full transition-colors">
            Contact Us
          </Link>
          <Link href="/terms" className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-full transition-colors">
            Terms of Service
          </Link>
        </div>
      </main>
    </div>
  );
}
