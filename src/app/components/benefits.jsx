import React from "react";

import {
  AcademicCapIcon,
  DevicePhoneMobileIcon,
  MicrophoneIcon,
  StarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

import { motion } from "framer-motion";

export default function Benefits() {
  const benefits = [
    {
      icon: AcademicCapIcon,
      title: "Aprendizado rápido e prático",
      desc: "Comece a se comunicar em apenas 90 dias.",
    },
    {
      icon: UserGroupIcon,
      title: "Aulas sob medida para você",
      desc: "Cada encontro é adaptado ao seu nível e objetivo.",
    },
    {
      icon: MicrophoneIcon,
      title: "Fluência real, não só teoria",
      desc: "Foco total em conversação e situações do dia a dia.",
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Acesso em qualquer dispositivo",
      desc: "estude onde quiser, no celular ou no computador.",
    },
    {
      icon: StarIcon,
      title: "Materiais exclusivos e organizados",
      desc: "Conteúdos atualizados, exercícios práticos e acompanhamento de progresso para você se tornar fluente rapidamente.",
    },
  ];

  return (
    <section id="benefits" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid md:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-600"
          >
            {React.createElement(b.icon, {
              className: "w-6 h-6 dark:text-white",
            })}
            <h2 className="mt-3 font-semibold text-lg dark:text-white">
              {b.title}
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-white">
              {b.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
