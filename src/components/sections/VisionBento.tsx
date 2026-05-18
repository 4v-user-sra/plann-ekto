import { motion } from 'motion/react';
import { BezelCard } from '../ui/BezelCard';

export function VisionBento() {
  return (
    <section className="py-32 md:py-40 w-full max-w-7xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
        className="mb-20 text-center md:text-left"
      >
        <div className="px-3 py-1 text-[10px] uppercase font-bold tracking-[2px] bg-brand-accent text-white w-max mb-6 mx-auto md:mx-0">
          Fundamentos
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight w-full max-w-2xl text-brand-text">
          VISÃO ESTRATÉGICA E OFERTA.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-dense gap-6">
        {/* Large Element: Diagnóstico */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="md:col-span-2 md:row-span-2"
        >
          <BezelCard className="h-full group">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-[10px] uppercase font-bold tracking-[2px] text-brand-text/60 mb-6">Momento Atual</h3>
                <p className="text-3xl leading-[1.1] font-display font-bold uppercase mb-6 text-brand-text">
                  A empresa opera há 14 anos faturando R$250k/mês de forma estagnada, dependendo 95% de indicações.
                </p>
                <p className="text-sm text-brand-text/70 leading-relaxed font-light">
                  A urgência primária do projeto é a construção de previsibilidade. A maior oportunidade de transição reside no modelo "Land and Expand": adquirir o cliente pessoa física 
                  (com a isca do seguro automóvel) e tracionar para B2B corporativo na região restrita e de alta renda do Swiss Park. O objetivo absoluto é contornar
                  a descrença gerada por resultados pífios de prestadores de serviço anteriores, estabelecendo um processo comercial que não dependa exclusivamente da rede orgânica de contatos.
                </p>
              </div>
              <div className="mt-12 opacity-50 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-luminosity">
                <img src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=800" alt="Corporate structure" className="rounded-xl object-cover h-48 w-full grayscale" />
              </div>
            </div>
          </BezelCard>
        </motion.div>

        {/* Small Element 1: Prioridades */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="md:col-span-1 md:row-span-1"
        >
          <BezelCard className="h-full border-brand-accent">
            <h3 className="text-[10px] uppercase font-bold tracking-[2px] text-brand-text/60 mb-4">Gargalo Zero</h3>
            <div className="text-5xl font-display font-black uppercase mb-2 text-brand-accent">CRM</div>
            <p className="text-sm text-brand-text/70 leading-relaxed font-light">
              Implementação implacável de rastreabilidade. O uso subutilizado do CRM Ágil é o primeiro ofensor. O funil precisa se tornar a fundação central para escalar o atendimento (Kadan e Mariana) e validar o Custo de Aquisição.
            </p>
          </BezelCard>
        </motion.div>

        {/* Small Element 2: Posicionamento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="md:col-span-1 md:row-span-1"
        >
          <BezelCard className="h-full">
            <h3 className="text-[10px] uppercase font-bold tracking-[2px] text-brand-text/60 mb-4">Direcionamento</h3>
            <div className="text-2xl font-display font-bold uppercase mb-2 leading-tight text-brand-text">GESTÃO DE RISCOS &<br/><span className="text-brand-accent">PROTEÇÃO.</span></div>
            <p className="text-sm text-brand-text/70 leading-relaxed font-light">
              Fuga radical da guerra de preços. Uma postura puramente consultiva, elevando o serviço à categoria de blindagem do patrimônio, focada exclusivamente na Classe A e B locais.
            </p>
          </BezelCard>
        </motion.div>

        {/* Medium Horizontal Element: Funil de Ofertas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="md:col-span-2 md:row-span-1"
        >
          <BezelCard className="h-full group">
            <h3 className="text-[10px] uppercase font-bold tracking-[2px] text-brand-text/60 mb-6">Arquitetura de Upsell (Jornada de Produtos)</h3>
            <div className="flex flex-col xl:flex-row gap-6">
              <div className="flex-1 border-l-2 border-brand-text pl-4">
                <div className="text-brand-text font-display font-bold uppercase text-xl mb-1">TRAÇÃO (ENTRADA)</div>
                <div className="text-sm text-brand-text/70 font-light">Seguro Auto e Residência. Representam o "arroz com feijão". Decisão de ciclo curto e alta previsibilidade local para quebrar a inércia comercial.</div>
              </div>
              <div className="flex-1 border-l-2 border-brand-accent pl-4">
                <div className="text-brand-accent uppercase font-display font-bold text-xl mb-1">LUCRO & ESCALA (BACK-END)</div>
                <div className="text-sm text-brand-text/70 font-light">Planos de saúde corporativos (onde a retenção atinge 100% do valor nas três primeiras parcelas) e Seguros Patrimoniais PJ. Onde mora a verdadeira margem do negócio.</div>
              </div>
            </div>
          </BezelCard>
        </motion.div>
        
        {/* New Element: Meta e Viabilidade */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="md:col-span-2 md:row-span-1"
        >
          <BezelCard className="h-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent" />
            <h3 className="text-[10px] uppercase font-bold tracking-[2px] text-brand-accent mb-6">Meta, Métricas e Viabilidade de Escala</h3>
            <div className="flex flex-col gap-4">
              <div className="text-3xl font-display font-black uppercase text-brand-text leading-tight">
                CRESCIMENTO GLOBAL DE <span className="text-brand-accent font-bold">40%</span> EM 2026.
              </div>
              <p className="text-sm text-brand-text/70 font-light leading-relaxed">
                A meta macro estabelece o crescimento orgânico associado ao tráfego. O projeto prevê que o Marketing Digital seja o impulsionador direto de <strong className="font-normal text-brand-text">20% desse novo volume total</strong>.
              </p>
              <div className="pt-4 border-t border-brand-border mt-2">
                <div className="text-xs font-bold uppercase tracking-[1px] text-brand-accent mb-2">O QUE PRECISA ACONTECER:</div>
                <p className="text-sm text-brand-text/60 font-light leading-relaxed">
                  Para o cenário se sustentar (visando R$ 18k a R$ 20k/mês em nova receita recorrente estritamente pelo digital), os primeiros ciclos de mídia possuem função cirúrgica: <strong className="font-normal text-brand-text">descobrir e validar os indicadores que sustentam a operação</strong>. Nenhuma escala é possível sem antes homologar precisamente o Custo por Lead (CPL) geolocalizado, a capacidade de conversão em leads frios do balcão offline, e o verdadeiro CAC.
                </p>
              </div>
            </div>
          </BezelCard>
        </motion.div>

      </div>
    </section>
  );
}
