import React from "react";

import { CalendarIcon } from "@heroicons/react/24/outline";

import {
  AcademicCapIcon,
  GlobeAltIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { ArrowRight, Globe, ShieldCheck, Zap } from "lucide-react";
import Counter from "./counter";
import HeroVideo from "./heroVideo";

export default function Hero() {
  const stats = [
    {
      icon: AcademicCapIcon,
      label: "Alunos já fluentes",
      value: 100,
    },
    {
      icon: UserGroupIcon,
      label: "Aulas individuais",
      value: 200,
    },
    {
      icon: GlobeAltIcon,
      label: "Alunos pelo mundo",
      value: 5000,
    },
  ];
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <h1 className="text-3xl md:text-5xl tracking-tight">
            <strong className="py-4">
              Fale Inglês com Confiança em 6 Meses
            </strong>{" "}
            <br></br>
            Aulas online personalizadas que transformam seu futuro.
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-xl dark:text-gray-300">
            Apenas uma pequena parte da população brasileira fala inglês — seja
            um deles em 3 meses com nossa metodologia comprovada.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#cta"
              className="rounded-2xl bg-slate-900 text-white px-6 py-3 text-sm font-semibold hover:bg-slate-800 inline-flex items-center justify-center dark:hover:bg-slate-700"
            >
              Agende sua aula grátis e descubra seu potencial em inglês.
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="#how"
              className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold hover:shadow-sm inline-flex items-center justify-center dark:border-slate-600"
            >
              Ver como funciona
            </a>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 p-4 bg-white dark:bg-slate-900 dark:border-slate-600"
              >
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  {React.createElement(s.icon, {
                    className: "w-4 h-4 dark:text-white",
                  })}
                  <span className="dark:text-white">{s.label}</span>
                </div>
                <Counter value={s.value} />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <div className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:bg-slate-900 dark:border-slate-600">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-50 to-emerald-50 flex items-center justify-center">
              <div className="relative w-full  rounded-2xl h-[500px] overflow-hidden">
                {/* Video and thumb */}
                <HeroVideo />

                {/* Overlay escuro para dar contraste ao CTA */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* CTA sobreposto */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                  <h1 className="text-3xl md:text-5xl">
                    Aprenda Inglês com Fluência
                  </h1>
                  <p className="mt-4 text-lg md:text-xl max-w-xl">
                    Conversação prática, natural e focada em resultados reais.
                  </p>
                  <button className="mt-6 px-6 py-3 flex justify-between bg-slate-900 text-white cursor-pointer rounded-2xl hover:bg-black transition dark:hover:bg-slate-700">
                    Agende sua Aula Grátis <CalendarIcon className="w-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-600">
              <div className="rounded-xl border border-slate-200 p-3 flex items-center gap-2 dark:text-white dark:border-slate-600">
                <ShieldCheck className="w-4 h-4" /> Aprendizado flexível
              </div>
              <div className="rounded-xl border border-slate-200 p-3 flex items-center gap-2 dark:text-white dark:border-slate-600">
                <Globe className="w-4 h-4" /> Atenção personalizada
              </div>
              <div className="rounded-xl border border-slate-200 p-3 flex items-center gap-2 dark:text-white dark:border-slate-600">
                <Zap className="w-4 h-4 dark:text-white" /> Aulas envolventes e
                motivadoras
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
