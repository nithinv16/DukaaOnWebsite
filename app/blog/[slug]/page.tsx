
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageLayout } from '@/components/layout';
import { BLOG_POSTS, getPostBySlug } from '@/lib/blog';
import { Button } from '@/components/ui/Button';
import { Calendar, User, ArrowLeft } from 'lucide-react';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = getPostBySlug(params.slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | DukaaOn Blog`,
        description: post.excerpt,
        openGraph: {
            type: 'article',
            publishedTime: post.date,
            authors: ['DukaaOn'],
            tags: [post.category, 'B2B', 'Wholesale'],
        },
    };
}

export default function BlogPostPage({ params }: Props) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    return (
        <PageLayout>
            <article className="bg-white min-h-screen pb-20">
                {/* Header */}
                <div className="bg-neutral-900 py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/blog" className="inline-flex items-center text-neutral-400 hover:text-white mb-8 transition-colors">
                            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Blog
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-neutral-400">
                            <span className="flex items-center">
                                <User className="w-5 h-5 mr-2" /> {post.author}
                            </span>
                            <span className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2" /> {post.date}
                            </span>
                            <span className="bg-primary/20 text-primary-light px-3 py-1 rounded-full text-sm">
                                {post.category}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div
                        className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-neutral-600 prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary-dark"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* CTA */}
                    <div className="mt-16 bg-neutral-50 rounded-2xl p-8 border border-neutral-200 text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                        <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
                            Join DukaaOn today and connect with thousands of verified businesses across India.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="https://play.google.com/store/apps/details?id=com.sixn8.dukaaon&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                                <Button size="lg">Get Started Free</Button>
                            </a>
                            <Link href="/marketplace">
                                <Button size="lg" variant="outline">Browse Marketplace</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </PageLayout>
    );
}
