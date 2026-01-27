
import Link from 'next/link';
import { PageLayout, ClientMetadata } from '@/components/layout';
import { TARGET_LOCATIONS } from '@/lib/locations';
import { MapPin } from 'lucide-react';

export default function LocationsIndexPage() {
    return (
        <PageLayout>
            <ClientMetadata
                title="Wholesale Markets by Location | DukaaOn India"
                description="Browse wholesale suppliers, manufacturers, and distributors across major Indian cities and states. Find local B2B partners in your area."
                canonical="/locations"
            />
            <div className="bg-neutral-50 min-h-screen py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-neutral-900 mb-4">
                            Find Wholesale Suppliers by Location
                        </h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            Explore our extensive network of verified manufacturers, wholesalers, and distributors across India's key business hubs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TARGET_LOCATIONS.map((location) => (
                            <Link
                                key={location.slug}
                                href={`/locations/${location.slug}`}
                                className="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <h2 className="ml-4 text-2xl font-bold text-neutral-900 group-hover:text-primary transition-colors">
                                        {location.name}
                                    </h2>
                                </div>
                                <p className="text-neutral-600 mb-6 line-clamp-2">
                                    {location.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full">
                                        Wholesalers
                                    </span>
                                    <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full">
                                        Distributors
                                    </span>
                                    <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full">
                                        Manufacturers
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
