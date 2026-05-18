import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden">
      {/* Deep Radial Ambient - using brand background for flat look */}
      <div className="absolute inset-0 z-0 bg-brand-bg pointer-events-none" />
      
      {/* Noise overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")'}} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="px-3 py-1 text-[10px] uppercase font-bold tracking-[2px] bg-brand-accent text-white mb-8"
        >
          Diagnóstico e Mapeamento Estratégico
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, ease: [0.32, 0.72, 0, 1] }}
          className="text-[clamp(3.5rem,7vw,84px)] leading-[0.9] tracking-tight font-display font-black uppercase text-brand-text mb-10 w-full"
        >
          CRESCIMENTO ESTRATÉGICO
          <br className="hidden md:block" />
          {' '}<span className="text-brand-accent">E TRANSIÇÃO DIGITAL.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="max-w-2xl text-xl text-brand-text/80 mb-16 font-light leading-relaxed"
        >
          O fim da dependência do boca a boca.
          Um planejamento implacável formatado como máquina de vendas para transformar a aquisição de clientes da Ekto Grupo no mercado de alto padrão em Campinas.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="group relative bg-brand-accent text-white px-8 py-4 font-bold uppercase tracking-widest text-sm flex items-center justify-between gap-6 overflow-hidden active:scale-[0.98] transition-all duration-300">
            <span>EXECUTAR ROADMAP</span>
            <div className="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
