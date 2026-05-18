import { motion } from 'motion/react';
import { BezelCard } from '../ui/BezelCard';

export function Benchmarking() {
  return (
    <section className="py-32 w-full max-w-7xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
        className="mb-20"
      >
        <div className="px-3 py-1 text-[10px] uppercase font-bold tracking-[2px] bg-brand-accent text-white w-max mb-6">
          Análise de Mercado
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight w-full max-w-3xl text-brand-text">
          PROJEÇÃO DE BENCHMARKING DE MERCADO.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <BezelCard className="col-span-1 lg:col-span-2 border-brand-accent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent" />
          <h3 className="text-[10px] uppercase font-bold tracking-[2px] text-brand-text/60 mb-6">Brasil — O Abismo B2B</h3>
          <div className="text-[4rem] font-display font-black leading-none text-brand-accent mb-4">+130k</div>
          <div className="text-xl font-bold uppercase mb-2">Corretoras Ativas</div>
          <p className="text-sm text-brand-text/70 leading-relaxed font-light">
            Mais de 130 mil corretoras ativas no país, porém menos de <strong className="text-white font-bold">5%</strong> atuam de forma consultiva no digital com campanhas estruturadas. A esmagadora maioria opera engessada como "planilha de cálculo", disputando clientes unicamente pelo vetor de preço (leilão de centavos). O oceano azul está no atendimento High-Ticket focado em resolução de dores.
          </p>
        </BezelCard>

        <BezelCard className="col-span-1">
          <h3 className="text-[10px] uppercase font-bold tracking-[2px] text-brand-text/60 mb-6">Campinas / Swiss Park</h3>
          <div className="text-4xl font-display font-black leading-none text-white mb-4">RAIO 5KM</div>
          <div className="text-sm font-bold uppercase mb-2 text-brand-accent">Concentração de Renda</div>
          <p className="text-sm text-brand-text/70 leading-relaxed font-light">
            Um dos maiores PIBs do interior. O Swiss Park possui enorme densidade de diretores e empresários residentes que buscam conveniência e blindagem, mas ignoram completamente corretores convencionais de "oferta fria".
          </p>
        </BezelCard>

        <BezelCard className="col-span-1">
           <h3 className="text-[10px] uppercase font-bold tracking-[2px] text-brand-text/60 mb-6">O Gap Operacional</h3>
           <div className="text-4xl font-display font-black leading-none text-white mb-4">VALOR x PREÇO</div>
           <div className="text-sm font-bold uppercase mb-2 text-brand-accent">A Disputa do Cliente Elite</div>
           <p className="text-sm text-brand-text/70 leading-relaxed font-light">
            O cliente Classe A foge de orçamentos amadores. A Ekto ocupará o vácuo deixado pelas corretoras padronizadas, entregando Gestão de Risco com o verniz de atendimento de grandes bancos (Wealth Management).
           </p>
        </BezelCard>
      </div>
    </section>
  );
}
