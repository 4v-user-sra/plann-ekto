import { motion } from 'motion/react';
import { BezelCard } from '../ui/BezelCard';
import { ArrowRight } from 'lucide-react';

export function OperationsRoadmap() {
  const roadmapSteps = [
    { title: "Sincronia do SLA e Acordos", desc: "SLA Digital Operacional. Aprovação de layouts/criativos em tempo < 48h pela Isabella. Rigoroso acordo comercial com equipe de balcão (Kadan/Mariana) para abordar leads originados via web em < 15 minutos." },
    { title: "Arquitetura e Coleta de Dados", desc: "Deploy avançado via Google Tag Manager de rotinas Analytics (Tagueamento profundo do funil), interligando passagens de UTM e webhooks nativamente dentro da central de dados principal: o CRM Ágil." },
    { title: "A Primeira Ofensiva (Isca Fria)", desc: "Entrada em produção da campanha piloto de Tração. Anúncios em leilões Google focados unicamente nas dores e pesquisas de Seguro Automóvel emitidas restritamente na geografia do condomínio Swiss Park." },
    { title: "Otimização Progressiva Contínua", desc: "Acompanhamento cirúrgico em 4 sprints. Semana 1-2 foca-se na limpeza de palavras-chave nocivas e validação de CPC e CTR. Semana 3-4 estabiliza volume de impressões da conta com descoberta de margem real de CPL (Custo por Lead). Mês 2 consolida o CAC para a diretoria, viabilizando o ganho na escala de Orçamento ou na velocidade do ciclo." }
  ];

  return (
    <section className="py-40 w-full max-w-7xl mx-auto px-4 md:px-8">
      <div className="w-full flex justify-center mb-16">
        <div className="px-3 py-1 text-[10px] uppercase font-bold tracking-[2px] bg-brand-accent text-white w-max">
          Operação, Fases & Entregáveis
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 w-full">
        {/* Accordions / Steps */}
        <div className="w-full md:w-3/5 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-12 tracking-tight leading-[0.9]">O ROADMAP <span className="text-brand-accent">PROGRESSIVO.</span></h2>
          {roadmapSteps.map((step, i) => (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
              key={i}
              className="group cursor-pointer"
            >
              <BezelCard className="group-hover:border-brand-accent transition-colors duration-500">
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  <div className="text-brand-accent text-5xl font-display font-black">{'0' + (i + 1)}</div>
                  <div className="flex-1">
                    <div className="text-xl font-bold uppercase text-brand-text mb-2">{step.title}</div>
                    <div className="text-sm font-light text-brand-text/60">{step.desc}</div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 border border-brand-border bg-brand-panel items-center justify-center group-hover:scale-105 transition-all duration-500">
                    <ArrowRight className="w-5 h-5 text-brand-accent shadow-brand-accent drop-shadow-lg" strokeWidth={2} />
                  </div>
                </div>
              </BezelCard>
            </motion.div>
          ))}
        </div>

        {/* Action / Final Goal */}
        <div className="w-full md:w-2/5 flex">
          <BezelCard className="w-full h-full border-brand-accent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent" />
            <div className="h-full flex flex-col justify-center items-center text-center px-6 py-12">
              <h3 className="text-[10px] uppercase font-bold tracking-[2px] text-brand-accent mb-8">Critério de Sucesso do Ciclo</h3>
              <div className="text-[clamp(2.5rem,3vw,3.5rem)] font-display font-black uppercase leading-[0.9] text-brand-text tracking-tight">
                PROVAR A MÁQUINA COM <span className="text-brand-accent">MÚLTIPLOS.</span>
              </div>
              <p className="mt-8 text-sm font-light text-brand-text/60 max-w-xs leading-relaxed">
                A primeira venda digital precisa ser 100% rastreada e mapeada dentro do CRM Ágil, provando matematicamente para a diretoria a eficácia bruta da aquisição digital.
              </p>
            </div>
          </BezelCard>
        </div>
      </div>
    </section>
  );
}
