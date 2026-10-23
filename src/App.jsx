import React, { useState } from 'react';
import { Play, Mic, Sliders, Settings, UploadCloud } from 'lucide-react';

const scripts = [
  {
    day: "Segunda-feira",
    theme: "Equalização Dinâmica",
    action: "Tela dividida: rosto falando / REAPER mostrando o Waves F6 atuando no bumbo.",
    hook: "Como eu limpo graves embolados em 10 segundos.",
    script: "Pare de usar EQ estático no seu kick. O bumbo precisa respirar junto com o baixo. Eu abro o Waves F6, crio um node dinâmico na região dos 60Hz e configuro o sidechain para reagir só quando o baixo bate forte. O grave limpa na hora, sem perder o peso. Testa isso na sua próxima mix.",
    cta: "Salva esse vídeo pra não esquecer quando for mixar."
  },
  {
    day: "Terça-feira",
    theme: "Saturação Rápida",
    action: "Close na tela mostrando o OneKnob Drive numa track de voz ou synth.",
    hook: "O plugin mais idiota que eu uso em todas as mixagens.",
    script: "Às vezes você não precisa de 15 parâmetros. Você precisa de atitude. Eu jogo o OneKnob Drive nos synths mais dark pop pra trazer aquela distorção harmônica rasgada. Um botão, zero dor de cabeça. Aumenta até soar perigoso, depois recua um pouco.",
    cta: "Me segue aqui para mais dicas de workflow rápido."
  },
  {
    day: "Quarta-feira",
    theme: "Monitoração de Referência",
    action: "Mostrando o fone Audio-Technica ATH-M20x.",
    hook: "Não compre monitores caros antes de entender isso.",
    script: "Eu vendi meus monitores antigos e fui direto pro fone de ouvido. Por quê? Porque um quarto sem tratamento acústico mente pra você. Com meu ATH-M20x, eu tenho a resposta direta no meu ouvido. Minhas mixagens traduzem muito melhor agora. Se o seu quarto é pequeno, o fone é seu melhor amigo.",
    cta: "Comenta aqui: fone ou monitor, qual você prefere?"
  },
  {
    day: "Quinta-feira",
    theme: "Workflow Dark Pop",
    action: "Sessão do REAPER com track colorida em tons escuros e sub-bass.",
    hook: "O segredo do grave do primeiro álbum da Billie Eilish.",
    script: "Sabe aquele sub que preenche tudo em 'bury a friend'? O truque não é só o volume, é a falta de concorrência. Você precisa cortar os graves de literalmente tudo que não for o sub ou o kick. No REAPER, eu crio um atalho pra jogar um high-pass em 100Hz em todas as tracks secundárias com um clique.",
    cta: "Clica no link da bio pra conhecer meu trabalho."
  },
  {
    day: "Sexta-feira",
    theme: "Organização de Stems",
    action: "Mostrando a aba de andamento da planilha PROJECT CONTROL.",
    hook: "Como eu não enlouqueço trabalhando com outros músicos.",
    script: "Receber arquivos bagunçados acaba com a vibe da mix. No projeto Aldimar, eu e o baterista usamos um fluxo simples. Ele grava as tracks de bateria, e a gente atualiza a planilha PROJECT CONTROL. Eu baixo as stems, alinho no REAPER e começo. Organização não é chato, é o que te dá tempo pra ser criativo.",
    cta: "Compartilha isso com aquele amigo da sua banda."
  }
];

export default function App() {
  const [activeScript, setActiveScript] = useState(0);

  return (
    <div className="min-h-screen bg-zinc-950 font-sans p-6 text-zinc-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <aside className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="border-b-4 border-emerald-500 pb-4">
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Audio Radar</h1>
            <p className="font-mono text-xs text-emerald-400 mt-2">Vibe Coding Dashboard v1.0</p>
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="text-xs uppercase tracking-widest font-bold text-zinc-500 mb-2">Painel de Acesso</div>
            <button className="flex items-center gap-3 w-full p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors text-left rounded">
              <Play size={16} className="text-emerald-500"/> <span className="font-mono text-sm">Varredura YouTube</span>
            </button>
            <button className="flex items-center gap-3 w-full p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors text-left rounded">
              <Mic size={16} className="text-emerald-500"/> <span className="font-mono text-sm">Transcrições</span>
            </button>
            <button className="flex items-center gap-3 w-full p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 transition-colors text-left rounded">
              <Settings size={16} /> <span className="font-mono text-sm">Roteiros Semanais</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-2/3 flex flex-col gap-6">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Sliders size={20} className="text-emerald-500"/>
                Linha de Produção
              </h2>
              <span className="bg-zinc-800 text-xs font-mono py-1 px-3 rounded-full text-zinc-400">Gemini 1.5 Flash</span>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-4 mb-4 hide-scrollbar">
              {scripts.map((item, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveScript(idx)}
                  className={`whitespace-nowrap px-4 py-2 font-mono text-sm rounded transition-all ${activeScript === idx ? 'bg-emerald-500 text-black font-bold' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`}
                >
                  {item.day.split('-')[0]}
                </button>
              ))}
            </div>

            <div className="border border-zinc-700 bg-zinc-950 p-6 rounded-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-1">Tema</h3>
                  <p className="text-lg font-bold text-white">{scripts[activeScript].theme}</p>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-1">Ação Visual</h3>
                  <p className="font-mono text-sm text-yellow-400/90">{scripts[activeScript].action}</p>
                </div>

                <div className="bg-zinc-900 p-4 border border-zinc-800 rounded">
                  <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">Teleprompter</h3>
                  <p className="text-emerald-400 font-bold mb-2">"{scripts[activeScript].hook}"</p>
                  <p className="text-zinc-300 leading-relaxed mb-4">{scripts[activeScript].script}</p>
                  <p className="text-zinc-400 italic text-sm"><span className="font-bold not-italic">CTA:</span> {scripts[activeScript].cta}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-bold hover:bg-zinc-200 transition-colors">
                Exportar <UploadCloud size={16} />
              </button>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}
