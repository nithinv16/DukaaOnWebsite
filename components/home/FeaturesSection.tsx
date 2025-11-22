'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { staggerContainer, staggerItem } from '@/components/animations/variants';
import { Heading } from '@/components/ui/Typography/Heading';
import { CheckCircle2 } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  gradient: string;
}

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features: Feature[] = [
    {
      icon: '🤖',
      title: 'AI-Powered Supply Chain',
      description: 'Intelligent demand forecasting and automated inventory management',
      benefits: [
        'Predictive analytics for stock optimization',
        'Automated reordering based on sales patterns',
        'Real-time inventory tracking',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🏪',
      title: 'Micro-Warehousing Network',
      description: 'Distributed storage for faster delivery and reduced logistics costs',
      benefits: [
        'Local warehouses in rural areas',
        'Same-day delivery capability',
        'Reduced transportation costs',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: '💳',
      title: 'Credit Facilities',
      description: 'Working capital loans and flexible payment terms for retailers',
      benefits: [
        'Up to ₹5L credit line',
        'Flexible repayment terms',
        'Digital credit scoring',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: '🏪',
      title: 'Shopkeeper-Hosted Micro-Warehouses',
      description: 'Transform retail shops into local distribution hubs for faster fulfillment',
      benefits: [
        'Earn additional income as micro-warehouse',
        'Serve nearby retailers efficiently',
        'Reduce last-mile delivery costs',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: '🤖',
      title: 'Agentic AI-Based Ordering',
      description: 'Intelligent AI agents handle orders through voice, OCR, and automated processing',
      benefits: [
        'Voice-based ordering in regional languages',
        'OCR for scanning product lists',
        'Natural language understanding',
      ],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: '📊',
      title: 'AI Automated Stock Replenishment',
      description: 'Smart inventory management based on demand patterns and buying behavior',
      benefits: [
        'Predictive demand forecasting',
        'Automated reorder suggestions',
        'Optimize stock levels dynamically',
      ],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: '💰',
      title: 'Stock on Credit Facility',
      description: 'Wholesalers get cash upfront while retailers enjoy flexible credit periods',
      benefits: [
        'Immediate payment to suppliers',
        'Extended credit for retailers',
        'Improved cash flow for all',
      ],
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.div variants={staggerItem} className="flex justify-center mb-4">
            <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide uppercase">
              Platform Features
            </span>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Heading as="h2" className="mb-6 text-4xl md:text-5xl font-bold text-neutral-900">
              Everything You Need to Succeed
            </Heading>
          </motion.div>

          <motion.p variants={staggerItem} className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive tools and services designed specifically for rural retail ecosystems, powered by advanced AI.
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-hard transition-all duration-300 border border-neutral-100"
            >
              {/* Icon with gradient background */}
              <div className="relative mb-8">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity duration-500`} />
                <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              <p className="text-neutral-600 mb-8 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits list */}
              <ul className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 bg-gradient-to-br ${feature.gradient} text-white rounded-full p-0.5`} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] rounded-3xl transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex flex-col items-center p-8 rounded-3xl bg-neutral-900 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">Ready to transform your retail business?</h3>
            <p className="text-neutral-400 mb-8">Join thousands of retailers already growing with DukaaOn.</p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="/marketplace"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-light transition-all hover:scale-105"
              >
                Explore Marketplace
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white rounded-xl font-medium hover:bg-white/10 transition-all hover:scale-105"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
