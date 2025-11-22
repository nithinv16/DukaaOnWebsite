'use client';

import { PageLayout } from '@/components/layout/PageLayout';
import { ClientMetadata } from '@/components/layout/ClientMetadata';
import { Heading } from '@/components/ui/Typography/Heading';

export default function PrivacyPolicyPage() {
    return (
        <PageLayout>
            <ClientMetadata
                title="Privacy Policy | DukaaOn"
                description="Privacy Policy for DukaaOn mobile application and services."
                canonical="/privacy"
            />
            <div className="bg-white min-h-screen pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none prose-headings:text-neutral-900 prose-p:text-neutral-600 prose-a:text-primary hover:prose-a:text-primary-dark">
                        <Heading as="h1" className="text-4xl font-bold mb-8">Privacy Policy for DukaaOn</Heading>

                        <p className="text-neutral-500 mb-8"><strong>Effective Date:</strong> <span id="effective-date">May 5, 2025</span></p>

                        <h2 className="text-2xl font-bold mt-12 mb-6">Introduction</h2>

                        <p>DukaaOn ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how information about you is collected, used, and disclosed when you use our mobile application DukaaOn (the "App") and related services.</p>

                        <p>By using the App, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.</p>

                        <h2 className="text-2xl font-bold mt-12 mb-6">Information We Collect</h2>

                        <h3 className="text-xl font-semibold mt-8 mb-4">Information You Provide to Us</h3>

                        <p>We collect information you provide directly to us when you:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Create or modify your account</li>
                            <li>Complete transactions</li>
                            <li>Contact customer support</li>
                            <li>Respond to surveys or communications</li>
                        </ul>

                        <p>This may include:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Personal information (name, email address, phone number)</li>
                            <li>Business details (business name, address, tax information)</li>
                            <li>Financial information (payment method details)</li>
                            <li>Profile information (preferences, product interests)</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-8 mb-4">Information We Collect Automatically</h3>

                        <p>When you use our App, we automatically collect:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Location Information</strong>: With your permission, we collect precise location data to show nearby wholesalers, manufacturers, and calculate delivery distances and fees.</li>
                            <li><strong>Device Information</strong>: Device model, operating system, unique device identifiers, and mobile network information.</li>
                            <li><strong>Usage Information</strong>: How you use the App, including browsing history, search queries, and interactions with products and sellers.</li>
                            <li><strong>Transaction Information</strong>: Data about purchases or orders you make through the App.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-12 mb-6">How We Use Your Information</h2>

                        <p>We use the information we collect to:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Provide, maintain, and improve our services</li>
                            <li>Process transactions and send related information</li>
                            <li>Connect retailers with wholesalers and manufacturers</li>
                            <li>Calculate accurate delivery costs based on distance</li>
                            <li>Send notifications, updates, and promotional messages</li>
                            <li>Respond to comments, questions, and customer service requests</li>
                            <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
                            <li>Analyze usage patterns to enhance user experience</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-12 mb-6">Sharing of Information</h2>

                        <p>We may share your information with:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Service Providers</strong>: Third-party vendors who perform services on our behalf (payment processing, data storage, analytics).</li>
                            <li><strong>Business Partners</strong>: Wholesalers, manufacturers, and delivery partners to fulfill orders and provide services.</li>
                            <li><strong>Legal Requirements</strong>: When required by law, subpoena, or other legal process.</li>
                            <li><strong>Business Transfers</strong>: In connection with any merger, sale of company assets, financing, or acquisition.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-12 mb-6">Your Choices</h2>

                        <h3 className="text-xl font-semibold mt-8 mb-4">Location Information</h3>
                        <p>You can disable location permissions through your device settings, but this may limit certain features of the App.</p>

                        <h3 className="text-xl font-semibold mt-8 mb-4">Account Information</h3>
                        <p>You can update your account information and preferences at any time through the App's profile settings.</p>

                        <h3 className="text-xl font-semibold mt-8 mb-4">Promotional Communications</h3>
                        <p>You can opt out of receiving promotional communications by following instructions in those communications.</p>

                        <h2 className="text-2xl font-bold mt-12 mb-6">Data Security</h2>

                        <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>

                        <h2 className="text-2xl font-bold mt-12 mb-6">Data Retention</h2>

                        <p>We retain your information as long as needed to provide services and fulfill the purposes outlined in this Privacy Policy. We will retain and use your information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.</p>

                        <h2 className="text-2xl font-bold mt-12 mb-6">Children's Privacy</h2>

                        <p>Our App is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you learn that a child has provided us with personal information, please contact us.</p>

                        <h2 className="text-2xl font-bold mt-12 mb-6">Changes to This Privacy Policy</h2>

                        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.</p>

                        <h2 className="text-2xl font-bold mt-12 mb-6">Contact Us</h2>

                        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Email: <a href="mailto:support@dukaaon.in" className="text-primary hover:underline">support@dukaaon.in</a></li>
                            <li>Address: SIXN8 Technologies private limited, Kannampally, Ranni</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-12 mb-6">Your Consent</h2>

                        <p>By using our App, you consent to our Privacy Policy and agree to its terms and conditions.</p>

                        <div className="mt-16 pt-8 border-t border-neutral-200 text-center text-neutral-500 text-sm">
                            <p>© 2025 DukaaOn. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
