'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { staggerContainer, staggerItem } from '@/components/animations/variants';
import { Heading } from '@/components/ui/Typography/Heading';
import { ArrowRight } from 'lucide-react';

interface Stakeholder {
  id: string;
  name: string;
  icon: string;
  color: string;
  gradient: string;
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export function StakeholderBenefitsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('retailers');

  const stakeholders: Stakeholder[] = [
    {
      id: 'retailers',
      name: 'Retailers',
      icon: '🏪',
      color: 'primary',
      gradient: 'from-primary to-primary-light',
      benefits: [
        {
          title: 'Lower Procurement Costs',
          description: 'Direct sourcing from wholesalers and manufacturers reduces intermediary costs by up to 40%',
          icon: '💰',
        },
        {
          title: 'Credit Access',
          description: 'Get working capital loans up to ₹5L with flexible repayment terms',
          icon: '💳',
        },
        {
          title: 'Inventory Management',
          description: 'AI-powered tools help optimize stock levels and reduce wastage',
          icon: '📊',
        },
        {
          title: 'Fast Delivery',
          description: 'Micro-warehousing network ensures same-day or next-day delivery',
          icon: '🚚',
        },
      ],
    },
    {
      id: 'wholesalers',
      name: 'Wholesalers',
      icon: '🏭',
      color: 'secondary',
      gradient: 'from-secondary to-secondary-light',
      benefits: [
        {
          title: 'Expanded Reach',
          description: 'Connect with thousands of retailers across rural and semi-urban areas',
          icon: '🌍',
        },
        {
          title: 'Digital Ordering',
          description: 'Automated order processing reduces manual work and errors',
          icon: '📱',
        },
        {
          title: 'Inventory Visibility',
          description: 'Real-time tracking of stock levels and demand patterns',
          icon: '👁️',
        },
        {
          title: 'Payment Security',
          description: 'Guaranteed payments through platform-managed transactions',
          icon: '🔒',
        },
      ],
    },
    {
      id: 'manufacturers',
      name: 'Manufacturers',
      icon: '🏗️',
      color: 'secondary',
      gradient: 'from-green-500 to-emerald-400',
      benefits: [
        {
          title: 'Direct Market Access',
          description: 'Reach rural retailers without multiple distribution layers',
          icon: '🎯',
        },
        {
          title: 'Demand Insights',
          description: 'AI-powered analytics reveal market trends and opportunities',
          icon: '📈',
        },
        {
          title: 'Brand Building',
          description: 'Showcase products directly to end retailers with rich media',
          icon: '✨',
        },
        {
          title: 'Efficient Logistics',
          description: 'Leverage micro-warehousing for optimized distribution',
          icon: '📦',
        },
      ],
    },
    {
      id: 'fmcg',
      name: 'FMCG Companies',
      icon: '🏢',
      color: 'accent-yellow',
      gradient: 'from-accent-yellow to-yellow-400',
      benefits: [
        {
          title: 'Rural Penetration',
          description: 'Access untapped rural markets with established distribution network',
          icon: '🌾',
        },
        {
          title: 'Market Intelligence',
          description: 'Detailed analytics on rural consumption patterns and preferences',
          icon: '🧠',
        },
        {
          title: 'Brand Visibility',
          description: 'Promote products through targeted campaigns to rural retailers',
          icon: '📢',
        },
        {
          title: 'Supply Chain Efficiency',
          description: 'Reduce distribution costs through optimized logistics',
          icon: '⚡',
        },
      ],
    },
  ];

  const activeStakeholder = stakeholders.find((s) => s.id === activeTab) || stakeholders[0];

  return (
    <section ref={ref} className="py-32 bg-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-primary-light text-sm font-medium mb-6">
              For Everyone
            </span>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Heading as="h2" className="mb-6 text-white">
              Benefits for All <span className="text-gradient from-primary to-accent-yellow">Stakeholders</span>
            </Heading>
          </motion.div>

          <motion.p variants={staggerItem} className="text-xl text-neutral-400 max-w-3xl mx-auto">
            DukaaOn creates value across the entire supply chain ecosystem, empowering every participant to grow.
          </motion.p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {stakeholders.map((stakeholder) => (
            <button
              key={stakeholder.id}
              onClick={() => setActiveTab(stakeholder.id)}
              className={`group relative px-8 py-4 rounded-2xl font-medium transition-all duration-300 flex items-center gap-3 overflow-hidden ${activeTab === stakeholder.id
                ? 'text-white shadow-glow'
                : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'
                }`}
            >
              {activeTab === stakeholder.id && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 bg-gradient-to-r ${stakeholder.gradient}`}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 text-2xl group-hover:scale-110 transition-transform duration-300">{stakeholder.icon}</span>
              <span className="relative z-10 font-bold">{stakeholder.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Benefits content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {activeStakeholder.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 bg-gradient-to-br ${activeStakeholder.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-light transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-bold hover:shadow-glow transition-all duration-300 flex items-center gap-2 group"
            >
              Partner With Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

            </a>
          </div>
        </motion.div>
      </div >
    </section >
  );
}
