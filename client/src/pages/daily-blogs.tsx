import { SEOHead } from "@/components/seo-head";
import { AdSense } from "@/components/adsense";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { type Blog } from "@shared/schema";

export default function DailyBlogs() {
    const { data: blogs, isLoading } = useQuery<Blog[]>({
        queryKey: ["/api/blogs"]
    });

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "headline": "Daily Islamic Blogs & Reflections",
        "description": "Read our latest articles on Islamic spirituality, daily Azkar benefits, Quranic insights, and Prophetic guidance."
    };

    return (
        <div className="pt-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
            <SEOHead
                title="Daily Islamic Blogs & Reflections | Daily Azkar"
                description="Read our latest articles on Islamic spirituality, daily Azkar benefits, Quranic insights, and Prophetic guidance."
                keywords="islamic blog, azkar benefits, muslim lifestyle, spiritual reflections, quranic insights, daily hadith, prophetic guidance"
                canonical="https://dailyazkar.site/blog"
                structuredData={structuredData}
            />

            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-12 animate-fade-in">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <i className="fas fa-book-reader text-white text-3xl"></i>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 dark:text-white mb-4">
                        Daily Blogs
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Inspiring reflections, spiritual guidance, and insights into the beauty of Islamic remembrance and practice.
                    </p>
                </div>

                <AdSense className="my-8" />

                {isLoading ? (
                    <div className="flex justify-center items-center h-48">
                        <i className="fas fa-spinner fa-spin text-4xl text-emerald-500"></i>
                    </div>
                ) : !blogs || blogs.length === 0 ? (
                    <div className="text-center h-48 flex flex-col justify-center items-center text-muted-foreground">
                        <i className="fas fa-ghost text-4xl mb-4 opacity-50"></i>
                        <p>No blogs published yet. Check back later!</p>
                    </div>
                ) : (
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
                        {blogs.map((post) => (
                            <Card key={post.slug} className="glassmorphism border-0 overflow-hidden transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl group">
                                {post.imageUrl && (
                                    <div className="h-64 overflow-hidden relative">
                                        <img
                                            src={post.imageUrl}
                                            alt={post.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 flex flex-col space-y-2">
                                            <span className="self-start px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-sm">
                                                Article
                                            </span>
                                        </div>
                                    </div>
                                )}
                                <CardContent className="p-8">
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
                                        <div className="flex items-center">
                                            <i className="far fa-calendar-alt mr-2"></i>
                                            {new Date(post.publishedAt || post.createdAt!).toLocaleDateString('en-US', {
                                                month: 'long', day: 'numeric', year: 'numeric'
                                            })}
                                        </div>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                        <Link href={`/blog/${post.slug}`} className="block">{post.title}</Link>
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                                        {post.seoDescription || post.content.replace(/<[^>]*>?/gm, '')}
                                    </p>
                                    <Link href={`/blog/${post.slug}`} className="flex items-center font-medium text-emerald-600 dark:text-emerald-400 cursor-pointer">
                                        <span>Read More</span>
                                        <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}

                <AdSense className="my-8" />
            </div>
        </div>
    );
}
