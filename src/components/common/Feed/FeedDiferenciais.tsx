"use client";

import React from "react";
import {
  ShieldCheck,
  Cpu,
  Clock3,
  Users,
  Zap,
} from "lucide-react";

const diferenciais = [
  {
    icon: ShieldCheck,
    title: "Segurança Garantida",
    desc: "Projetos e serviços executados conforme normas técnicas e regulamentadoras.",
  },

  {
    icon: Cpu,
    title: "Tecnologia Avançada",
    desc: "Soluções modernas em automação industrial com foco em inovação e desempenho.",
  },

  {
    icon: Zap,
    title: "Soluções Inteligentes",
    desc: "Projetos desenvolvidos com foco em eficiência, automação e máxima produtividade industrial.",
  },

  {
    icon: Clock3,
    title: "Agilidade no Atendimento",
    desc: "Suporte rápido e eficiente para reduzir paradas e aumentar a produtividade.",
  },

  {
    icon: Users,
    title: "Atendimento Personalizado",
    desc: "Cada projeto é desenvolvido de acordo com a necessidade da sua empresa.",
  },

  {
    icon: ShieldCheck,
    title: "Alta Performance",
    desc: "Sistemas otimizados para garantir eficiência, segurança e estabilidade.",
  },
];

const FeedDiferenciais = () => {
  return (
    <section
      id="diferenciais"
      className="py-16 md:py-16 bg-brand-700 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* TITULO */}
        <div className="text-center mb-6">
          <span className="text-white uppercase tracking-[0.2rem] text-sm font-semibold">
            Diferenciais
          </span>

          <h2 className="text-white text-3xl md:text-5xl font-bold mt-3">
            Por que escolher nossa empresa?
          </h2>

          <p className="text-white/80 max-w-3xl mx-auto mt-5 text-base md:text-lg">
            Trabalhamos com tecnologia, inovação e compromisso para entregar
            soluções industriais modernas, seguras e eficientes.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  bg-gradient-to-b
                  from-[#161122]
                  to-[#0c0c14]
                  border
                  border-brand-200
                  rounded-3xl
                  p-8
                  overflow-hidden
                  hover:border-brand-200
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >
                {/* EFEITO */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-700/10 blur-3xl rounded-full" />

                {/* ICONE */}
                <div
                  className="
                    relative
                    z-10
                    w-16
                    h-16
                    rounded-2xl
                    bg-brand-200
                    border
                    bg-white
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  <Icon className="text-brand-100 w-8 h-8" />
                </div>

                {/* TEXTO */}
                <div className="relative z-10">
                  <h3 className="text-white text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeedDiferenciais;