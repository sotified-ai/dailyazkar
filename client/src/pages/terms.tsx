import { SEOHead } from '@/components/seo-head';
import { Link } from 'wouter';

export default function TermsPage() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Terms of Service - Daily Azkar",
        "description": "Terms of Service for Daily Azkar. Read our terms and conditions for using our Islamic supplications website.",
        "url": "https://dailyazkar.site/terms"
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <SEOHead
                title="Terms of Service | Daily Azkar"
                description="Terms of Service for Daily Azkar. Read our terms and conditions for using our free Islamic Azkar, duas, and Quran website."
                keywords="terms of service, daily azkar terms, conditions of use"
                canonical="https://dailyazkar.site/terms"
                structuredData={structuredData}
            />

            <main className="container mx-auto px-4 py-8 pt-24 max-w-4xl">
                <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-file-contract text-white text-3xl"></i>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">Last updated: February 2025</p>
                </div>

                <div className="glassmorphism rounded-2xl p-8 space-y-8">

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">1. Acceptance of Terms</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            By accessing and using <strong>dailyazkar.site</strong> ("the Site"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site. Daily Azkar reserves the right to update these terms at any time, and continued use of the Site constitutes acceptance of the updated terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">2. Description of Service</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            Daily Azkar is a free Islamic resource website that provides:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                            <li>Morning and Evening Azkar (Islamic daily remembrances)</li>
                            <li>Quran browsing with Surah listings</li>
                            <li>Dua collections including Rabbana Duas and Post-Salah Duas</li>
                            <li>Ruqyah verses for spiritual protection</li>
                            <li>Islamic calendar and prayer time information</li>
                            <li>Islamic educational content about Azkar and Dhikr</li>
                        </ul>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                            All content is provided for religious, educational, and informational purposes only.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">3. Permitted Use</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            You are granted a non-exclusive, non-transferable, revocable license to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                            <li>Access and use the Site for personal, non-commercial purposes</li>
                            <li>Share Azkar and duas with family and friends for religious benefit</li>
                            <li>Use the content for personal spiritual practice and learning</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">4. Prohibited Activities</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            You may not:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                            <li>Reproduce, duplicate, copy, sell, or exploit any portion of the Site for commercial purposes without written consent</li>
                            <li>Use the Site in any way that violates applicable laws or regulations</li>
                            <li>Attempt to gain unauthorized access to any portion of the Site</li>
                            <li>Use any automated tools, bots, or scrapers to extract content from the Site</li>
                            <li>Misrepresent or alter the religious content in any misleading way</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">5. Content Accuracy</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            We strive to ensure all Islamic content (Azkar, duas, Quran references) on Daily Azkar is authentic and sourced from reliable Islamic texts including Hisnul Muslim, Sahih Bukhari, Sahih Muslim, and other authenticated hadith collections. However, we recommend cross-referencing important religious matters with qualified Islamic scholars. Prayer times displayed are approximate estimates and may vary based on your exact location and calculation method.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">6. Advertising</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Daily Azkar displays advertisements through Google AdSense to help cover operational costs and keep the site free for all users. Advertisements are clearly marked and separate from the religious content. We do not control the content of third-party advertisements. If you encounter an inappropriate ad, please contact us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">7. Intellectual Property</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            The design, layout, and original content of Daily Azkar are our intellectual property. Islamic texts (Quran verses and authenticated hadiths) are in the public domain. Our commentary, explanations, and website structure are protected by copyright.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">8. Disclaimer of Warranties</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            The Site is provided "as is" without warranties of any kind. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. Use of the Site is at your own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">9. Limitation of Liability</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            To the fullest extent permitted by law, Daily Azkar shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of, or inability to use, the Site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">10. Changes to Service</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            We reserve the right to modify, suspend, or discontinue any part of the Site at any time without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the Site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">11. Governing Law</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of competent courts.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">12. Contact Us</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            If you have questions about these Terms of Service, please contact us:
                        </p>
                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                            <p className="text-gray-700 dark:text-gray-200 font-medium">Daily Azkar</p>
                            <p className="text-gray-600 dark:text-gray-300">Website: <a href="https://dailyazkar.site" className="text-blue-600 dark:text-blue-400 hover:underline">dailyazkar.site</a></p>
                            <p className="text-gray-600 dark:text-gray-300">Contact Form: <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact Us</Link></p>
                        </div>
                    </section>

                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link href="/" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors">
                        Return Home
                    </Link>
                    <Link href="/privacy-policy" className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-full transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="/contact" className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-full transition-colors">
                        Contact Us
                    </Link>
                </div>
            </main>
        </div>
    );
}
