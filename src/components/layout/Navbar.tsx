import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 border-b border-brand-border bg-brand-bg"
      >
        <div className="font-display font-black tracking-widest text-xl uppercase">EKTO GRUPO</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-10 h-10 flex items-center justify-center border border-brand-border bg-brand-panel hover:bg-brand-accent hover:border-brand-accent transition-colors duration-300"
        >
          <Menu className="w-5 h-5" strokeWidth={2} />
        </button>
      </motion.nav>

      {/* Expanded State Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 z-40 bg-brand-bg/95 backdrop-blur-3xl flex items-center justify-center"
        >
          <div className="absolute top-6 right-6">
            <button
              onClick={() => setIsOpen(false)}
              className="relative w-10 h-10 flex items-center justify-center border border-brand-border bg-brand-panel hover:bg-brand-accent transition-colors"
            >
              <X className="w-5 h-5" strokeWidth={1} />
            </button>
          </div>
          <ul className="space-y-8 text-center">
            {['Visão Estratégica', 'Oferta & Funil', 'Mídia & KPI', 'Operacional'].map((item, idx) => (
              <motion.li
                key={item}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.1 + idx * 0.1,
                  duration: 0.8,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-brand-text/70 hover:text-brand-accent cursor-pointer transition-colors duration-300"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
}
