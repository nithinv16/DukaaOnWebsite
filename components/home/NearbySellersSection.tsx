'use client';

import { useEffect, useState } from 'react';
import { Seller } from '@/types';
import { useGeolocation } from '@/hooks/useGeolocation';
import { SellerCard } from '@/components/marketplace/SellerCard';
import { Button } from '@/components/ui/Button';
import { MapPin, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface NearbySellersProps {
  businessType: 'wholesaler' | 'manufacturer';
  title: string;
  description: string;
}

export function NearbySellersSection({
  businessType,
  title,
  description,
}: NearbySellersProps) {
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [loading, setLoading] = useState(false);
  const { coordinates, requestLocation } = useGeolocation();

  useEffect(() => {
    async function fetchNearbySellers() {
      if (!coordinates) return;

      setLoading(true);
      try {
        const params = new URLSearchParams({
          latitude: coordinates.latitude.toString(),
          longitude: coordinates.longitude.toString(),
          businessType: businessType,
          radius: '100',
          limit: '3',
        });

        const response = await fetch(`/api/sellers?${params.toString()}`);

        if (!response.ok) throw new Error('Failed to fetch sellers');

        const data = await response.json();

        if (!data.success) throw new Error(data.error || 'Failed to fetch sellers');

        const nearbySellers = (data.data.sellers || []).slice(0, 3);
        setSellers(nearbySellers);
      } catch (err) {
        console.error('Error fetching nearby sellers:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchNearbySellers();
  }, [coordinates, businessType]);

  const renderContent = () => {
    // No Location State
    if (!coordinates) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl border border-neutral-100 p-12 text-center max-w-xl mx-auto shadow-soft"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <MapPin className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-3">
            Discover Nearby {businessType === 'wholesaler' ? 'Wholesalers' : 'Manufacturers'}
          </h3>
          <p className="text-neutral-600 mb-8 leading-relaxed">
            Enable location access to find verified {businessType}s in your area and start trading instantly.
          </p>
          <Button onClick={requestLocation} size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/20">
            <MapPin className="w-5 h-5 mr-2" />
            Enable Location Access
          </Button>
        </motion.div>
      );
    }

    // Loading State
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
          <p className="text-neutral-500 font-medium">Finding nearby sellers...</p>
        </div>
      );
    }

    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sellers.map((seller, index) => (
            <motion.div
              key={seller.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SellerCard
                seller={seller}
                onEnquire={() => window.location.href = `/seller/${seller.id}`}
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/marketplace">
            <Button variant="outline" size="lg" className="group border-neutral-200 hover:border-primary hover:text-primary">
              Discover More {businessType === 'wholesaler' ? 'Wholesalers' : 'Manufacturers'}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </>
    );
  };

  return (
    <section className="py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">{description}</p>
        </div>

        {renderContent()}
      </div>
    </section>
  );
}
