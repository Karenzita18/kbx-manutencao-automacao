"use client";

import React from "react";
import Image from "next/image";

interface Servico {
  id: string;
  title: string;
  desc: string;
  image: string;
}

const servicos: Servico[] = [
  {
    id: "automacao-industrial",
    title: "Automação Industrial",
    desc: "Soluções inteligentes para otimização de processos industriais com tecnologia, eficiência e produtividade.",
    image: "/img/icon-manutencao.webp",
  },

  {
    id: "manutencao",
    title: "Manutenção Preventiva e Corretiva",
    desc: "Serviços especializados para garantir segurança, desempenho e funcionamento contínuo dos equipamentos.",
    image: "/img/icon-manutencao.webp",
  },

  {
    id: "paineis",
    title: "Painéis Elétricos e Comandos",
    desc: "Montagem e desenvolvimento de painéis elétricos industriais personalizados para diferentes aplicações.",
    image: "/img/icon-manutencao.webp",
  },

  {
    id: "clp",
    title: "Programação de CLPs e IHMs",
    desc: "Programação, configuração e integração de sistemas automatizados com CLPs e interfaces IHM.",
    image: "/img/icon-manutencao.webp",
  },

  {
    id: "seguranca",
    title: "Segurança Elétrica, NR10 e NR12",
    desc: "Adequação de máquinas e sistemas elétricos conforme normas regulamentadoras e padrões de segurança.",
    image: "/img/icon-manutencao.webp",
  },
];

const FeedServicos: React.FC = () => {
  return (
    <section
      id="servicos"
      className="bg-brand-500/50 py-16 md:py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* TITULO */}
        <div className="text-center mb-12">
          <span className="text-brand-100/80 uppercase tracking-[0.1rem] text-md font-semibold">
            Nossos Serviços
          </span>

          <h1 className="text-brand-100 text-3xl md:text-5xl font-bold mt-2">
            Tecnologia e soluções industriais
          </h1>

          <p className="text-brand-300 max-w-3xl mx-auto md:mt-5 mt-3 text-base md:text-lg">
            Atuamos com automação industrial, manutenção elétrica,
            programação de sistemas e adequações conforme normas de
            segurança.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className="
                group
                bg-gradient-to-b
                from-[#000080]
                to-[#000080]
                border
                border-purple-900/40
                rounded-3xl
                overflow-hidden
                hover:border-purple-600
                hover:-translate-y-2
                transition-all
                duration-500
                shadow-lg
                hover:shadow-purple-900/30
              "
            >
              {/* IMAGEM */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={servico.image}
                  alt={servico.title}
                  fill
                  className="object-contain p-10 group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* CONTEUDO */}
              <div className="p-7 relative">
                {/* EFEITO */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-purple-700/10 blur-3xl rounded-full" />

                <h2 className="text-white text-2xl font-bold mb-4 relative z-10">
                  {servico.title}
                </h2>

                <p className="text-zinc-300 leading-relaxed relative z-10 text-justify">
                  {servico.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedServicos;