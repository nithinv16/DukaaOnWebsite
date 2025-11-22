'use client';

import { Seller } from '@/types';
import { Button } from '@/components/ui/Button';
import { MapPin, Building2, Navigation, Star } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface SellerCardProps {
  seller: Seller;
  onEnquire: (sellerId: string) => void;
}

export function SellerCard({ seller, onEnquire }: SellerCardProps) {
  const {
    id,
    businessName,
    businessType,
    location,
    categories,
    thumbnailImage,
    description,
    distance,
    rating = 4.5, // Default rating if not present
    reviewCount = 12, // Default count if not present
  } = seller;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl border border-neutral-100 overflow-hidden shadow-soft hover:shadow-hard transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Section */}
      <div className="relative h-56 bg-neutral-50 overflow-hidden">
        {thumbnailImage ? (
          <OptimizedImage
            src={thumbnailImage}
            alt={businessName}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-300">
            <Building2 className="w-16 h-16" />
          </div>
        )}

        {/* Distance Badge */}
        {distance && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <Navigation className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-neutral-900">{distance} km</span>
          </div>
        )}

        {/* Rating Badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-bold text-neutral-900">{rating}</span>
          <span className="text-[10px] text-neutral-500">({reviewCount})</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
          <div>
            <span className="inline-block px-2.5 py-1 bg-primary/5 text-primary text-[10px] font-semibold uppercase tracking-wider rounded-full mb-2">
              {businessType}
            </span>
            <h3 className="text-xl font-bold text-neutral-900 line-clamp-1 group-hover:text-primary transition-colors">
              {businessName}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 text-neutral-500 text-sm mb-4">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="line-clamp-1">{location.city}, {location.state}</span>
        </div>

        <p className="text-neutral-600 text-sm line-clamp-2 mb-6 flex-grow">
          {description}
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.slice(0, 3).map((cat) => (
            <span
              key={cat}
              className="px-2.5 py-1 bg-neutral-50 text-neutral-600 text-xs rounded-lg border border-neutral-100"
            >
              {cat}
            </span>
          ))}
          {categories.length > 3 && (
            <span className="px-2.5 py-1 bg-neutral-50 text-neutral-400 text-xs rounded-lg border border-neutral-100">
              +{categories.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <Button
            variant="outline"
            className="w-full border-neutral-200 hover:border-primary hover:text-primary"
            asChild
          >
            <Link href={`/seller/${id}`}>
              View Profile
            </Link>
          </Button>
          <Button
            variant="primary"
            className="w-full shadow-lg shadow-primary/20 hover:shadow-primary/40"
            onClick={() => onEnquire(id)}
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
