
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageLayout } from '@/components/layout';
import { TARGET_CATEGORIES, getCategoryBySlug } from '@/lib/categories';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Package, ShieldCheck, Truck } from 'lucide-react';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return TARGET_CATEGORIES.map((cat) => ({
        slug: cat.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const category = getCategoryBySlug(params.slug);

    if (!category) {
        return {
            title: 'Category Not Found',
        };
    }

    return {
        title: `Buy Wholesale ${category.title} | Stock on Credit | DukaaOn`,
        description: `Order ${category.name} in bulk directly from manufacturers. Get Stock on Credit and next-day delivery. The best B2B app for retailers to buy ${category.title}.`,
        keywords: [
            ...category.keywords,
            `buy ${category.name} on credit`,
            `${category.name} wholesale delivery`,
            'hyperlocal distributors',
            'DukaaOn credit'
        ],
    };
}

export default function CategoryPage({ params }: Props) {
    const category = getCategoryBySlug(params.slug);

    if (!category) {
        return notFound();
    }

    return (
        <PageLayout>
            {/* Hero Section */}
            <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6">
                        Hyperlocal B2B Marketplace
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-neutral-900 mb-6">
                        Buy {category.title} on Credit
                    </h1>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-10">
                        {category.description} Source directly from verified local manufacturers and distributors.
                        <span className="block mt-2 font-semibold text-primary">Pay Later with DukaaOn Credit.</span>
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href={`/marketplace?category=${category.name}`}>
                            <Button size="lg" className="text-lg px-8">
                                Order {category.name} Stock <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-sm md:transform md:-translate-y-12">
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                <Package className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Stock on Credit</h3>
                            <p className="text-neutral-600">
                                Don't let cash flow stop your sales. Buy {category.title} now and pay us later.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm md:transform md:-translate-y-12">
                            <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Hyperlocal Delivery</h3>
                            <p className="text-neutral-600">
                                We source from nearby hubs to ensure next-day delivery for your shop.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm md:transform md:-translate-y-12">
                            <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                                <Truck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Local Manufacturers</h3>
                            <p className="text-neutral-600">
                                Support local industry. Connect with verified manufacturers in your district.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom SEO Text */}
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                    The Smart Way to Buy {category.title}
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                    Sourcing {category.name} for your retail store shouldn't be a hassle.
                    DukaaOn brings the wholesale market to your phone.
                    With our <strong>Credit Facility</strong> and <strong>Hyperlocal Logistics</strong>, you can compete with big supermarkets.
                    Whether you are in a remote village or a busy town, gets the best margins on {category.title}.
                </p>
            </div>
        </PageLayout>
    );
}
