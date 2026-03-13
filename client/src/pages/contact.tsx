import { SEOHead } from '@/components/seo-head';
import { Link } from 'wouter';
import { useState } from 'react';

const FORMSPREE_URL = 'https://formspree.io/f/xnjbgqov';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Daily Azkar",
        "description": "Contact the Daily Azkar team for questions, feedback, or to report issues with our Islamic supplications website.",
        "url": "https://dailyazkar.site/contact",
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "availableLanguage": ["English", "Arabic", "Urdu"]
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        const form = e.currentTarget;
        const data = new FormData(form);
        try {
            const response = await fetch(FORMSPREE_URL, {
                method: 'POST',
                body: data,
                headers: { Accept: 'application/json' }
            });
            if (response.ok) {
                setSubmitted(true);
                form.reset();
            } else {
                const json = await response.json();
                setError(json?.errors?.[0]?.message || 'Something went wrong. Please try again.');
            }
        } catch {
            setError('Network error. Please check your connection and try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <SEOHead
                title="Contact Us | Daily Azkar"
                description="Contact the Daily Azkar team. Have questions about our Islamic Azkar content, want to report an issue, or provide feedback? Reach out to us."
                keywords="contact daily azkar, feedback, questions, report issue, islamic website contact"
                canonical="https://dailyazkar.site/contact"
                structuredData={structuredData}
            />

            <main className="container mx-auto px-4 py-8 pt-24 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-envelope text-white text-3xl"></i>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
                        Contact Us
                    </h1>
                    <h2 className="text-2xl font-arabic text-emerald-600 dark:text-emerald-400 mb-4">
                        تواصل معنا
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        We'd love to hear from you. Reach out for questions, feedback, or to report any issues.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="glassmorphism rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Us a Message</h2>

                        {submitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-check text-emerald-600 dark:text-emerald-400 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Message Received!</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    JazakAllahu Khairan for reaching out. We'll get back to you as soon as possible, in sha Allah.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-colors"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Your Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Subject
                                    </label>
                                    <select
                                        id="contact-subject"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="content-correction">Content Correction / Error Report</option>
                                        <option value="suggestion">Feature Suggestion</option>
                                        <option value="feedback">General Feedback</option>
                                        <option value="collaboration">Collaboration Inquiry</option>
                                        <option value="advertising">Advertising Inquiry</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Write your message here..."
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-paper-plane"></i>
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                                {error && (
                                    <p className="text-red-500 text-sm text-center mt-2">
                                        <i className="fas fa-exclamation-circle mr-1"></i>
                                        <span>{error}</span>
                                    </p>
                                )}
                            </form>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        {/* About */}
                        <div className="glassmorphism rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">About Daily Azkar</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                Daily Azkar is a free Islamic resource designed to help Muslims maintain their daily remembrance of Allah. We are dedicated to providing authentic, accurate, and accessible Islamic content for Muslims worldwide.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Our content is sourced from authentic Islamic texts and verified against established scholarly references including Hisnul Muslim (Fortress of the Muslim), the collections of Imam al-Nawawi, and major hadith collections.
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="glassmorphism rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Get in Touch</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-globe text-emerald-600 dark:text-emerald-400"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Website</p>
                                        <a href="https://dailyazkar.site" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">dailyazkar.site</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-clock text-blue-600 dark:text-blue-400"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Response Time</p>
                                        <p className="text-gray-800 dark:text-white font-medium">Within 2-3 business days</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-language text-amber-600 dark:text-amber-400"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Languages Supported</p>
                                        <p className="text-gray-800 dark:text-white font-medium">English, Arabic, Urdu</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Quick Links */}
                        <div className="glassmorphism rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Quick Help</h3>
                            <div className="space-y-3">
                                <Link href="/about-islam" className="flex items-center justify-between p-3 rounded-xl hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors group">
                                    <span className="text-gray-700 dark:text-gray-300">Learn About Azkar</span>
                                    <i className="fas fa-chevron-right text-gray-400 group-hover:text-emerald-500 transition-colors"></i>
                                </Link>
                                <Link href="/morning-azkar" className="flex items-center justify-between p-3 rounded-xl hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors group">
                                    <span className="text-gray-700 dark:text-gray-300">Morning Azkar</span>
                                    <i className="fas fa-chevron-right text-gray-400 group-hover:text-emerald-500 transition-colors"></i>
                                </Link>
                                <Link href="/privacy-policy" className="flex items-center justify-between p-3 rounded-xl hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors group">
                                    <span className="text-gray-700 dark:text-gray-300">Privacy Policy</span>
                                    <i className="fas fa-chevron-right text-gray-400 group-hover:text-emerald-500 transition-colors"></i>
                                </Link>
                                <Link href="/terms" className="flex items-center justify-between p-3 rounded-xl hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors group">
                                    <span className="text-gray-700 dark:text-gray-300">Terms of Service</span>
                                    <i className="fas fa-chevron-right text-gray-400 group-hover:text-emerald-500 transition-colors"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
