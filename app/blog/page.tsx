
import Link from 'next/link';
import { PageLayout, ClientMetadata } from '@/components/layout';
import { BLOG_POSTS } from '@/lib/blog';
import { Calendar, ArrowRight } from 'lucide-react';

export default function BlogIndexPage() {
    return (
        <PageLayout>
            <ClientMetadata
                title="B2B Supply Chain & Manufacturing Insights | DukaaOn Blog"
                description="Latest news, trends, and comparisons of B2B marketplaces in India like Indiamart, Justdial, and DukaaOn."
                canonical="/blog"
            />
            <div className="bg-neutral-50 min-h-screen py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-neutral-900 mb-4">
                            Industry Insights
                        </h1>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            Stay ahead with the latest trends in wholesale distribution, manufacturing, and B2B commerce.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100"
                            >
                                <div className="p-8">
                                    <div className="flex items-center text-sm text-neutral-500 mb-4 space-x-4">
                                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{post.category}</span>
                                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {post.date}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-neutral-600 mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-primary font-medium group-hover:underline">
                                        Read Article <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
