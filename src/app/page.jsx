"use client";

import Benefits from "./components/benefits";
import Chatbot from "./components/chatBot";
import CtaForm from "./components/cta-form";
import Faqs from "./components/faqs";
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

      {/* Comum Question */}
      <Faqs />

      {/* chatBot */}
      <Chatbot />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
