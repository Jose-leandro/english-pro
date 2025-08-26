"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  CalendarClock,
  MessageCircle,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import FAQSection from "./components/fqs";

const beneficios = [
  { title: "Aulas personalizadas para o seu nível", icon: UserCheck },
  { title: "Horários flexíveis", icon: CalendarClock },
  { title: "Foco em conversação prática", icon: MessageCircle },
  { title: "Material exclusivo incluso", icon: BookOpen },
];

export default function LandingMinimal() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Preciso ter nível básico?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não! As aulas são adaptadas ao seu nível, do iniciante ao avançado.",
        },
      },
      {
        "@type": "Question",
        name: "Posso fazer uma aula teste?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim, sua primeira aula é totalmente gratuita.",
        },
      },
    ],
  };
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl font-bold mb-4">
          Aprenda Inglês com Teacher John
        </h1>
        <p className="text-lg mb-6">
          Aula experimental 100% gratuita para você dar o primeiro passo!
        </p>
        <button className="rounded-2xl px-8 py-4 text-lg bg-black text-white shadow-md hover:shadow-lg">
          Agende sua Aula Grátis
        </button>
      </section>

      {/* Sobre o professor */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <Image
          src="/samuel-raita-RiDxDgHg7pw-unsplash.jpg"
          alt="Foto do professor"
          className="w-32 h-32 mx-auto rounded-full shadow-lg mb-6"
          width={400}
          height={400}
          loading="lazy"
        />

        <h2 className="text-2xl font-semibold mb-2">Sobre mim</h2>
        <p>
          Sou professor particular de inglês com mais de 8 anos de experiência.
          Meu foco é te ajudar a ganhar confiança e fluência na conversação.
        </p>
      </section>

      {/* Benefícios */}
      <section className="py-12 px-6 bg-gray-50 flex justify-evenly items-center flex-col">
        <h2 className="text-3xl font-semibold text-center mb-2">
          Por que escolher minhas aulas?
        </h2>
        <span className="pb-4 pt-2">
          Aulas diretas ao ponto, adaptadas ao seu ritmo, para que você
          finalmente aprenda inglês sem perder tempo.
        </span>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {beneficios.map((b, i) => (
            <Card key={i} className="shadow-md hover:shadow-lg transition">
              <CardContent className="p-6 flex items-center gap-4">
                <b.icon className="w-5 h-15 text-blue-400" />
                <span className="text-lg font-medium">{b.title}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <button className="rounded-2xl px-8 py-4 text-lg bg-black text-white shadow-md hover:shadow-lg">
          Agendar agora
        </button>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-8">Depoimentos</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="shadow-md">
            <div className="p-6">
              <p className="italic">
                “As aulas do John me ajudaram a perder o medo de falar inglês!”
              </p>
              <span className="block mt-4 font-semibold">
                — Mariana, 27 anos
              </span>
            </div>
          </div>
          <div className="shadow-md">
            <div className="p-6">
              <p className="italic">
                “Método simples e prático. Já sinto evolução em poucas semanas.”
              </p>
              <span className="block mt-4 font-semibold">
                — Rafael, Engenheiro
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 text-center bg-blue-300 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Pronto para sua primeira aula grátis?
        </h2>
        <button className="rounded-2xl px-8 py-4 text-lg bg-black text-white shadow-md hover:shadow-lg">
          Agendar agora
        </button>
      </section>

      <FAQSection />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
