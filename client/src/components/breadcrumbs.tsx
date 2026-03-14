import { Link } from "wouter";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
    const { lang, isUrdu } = useLanguage();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": item.href ? `https://dailyazkar.site${item.href}` : undefined
        }))
    };

    return (
        <nav className={`flex text-sm text-gray-500 dark:text-gray-400 font-medium mb-6 ${className}`} aria-label="Breadcrumb">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ol className="inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse overflow-x-auto whitespace-nowrap scrollbar-hide">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={index} className="inline-flex items-center">
                            {index > 0 && (
                                <i className={cn(
                                    "fas text-xs mx-2 text-gray-400",
                                    isUrdu ? "fa-chevron-left" : "fa-chevron-right"
                                )}></i>
                            )}
                            {isLast || !item.href ? (
                                <span className={cn(
                                    "text-gray-800 dark:text-gray-200",
                                    isUrdu ? "font-urdu text-sm" : ""
                                )} aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <Link href={item.href} className={cn(
                                    "inline-flex items-center hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors",
                                    isUrdu ? "font-urdu text-sm" : ""
                                )}>
                                    {index === 0 && <i className="fas fa-home mr-2 rtl:ml-2 rtl:mr-0"></i>}
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
