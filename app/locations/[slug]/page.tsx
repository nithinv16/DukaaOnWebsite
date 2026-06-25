
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageLayout } from '@/components/layout';
import { TARGET_LOCATIONS, getLocationBySlug } from '@/lib/locations';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return TARGET_LOCATIONS.map((loc) => ({
        slug: loc.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const location = getLocationBySlug(params.slug);

    if (!location) {
        return {
            title: 'Location Not Found',
        };
    }

    return {
        title: `Wholesale Suppliers in ${location.name} | Credit & Fast Delivery | DukaaOn`,
        description: `Find hyperlocal wholesale suppliers and manufacturers in ${location.name}. Get Stock on Credit and Next-Day Delivery. The best B2B platform for retailers in ${location.name}, better than listing sites like Justdial.`,
        keywords: [
            ...location.keywords,
            `wholesale market in ${location.name}`,
            `distributors in ${location.name}`,
            `stock on credit in ${location.name}`,
            `FMCG distributors ${location.name}`,
            'DukaaOn vs Indiamart',
            'Hyperlocal delivery Kerala'
        ],
    };
}

export default function LocationPage({ params }: Props) {
    const location = getLocationBySlug(params.slug);

    if (!location) {
        return notFound();
    }

    return (
        <PageLayout>
            {/* Hero Section */}
            <div className="bg-neutral-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 to-neutral-900 z-0"></div>
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Wholesale Suppliers & Distributors in {location.name}
                    </h1>
                    <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-10">
                        More than just a directory. We are your <strong>Hyperlocal Supply Partner</strong> in {location.name}.
                        <span className="block mt-2 text-primary-light font-semibold">Get Stock on Credit. Get Next-Day Delivery.</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/marketplace">
                            <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                                Find {location.name} Suppliers <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <a href="https://play.google.com/store/apps/details?id=com.sixn8.dukaaon&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
                                Sell in {location.name}
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                                Why Retailers in {location.name} Use DukaaOn
                            </h2>
                            <div className="space-y-6">
                                {[
                                    'Stock on Credit: Buy now, pay later facilities.',
                                    `Hyperlocal Delivery: Next-day delivery within ${location.name}.`,
                                    'Direct from Local Manufacturers: Better margins.',
                                    'No Middlemen Commissions: Unlike traditional chains.',
                                    'Servicing Remote Areas: We reach where others don&apos;t.'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <span className="ml-4 text-lg text-neutral-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
                            <h3 className="text-xl font-bold mb-6">We Are Different</h3>
                            <p className="text-neutral-600 mb-6">
                                <strong>Justdial and Indiamart</strong> only give you phone numbers. You still have to travel, negotiate, and pay cash.
                                <br /><br />
                                <strong>DukaaOn</strong> is an operational platform. We handle the <strong>Credit</strong>, the <strong>Logistics</strong>, and the <strong>Trust</strong>. Especially for rural retailers in places like {location.name}.
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-xl shadow-sm flex items-center">
                                    <TrendingUp className="w-10 h-10 text-green-500 bg-green-50 p-2 rounded-lg" />
                                    <div className="ml-4">
                                        <h4 className="font-bold text-neutral-900">For {location.type} Retailers</h4>
                                        <p className="text-sm text-neutral-500">Working capital support & fast stock.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEO Content Block */}
            <div className="py-16 bg-neutral-50 border-t border-neutral-200">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">Hyperlocal Wholesale Network in {location.name}</h2>
                    <p className="text-neutral-600 leading-relaxed">
                        Are you a Kirana store owner in {location.name}? DukaaOn is built for you.
                        We connect you with hyperlocal <strong>manufacturers and wholesalers in {location.name}</strong> so you get stock faster and cheaper.
                        Unlike standard listing sites, we offer <strong>credit facilities</strong> to help your business grow.
                        Whether you are in a main city or a remote town, our logistics network ensures your shop never runs out of stock.
                    </p>
                </div>
            </div>
        </PageLayout>
    );
}
