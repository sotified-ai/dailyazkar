import { Link } from "wouter";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
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
            <ol className="inline-flex items-center space-x-1 md:space-x-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={index} className="inline-flex items-center">
                            {index > 0 && (
                                <i className="fas fa-chevron-right text-xs mx-2 text-gray-400"></i>
                            )}
                            {isLast || !item.href ? (
                                <span className="text-gray-800 dark:text-gray-200" aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <Link href={item.href} className="inline-flex items-center hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                                    {index === 0 && <i className="fas fa-home mr-2"></i>}
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
