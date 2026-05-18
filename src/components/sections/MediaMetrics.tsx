import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { BezelCard } from '../ui/BezelCard';

export function MediaMetrics() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale1 = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.2, 1, 1, 0.2]);
  
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section ref={containerRef} className="py-40 w-full max-w-7xl mx-auto px-4 md:px-8 overflow-hidden relative">
      <div className="flex flex-col md:flex-row gap-16 md:gap-8 items-start">
        {/* Sticky Lateral Text */}
        <div className="w-full md:w-5/12 md:sticky md:top-32 z-10 pr-0 md:pr-12">
          <div className="px-3 py-1 text-[10px] uppercase font-bold tracking-[2px] bg-brand-accent text-white w-max mb-8">
            Viabilidade e Escala
          </div>
          <h2 className="text-[clamp(2.5rem,4vw,4.5rem)] leading-[0.9] font-display font-black uppercase mb-8 text-brand-text tracking-tight">
            COMPRAR DADOS NÃO É <span className="text-brand-accent">DESPESA.</span>
          </h2>
          <p className="text-lg text-brand-text/80 font-light leading-relaxed mb-6">
            A meta agressiva de <strong className="font-bold text-white">+40% no faturamento (20% via digital = ~R$ 20k/mês em nova receita)</strong> escancara a necessidade impiedosa de provar a matemática da mídia paga via validação do custo exato de tração inicial (CAC/CPL).
          </p>
          <div className="bg-brand-text/5 border border-brand-border p-6 mb-6 mt-8 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent" />
            <h4 className="text-[10px] uppercase font-bold tracking-[2px] text-brand-accent mb-3">Benchmarking e Posicionamento</h4>
            <p className="text-sm font-light text-brand-text/70 leading-relaxed mb-4">
              Estudos revelam a falha endêmica do setor local: 90% das corretoras regionais agem como simples planilhas virtuais concorrendo por centavos e jogando leads numa roleta de descontos que desqualifica imediatamente o público A/B, gerando "trauma" ao diretor Kadan. Esta operação foge disso.
            </p>
            <p className="text-sm font-light text-brand-text/70 leading-relaxed">
              O público do Swiss Park não sofre do "desejo de cotação barata". A modelagem mental para tráfego deve espelhar o modelo de <strong className="font-bold uppercase text-white">Private Banking / Wealth Management</strong>: campanhas extremamente furtivas, de viés não alarmista, mas sim orientadas a exclusividade de resolução, solidez da gestão em 14 anos, e "zero esforço do cliente."
            </p>
          </div>
          <p className="text-base text-brand-text/60 font-light leading-relaxed mb-4">
            Estrutura Matriz das Campanhas de Fase 1:
            <br/>1. <strong className="font-bold text-white">Google Ads (Aquisição / Intenção Direta):</strong> Foco absoluto no fundo de funil. Rede de pesquisa hiper-segmentada apenas por CEP/Raio (5km do Swiss Park). Interceptamos estritamente termos diretos que indicam dor imediata. 
            <br/>2. <strong className="font-bold text-white">Meta Ads (Remarketing / Endosso):</strong> Rede de atenção projetada agressivamente para endossar quem aterrissou na landing page via Google mas hesitou. 
          </p>
        </div>

        {/* Scrolling Cards Cascade */}
        <div className="w-full md:w-7/12 flex flex-col gap-6 relative z-0">
          
          {/* Cenário A */}
          <motion.div style={{ scale: scale1, opacity: opacity1 }} className="origin-bottom">
            <BezelCard className="border-brand-border">
              <h3 className="text-[10px] uppercase font-bold tracking-[2px] text-brand-text/60 mb-6">Hipótese de Teste 01</h3>
              <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between">
                <div>
                   <div className="text-brand-text font-display font-black uppercase text-3xl mb-1">CENÁRIO R$ 2.500/MÊS</div>
                   <div className="text-xs text-brand-accent font-bold uppercase tracking-[1px] mt-2">Validação Minimalista Mínima Viável</div>
                </div>
                <div className="md:text-right">
                  <div className="text-sm font-bold text-white">80% Pesquisa Pura (Google Ads)</div>
                  <div className="text-sm font-bold text-white mt-1">20% Validação/Retargeting (Meta)</div>
                </div>
              </div>
              <p className="text-sm text-brand-text/70 mt-6 pt-6 border-t border-brand-border font-light leading-relaxed">
                Neste cenário que tangencia a restrição máxima, o foco recai agressivamente em apenas captar buscas intencionais de forma passiva. As impressões para o perfil decisor (empresários classe A) serão altamente escassas e restritas. O remarketing do Meta não tem caixa para teste A/B robusto de imagens dinâmicas, operando quase numa via única de retarget de site. O aprendizado da plataforma se arrasta de 45 a 60 dias pela escassez do pixel.
              </p>
            </BezelCard>
          </motion.div>

          {/* Cenário B */}
          <motion.div style={{ y: y2 }}>
            <BezelCard className="border-brand-accent relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent" />
              <h3 className="text-[10px] uppercase font-bold tracking-[2px] text-brand-accent mb-6">Hipótese de Teste 02 (RECOMENDADO)</h3>
              <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between">
                <div>
                   <div className="text-brand-accent font-display font-black uppercase text-3xl mb-1">CENÁRIO R$ 3.500/MÊS</div>
                   <div className="text-xs text-brand-text/80 font-bold uppercase tracking-[1px] mt-2">Tração Acelerada & Aporte Inteligente</div>
                </div>
                <div className="md:text-right">
                  <div className="text-sm font-bold text-white">70% Pesquisa Intensa (Google Ads)</div>
                  <div className="text-sm font-bold text-white mt-1">30% Pressão de Remarketing & Display</div>
                </div>
              </div>
              <p className="text-sm text-brand-text/70 mt-6 pt-6 border-t border-brand-border/40 font-light leading-relaxed">
                Este patamar gera o "combustível mínimo" para o aprendizado de máquina contínuo. Ao destinar verba residual madura ao ecossistema Meta, destravar a capacidade de testar as narrativas de dor mapeadas ("Seu patrimônio não é algoritmo") em formatos múltiplos (Carrossel, Vídeo estático de Kadan/Simone), validando o que converte em menos tempo. Desobstruímos o risco de falha de inteligência das plataformas primárias, acelerando a fase de validação e estabilizando o volume inicial de vendas para a migração sistêmica na operação comercial.
              </p>
            </BezelCard>
          </motion.div>

          {/* Metrics KPIs */}
          <motion.div style={{ y: y3 }}>
            <BezelCard>
              <h3 className="text-[10px] uppercase font-bold tracking-[2px] text-brand-text/60 mb-6">Métricas Críticas Primárias de Fase 1 e KPIs Resultantes de Saúde</h3>
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-y-8 gap-x-6">
                <div>
                   <div className="text-4xl font-display font-black text-brand-accent mb-2">CAC</div>
                  <div className="text-[10px] uppercase font-bold tracking-[1px] text-white">Custo de Aquisição de Cliente</div>
                  <div className="text-xs font-light text-brand-text/50 mt-1">Métrica principal de sustentabilidade da escala digital pós-otimização.</div>
                </div>
                <div>
                   <div className="text-4xl font-display font-black text-white mb-2">CPA</div>
                  <div className="text-[10px] uppercase font-bold tracking-[1px] text-white">Custo por Ação (Agendamento)</div>
                  <div className="text-xs font-light text-brand-text/50 mt-1">Custo absoluto gerar um contato útil avaliado pela triagem.</div>
                </div>
                <div>
                   <div className="text-4xl font-display font-black text-brand-text mb-2">CPL</div>
                  <div className="text-[10px] uppercase font-bold tracking-[1px] text-white">Custo Mínimo Viável de Lead B2C Premium</div>
                  <div className="text-xs font-light text-brand-text/50 mt-1">Ativo de entrada que precisa ser agressivamente validado.</div>
                </div>
                <div>
                   <div className="text-4xl font-display font-black text-brand-accent mb-2">ROAS</div>
                  <div className="text-[10px] uppercase font-bold tracking-[1px] text-white">Retorno Publicitário sobre a Ad-Spend</div>
                  <div className="text-xs font-light text-brand-text/50 mt-1">Multiplicador de retorno esperado na venda validada.</div>
                </div>
              </div>
            </BezelCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
