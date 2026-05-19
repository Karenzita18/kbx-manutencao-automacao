"use client";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";


const Footer = () => {
  const data = new Date();

  return (
    <main>
      <footer className="bg-brand-500">
        <div className="py-8 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              
              {/* Logo */}
              <div>
                <Link href="/">
                  <img
                    src="https://placehold.co/600x189"
                    width={600}
                    height={189}
                    alt="Logo Footer"
                    className="max-w-[11rem]"
                  />
                </Link>
              </div>

              {/* Links */}
              <div className="text-brand-100">
                <h2 className="font-bold mb-4 text-xl">
                  Links Importantes
                </h2>

                <ul className="flex flex-col gap-3">
                  <li className="hover:text-brand-200 transition duration-300 cursor-pointer">
                    <ScrollLink
                      to="home"
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      Home
                    </ScrollLink>
                  </li>

                  <li className="hover:text-brand-200 transition duration-300 cursor-pointer">
                    <ScrollLink
                      to="servicos"
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      Serviços
                    </ScrollLink>
                  </li>

                  <li className="hover:text-brand-200 transition duration-300 cursor-pointer">
                    <ScrollLink
                      to="diferenciais"
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      Diferenciais
                    </ScrollLink>
                  </li>

                  <li className="hover:text-brand-200 transition duration-300 cursor-pointer">
                    <ScrollLink
                      to="locais"
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      Locais de atendimento
                    </ScrollLink>
                  </li>
                </ul>
              </div>

              {/* Contato */}
              <div className="text-brand-100">
                <h2 className="font-bold mb-4 text-xl">
                  Contato
                </h2>

                <ul className="flex flex-col gap-3">
                  <li className="hover:text-brand-200 transition duration-300">
                    <a
                      href="mailto:mail"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <FaEnvelope />
                      contato@mail.com
                    </a>
                  </li>

                  <li className="hover:text-brand-200 transition duration-300">
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <FaWhatsapp />
                      Contato via WhatsApp
                    </a>
                  </li>

                  <li className="hover:text-brand-200 transition duration-300">
                    <a
                      href="tel:telefone"
                      className="flex items-center gap-2"
                    >
                      <FaPhoneAlt />
                      Contato via Telefone
                    </a>
                  </li>
                </ul>

              </div>

              <div className="text-brand-100">
                <h2 className="font-bold mb-4 text-xl">
                  Redes Sociais
                </h2>

                <div className="flex gap-3">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-200 rounded-full text-white hover:-translate-y-1 transition duration-300"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-200 rounded-full text-white hover:-translate-y-1 transition duration-300"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <div className="bg-brand-100 border-t border-white/10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-1 py-4 text-sm text-white text-center">
          <p>
            © {data.getFullYear()} Todos os direitos reservados.
          </p>

          <p>
            Desenvolvido por Karen Souza
          </p>
        </div>
      </div>
    </main>
  );
};

export default Footer;