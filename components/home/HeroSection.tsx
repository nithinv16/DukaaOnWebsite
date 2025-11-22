'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { staggerContainer, staggerItem } from '@/components/animations/variants';
import { useRef } from 'react';
import { ArrowRight, PlayCircle, TrendingUp, Truck } from 'lucide-react';
import { Heading } from '@/components/ui/Typography/Heading';

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-[20%] left-[10%] w-24 h-24 bg-accent-yellow/20 rounded-full blur-[40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <motion.div variants={staggerItem}>
              <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-bold mb-6">
                🚀 Revolutionizing Rural Retail
              </span>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Heading as="h1" className="mb-6 leading-tight">
                Transforming Rural <br />
                <span className="text-gradient from-primary to-accent-yellow">Distribution & Commerce</span>
              </Heading>
            </motion.div>

            <motion.p variants={staggerItem} className="text-xl text-neutral-500 mb-8 max-w-lg leading-relaxed">
              DukaaOn empowers rural shopkeepers with direct access to wholesalers, manufacturers, and instant credit—all in one app.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" variant="primary" className="shadow-glow hover:scale-105 transition-transform">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-neutral-200 hover:bg-neutral-50">
                <PlayCircle className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div variants={staggerItem} className="grid grid-cols-3 gap-8 border-t border-neutral-100 pt-8">
              <div>
                <div className="text-3xl font-bold text-neutral-900 mb-1">10k+</div>
                <div className="text-sm text-neutral-500 font-medium">Active Retailers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neutral-900 mb-1">500+</div>
                <div className="text-sm text-neutral-500 font-medium">Wholesalers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neutral-900 mb-1">₹100Cr</div>
                <div className="text-sm text-neutral-500 font-medium">GMV Processed</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-4 border border-neutral-100 animate-float">
              <img
                src="/home-hero.jpg"
                alt="DukaaOn App Interface"
                className="rounded-2xl w-full h-auto object-cover"
              />

              {/* Floating Elements */}
              <div className="absolute -left-12 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-neutral-50 flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500">Daily Sales</div>
                  <div className="text-sm font-bold text-neutral-900">₹24,500</div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl border border-neutral-50 flex items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500">Delivery Status</div>
                  <div className="text-sm font-bold text-neutral-900">Arriving Today</div>
                </div>
              </div>
            </div>

            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-primary/20 to-transparent opacity-50 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
// Force HMR update
