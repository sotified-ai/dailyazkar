import { Link } from "wouter";

interface RelatedLink {
    title: string;
    description: string;
    href: string;
    icon: string;
    color: string;
}

export const relatedContentMap: Record<string, RelatedLink[]> = {
    azkar: [
        { title: "Morning Dua & Azkar", description: "Start your day with remembrance", href: "/morning-azkar", icon: "fas fa-sun", color: "from-amber-500 to-orange-600" },
        { title: "Evening Dua & Azkar", description: "Evening supplications for protection", href: "/evening-azkar", icon: "fas fa-moon", color: "from-blue-500 to-indigo-600" },
        { title: "Dua After Salah", description: "Post-prayer supplications", href: "/dua-after-salah", icon: "fas fa-hands", color: "from-purple-500 to-pink-600" },
        { title: "Protection Duas", description: "Islamic supplications for safety", href: "/protection-duas-in-islam", icon: "fas fa-shield-alt", color: "from-red-500 to-rose-600" },
        { title: "Ramadan Azkar", description: "Special duas for the blessed month", href: "/ramadan-azkar", icon: "fas fa-star-and-crescent", color: "from-emerald-500 to-teal-600" },
    ],
    quran: [
        { title: "Read Quran", description: "Read the Holy Quran online", href: "/quran", icon: "fas fa-quran", color: "from-emerald-500 to-teal-600" },
        { title: "Ruqiya Shariah", description: "Spiritual healing & protection", href: "/ruqiya", icon: "fas fa-shield-alt", color: "from-violet-500 to-purple-600" },
        { title: "Manzil", description: "Powerful verses for protection", href: "/manzil", icon: "fas fa-shield-virus", color: "from-indigo-500 to-blue-600" },
        { title: "Azkar Quran Tutor", description: "Learn with expert tutors", href: "/online-quran-tutor", icon: "fas fa-chalkboard-teacher", color: "from-amber-500 to-orange-600" },
    ],
    dua: [
        { title: "Dua After Salah", description: "Post-prayer supplications", href: "/dua-after-salah", icon: "fas fa-hands", color: "from-blue-500 to-indigo-600" },
        { title: "Rabbana Duas", description: "Quranic supplications", href: "/rabbana-duas", icon: "fas fa-heart", color: "from-teal-500 to-emerald-600" },
        { title: "Morning Dua & Azkar", description: "Start your day with remembrance", href: "/morning-azkar", icon: "fas fa-sun", color: "from-amber-500 to-orange-600" },
        { title: "Protection Duas", description: "Islamic supplications for safety", href: "/protection-duas-in-islam", icon: "fas fa-shield-alt", color: "from-red-500 to-rose-600" },
    ],
    blog: [
        { title: "Daily Blogs", description: "Read all blog posts", href: "/daily-blogs", icon: "fas fa-blog", color: "from-emerald-500 to-teal-600" },
        { title: "Morning Azkar", description: "Start your day with remembrance", href: "/morning-azkar", icon: "fas fa-sun", color: "from-amber-500 to-orange-600" },
        { title: "Dua After Salah", description: "Post-prayer supplications", href: "/dua-after-salah", icon: "fas fa-hands", color: "from-blue-500 to-indigo-600" },
        { title: "Read Quran", description: "Read the Holy Quran online", href: "/quran", icon: "fas fa-quran", color: "from-teal-500 to-emerald-600" },
    ]
};

interface RelatedContentProps {
    hub: 'azkar' | 'quran' | 'dua' | 'blog';
    currentHref?: string;
}

export function RelatedContent({ hub, currentHref }: RelatedContentProps) {
    // Filter out the current page if currentHref is provided
    let links = relatedContentMap[hub] || [];
    if (currentHref) {
        links = links.filter(link => link.href !== currentHref);
    }

    if (links.length === 0) return null;

    return (
        <div className="max-w-4xl mx-auto mt-12 mb-12">
            <h3 className="text-2xl font-display font-bold text-gray-800 dark:text-white mb-6 text-center">
                Related {hub.charAt(0).toUpperCase() + hub.slice(1)} Hub Content
            </h3>

            {/* Horizontal Scroll Container Wrapper */}
            <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scroll-bar gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:pb-0 sm:snap-none">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden group flex-none w-[280px] sm:w-auto snap-center"
                        >
                            <div className="p-6 h-full flex flex-col">
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <i className={`${link.icon} text-white text-xl`}></i>
                                </div>
                                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                    {link.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-auto">
                                    {link.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scroll-bar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .hide-scroll-bar::-webkit-scrollbar {
                    display: none;
                }
            `}} />
        </div>
    );
}
