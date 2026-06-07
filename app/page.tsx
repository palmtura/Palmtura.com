'use client';

import { motion } from 'motion/react';

export default function Page() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050114] font-sans text-white">
      {/* Ambient glowing background orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-700/30 blur-[120px] pointer-events-none" />

      {/* Grid overlay for a structural, technical feel */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none opacity-50" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-12 py-16 md:py-20 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[3rem] shadow-2xl max-w-4xl mx-4"
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

        <h1 className="font-space text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400 pb-2">
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

      {/* Decorative lightning/energy streaks */}
      <motion.div 
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: [0.2, 0.8, 0.2] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "circOut"
        }}
        className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-20 rotate-[15deg] pointer-events-none"
      />
      <motion.div 
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: [0.1, 0.6, 0.1] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatType: "reverse",
          delay: 1,
          ease: "circOut"
        }}
        className="absolute top-0 right-[35%] w-[1px] h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-20 rotate-[-25deg] pointer-events-none"
      />

      {/* Lightning Strikes Overlay */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen mix-blend-lighten z-0">
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-cyan-400/10 -skew-y-12 block"></div>
        <div className="absolute bottom-[30%] left-0 w-full h-[1px] bg-purple-400/10 skew-y-6 block"></div>
      </div>
    </div>
  );
}
