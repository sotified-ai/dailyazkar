import { SEOHead } from '@/components/seo-head';
import { useState } from 'react';

const FORMSPREE_URL = 'https://formspree.io/f/xnjbgqov';

export default function OnlineQuranTutor() {
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Online Quran Classes for Children and Adults in USA, UK, Europe & Middle East",
        "description": "Learn Quran online with expert tutors across the USA, UK, Europe, UAE, Qatar, and Saudi Arabia. Dedicated Quran teachers for kids, boys, girls, and adults. Flexible timings and interactive learning.",
        "provider": {
            "@type": "Organization",
            "name": "Daily Azkar Online Quran Academy",
            "sameAs": "https://dailyazkar.site/online-quran-tutor"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "courseWorkload": "PT30M",
            "location": {
                "@type": "VirtualLocation"
            }
        },
        "offers": [
            {
                "@type": "Offer",
                "price": "25.00",
                "priceCurrency": "USD",
                "category": "Monthly Quran Classes - USA"
            },
            {
                "@type": "Offer",
                "price": "25.00",
                "priceCurrency": "GBP",
                "category": "Monthly Quran Classes - UK"
            },
            {
                "@type": "Offer",
                "price": "25.00",
                "priceCurrency": "EUR",
                "category": "Monthly Quran Classes - Europe"
            },
            {
                "@type": "Offer",
                "price": "100.00",
                "priceCurrency": "SAR",
                "category": "Monthly Quran Classes - Middle East (Qatar, UAE, KSA)"
            }
        ]
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        const form = e.currentTarget;
        const data = new FormData(form);

        // Add context for formspree
        data.append('_subject', 'New Online Quran Tutor Inquiry');

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
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <SEOHead
                title="Online Quran Teacher in USA, UK, Europe & Middle East | Best Quran Tutors"
                description="Hire an expert Online Quran Teacher for your children today. We offer dedicated male and female tutors for boys, girls, and adults across the USA, UK, Europe, UAE, Qatar, and Saudi Arabia."
                keywords="online quran teacher usa, online quran tutor uk, quran tutor for children europe, quran teacher for kids middle east, learn quran online saudi arabia, quran classes for girls uae, quran tutor for boys qatar, tajweed online usa, quran academy uk, global quran teacher"
                canonical="https://dailyazkar.site/online-quran-tutor"
                structuredData={structuredData}
            />

            {/* Hero Section */}
            <div className="pt-32 pb-16 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-indigo-500 opacity-10 rounded-full blur-3xl"></div>

                <div className="container mx-auto max-w-5xl text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 font-bold rounded-full text-sm tracking-wider uppercase mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800 animate-pulse">
                        <i className="fas fa-star mr-2 text-amber-500"></i> New Featured Service
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-extrabold text-gray-800 dark:text-white mb-6 leading-tight">
                        Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Online Quran Teacher</span> for Your Family
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Connect with qualified, native-sounding Quran tutors globally. We provide dedicated and interactive 1-on-1 online Quran classes for children (boys and girls) and adults.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                        <span className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm"><i className="fas fa-check-circle text-emerald-500 mr-2"></i> Male & Female Tutors</span>
                        <span className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm"><i className="fas fa-check-circle text-emerald-500 mr-2"></i> Flexible Timings</span>
                        <span className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm"><i className="fas fa-check-circle text-emerald-500 mr-2"></i> Tajweed & Hifz</span>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 pb-20 max-w-6xl">
                <div className="grid lg:grid-cols-5 gap-12 items-start">

                    {/* Information Section */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Benefits */}
                        <div className="glassmorphism rounded-3xl p-8 shadow-xl">
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 uppercase tracking-wide">This Is Why We Are Different</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-chalkboard-teacher text-indigo-600 dark:text-indigo-400 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Male & Female Teachers</h3>
                                        <p className="text-gray-600 dark:text-gray-300">We hire certified male and female teachers who are always ready and passionate to teach students. Every student feels comfortable with teachers for online Quran learning.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-users text-purple-600 dark:text-purple-400 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">One-on-One Classes</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Our live Quran classes system is designed in a way that a single tutor teaches Quran lessons to a single student, guaranteeing dedicated attention for proper learning.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-clock text-emerald-600 dark:text-emerald-400 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Flexible Timings</h3>
                                        <p className="text-gray-600 dark:text-gray-300">The class timings are exceptionally flexible, and every student can schedule his/her class as per his/her convenience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Courses Available */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 uppercase tracking-wide">Our Courses</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-gray-800 border-[1px] border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                    <i className="fas fa-book-open text-3xl text-indigo-500 mb-4"></i>
                                    <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2 uppercase">Noorani Qaida Online</h4>
                                </div>
                                <div className="bg-white dark:bg-gray-800 border-[1px] border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                    <i className="fas fa-microphone-alt text-3xl text-purple-500 mb-4"></i>
                                    <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2 uppercase">Online Quran Reading with Tajweed</h4>
                                </div>
                                <div className="bg-white dark:bg-gray-800 border-[1px] border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                    <i className="fas fa-quran text-3xl text-emerald-500 mb-4"></i>
                                    <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2 uppercase">Learn Quran Online</h4>
                                </div>
                                <div className="bg-white dark:bg-gray-800 border-[1px] border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                    <i className="fas fa-language text-3xl text-amber-500 mb-4"></i>
                                    <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2 uppercase">Online Quran Tarjuma Course</h4>
                                </div>
                                <div className="bg-white dark:bg-gray-800 border-[1px] border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                    <i className="fas fa-brain text-3xl text-rose-500 mb-4"></i>
                                    <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2 uppercase">Online Quran Tafseer Course</h4>
                                </div>
                                <div className="bg-white dark:bg-gray-800 border-[1px] border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                    <i className="fas fa-pen-nib text-3xl text-blue-500 mb-4"></i>
                                    <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2 uppercase">Learn Urdu Online</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Registration Form */}
                    <div className="lg:col-span-2 relative">
                        <div className="sticky top-24 glassmorphism rounded-3xl p-8 border-t-4 border-indigo-500 shadow-2xl">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Book a Trial Class</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">Fill out the form below and our academic coordinator will contact you to schedule your session.</p>

                            {submitted ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4 scale-in">
                                        <i className="fas fa-check text-emerald-600 dark:text-emerald-400 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Request Submitted!</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                                        JazakAllahu Khairan. Our tutor coordinator will reach out to you via WhatsApp/Email shortly to schedule the class.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full transition-colors text-sm font-medium"
                                    >
                                        Register Another Student
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Name Fields */}
                                    <div className="space-y-4">
                                        <div>
                                            <input
                                                name="parent_name"
                                                type="text"
                                                required
                                                placeholder="Parent/Guardian Name"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-sm"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                name="student_name"
                                                type="text"
                                                required
                                                placeholder="Student Name"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Contact Fields */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="Email Address"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-sm"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                name="whatsapp"
                                                type="text"
                                                required
                                                placeholder="WhatsApp No."
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Student Type */}
                                    <div>
                                        <select
                                            name="student_type"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-sm"
                                        >
                                            <option value="">Select Student Type...</option>
                                            <option value="child-boy">Child (Boy)</option>
                                            <option value="child-girl">Child (Girl)</option>
                                            <option value="adult-male">Adult (Male)</option>
                                            <option value="adult-female">Adult (Female)</option>
                                        </select>
                                    </div>

                                    {/* Course Interest */}
                                    <div>
                                        <select
                                            name="course"
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-sm"
                                        >
                                            <option value="">Select Course...</option>
                                            <option value="qaida">Noorani Qaida (Beginner)</option>
                                            <option value="tajweed">Quran Reading w/ Tajweed</option>
                                            <option value="hifz">Quran Memorization (Hifz)</option>
                                            <option value="islamic-studies">Islamic Studies & Duas</option>
                                        </select>
                                    </div>

                                    <div>
                                        <textarea
                                            name="message"
                                            rows={3}
                                            placeholder="Any specific requirements or preferred timings? (Optional)"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none text-sm"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mt-4"
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Processing...</span>
                                            </>
                                        ) : (
                                            <>
                                                <i className="fas fa-graduation-cap"></i>
                                                <span>Start Learning Now</span>
                                            </>
                                        )}
                                    </button>
                                    {error && (
                                        <p className="text-red-500 text-sm text-center mt-3 bg-red-50 dark:bg-red-900/20 p-2 rounded-lg">
                                            <i className="fas fa-exclamation-circle mr-1"></i>
                                            <span>{error}</span>
                                        </p>
                                    )}
                                    <p className="text-center text-xs text-gray-500 mt-4">
                                        <i className="fas fa-lock mr-1"></i> Your information is secure and private.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Pricing Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-800 dark:text-white mb-4 uppercase tracking-wide">Monthly Fee (Hadia)</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">Affordable structured plans across the globe.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {/* US Plan */}
                        <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden transform hover:-translate-y-2 transition-transform">
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                            <h3 className="text-2xl font-bold mb-2">United State</h3>
                            <div className="text-4xl font-extrabold mb-6">$25<span className="text-lg font-medium opacity-80">/Per Month</span></div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center"><i className="fas fa-check-circle text-indigo-300 mr-3"></i> 20 Classes / Month</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-indigo-300 mr-3"></i> Monday to Friday</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-indigo-300 mr-3"></i> 5 Days a Week</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-indigo-300 mr-3"></i> 30 Minutes Class Duration</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-indigo-300 mr-3"></i> 1 on 1 Session</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-indigo-300 mr-3"></i> Currency USD</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-indigo-300 mr-3"></i> Free Trial Classes for Students Satisfaction</li>
                            </ul>

                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-full py-3 bg-white text-indigo-700 font-bold rounded-xl hover:bg-gray-50 transition-colors">
                                Register Now
                            </button>
                        </div>

                        {/* UK Plan */}
                        <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden transform md:-translate-y-4 hover:-translate-y-6 transition-transform">
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                            <h3 className="text-2xl font-bold mb-2">United Kingdom</h3>
                            <div className="text-4xl font-extrabold mb-6">£25<span className="text-lg font-medium opacity-80">/Per Month</span></div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center"><i className="fas fa-check-circle text-emerald-300 mr-3"></i> 20 Classes / Month</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-emerald-300 mr-3"></i> Monday to Friday</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-emerald-300 mr-3"></i> 5 Days a Week</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-emerald-300 mr-3"></i> 30 Minutes Class Duration</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-emerald-300 mr-3"></i> 1 on 1 Session</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-emerald-300 mr-3"></i> Currency POUND</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-emerald-300 mr-3"></i> Free Trial Classes for Students Satisfaction</li>
                            </ul>

                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-full py-3 bg-white text-emerald-700 font-bold rounded-xl hover:bg-gray-50 transition-colors">
                                Register Now
                            </button>
                        </div>

                        {/* Europe Plan */}
                        <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden transform hover:-translate-y-2 transition-transform">
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                            <h3 className="text-2xl font-bold mb-2">Europe</h3>
                            <div className="text-4xl font-extrabold mb-6">€25<span className="text-lg font-medium opacity-80">/Per Month</span></div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center"><i className="fas fa-check-circle text-purple-300 mr-3"></i> 20 Classes / Month</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-purple-300 mr-3"></i> Monday to Friday</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-purple-300 mr-3"></i> 5 Days a Week</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-purple-300 mr-3"></i> 30 Minutes Class Duration</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-purple-300 mr-3"></i> 1 on 1 Session</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-purple-300 mr-3"></i> Currency EURO</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-purple-300 mr-3"></i> Free Trial Classes for Students Satisfaction</li>
                            </ul>

                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-full py-3 bg-white text-purple-700 font-bold rounded-xl hover:bg-gray-50 transition-colors">
                                Register Now
                            </button>
                        </div>

                        {/* Middle East Plan */}
                        <div className="bg-gradient-to-br from-amber-500 to-amber-700 text-white rounded-3xl p-6 shadow-2xl relative overflow-hidden transform hover:-translate-y-2 transition-transform">
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                            <h3 className="text-xl font-bold mb-1">Middle East</h3>
                            <div className="text-xs font-medium opacity-90 mb-2">Qatar, UAE, KSA</div>
                            <div className="text-3xl font-extrabold mb-6">100<span className="text-base font-medium opacity-80"> Riyal/Mo</span></div>

                            <ul className="space-y-4 mb-8 text-sm">
                                <li className="flex items-center"><i className="fas fa-check-circle text-amber-300 mr-3"></i> 20 Classes / Month</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-amber-300 mr-3"></i> Monday to Friday</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-amber-300 mr-3"></i> 5 Days a Week</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-amber-300 mr-3"></i> 30 Min Class Duration</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-amber-300 mr-3"></i> 1 on 1 Session</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-amber-300 mr-3"></i> Currency Riyal</li>
                                <li className="flex items-start"><i className="fas fa-check-circle text-amber-300 mr-3 mt-1 flex-shrink-0"></i> <span>Free Trial Classes for Students Satisfaction</span></li>
                            </ul>

                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-full py-3 bg-white text-amber-700 font-bold rounded-xl hover:bg-gray-50 transition-colors">
                                Register Now
                            </button>
                        </div>
                    </div>

                    {/* WhatsApp CTA */}
                    <div className="text-center max-w-3xl mx-auto glassmorphism rounded-3xl p-8 border border-green-200 dark:border-green-800">
                        <i className="fab fa-whatsapp text-6xl text-green-500 mb-4 animate-bounce"></i>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Contact us on WhatsApp for trial classes click here</h3>
                        <a href="https://wa.me/923344029297" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-8 py-4 bg-green-500 hover:bg-green-600 text-white text-xl font-bold rounded-full transition-colors shadow-lg hover:shadow-xl">
                            WhatsApp Now +923344029297
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}
