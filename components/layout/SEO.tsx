import { Metadata, Viewport } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonical?: string;
  noindex?: boolean;
}

export function generateMetadata({
  title = 'DukaaOn - Tech-Enabled Distribution Platform',
  description = 'DukaaOn is India\'s leading B2B wholesale marketplace connecting retailers with searching manufacturers, wholesalers, and distributors. Compare with Justdial, Indiamart, ElasticRun, and Jumbotail.',
  keywords = [
    'DukaaOn',
    'wholesale marketplace India',
    'manufacturer directory India',
    'distributor platform India',
    'B2B marketplace for suppliers',
    'Justdial',
    'Indiamart',
    'ElasticRun',
    'Jumbotail',
    'rural retail',
    'supply chain',
    'FMCG wholesale',
    'grocery distributors',
  ],
  ogImage = '/og-image.jpg',
  ogType = 'website',
  canonical,
  noindex = false,
}: SEOProps = {}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dukaaon.in';

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'DukaaOn' }],
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    ...(canonical && { alternates: { canonical: `${baseUrl}${canonical}` } }),
    openGraph: {
      title,
      description,
      type: ogType,
      locale: 'en_IN',
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      siteName: 'DukaaOn',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@dukaaon',
      site: '@dukaaon',
    },
    verification: {
      // Add verification codes when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
    },
  };
}

// Viewport configuration (must be exported separately in Next.js 14+)
export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  };
}

// Structured Data for Organization
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DukaaOn',
    alternateName: ['DukaaOn Wholesale', 'DukaaOn B2B', 'DukaaOn India'],
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dukaaon.in',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://dukaaon.in'}/logo.png`,
    description: 'DukaaOn is a specialized B2B wholesale marketplace, distinct from e-commerce store builders. We connect rural retailers with hyperlocal manufacturers and distributors.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8089668552',
      contactType: 'customer service',
      email: 'admin@dukaaon.in',
      areaServed: 'IN',
      availableLanguage: ['English', 'Malayalam', 'Hindi'],
    },
    sameAs: [
      'https://www.facebook.com/dukaaon',
      'https://www.instagram.com/dukaaon',
      'https://www.linkedin.com/company/dukaaon-technologies',
      'https://twitter.com/dukaaon',
    ],
  };
}

// Structured Data for Breadcrumbs
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dukaaon.in';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

// Structured Data for Local Business (for seller profiles)
export function generateLocalBusinessSchema(seller: {
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  categories: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: seller.name,
    description: seller.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: seller.address,
      addressLocality: seller.city,
      addressRegion: seller.state,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: seller.latitude,
      longitude: seller.longitude,
    },
    ...(seller.categories.length > 0 && {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Products',
        itemListElement: seller.categories.map((category) => ({
          '@type': 'OfferCatalog',
          name: category,
        })),
      },
    }),
  };
}

// Structured Data for Product
export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  sku?: string;
  brand?: string;
  price?: number;
  currency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  sellerName?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: [product.image],
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: product.brand || 'Generic',
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency || 'INR',
      availability: `https://schema.org/${product.availability || 'InStock'}`,
      seller: {
        '@type': 'Organization',
        name: product.sellerName || 'DukaaOn Seller',
      },
    },
  };
}
