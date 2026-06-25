'use client';

import { useRef, useState } from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { PageLayout, ClientMetadata, generateBreadcrumbSchema } from '@/components/layout';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Typography/Heading';
import { staggerContainer, staggerItem } from '@/components/animations/variants';
import {
  Play,
  ArrowRight,
  Smartphone,
  Truck,
  CreditCard,
  Warehouse,
  CheckCircle,
  ShoppingCart,
  Package,
  IndianRupee,
  BarChart3,
  Globe,
  Mic,
  ChevronDown,
} from 'lucide-react';

export default function DemoPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Demo', url: '/demo' },
  ]);

  const heroRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isStepsInView = useInView(stepsRef, { once: true, margin: '-100px' });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: '-100px' });
  const isVideoInView = useInView(videoRef, { once: true, margin: '-100px' });

  const [isPlaying, setIsPlaying] = useState(false);
  const videoPlayerRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoPlayerRef.current) {
      if (isPlaying) {
        videoPlayerRef.current.pause();
      } else {
        videoPlayerRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const operationSteps = [
    {
      step: '01',
      title: 'Browse & Order',
      description:
        'Retailers can open the DukaaOn app and browse thousands of products from verified wholesalers and manufacturers. Voice-based search in regional languages and agent AI makes ordering effortless.',
      image: '/demo-retailer-ordering.png',
      icon: <ShoppingCart className="w-6 h-6" />,
      color: 'from-primary to-primary-dark',
      bgColor: 'bg-primary/5',
      borderColor: 'border-primary/20',
      trust: 'Trusted by 1,000+ retailers',
    },
    {
      step: '02',
      title: 'Stock on Credit',
      description:
        'No more cash upfront. Get stock on credit with flexible repayment options. Our AI evaluates retailer profiles and provides instant credit approval up to ₹5 Lakhs — so you can stock your shop without worrying about working capital.',
      image: '/demo-credit-finance.png',
      icon: <CreditCard className="w-6 h-6" />,
      color: 'from-accent-teal to-secondary',
      bgColor: 'bg-accent-teal/5',
      borderColor: 'border-accent-teal/20',
      trust: 'Zero collateral required',
    },
    {
      step: '03',
      title: 'Micro-Warehouse Dispatch',
      description:
        'Orders are processed through our micro-warehousing network hosted by retailers, strategically placed across Kerala. This ensures 3x faster delivery compared to traditional distribution chains.',
      image: '/demo-warehouse-network.png',
      icon: <Warehouse className="w-6 h-6" />,
      color: 'from-secondary to-secondary-dark',
      bgColor: 'bg-secondary/5',
      borderColor: 'border-secondary/20',
      trust: 'Retailer-powered warehouse network',
    },
    {
      step: '04',
      title: 'Same-Day Delivery',
      description:
        'Our hyperlocal logistics network delivers orders directly to retailers\u2019 doorstep within 60 minutes to 4 hours — even in the most remote areas of Kerala. No more travelling to wholesale markets.',
      image: '/demo-delivery-logistics.png',
      icon: <Truck className="w-6 h-6" />,
      color: 'from-accent-yellow to-primary',
      bgColor: 'bg-accent-yellow/5',
      borderColor: 'border-accent-yellow/20',
      trust: 'Delivery in 60 min – 4 hours',
    },
  ];

  const features = [
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: 'Mobile-First Platform',
      description: 'Designed for simplicity. Order in 3 taps from your smartphone.',
    },
    {
      icon: <Mic className="w-7 h-7" />,
      title: 'Voice Ordering',
      description: 'Order in Malayalam, Tamil, Hindi or English using voice commands.',
    },
    {
      icon: <IndianRupee className="w-7 h-7" />,
      title: 'Stock on Credit',
      description: 'Get instant credit approval. No collateral needed for up to ₹5L.',
    },
    {
      icon: <Package className="w-7 h-7" />,
      title: 'Same-Day Delivery',
      description: 'Hyperlocal logistics ensure your stock arrives within 60 min – 4 hours.',
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: 'Smart Analytics',
      description: 'AI-powered insights help you stock what sells and reduce waste.',
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: 'Wide Network',
      description: '500+ verified wholesalers & manufacturers across Kerala.',
    },
  ];

  return (
    <PageLayout>
      <ClientMetadata
        title="See How DukaaOn Works | Watch Demo | DukaaOn"
        description="Watch how DukaaOn transforms rural retail distribution. See our operations — from mobile ordering and instant credit to micro-warehousing and next-day delivery across Kerala."
        canonical="/demo"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-neutral-900 text-white py-28 overflow-hidden"
      >
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-primary/15 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-secondary/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-[30%] left-[50%] w-32 h-32 bg-accent-yellow/10 rounded-full blur-[60px]" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 border border-white/20"
            >
              <Play className="w-4 h-4 text-primary" />
              See DukaaOn in Action
            </motion.span>

            <Heading as="h1" className="text-white mb-6 leading-tight">
              How DukaaOn{' '}
              <span className="text-gradient from-primary to-accent-yellow">
                Transforms
              </span>{' '}
              Rural Retail
            </Heading>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              From ordering on your phone to stock arriving at your doorstep — discover how we&apos;re
              revolutionizing distribution for 1,000+ retailers across Kerala.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <a href="#video-section">
                <Button size="lg" variant="primary" className="shadow-glow hover:scale-105 transition-transform w-full sm:w-auto">
                  <Play className="mr-2 w-5 h-5" />
                  Watch the Video
                </Button>
              </a>
              <a href="#how-it-works">
                <Button size="lg" variant="outline" className="border-neutral-600 text-white hover:bg-white/10 hover:text-white w-full sm:w-auto">
                  See How It Works
                  <ChevronDown className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>

            {/* Animated scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
              >
                <motion.div className="w-1.5 h-2.5 bg-primary rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works — Step by Step */}
      <section id="how-it-works" ref={stepsRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isStepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-bold mb-4">
              Our Operations
            </span>
            <Heading as="h2" className="mb-6">
              How DukaaOn Works
            </Heading>
            <p className="text-xl text-neutral-500 max-w-3xl mx-auto">
              A seamless 4-step process that takes your retail shop from order to delivery in under 4 hours.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-24">
            {operationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isStepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Text */}
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg text-xl font-black`}
                    >
                      {step.step}
                    </div>
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white shadow-md`}
                    >
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-neutral-500 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <CheckCircle className="w-5 h-5" />
                    <span>{step.trust}</span>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative group ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className={`relative rounded-3xl overflow-hidden border-2 ${step.borderColor} ${step.bgColor} p-2`}>
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <NextImage
                        src={step.image}
                        alt={step.title}
                        width={640}
                        height={420}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div
                    className={`absolute -z-10 top-4 left-4 right-4 bottom-4 bg-gradient-to-br ${step.color} rounded-3xl opacity-10 blur-xl`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connection line between steps */}
          <div className="hidden lg:flex justify-center my-8">
            <div className="w-px h-16 bg-gradient-to-b from-neutral-200 to-transparent" />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-section" ref={videoRef} className="py-24 bg-neutral-900 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVideoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6 border border-white/20">
              <Play className="w-4 h-4 text-primary" />
              Product Demo
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Watch DukaaOn in Action
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              See how retailers across Kerala use DukaaOn to order stock, get credit, and grow their businesses.
            </p>
          </motion.div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVideoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
          >
            {/* Video container with aspect ratio */}
            <div className="relative aspect-video bg-neutral-800">
              <video
                ref={videoPlayerRef}
                className="w-full h-full object-cover"
                poster="/demo-retailer-ordering.png"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                controls
                playsInline
              >
                {/* Video source - replace with actual video URL */}
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Custom play overlay (visible when paused) */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-all duration-300 group-hover:bg-black/40"
                  onClick={togglePlay}
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center shadow-glow"
                  >
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
                  </motion.div>
                </div>
              )}
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent-yellow/20 to-secondary/20 rounded-3xl blur-xl -z-10 opacity-60" />
          </motion.div>


        </div>
      </section>

      {/* Key Features Grid */}
      <section ref={featuresRef} className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-bold mb-4">
              Platform Features
            </span>
            <Heading as="h2" className="mb-6">
              Everything Your Shop Needs
            </Heading>
            <p className="text-xl text-neutral-500 max-w-3xl mx-auto">
              A complete toolkit designed to help rural retailers compete, grow, and thrive.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isFeaturesInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-hard transition-all duration-300 border border-neutral-100 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent-yellow/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-accent-yellow relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Shop?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
              Join 1,000+ retailers who are already saving 30-40% on procurement costs.
              Download DukaaOn today and start ordering!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.sixn8.dukaaon&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-neutral-100 shadow-xl w-full sm:w-auto text-lg px-8"
                >
                  Download the App
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 hover:text-white w-full sm:w-auto text-lg px-8"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
