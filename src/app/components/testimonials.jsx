import {
  BriefcaseIcon,
  MusicalNoteIcon,
  PaperAirplaneIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Aluna iniciante",
    quote:
      "Em apenas um mês de aulas, consegui me comunicar em inglês nas minhas viagens!",
    rating: 5,
    photo: "/alex-suprun-mynsNaNwVDc-unsplash.jpg",
    benefit: "Viagens",
    icon: PaperAirplaneIcon,
    contact: {
      linkedin: "https://linkedin.com/in/mariana-silva",
    },
  },
  {
    name: "Lucas Pereira",
    role: "Profissional de TI",
    quote: "Hoje participo de reuniões internacionais com confiança.",
    rating: 5,
    photo: "/alex-suprun-ZHvM3XIOHoE-unsplash.jpg",
    benefit: "Carreira",
    icon: BriefcaseIcon,
    contact: {
      linkedin: "https://linkedin.com/in/lucas-pereira",
    },
  },
  {
    name: "Paulo Nunes",
    role: "Estudante universitário",
    quote: "Passei a entender filmes e músicas em inglês sem legenda.",
    rating: 4,
    photo: "/samuel-raita-RiDxDgHg7pw-unsplash.jpg",
    benefit: "Lazer",
    icon: MusicalNoteIcon,
    contact: {
      instagram: "https://instagram.com/paula.nunes",
    },
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-2xl font-bold text-center mb-10">
        Alunos que já transformaram suas vidas
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md dark:bg-slate-900 dark:border-slate-600"
          >
            <div
              className="flex items-center gap-2 text-amber-500"
              aria-label={`${t.rating} estrelas`}
            >
              {Array.from({ length: t.rating }).map((_, idx) => (
                <StarIcon
                  key={idx}
                  className="w-4 h-4 text-amber-500 dark:text-amber-700"
                />
              ))}
            </div>
            <blockquote className="mt-3 text-slate-700 dark:text-white">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3 text-sm text-slate-500">
              <Image
                src={t.photo}
                width={40}
                height={40}
                alt={t.name}
                className="rounded-full"
              />
              <div>
                <span className="font-semibold text-slate-700 dark:text-white">
                  {t.name}
                </span>{" "}
                • <span className="dark:text-white">{t.role}</span>
                <div className="flex justify-between items-start w-auto">
                  <p className="text-blue-600 font-medium">
                    <t.icon className="w-5 h-5 inline" /> {t.benefit}
                  </p>
                  <div className="flex mt-1">
                    {t.contact?.linkedin && (
                      <a
                        href={t.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900"
                      >
                        <FaLinkedin className="w-4 h-4" />
                      </a>
                    )}
                    {t.contact?.instagram && (
                      <a
                        href={t.contact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:text-pink-700"
                      >
                        <FaInstagram className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
