"use client";

import { Link as Scroll } from "react-scroll";

const FeedHome = () => {
  return (
    <section
      className="bg-brand-700 lg:pt-52 lg:pb-16 pt-40 flex justify-center items-center"
      id="home"
    >
      <div className="container flex flex-col justify-center items-center text-center">
        <div className="grid lg:grid-cols-3 grid-cols-1 items-center gap-4">
          
          <div className="lg:col-span-2 flex flex-col items-center">
            <div className="lg:max-w-xl max-w-lg">
              <h1 className="text-white lg:text-5xl md:text-4xl text-4xl font-semibold">
                Sua produção não pode parar
              </h1>
            </div>

            <div className="max-w-lg mt-4">
              <p className="text-white/80 lg:text-md text-md mb-6">
                Automação, manutenção industrial e suporte técnico com
                agilidade, segurança e foco em produtividade.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
                {/* Botão Conheça Serviços */}
                <Scroll
                  to="servicos"
                  smooth={true}
                  duration={700}
                  offset={-80}
                  className="cursor-pointer text-center text-white/80 border border-brand-200 hover:bg-brand-100 py-3 px-5 text-lg rounded-lg transition-all duration-300"
                >
                  Conheça Serviços
                </Scroll>

                {/* Botão Entre em Contato */}
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-white bg-brand-100 hover:bg-brand-200 py-3 px-5 text-lg rounded-lg transition-all duration-300"
                >
                  Entre em Contato
                </a>

              </div>
            </div>
          </div>

          <div className="lg:col-span-1 mt-7 md:mt-5 lg:mt-0 flex justify-center">
            <img
              src="/img/icon-manutencao.webp"
              alt="KBX | Automação e Manutenção"
              className="lg:max-w-[24rem] md:max-w-[17rem] max-w-[14rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedHome;