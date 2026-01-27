import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';
import { TARGET_LOCATIONS } from '@/lib/locations';
import { TARGET_CATEGORIES } from '@/lib/categories';
import { BLOG_POSTS } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dukaaon.in';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/marketplace`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Dynamic Location Pages
  const locationPages: MetadataRoute.Sitemap = TARGET_LOCATIONS.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Dynamic Category Pages
  const categoryPages: MetadataRoute.Sitemap = TARGET_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/categories/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Dynamic Blog Pages
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Fetch seller IDs from database for dynamic pages
  try {
    const { data: sellers, error } = await supabase
      .from('sellers')
      .select('id, updated_at')
      .limit(1000); // Limit to prevent too large sitemap

    if (!error && sellers) {
      const sellerPages: MetadataRoute.Sitemap = sellers.map((seller) => ({
        url: `${baseUrl}/seller/${seller.id}`,
        lastModified: seller.updated_at ? new Date(seller.updated_at) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      }));

      return [...staticPages, ...locationPages, ...categoryPages, ...blogPages, ...sellerPages];
    }
  } catch (error) {
    console.error('Error fetching sellers for sitemap:', error);
  }

  // Return static pages (plus our new dynamic-static ones) if seller fetch fails
  return [...staticPages, ...locationPages, ...categoryPages, ...blogPages];
}
