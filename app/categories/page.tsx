
import Link from 'next/link';
import { PageLayout, ClientMetadata } from '@/components/layout';
import { TARGET_CATEGORIES } from '@/lib/categories';
import { Tag } from 'lucide-react';

export default function CategoriesIndexPage() {
    return (
        <PageLayout>
            <ClientMetadata
                title="Browse by Category | Wholesale Markets India | DukaaOn"
                description="Explore wholesale product categories including FMCG, Grocery, Textiles, Electronics, and Pharma. Find specialized distributors and manufacturers."
                canonical="/categories"
            />
            <div className="bg-neutral-50 min-h-screen py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-neutral-900 mb-4">
                            Browse Wholesale Categories
                        </h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            Discover specialized manufacturers and distributors across key industry verticals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TARGET_CATEGORIES.map((cat) => (
                            <Link
                                key={cat.slug}
                                href={`/categories/${cat.slug}`}
                                className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                                        <Tag className="w-6 h-6" />
                                    </div>
                                    <h2 className="ml-4 text-2xl font-bold text-neutral-900 group-hover:text-secondary transition-colors">
                                        {cat.name}
                                    </h2>
                                </div>
                                <h3 className="text-lg font-semibold text-neutral-800 mb-2">{cat.title}</h3>
                                <p className="text-neutral-600 mb-6">
                                    {cat.description}
                                </p>
                                <div className="text-secondary font-medium group-hover:underline">
                                    View {cat.name} Suppliers &rarr;
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
