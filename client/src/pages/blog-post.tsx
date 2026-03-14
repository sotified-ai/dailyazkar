import { useRoute } from "wouter";
import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedContent } from "@/components/related-content";
import { useQuery } from "@tanstack/react-query";
import { type Blog } from "@shared/schema";

// Custom CSS for Quill content in the frontend
import "react-quill/dist/quill.snow.css";

export default function BlogPost({ params }: { params: { slug: string } }) {
    const { data: post, isLoading } = useQuery<Blog>({
        queryKey: [`/api/blogs/${params.slug}`]
    });

    if (isLoading) {
        return (
            <div className="pt-24 min-h-screen flex justify-center items-center">
                <i className="fas fa-spinner fa-spin text-5xl text-emerald-500"></i>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="pt-24 container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                        Blog Post Not Found
                    </h1>
                    <Link href="/blog" className="text-emerald-600 hover:text-emerald-700 font-medium">
                        ← Back to Daily Blogs
                    </Link>
                </div>
            </div>
        );
    }

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.seoTitle || post.title,
        "description": post.seoDescription,
        "image": post.imageUrl,
        "datePublished": post.publishedAt || post.createdAt,
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
                title={`${post.seoTitle || post.title} | Daily Azkar Blogs`}
                description={post.seoDescription || ""}
                keywords={post.seoKeywords || ""}
                canonical={`https://dailyazkar.site/blog/${post.slug}`}
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
                        Article
                    </span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 space-x-6">
                        <div className="flex items-center">
                            <i className="far fa-calendar-alt mr-2 text-emerald-500"></i>
                            {new Date(post.publishedAt || post.createdAt!).toLocaleDateString('en-US', {
                                month: 'long', day: 'numeric', year: 'numeric'
                            })}
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                {post.imageUrl && (
                    <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl animate-slide-up relative flex justify-center bg-gray-100 dark:bg-gray-800">
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-auto max-h-[600px] object-cover"
                        />
                    </div>
                )}

                <AdSense className="my-8" />

                {/* Content Section */}
                <div className="glassmorphism rounded-3xl p-8 md:p-12 shadow-xl animate-slide-up">
                    {/* We apply ql-editor wrapper manually so the native Quill styles cascade properly to the html */}
                    <div
                        className="ql-editor prose prose-lg md:prose-xl dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 p-0"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>

                <AdSense className="my-8" />

                {/* Share Section */}
                <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 text-center">
                    <h3 className="text-xl font-display font-bold text-gray-800 dark:text-white mb-6">Spread the Knowledge</h3>
                    <div className="flex justify-center space-x-6">
                        <button
                            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                            className="w-14 h-14 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center hover:-translate-y-2 transition-all duration-300 shadow-xl ring-4 ring-[#1877F2]/10"
                            aria-label="Share on Facebook"
                        >
                            <i className="fab fa-facebook-f text-2xl"></i>
                        </button>
                        <button
                            onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                            className="w-14 h-14 rounded-2xl bg-[#000000] text-white flex items-center justify-center hover:-translate-y-2 transition-all duration-300 shadow-xl ring-4 ring-black/10"
                            aria-label="Share on X (Twitter)"
                        >
                            <i className="fa-brands fa-x-twitter text-2xl"></i>
                        </button>
                        <button
                            onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " - " + window.location.href)}`, '_blank')}
                            className="w-14 h-14 rounded-2xl bg-[#25D366] text-white flex items-center justify-center hover:-translate-y-2 transition-all duration-300 shadow-xl ring-4 ring-[#25D366]/10"
                            aria-label="Share on WhatsApp"
                        >
                            <i className="fab fa-whatsapp text-2xl"></i>
                        </button>
                    </div>
                </div>

                <RelatedContent hub="blog" currentHref={`/blog/${post.slug}`} />
            </article>
        </div>
    );
}
