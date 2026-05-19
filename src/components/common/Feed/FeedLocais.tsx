"use client";

import { FaMapMarkerAlt } from "react-icons/fa";

const FeedLocais = () => {
  const locais = [
    "Americana - SP",
    "Santa Bárbara d’Oeste - SP",
    "Nova Odessa - SP",
    "Sumaré - SP",
    "Piracicaba - SP",
    "Hortolândia - SP",
    "Campinas - SP",
  ];

  return (
    <section
      className="bg-brand-500/30 py-16 px-4"
      id="locais"
    >
      <div className="container mx-auto">
        
        {/* Título */}
        <div className="text-center mb-5">
          <span className="text-brand-200 font-semibold uppercase tracking-[0.2rem]">
            Região de Atendimento
          </span>

          <h2 className="text-brand-100 text-4xl font-bold mt-1">
            Atendemos toda a região
          </h2>

          <p className="text-black max-w-2xl mx-auto mt-2">
            Prestamos atendimento especializado em diversas cidades
            da região, oferecendo suporte rápido, eficiente e com
            qualidade.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {locais.map((cidade, index) => (
            <div
              key={index}
              className="bg-brand-100 border border-white/10 rounded-2xl p-5 flex items-center gap-3 hover:border-brand-200 hover:-translate-y-1 transition duration-300"
            >
              <div className="min-w-[50px] min-h-[50px] rounded-full bg-brand-200 flex items-center justify-center text-white text-xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="text-white font-semibold">
                  {cidade}
                </h3>

                <p className="text-white/60 text-sm">
                  Atendimento disponível
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedLocais;