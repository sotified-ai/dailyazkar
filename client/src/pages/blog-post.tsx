import { useRoute } from "wouter";
import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";
import { BLOG_POSTS } from "@/data/blog-data";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedContent } from "@/components/related-content";

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = BLOG_POSTS.find(p => p.slug === params.slug);

    if (!post) {
        return (
            <div className="pt-24 container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                        Blog Post Not Found
                    </h1>
                    <Link href="/daily-blogs" className="text-emerald-600 hover:text-emerald-700 font-medium">
                        ← Back to Daily Blogs
                    </Link>
                </div>
            </div>
        );
    }

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image,
        "datePublished": post.date,
        "author": {
            "@type": "Organization",
            "name": "Daily Azkar"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Daily Azkar",
            "url": "https://dailyazkar.site"
        }
    };

    return (
        <div className="pt-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
            <SEOHead
                title={`${post.title} | Daily Azkar Blogs`}
                description={post.excerpt}
                keywords="islamic blog, azkar benefits, muslim lifestyle, spiritual reflections, quranic insights, daily hadith, prophetic guidance"
                canonical={`https://dailyazkar.site/daily-blogs/${post.slug}`}
                structuredData={structuredData}
            />

            <article className="container mx-auto px-4 py-8 max-w-4xl">
                <Breadcrumbs items={[
                    { label: "Home", href: "/" },
                    { label: "Blogs Hub", href: "/blog" },
                    { label: post.title }
                ]} />

                {/* Header Section */}
                <div className="text-center mb-12 animate-fade-in">
                    <span className="inline-block px-4 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 font-semibold rounded-full shadow-sm mb-6">
                        {post.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-arabic text-emerald-600 dark:text-emerald-400 mb-8 leading-relaxed">
                        {post.titleUrdu}
                    </h2>

                    <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 space-x-6">
                        <div className="flex items-center">
                            <i className="far fa-calendar-alt mr-2 text-emerald-500"></i>
                            {post.date}
                        </div>
                        <div className="flex items-center">
                            <i className="far fa-clock mr-2 text-amber-500"></i>
                            {post.readTime}
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl animate-slide-up relative">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-auto max-h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                </div>

                <AdSense className="my-8" />

                {/* Content Section */}
                <div className="glassmorphism rounded-3xl p-8 md:p-12 shadow-xl animate-slide-up">
                    <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                        {/* English Content */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-emerald-500 pb-2 inline-block">
                                English
                            </h3>
                            {post.content.split('\n\n').map((paragraph, index) => (
                                <p key={`eng-${index}`} className="mb-6 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <hr className="border-gray-200 dark:border-gray-700 my-12" />

                        {/* Urdu Content */}
                        <div className="text-right" dir="rtl">
                            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 font-arabic border-b-2 border-amber-500 pb-2 inline-block">
                                اردو
                            </h3>
                            {post.contentUrdu.split('\n\n').map((paragraph, index) => (
                                <p key={`urdu-${index}`} className="mb-6 font-arabic text-2xl leading-loose">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <AdSense className="my-8" />

                {/* Share Section */}
                <div className="mt-12 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Share this knowledge</h3>
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                            className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:-translate-y-1 transition-transform shadow-lg"
                            aria-label="Share on Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </button>
                        <button
                            onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:-translate-y-1 transition-transform shadow-lg"
                            aria-label="Share on X (Twitter)"
                        >
                            <i className="fa-brands fa-x-twitter"></i>
                        </button>
                        <button
                            onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " - " + window.location.href)}`, '_blank')}
                            className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:-translate-y-1 transition-transform shadow-lg"
                            aria-label="Share on WhatsApp"
                        >
                            <i className="fab fa-whatsapp text-xl"></i>
                        </button>
                    </div>
                </div>

                <RelatedContent hub="blog" currentHref={`/daily-blogs/${post.slug}`} />
            </article>
        </div>
    );
}
