import { PageLayout, generateMetadata } from '@/components/layout';
import {
  HeroSection,
  ValuePropositionSection,
  FeaturesSection,
  NearbySellersSection,
  StakeholderBenefitsSection,
  ProblemSolutionSection,
} from '@/components/home';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'DukaaOn B2B Wholesale App | Not Dukaan | Rural India Marketplace',
  description: 'DukaaOn is a hyperlocal wholesale marketplace for retailers in Kerala and India. Get stock on credit from local manufacturers. We are a B2B network, not a store builder app.',
  keywords: [
    'DukaaOn',
    'DukaaOn app',
    'DukaaOn wholesale',
    'Dukaon',
    'Duka On',
    'B2B marketplace Kerala',
    'wholesale stock on credit',
    'FMCG distributors Kerala',
    'DukaaOn vs Dukaan',
    'rural retail platform'
  ],
  canonical: '/',
});

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <ValuePropositionSection />
      <FeaturesSection />

      {/* Nearby Wholesalers Section */}
      <NearbySellersSection
        businessType="wholesaler"
        title="Nearby Wholesalers"
        description="Connect with trusted wholesalers in your area for competitive prices and reliable supply"
      />

      {/* Nearby Manufacturers Section */}
      <NearbySellersSection
        businessType="manufacturer"
        title="Nearby Manufacturers"
        description="Source directly from manufacturers near you for better margins and quality products"
      />

      <StakeholderBenefitsSection />
      <ProblemSolutionSection />
    </PageLayout>
  );
}
