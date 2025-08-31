"use client";

import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50 dark:border-slate-600 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Marca */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              English Pro
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Uma experiência de aprendizado pensada para você: aulas dinâmicas,
              agendamento fácil, materiais exclusivos e suporte direto com o
              professor. Tudo em um só lugar, para que aprender inglês seja
              simples e motivador.
            </p>
          </motion.div>

          {/* Links rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide dark:text-white">
              Navegação
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href="#benefits"
                  className="hover:text-slate-900 dark:text-slate-400"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#plans"
                  className="hover:text-slate-900 dark:text-slate-400"
                >
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-slate-900 dark:text-slate-400"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#integrations"
                  className="hover:text-slate-900 dark:text-slate-400"
                >
                  Integrações
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide dark:text-white">
              Contato
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <EnvelopeIcon className="w-4 h-4" /> contato@englishpro.com
              </li>
              <li className="flex items-center gap-2 dark:text-slate-400">
                <PhoneIcon className="w-4 h-4" /> (11) 99999-9999
              </li>
              <li className="flex items-center gap-2 dark:text-slate-400">
                <MapPinIcon className="w-4 h-4" /> São Paulo - SP
              </li>
              <li className="flex items-center gap-2 dark:text-slate-400">
                <FaInstagram className="w-4 h-4" /> @englishpro
              </li>
              <li className="flex items-center gap-2 dark:text-slate-400">
                <FaLinkedin className="w-4 h-4" />{" "}
                linkedin.com/company/englishpro
              </li>
              <li className="flex items-center gap-2 dark:text-slate-400">
                <FaFacebook className="w-4 h-4" /> facebook.com/englishpro
              </li>
              <li className="flex items-center gap-2 dark:text-slate-400">
                <FaYoutube className="w-4 h-4" /> youtube.com/englishpro
              </li>
              <li className="flex items-center gap-2 dark:text-slate-400">
                <FaTiktok className="w-4 h-4" /> @englishpro
              </li>
            </ul>
          </motion.div>

          {/* CTA final */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide dark:text-white">
              Experimente
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              Agende sua aula experimental gratuita e descubra como aprender
              inglês pode ser simples.
            </p>
            <a
              href="#cta"
              className="mt-4 inline-block rounded-2xl bg-slate-900 text-white px-4 py-3 text-sm font-medium hover:bg-slate-800 transition"
            >
              Agendar Aula Grátis
            </a>
          </motion.div>
        </div>

        {/* Copy */}
        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 dark:border-slate-600">
          © {new Date().getFullYear()} English Pro. Projeto de demostração para
          portfólio.
        </div>
      </div>
    </footer>
  );
}
