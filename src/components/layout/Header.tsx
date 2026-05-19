"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <header>
      <nav
        className={
          navbar
            ? "bg-brand-500 shadow-lg fixed w-full z-50 px-5 top-0 animate-slideInDown transition-all duration-300"
            : "bg-brand-500 shadow-lg fixed w-full z-50 px-5 transition-all duration-300"
        }
      >
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="flex items-center justify-between h-24 w-full">
            {/* LOGO */}
            <div className="flex items-center flex-shrink-0">
              <Link
                href="/"
                className="cursor-pointer text-brand-100 flex items-center"
              >
                <img
                  src="https://placehold.co/600x189"
                  width={600}
                  height={189}
                  className="max-w-32 md:max-w-40"
                  title="Logo Karen Desenvolvedora"
                  alt="Logo Karen Desenvolvedora"
                />
              </Link>
            </div>

            {/* MENU DESKTOP */}
            <div className="hidden lg:flex items-center">
              <Scroll
                to="home"
                smooth
                offset={-100}
                duration={500}
                className="text-brand-100 font-semibold hover:text-brand-200 transition-all duration-300 text-lg px-5 py-5 cursor-pointer"
              >
                Home
              </Scroll>

              <Scroll
                to="servicos"
                smooth
                offset={-100}
                duration={500}
                className="text-brand-100 font-semibold hover:text-brand-200 transition-all duration-300 text-lg px-5 py-5 cursor-pointer"
              >
                Serviços
              </Scroll>

              <Scroll
                to="diferenciais"
                smooth
                offset={-100}
                duration={500}
                className="text-brand-100 font-semibold hover:text-brand-200 transition-all duration-300 text-lg px-5 py-5 cursor-pointer"
              >
                Diferenciais
              </Scroll>
              <Scroll
                to="locais"
                smooth
                offset={-100}
                duration={500}
                className="text-brand-100 font-semibold hover:text-brand-200 transition-all duration-300 text-lg px-5 py-5 cursor-pointer"
              >
                Locais de atendimento
              </Scroll>

              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-full transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Entre em contato
              </a>
            </div>

            {/* BOTÃO MOBILE */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-lg text-brand-100 bg-brand-200/10 outline-none shadow-md"
                aria-label="Abrir menu"
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* MENU MOBILE */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isOpen
                ? "max-h-[500px] opacity-100 pb-5"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-brand-600/30 rounded-2xl p-5 space-y-5 backdrop-blur-md">
              <Scroll
                to="home"
                smooth
                offset={-100}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block text-brand-100 hover:text-brand-200 transition-all duration-300 text-lg font-semibold cursor-pointer"
              >
                Home
              </Scroll>

              <Scroll
                to="servicos"
                smooth
                offset={-100}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block text-brand-100 hover:text-brand-200 transition-all duration-300 text-lg font-semibold cursor-pointer"
              >
                Serviços
              </Scroll>

              <Scroll
                to="diferenciais"
                smooth
                offset={-100}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block text-brand-100 hover:text-brand-200 transition-all duration-300 text-lg font-semibold cursor-pointer"
              >
                Diferenciais
              </Scroll>

              <Scroll
                to="locais"
                smooth
                offset={-100}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block text-brand-100 hover:text-brand-200 transition-all duration-300 text-lg font-semibold cursor-pointer"
              >
                Locais de atendimento
              </Scroll>

              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-full transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Entre em contato
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}