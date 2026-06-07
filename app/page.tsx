'use client';

import { motion } from 'motion/react';
import { MonitorSmartphone, Paintbrush, Zap } from 'lucide-react';

export default function Page() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-[#050114] font-sans text-white">
      {/* Ambient glowing background orbs (fixed) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-700/30 blur-[120px]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-50" />
      </div>

      {/* Decorative lightning/energy streaks (fixed) */}
      <div className="fixed inset-0 pointer-events-none z-0 mix-blend-screen mix-blend-lighten overflow-hidden">
        <motion.div 
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: [0.1, 0.6, 0.1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "circOut" }}
          className="absolute top-0 left-[20%] w-[1px] h-[150%] bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-20 origin-top rotate-[15deg]"
        />
        <motion.div 
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: [0.05, 0.4, 0.05] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1, ease: "circOut" }}
          className="absolute top-0 right-[35%] w-[1px] h-[150%] bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-20 origin-top rotate-[-25deg]"
        />
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-cyan-400/10 -skew-y-12"></div>
        <div className="absolute bottom-[30%] left-0 w-full h-[1px] bg-purple-400/10 skew-y-6"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative flex flex-col items-center text-center px-8 py-16 md:px-12 md:py-20 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[3rem] shadow-2xl max-w-4xl w-full"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(6, 182, 212, 0)",
                "0 0 40px 10px rgba(6, 182, 212, 0.3)",
                "0 0 0 0 rgba(6, 182, 212, 0)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="mb-8 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-[10px] font-bold tracking-[0.2em] uppercase"
          >
            <span>
              New Website
            </span>
          </motion.div>

          <h1 className="font-space text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400 pb-2">
            Coming Soon
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-indigo-100/60 font-light leading-relaxed max-w-lg mx-auto"
          >
            We are crafting a new digital experience. 
            <br className="hidden md:block" /> Stay tuned for something extraordinary.
          </motion.p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 flex flex-col items-center px-4 py-24 w-full max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1 }}
           className="text-center mb-16"
        >
          <div className="mb-6 flex justify-center">
            <div className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[10px] font-bold tracking-[0.2em] uppercase">
              Our Expertise
            </div>
          </div>
          <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 pb-2">
            Web Design Service<br className="hidden md:block" /> for Professionals
          </h2>
          <p className="mt-6 text-indigo-100/60 text-lg max-w-xl mx-auto font-light">
            We deliver high-end, conversion-focused websites engineered for established businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <FeatureCard 
            icon={<MonitorSmartphone className="w-8 h-8 text-cyan-400" />}
            title="Responsive Architecture"
            description="Flawless experiences across all devices, built on modern scaling principles to adapt to any screen size."
            delay={0.1}
          />
          <FeatureCard 
            icon={<Paintbrush className="w-8 h-8 text-purple-400" />}
            title="Premium Styling"
            description="Stand out with bespoke visual design, custom typography, and atmospheric frosted glass aesthetics."
            delay={0.2}
          />
          <FeatureCard 
            icon={<Zap className="w-8 h-8 text-blue-400" />}
            title="High Performance"
            description="Blazing fast load times and an optimized codebase for superior SEO rankings and conversions."
            delay={0.3}
          />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative z-10 py-10 border-t border-white/5 mt-auto flex justify-center">
          <p className="text-[10px] text-white/30 font-semibold tracking-widest uppercase">
            © {new Date().getFullYear()} Lumina Digital. All rights reserved.
          </p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-start p-8 backdrop-blur-2xl bg-white/[0.02] border border-white/10 rounded-3xl hover:bg-white/[0.04] transition-all duration-300 group shadow-lg"
    >
      <div className="p-4 bg-white/5 rounded-2xl border border-white/10 mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 ease-out">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{title}</h3>
      <p className="text-indigo-100/50 font-light leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
