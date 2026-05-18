import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { BezelCard } from '../ui/BezelCard';

export function ContentStrategy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={containerRef} className="py-32 md:py-40 w-full max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-16 md:gap-12 items-center">
        
        {/* Visual / Abstract Representation of Content */}
        <div className="w-full md:w-1/2 relative h-[500px] flex items-center justify-center">
          <motion.div style={{ y: y1 }} className="absolute z-10 w-2/3 right-0 top-10 shadow-2xl">
            <BezelCard className="bg-[#0A0A0A]">
              <div className="flex items-center gap-4 border-b border-brand-border pb-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-text/10" />
                <div>
                  <div className="text-sm font-serif text-brand-text">Ekto Grupo</div>
                  <div className="text-[10px] text-brand-text/50 uppercase tracking-[1px]">Consultoria de Risco</div>
                </div>
              </div>
              <p className="text-xs text-brand-text/70 italic leading-relaxed">
                "Não vendemos seguros. Desenhamos a blindagem jurídica e patrimonial da sua operação. Case de sucesso: Redução de 30% em passivos na indústria X."
              </p>
            </BezelCard>
          </motion.div>

          <motion.div style={{ y: y2 }} className="absolute z-0 w-2/3 left-0 bottom-20 opacity-50 blur-[1px]">
            <BezelCard className="bg-brand-bg border-brand-border">
              <div className="w-full h-32 bg-brand-text/5 rounded-md mb-4" />
              <div className="w-2/3 h-4 bg-brand-text/10 rounded-sm mb-2" />
              <div className="w-1/2 h-4 bg-brand-text/10 rounded-sm" />
            </BezelCard>
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 pr-0 md:pr-8">
          <div className="px-3 py-1 text-[10px] uppercase font-bold tracking-[2px] bg-brand-accent text-white w-max mb-8">
            Estratégia de Conteúdo
          </div>
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] leading-[0.9] font-display font-black uppercase mb-8 text-brand-text tracking-tight">
            O CONTEÚDO É O SEU <br/><span className="text-brand-accent">CARTÃO PREMIUM.</span>
          </h2>
          <p className="text-base text-brand-text/80 font-light leading-relaxed mb-10">
            A estratégia orgânica e de redes sociais não foca em viralidade infantil ou tendências (trends). O objetivo do feed é validar autoridade de mercado (14 anos) para o executivo cético que buscar "Ekto Grupo" após ser impactado por um anúncio.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase font-bold tracking-[2px] text-brand-accent mb-2">Ajustes Estruturais (Bio & Feed)</h3>
              <p className="text-sm text-brand-text/60 font-light leading-relaxed">
                Reformulações da biografia para refletir claramente o posicionamento: "Gestão de Riscos e Proteção Patrimonial para Executivos | Swiss Park, Campinas". Padronização visual (cores corporativas) e limpeza de postagens desalinhadas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-brand-border">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[2px] text-white mb-2">Para Conversão</h4>
                <p className="text-sm text-brand-text/50 font-light leading-relaxed">
                  Estudos de caso reais (sem citar nomes) provando economia e redução de litígios. Depoimentos B2B e escopo de atuação (Saúde, Patrimonial, Auto).
                </p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[2px] text-white mb-2">Para Relacionamento</h4>
                <p className="text-sm text-brand-text/50 font-light leading-relaxed">
                  Visão dos sócios (Kadan, Simone). Posicionamento de liderança de mercado. Bastidores focados na técnica "concierge" de atendimento ao cliente A/B.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
