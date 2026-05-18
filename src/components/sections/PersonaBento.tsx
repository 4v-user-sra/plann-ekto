import { motion } from 'motion/react';
import { BezelCard } from '../ui/BezelCard';

export function PersonaBento() {
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
          Comportamento
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight w-full max-w-2xl text-brand-text">
          PERSONA E <span className="text-brand-accent">COMUNICAÇÃO.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-dense gap-6">
        {/* Main Persona Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="md:col-span-1 md:row-span-2"
        >
          <BezelCard className="h-full">
            <h3 className="text-[10px] uppercase font-bold tracking-[2px] text-brand-text/60 mb-6">Alvo Demográfico</h3>
            <div className="text-3xl font-display font-bold uppercase mb-4 leading-tight text-brand-text">
              EMPRESÁRIOS E<br/>DIRETORES LOCAIS
            </div>
            <p className="text-sm text-brand-text/70 leading-relaxed font-light mb-8">
              Público de Classe A e B, majoritariamente atuantes em um raio micro-segmentado de 5km do Swiss Park, em Campinas. Possuem altíssima capacidade financeira orgânica, porém enfrentam uma escassez profunda de tempo para gerir minúcias contratuais.
            </p>
            <div className="space-y-4 pt-6 border-t border-brand-border/50">
              <div>
                <div className="text-[10px] uppercase tracking-[1px] text-brand-accent mb-1">Dores Mapeadas</div>
                <div className="text-sm text-brand-text/80 font-light">Amadorismo no atendimento digital de corretores independentes, lentidão burocrática absurda, e absoluta falta de uma gestão centralizada, consolidada e transparente de todo o seu patrimônio.</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[1px] text-brand-text/50 mb-1">Desejos Inconscientes</div>
                <div className="text-sm text-brand-text/80 font-light">Conveniência máxima sem fricção. Buscam uma proteção jurídica impecável e valorizam profundamente um atendimento "concierge" ultra-resolutivo onde eles não precisem atuar.</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[1px] text-brand-text/50 mb-1">Objeções Comuns</div>
                <div className="text-sm text-brand-text/80 font-light">Elevado preconceito com o estigma do "vendedor de seguros de porta em porta". Medo crônico de pagar prêmios caros e ser abandonado pela corretora no momento crítico do sinistro, sem entrega de valor real.</div>
              </div>
            </div>
          </BezelCard>
        </motion.div>

        {/* Level of consciousness */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="md:col-span-1 md:row-span-1"
        >
          <BezelCard className="h-full">
            <h3 className="text-[10px] uppercase font-bold tracking-[2px] text-brand-text/60 mb-4">Nível de Consciência</h3>
            <div className="text-5xl font-display font-black uppercase mb-2 text-brand-accent">ALTÍSSIMO</div>
            <p className="text-sm text-brand-text/70 leading-relaxed font-light">
              Nas verticais de entrada (Auto e Residência), o executivo já possui ciência absoluta da necessidade de proteção contra sinistros ou do prazo limite de renovação de fim de vigência de uma apólice atual. O tráfego pago não terá o papel de "criar necessidade", mas puramente capturar e direcionar a <strong className="text-brand-accent">demanda de busca transacional ativa</strong> dentro dessa geografia restrita, apresentando a Ekto no momento cirúrgico da busca.
            </p>
          </BezelCard>
        </motion.div>

        {/* Purchase Drivers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="md:col-span-1 md:row-span-1"
        >
          <BezelCard className="h-full">
            <h3 className="text-[10px] uppercase font-bold tracking-[2px] text-brand-text/60 mb-4">Principais Drivers de Decisão</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 mt-2 bg-brand-accent shrink-0" />
                <span className="text-sm text-brand-text/80 font-light leading-snug">Certeza matemática de <strong className="font-bold text-white">Segurança Jurídica</strong> e proteção implacável do patrimônio familiar conquistado.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 mt-2 bg-brand-text/50 shrink-0" />
                <span className="text-sm text-brand-text/80 font-light leading-snug">Gatilho de <strong className="font-bold text-white">Reputação</strong>: confiam mais nos "14 anos de porta aberta na região" do que num site de apostas de cotação moderna.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 mt-2 bg-brand-text/20 shrink-0" />
                <span className="text-sm text-brand-text/80 font-light leading-snug">Garantia absoluta de <strong className="font-bold text-white">Otimização de Tempo</strong>. A burocracia precisa ficar 100% na mão da corretora.</span>
              </li>
            </ul>
          </BezelCard>
        </motion.div>

        {/* Communication Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="md:col-span-2 md:row-span-1"
        >
          <BezelCard className="h-full group">
            <h3 className="text-[10px] uppercase font-bold tracking-[2px] text-brand-text/60 mb-6">Manifesto e Mapeamento Cênico de Narrativa Estratégica</h3>
            <div className="flex flex-col xl:flex-row gap-8">
              <div className="flex-1">
                <div className="text-brand-text font-display font-bold uppercase text-xl mb-3">O VERNIZ PRESIDENCIAL</div>
                <div className="text-sm text-brand-text/70 font-light leading-relaxed">
                  Linguagem corporativa rigorosa, técnica e estritamente sóbria. Devemos assumir um <strong className="font-bold text-brand-accent">distanciamento profilático imediato</strong> do tom histérico, popular e de apelo raso por urgência massificada dos grandes "cotadores" da internet (guerra de preços). A Ekto não panfleta; ela realiza balanço atuarial e blindagem de passivos. O cliente precisa enxergar no site um escritório boutique, análogo à comunicação que as áreas de <strong className="text-brand-text">Wealth Management</strong> dos bancos de elite entregam aos seus acionistas.
                </div>
              </div>
              <div className="w-px bg-brand-border hidden xl:block" />
              <div className="flex-1">
                <div className="text-brand-accent uppercase font-display font-bold text-xl mb-3">ÂNGULOS PSICOLÓGICOS</div>
                <div className="text-sm text-brand-text/70 font-light leading-relaxed space-y-3">
                  <div className="border-l-2 border-brand-accent pl-3">"Quem protege as paredes de quem sustenta o seu padrão?"</div>
                  <div className="border-l-2 border-brand-accent pl-3">"A inteligência analítica que blinda o seu seguro patrimonial corporativo."</div>
                  <div className="border-l-2 border-brand-accent pl-3">"O esforço de uma vida e o seu patrimônio não podem ficar nas mãos de um algoritmo programado apenas para achar a franquia mais barata."</div>
                </div>
              </div>
            </div>
          </BezelCard>
        </motion.div>

      </div>
    </section>
  );
}
