"use client";

import { useState } from "react";
import Benefits from "./components/benefits";
import Chatbot from "./components/chatBot";
import CtaForm from "./components/cta-form";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import HowWorks from "./components/how-works";
import Integrations from "./components/intregation";
import Price from "./components/price";
import Testimonials from "./components/testimonials";
// ============================================================
// Landing Page Fictícia para Portfólio
// Nicho: Professores de Inglês Particulares
// Persona: Prof. Alex Santos (English Pro Online)
// Objetivo: Demonstrar design, copy e recursos focados em conversão
// ============================================================

export default function EnglishProDemo() {

  const [nivel, setNivel] = useState("Iniciante");
  const [userName, setUserName] = useState(" ");



  const testimonials = [
    {
      name: "Mariana Silva",
      role: "Aluna iniciante",
      quote:
        "Em apenas um mês de aulas com o Professor Alex, consegui me comunicar em inglês nas minhas viagens! A metodologia English Pro realmente funciona.",
      rating: 5,
      photo: "/alex-suprun-mynsNaNwVDc-unsplash.jpg",
    },
    {
      name: "Lucas Pereira",
      role: "Profissional de TI",
      quote:
        "Sempre tive dificuldade em falar inglês. Com as aulas personalizadas e o acompanhamento semanal, ganhei confiança e já consigo participar de reuniões internacionais.",
      rating: 5,
      photo: "/alex-suprun-ZHvM3XIOHoE-unsplash.jpg",
    },
    {
      name: "Paula Nunes",
      role: "Estudante universitária",
      quote:
        "O método é incrível! Aulas dinâmicas, material exclusivo e feedback constante. Em três meses, passei a entender filmes e músicas em inglês sem legenda.",
      rating: 4,
      photo: "/samuel-raita-RiDxDgHg7pw-unsplash.jpg",
    },
  ];




  return (
    <div>
      {/* NAV */}
      <Header />

      {/* HERO */}
      <Hero />

      {/* BENEFITS */}
      <Benefits />

      {/* HOW IT WORKS */}
      <HowWorks />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* PRICING (Planos do professor) */}
      <Price />

      {/* CTA + FORM */}
      <CtaForm />

      {/* BADGES */}
      <Integrations />

      {/* chatBot */}
      <Chatbot />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
