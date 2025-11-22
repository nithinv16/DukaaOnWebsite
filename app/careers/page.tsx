import { PageLayout, ClientMetadata } from '@/components/layout';
import { Mail } from 'lucide-react';

export default function CareersPage() {
    return (
        <PageLayout>
            <ClientMetadata
                title="Careers - Join the DukaaOn Team"
                description="Build the future of rural commerce with us. Join our mission to empower rural retailers and transform distribution in India."
                canonical="/careers"
            />
            <div className="bg-neutral-light min-h-[calc(100vh-4rem)]">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl font-heading font-bold text-primary-dark mb-6">
                            Join Our Mission
                        </h1>
                        <p className="text-xl text-primary-gray leading-relaxed">
                            We are building the digital backbone of rural commerce in India.
                            If you are passionate about technology and social impact, we want to hear from you.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 text-center max-w-2xl mx-auto">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Mail className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                            We are Hiring!
                        </h2>
                        <p className="text-neutral-600 mb-8">
                            We are always looking for talented individuals to join our team.
                            Please send your resume and portfolio to:
                        </p>
                        <a
                            href="mailto:admin@dukaaon.in"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary hover:bg-primary-dark rounded-xl transition-colors shadow-lg shadow-primary/25"
                        >
                            admin@dukaaon.in
                        </a>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
