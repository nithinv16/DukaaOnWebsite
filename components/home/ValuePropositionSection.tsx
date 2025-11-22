'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { staggerContainer, staggerItem } from '@/components/animations/variants';
import { TrendingUp, Truck, Headphones, CreditCard } from 'lucide-react';

export function ValuePropositionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const metrics = [
    {
      value: '40%',
      label: 'Cost Reduction',
      description: 'Lower procurement costs through direct sourcing',
      icon: TrendingUp,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
    },
    {
      value: '3x',
      label: 'Faster Delivery',
      description: 'Micro-warehousing enables rapid fulfillment',
      icon: Truck,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
    {
      value: '24/7',
      label: 'AI Support',
      description: 'Voice-based ordering in regional languages',
      icon: Headphones,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
    },
    {
      value: '₹5L',
      label: 'Credit Access',
      description: 'Working capital for inventory growth',
      icon: CreditCard,
      color: 'text-orange-500',
      bg: 'bg-orange-500/10',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="p-6 rounded-3xl bg-neutral-50 border border-neutral-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${metric.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className={`w-7 h-7 ${metric.color}`} />
              </div>
              <div className="text-4xl font-bold text-neutral-900 mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-neutral-900 mb-2">{metric.label}</div>
              <p className="text-neutral-500 text-sm leading-relaxed">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Core value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24 relative rounded-[2.5rem] overflow-hidden"
        >
          <div className="absolute inset-0 bg-neutral-900" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />

          <div className="relative z-10 p-12 md:p-20 text-center text-white">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Our Vision & Mission
            </h3>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
              <div className="text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-1 bg-primary rounded-full" />
                  <h4 className="text-2xl font-bold text-white">Vision</h4>
                </div>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  To become the backbone of rural and semi-urban commerce by enabling small retailers,
                  wholesalers, and manufacturers through tech-driven distribution, financial and supply chain solutions.
                </p>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-1 bg-secondary rounded-full" />
                  <h4 className="text-2xl font-bold text-white">Mission</h4>
                </div>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  Creating a future where every small retailer has access to the tools, credit, and technology
                  they need to thrive in an increasingly digital world.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                'AI-Powered Supply Chain',
                'Micro-Warehousing',
                'Stock on Credit',
                'Agentic AI Ordering',
                'Voice & OCR',
                'Regional Languages',
              ].map((feature, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
