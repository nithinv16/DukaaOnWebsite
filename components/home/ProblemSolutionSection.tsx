'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { staggerContainer, staggerItem } from '@/components/animations/variants';
import { Heading } from '@/components/ui/Typography/Heading';
import { ArrowRight, TrendingUp, ShieldCheck, Zap, Clock } from 'lucide-react';

export function ProblemSolutionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const problems = [
    {
      icon: '💸',
      title: 'High Procurement Costs',
      description: 'Multiple intermediaries increase product costs by 30-40%',
    },
    {
      icon: '📉',
      title: 'Limited Credit Access',
      description: 'Rural retailers struggle to get working capital from traditional banks',
    },
    {
      icon: '📦',
      title: 'Inefficient Inventory',
      description: 'Manual tracking leads to stockouts and overstocking',
    },
    {
      icon: '🚛',
      title: 'Poor Logistics',
      description: 'Long delivery times and high transportation costs',
    },
    {
      icon: '💳',
      title: 'Cash Flow Challenges',
      description: 'Retailers need credit while wholesalers need immediate payment',
    },
  ];

  const solutions = [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: 'Direct Connections',
      description: 'Connect retailers directly with wholesalers and manufacturers',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: 'Stock on Credit',
      description: 'Wholesalers get cash upfront, retailers get flexible credit periods',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: 'AI-Powered Tools',
      description: 'Smart inventory management and demand forecasting',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: 'Micro-Warehousing',
      description: 'Shopkeeper-hosted local distribution for faster, cheaper delivery',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-neutral-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-block px-4 py-1.5 bg-accent-red/10 border border-accent-red/20 rounded-full text-accent-red text-sm font-bold mb-6">
              The Challenge & Solution
            </span>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Heading as="h2" className="mb-6 text-neutral-900">
              Solving Rural <span className="text-gradient from-accent-red to-orange-500">Retail Challenges</span>
            </Heading>
          </motion.div>

          <motion.p variants={staggerItem} className="text-xl text-neutral-500 max-w-3xl mx-auto">
            Traditional distribution systems create inefficiencies that hurt rural retailers.
            DukaaOn provides technology-driven solutions to bridge the gap.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-32">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-neutral-100 relative overflow-hidden group hover:shadow-hard transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="w-14 h-14 bg-accent-red/10 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">⚠️</span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">The Problems</h3>
              </div>

              <div className="space-y-4 relative z-10">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                    className="flex gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="text-2xl flex-shrink-0 mt-1">{problem.icon}</div>
                    <div>
                      <h4 className="font-bold text-neutral-900 mb-1">{problem.title}</h4>
                      <p className="text-sm text-neutral-500 leading-relaxed">{problem.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-10 pt-8 border-t border-neutral-100 relative z-10">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-4xl font-bold text-accent-red mb-2">40%</div>
                    <div className="text-sm font-medium text-neutral-500">Higher Costs</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent-red mb-2">60%</div>
                    <div className="text-sm font-medium text-neutral-500">Credit Denied</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-neutral-900 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800 z-0" />
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10 z-0" />

              <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-2xl font-bold">Our Solutions</h3>
              </div>

              <div className="space-y-4 relative z-10">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                    className="relative group/item"
                  >
                    <div className="flex gap-5 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        {solution.icon}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-lg">{solution.title}</h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">{solution.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-10 pt-8 border-t border-white/10 relative z-10">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-4xl font-bold text-secondary mb-2">40%</div>
                    <div className="text-sm font-medium text-neutral-400">Cost Savings</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary mb-2">3x</div>
                    <div className="text-sm font-medium text-neutral-400">Faster Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* How it works diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-neutral-900 mb-4">How DukaaOn Works</h3>
            <p className="text-lg text-neutral-500">A seamless ecosystem connecting all stakeholders</p>
          </div>

          <div className="relative">
            {/* Flow diagram */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: '1', title: 'Order Placement', desc: 'Voice, OCR, or Agentic AI ordering through app', icon: '📱' },
                { step: '2', title: 'Source Finding', desc: 'Nearest wholesaler, distributor, or micro-warehouse', icon: '📍' },
                { step: '3', title: 'AI Processing', desc: 'Smart routing & inventory check', icon: '🤖' },
                { step: '4', title: 'Fulfillment', desc: 'Order preparation & packaging', icon: '📦' },
                { step: '5', title: 'Delivery', desc: 'Fast local delivery to retailer', icon: '🚚' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.15 + 0.9, duration: 0.4 }}
                  className="relative group"
                >
                  <div className="bg-white rounded-3xl p-6 shadow-soft border border-neutral-100 text-center hover:shadow-hard transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-yellow rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Step {item.step}</div>
                    <h4 className="font-bold text-neutral-900 mb-3">{item.title}</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Arrow connector (hidden on mobile, last item) */}
                  {index < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0 text-neutral-300">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Credit & Financing Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800 z-0" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h4 className="text-3xl font-bold text-white mb-4">Credit, Loans & Flexible Payments</h4>
              <p className="text-neutral-400 max-w-2xl mx-auto text-lg">Stock on credit, business loans, and personal loans with flexible repayment from 1 day to months</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                {
                  step: '1',
                  title: 'Retailer Orders',
                  desc: 'Choose credit option at checkout',
                  icon: '🛒',
                  gradient: 'from-blue-500 to-cyan-500',
                },
                {
                  step: '2',
                  title: 'Instant Payment',
                  desc: 'Wholesaler receives full payment immediately',
                  icon: '💵',
                  gradient: 'from-green-500 to-emerald-500',
                },
                {
                  step: '3',
                  title: 'Flexible Terms',
                  desc: 'Repayment period from 1 day to months',
                  icon: '📅',
                  gradient: 'from-purple-500 to-pink-500',
                },
                {
                  step: '4',
                  title: 'Easy Repayment',
                  desc: 'Multiple payment options & reminders',
                  icon: '✅',
                  gradient: 'from-orange-500 to-red-500',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 + 1.2, duration: 0.4 }}
                  className="relative"
                >
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 h-full">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg`}>
                      {item.icon}
                    </div>
                    <div className="text-xs font-bold text-white/60 mb-2 uppercase tracking-wider">Step {item.step}</div>
                    <h5 className="font-bold text-white mb-2 text-lg">{item.title}</h5>
                    <p className="text-sm text-neutral-400">{item.desc}</p>
                  </div>

                  {/* Arrow connector */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-white/20">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Financing Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: '📦',
                  title: 'Stock on Credit',
                  desc: 'Order inventory with flexible payment terms',
                  gradient: 'from-blue-500 to-cyan-500',
                },
                {
                  icon: '🏢',
                  title: 'Business Loans',
                  desc: 'Expand your business with working capital',
                  gradient: 'from-green-500 to-emerald-500',
                },
                {
                  icon: '👤',
                  title: 'Personal Loans',
                  desc: 'Quick personal financing for urgent needs',
                  gradient: 'from-purple-500 to-pink-500',
                },
              ].map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 + 1.6, duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 border border-white/10 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${option.gradient} rounded-xl flex items-center justify-center text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {option.icon}
                  </div>
                  <h5 className="font-bold text-neutral-900 mb-2 text-lg">{option.title}</h5>
                  <p className="text-sm text-neutral-500">{option.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
