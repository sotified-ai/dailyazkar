import { useState, useEffect } from "react";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Plus, Minus, Settings2, Bell, BellOff } from "lucide-react";
import { Link } from "wouter";

export default function TasbeehCounterPage() {
    const [count, setCount] = useState(0);
    const [target, setTarget] = useState(33);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [vibrateEnabled, setVibrateEnabled] = useState(true);

    const handleIncrement = () => {
        setCount(prev => prev + 1);
        if (soundEnabled) {
            const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3");
            audio.volume = 0.2;
            audio.play().catch(() => { });
        }
        if (vibrateEnabled && "vibrate" in navigator) {
            navigator.vibrate(50);
        }
    };

    const handleDecrement = () => {
        if (count > 0) setCount(prev => prev - 1);
    };

    const handleReset = () => {
        if (window.confirm("Are you sure you want to reset the counter?")) {
            setCount(0);
        }
    };

    const progressPercentage = Math.min((count / target) * 100, 100);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Online Tasbeeh Counter - Digital Dhikr Tracking",
        "description": "A beautiful, premium digital tasbeeh counter for tracking your daily dhikr and azkar. Set targets, use sound feedback, and save your progress.",
        "applicationCategory": "Utility",
        "operatingSystem": "All"
    };

    return (
        <div className="pt-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
            <SEOHead
                title="Online Tasbeeh Counter - Digital Dhikr & Zikr Tracking | Daily Azkar"
                description="Use our premium online tasbeeh counter to track your daily dhikr. Set custom targets for SubhanAllah, Alhamdulillah, and Allahu Akbar. Free digital tasbih tool."
                keywords="tasbeeh counter online, digital tasbih, zikr counter, online dhikr tracker, subhanallah counter, alhamdulillah counter, allahu akbar counter, islamic prayer counter"
                canonical="https://dailyazkar.site/tasbeeh-counter"
                structuredData={structuredData}
            />

            <div className="container mx-auto px-4 py-8">
                <Breadcrumbs items={[
                    { label: "Home", href: "/" },
                    { label: "Tasbeeh Counter" }
                ]} />

                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
                            Digital Tasbeeh Counter
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            "Indeed, in the remembrance of Allah do hearts find rest." (13:28)
                        </p>
                    </div>

                    {/* Main Counter UI */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {/* Settings Panel */}
                        <Card className="glassmorphism border-0 shadow-xl lg:order-1">
                            <CardContent className="p-8">
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Settings2 className="w-5 h-5 text-emerald-500" />
                                    Counter Settings
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 mb-2">Set Target</label>
                                        <div className="flex gap-2">
                                            {[33, 100, 1000].map(val => (
                                                <Button
                                                    key={val}
                                                    variant={target === val ? "default" : "outline"}
                                                    onClick={() => setTarget(val)}
                                                    className="flex-1"
                                                >
                                                    {val}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                                        <span className="font-medium">Sound Feedback</span>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => setSoundEnabled(!soundEnabled)}
                                            className={soundEnabled ? "text-emerald-500" : "text-gray-400"}
                                        >
                                            {soundEnabled ? <Bell className="w-5 h-5" /> : <BellOff className="w-5 h-5" />}
                                        </Button>
                                    </div>
                                    <Button
                                        variant="outline"
                                        className="w-full text-red-500 border-red-100 hover:bg-red-50 dark:border-red-900/30"
                                        onClick={handleReset}
                                    >
                                        <RefreshCw className="w-4 h-4 mr-2" /> Reset Counter
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Interactive Counter Card */}
                        <div className="lg:col-span-2 lg:order-2">
                            <Card className="glassmorphism border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-emerald-500/10 to-teal-600/10 h-full min-h-[500px] flex flex-col items-center justify-center relative">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gray-200 dark:bg-gray-800">
                                    <div
                                        className="h-full bg-emerald-500 transition-all duration-500 ease-out"
                                        style={{ width: `${progressPercentage}%` }}
                                    ></div>
                                </div>

                                <CardContent className="p-12 text-center w-full">
                                    <div className="mb-4">
                                        <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Current Session</span>
                                    </div>

                                    <div className="text-[120px] md:text-[160px] font-display font-black leading-none text-gray-800 dark:text-white mb-8 select-none tracking-tighter">
                                        {count}
                                    </div>

                                    <div className="text-xl font-medium text-gray-500 mb-12">
                                        Target: <span className="text-gray-800 dark:text-white">{target}</span>
                                    </div>

                                    <div className="flex flex-col items-center gap-6">
                                        <button
                                            onClick={handleIncrement}
                                            className="w-48 h-48 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-[0_20px_50px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
                                            aria-label="Increment Counter"
                                        >
                                            <Plus className="w-20 h-20 group-hover:rotate-90 transition-transform duration-300" />
                                        </button>

                                        <div className="flex gap-4">
                                            <Button
                                                variant="outline"
                                                className="w-14 h-14 rounded-full"
                                                onClick={handleDecrement}
                                                disabled={count === 0}
                                            >
                                                <Minus className="w-6 h-6" />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="w-14 h-14 rounded-full"
                                                onClick={handleReset}
                                            >
                                                <RefreshCw className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Educational Content Section - 1200 Words Goal */}
                    <div className="prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-gray-800/50 p-10 md:p-16 rounded-[2.5rem] shadow-sm mb-20 border border-emerald-50 dark:border-gray-800">
                        <h2 className="text-4xl font-display font-bold text-gray-800 dark:text-white mb-8 border-b-4 border-emerald-500 w-fit pb-2">
                            The Power of Dhikr: Why Use a Tasbeeh Counter?
                        </h2>

                        <p>
                            Remembrance of Allah, or **Dhikr**, is the lifeblood of a Muslim's spiritual existence. It is the conscious act of bringing the Divine into our everyday moments, transforming the mundane into the sacred. In the digital age, while traditional tasbeeh beads carry a beautiful heritage, the **online tasbeeh counter** has emerged as a vital tool for the modern believer.
                        </p>

                        <h3>The Significance of Counting Your Dhikr</h3>
                        <p>
                            You may wonder, "Why do we count our prayers? Isn't the intention more important than the number?" While sincerity is undoubtedly the foundation of all worship, the Prophet Muhammad ﷺ taught us the value of specific numbers for particular azkar. Whether it is repeating *SubhanAllah* 33 times after Salah or seeking forgiveness 100 times a day, these numbers are not arbitrary; they are spiritual prescriptions designed to heal the heart and discipline the mind.
                        </p>
                        <p>
                            Using a **digital zikr counter** allows you to perform these Sunnah practices with precision and focus. It removes the mental burden of tracking numbers, allowing you to immerse yourself fully in the meaning of the words you are uttering.
                        </p>

                        <h3>Benefits of Constant Dhikr</h3>
                        <div className="grid md:grid-cols-2 gap-8 not-prose my-12">
                            <div className="p-8 rounded-3xl bg-emerald-50 dark:bg-emerald-900/20">
                                <h4 className="font-bold text-emerald-800 dark:text-emerald-400 text-xl mb-4">Mindfulness & Peace</h4>
                                <p className="text-gray-600 dark:text-gray-300">Consistent remembrance acts as a spiritual anchor, preventing the heart from being overwhelmed by the anxieties of the worldly life.</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-teal-50 dark:bg-teal-900/20">
                                <h4 className="font-bold text-teal-800 dark:text-teal-400 text-xl mb-4">Spiritual Fortification</h4>
                                <p className="text-gray-600 dark:text-gray-300">Dhikr creates a protective shield around the believer, guarding against negative influences and the whisperings of Shaytan.</p>
                            </div>
                        </div>

                        <h3>Popular Azkar to Recite</h3>
                        <p>
                            If you are just starting with our **online tasbeeh tool**, here are some of the most powerful phrases you can begin counting today:
                        </p>
                        <ul>
                            <li><strong>SubhanAllah (Glory be to Allah):</strong> Reciting this acknowledges Allah's perfection and removes any attribute of deficiency from Him.</li>
                            <li><strong>Alhamdulillah (Praise be to Allah):</strong> The ultimate expression of gratitude. Repeating this 33 times daily rewires the brain to focus on blessings rather than Lack.</li>
                            <li><strong>Allahu Akbar (Allah is the Greatest):</strong> A declaration that Allah is greater than any challenge, fear, or obstacle you may face.</li>
                            <li><strong>Astaghfirullah (I seek forgiveness from Allah):</strong> A powerful tool for purifying the soul and opening the doors of Rizq (provision).</li>
                        </ul>

                        <h3>Why Choose Our Online Tasbeeh Counter?</h3>
                        <p>
                            Unlike simple mechanical clickers, our **premium digital tasbih** offers a seamless, distraction-free experience. Designed with spiritual aesthetics in mind, it features:
                        </p>
                        <ul>
                            <li><strong>Haptic Feedback:</strong> Feel a subtle vibration with every tap, mimicking the tactile feel of traditional beads.</li>
                            <li><strong>Target Tracking:</strong> Set your goal and watch the progress bar fill up, providing a visual sense of accomplishment.</li>
                            <li><strong>Dark Mode Optimization:</strong> Perfect for nighttime dhikr or reciting **azkar before sleep** without straining your eyes.</li>
                            <li><strong>Universal Access:</strong> Use it on your phone, tablet, or desktop without needing to install any app.</li>
                        </ul>

                        <blockquote>
                            "The comparison of one who remembers his Lord and one who does not, is like that of the living and the dead."
                            <cite>— Prophet Muhammad ﷺ (Sahih Bukhari)</cite>
                        </blockquote>

                        <h2 className="text-4xl font-display font-bold text-gray-800 dark:text-white mt-16 mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-8 not-prose">
                            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-emerald-100">
                                <h4 className="text-lg font-bold mb-2">Is counting dhikr on a digital device allowed?</h4>
                                <p className="text-gray-600 dark:text-gray-400">Yes, scholars generally agree that using tools like tasbeeh beads or digital counters is a permissible means to achieve the Sunnah of counting specific azkar. The tool is simply a helper for your intention.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-emerald-100">
                                <h4 className="text-lg font-bold mb-2">How do I reset the counter?</h4>
                                <p className="text-gray-600 dark:text-gray-400">Simply click the 'Reset' button or the circular refresh icon. We've added a confirmation prompt to prevent accidental resets during deep meditation.</p>
                            </div>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="text-center bg-emerald-600 rounded-[3rem] p-16 text-white shadow-2xl">
                        <h2 className="text-3xl font-display font-bold mb-6">Continue Your Journey of Remembrance</h2>
                        <p className="text-emerald-50 text-xl mb-10 max-w-2xl mx-auto">
                            Dhikr is most powerful when combined with authentic supplications. Explore our comprehensive libraries of morning and evening azkar.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link href="/azkar" className="bg-white text-emerald-700 px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                                Morning & Evening Azkar
                            </Link>
                            <Link href="/dua-after-waking-up" className="bg-emerald-800 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-900 transition-colors shadow-xl">
                                Read Morning Dua Guide
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
