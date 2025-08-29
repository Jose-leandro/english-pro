"use client";

import {
  AcademicCapIcon,
  CalendarIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  MicrophoneIcon,
  StarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Globe,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";
import React, { useState } from "react";
import Chatbot from "./components/chatBot";
import Counter from "./components/counter";
import Footer from "./components/footer";
import Integrations from "./components/intregation";
import Testimonials from "./components/testimonials";
// ============================================================
// Landing Page Fictícia para Portfólio
// Nicho: Professores de Inglês Particulares
// Persona: Prof. Alex Santos (English Pro Online)
// Objetivo: Demonstrar design, copy e recursos focados em conversão
// ============================================================

export default function EnglishProDemo() {
  const [loadingLead, setLoadingLead] = useState(false);
  const [leadSent, setLeadSent] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [nivel, setNivel] = useState("Iniciante");
  const [userName, setUserName] = useState(" ");

  const [indice, setIndice] = useState(0);

  const [respostas, setRespostas] = useState([]);
  const [nivelFinal, setNivelFinal] = useState("");
  const [finalizado, setFinalizado] = useState(false);

  const perguntas = [
    { q: "Você consegue se apresentar em inglês?", options: ["Sim", "Não"] },
    {
      q: "Consegue manter uma conversa simples (ex: pedir comida, pedir informações)?",
      options: ["Sim", "Não"],
    },
    {
      q: "Já participa de reuniões ou entrevistas em inglês?",
      options: [
        "Sim, sem dificuldades",
        "Sim, mas com dificuldade",
        "Ainda não",
      ],
    },
    {
      q: "Se você tivesse que avaliar o seu nível de inglês hoje, como se classificaria?",
      options: [
        "Consigo me comunicar com facilidade (Avançado)",
        "Consigo, mas com algumas dificuldades (Intermediário)",
        "Ainda não consigo me comunicar em inglês (Iniciante)",
      ],
    },
    {
      q: "Seu principal objetivo com o inglês é:",
      options: ["Viagens 🌍", "Carreira 💼", "Estudos 📚", "Lazer 🎬"],
    },
  ];

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setLoadingLead(true);
    // Simula envio de lead (substituir por integração real: API/CRM/Email)
    setTimeout(() => {
      setLoadingLead(false);
      setLeadSent(true);
    }, 900);
  };

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

  const planos = [
    {
      name: "Starter",
      price: "R$ 79/aula",
      bullets: ["Aulas 1x semana", "Material incluso", "Suporte por WhatsApp"],
    },
    {
      name: "Focus",
      price: "R$ 109/aula",
      highlight: true,
      bullets: ["2x semana", "Plano de estudos", "Revisões gravadas"],
    },
    {
      name: "Pro",
      price: "R$ 149/aula",
      bullets: ["3x semana", "Simulados/IELTS", "Mentoria individual"],
    },
  ];

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

  const featureBullets = [
    "Imersão Guiada",
    "Correção Instantânea",
    "Prática Ativa",
    "Trilha Personalizada",
  ];

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    data: "",
    horario: "",
    observacoes: "",
  });

  const handleResposta = (resposta) => {
    setRespostas((prev) => [...prev, resposta]); // salva a resposta

    if (indice < perguntas.length - 1) {
      setIndice(indice + 1);
    } else {
      // quando acabar o quiz, decide o nível
      const nivel = calcularNivel([...respostas, resposta]);
      setNivelFinal(nivel);
      setFinalizado(true);
    }
  };

  // Função que decide o nível com base nas respostas
  const calcularNivel = (respostas) => {
    if (respostas.includes("avançado")) return "Pro";
    if (respostas.includes("intermediario")) return "Focus";
    return "Starter";
  };

  const [errors, setErrors] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // Validação em tempo real apenas para campos específicos
    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: value.includes("@") ? "" : "Email inválido",
      }));
    }

    if (name === "nome") {
      setErrors((prev) => ({
        ...prev,
        nome: value.length > 1 ? "" : "Nome é obrigatório",
      }));
    }

    if (name === "whatsapp") {
      setErrors((prev) => ({
        ...prev,
        whatsapp: /^\d{10,11}$/.test(value.replace(/\D/g, ""))
          ? ""
          : "WhatsApp inválido",
      }));
    }
  };

  // Função para validar antes de enviar
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.nome) newErrors.nome = "Nome é obrigatório";
    if (!formData.email.includes("@")) newErrors.email = "Email inválido";
    if (!/^\d{10,11}$/.test(formData.whatsapp.replace(/\D/g, "")))
      newErrors.whatsapp = "WhatsApp inválido";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setEnviado(true);
    console.log("Formulário enviado:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            <span className="font-semibold">English Pro</span>
            <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700">
              Hello
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#benefits" className="hover:text-slate-700">
              Benefícios
            </a>
            <a href="#how" className="hover:text-slate-700">
              Como funciona
            </a>
            <a href="#pricing" className="hover:text-slate-700">
              Planos
            </a>
            <a href="#contact" className="hover:text-slate-700">
              Contato
            </a>
          </div>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-2 text-sm hover:shadow-sm"
          >
            Restam 3 vagas hoje <ArrowRight className="w-4 h-4" />
          </a>
        </nav>
      </header>

      {/* HERO */}
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

            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Apenas uma pequena parte da população brasileira fala inglês —
              seja um deles em 3 meses com nossa metodologia comprovada.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#cta"
                className="rounded-2xl bg-slate-900 text-white px-6 py-3 text-sm font-semibold hover:bg-slate-800 inline-flex items-center justify-center"
              >
                Agende sua aula grátis e descubra seu potencial em inglês.
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="#how"
                className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold hover:shadow-sm inline-flex items-center justify-center"
              >
                Ver como funciona
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 p-4 bg-white"
                >
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    {React.createElement(s.icon, { className: "w-4 h-4" })}
                    <span>{s.label}</span>
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
            <div className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-50 to-emerald-50 flex items-center justify-center">
                <div className="relative w-full  rounded-2xl h-[500px] overflow-hidden">
                  <video
                    src="/159028-818026299_small.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-40"
                  />
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
                    <button className="mt-6 px-6 py-3 flex justify-between bg-slate-900 text-white rounded-2xl hover:bg-black transition">
                      Agende sua Aula Grátis{" "}
                      <CalendarIcon className="w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-600">
                <div className="rounded-xl border border-slate-200 p-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Aprendizado flexível
                </div>
                <div className="rounded-xl border border-slate-200 p-3 flex items-center gap-2">
                  <Globe className="w-4 h-4" /> Atenção personalizada
                </div>
                <div className="rounded-xl border border-slate-200 p-3 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Aulas envolventes e motivadoras
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              {React.createElement(b.icon, { className: "w-6 h-6" })}
              <h3 className="mt-3 font-semibold text-lg">{b.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-1">
                Aprender inglês não precisa levar anos. Com o método da English
                Pro, você começa a se comunicar em apenas 90 dias.
              </h2>
              <h2>
                Menos de 5% dos brasileiros falam inglês fluentemente. Com o
                método English Pro, você pode estar entre eles em apenas alguns
                meses — seja para{" "}
                <strong>
                  {" "}
                  viajar sem medo, crescer na carreira ou conquistar sua
                  aprovação no TOEFL/IELTS.
                </strong>
              </h2>
              <ul className="mt-6 space-y-3">
                {featureBullets.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5" />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs rounded-full bg-emerald-100 text-emerald-700 px-3 py-1">
                  Economiza tempo
                </span>
                <span className="text-xs rounded-full bg-indigo-100 text-indigo-700 px-3 py-1">
                  Resultados rápidos
                </span>
                <span className="text-xs rounded-full bg-rose-100 text-rose-700 px-3 py-1">
                  Aplicabilidade prática
                </span>
                <span className="text-xs rounded-full bg-amber-100 text-gray-700 px-3 py-1">
                  Motivação contínua
                </span>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Como funciona na prática</h3>
              <ol className="mt-3 text-sm space-y-2 list-decimal pl-5 text-slate-700">
                <li>
                  Aluno agenda sua <strong>aula experimental gratuita</strong>{" "}
                  em poucos cliques.
                </li>
                <li>
                  Durante a aula, o professor aplica o método{" "}
                  <strong>English Pro°</strong> com foco em conversação real.
                </li>
                <li>
                  O aluno recebe um <strong>plano personalizado</strong> de
                  estudos + acesso ao material exclusivo.
                </li>
                <li>
                  A cada semana, acompanha seu progresso com{" "}
                  <strong>feedback individual</strong>.
                </li>
              </ol>

              <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
                <a
                  href="#cta"
                  className="rounded-2xl bg-slate-900 text-white px-4 py-3 flex items-center justify-center gap-2 hover:bg-slate-800"
                >
                  <Calendar className="w-4 h-4" /> Agendar Aula
                </a>
                <a
                  href="#benefits"
                  className="rounded-2xl border border-slate-300 px-4 py-3 flex items-center justify-center gap-2 hover:shadow-sm"
                >
                  <Star className="w-4 h-4" /> Ver Metodologia
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-slate-300 px-4 py-3 flex items-center justify-center gap-2 hover:shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" /> Falar com o Professor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* PRICING (Planos do professor) */}
      <section id="pricing" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center">
            Descubra seu Nível e Escolha o Plano Perfeito para sua Fluência
          </h2>

          <p className="text-center text-slate-600 mt-2 max-w-4xl mx-auto mb-8">
            Encontre em apenas 2 minutos o plano ideal para sua jornada no
            inglês! Nossos pacotes foram desenvolvidos para todos os níveis — do{" "}
            <strong>iniciante ao avançado </strong> — com{" "}
            <strong>
              aulas personalizadas, acompanhamento constante e materiais
              exclusivos.
            </strong>{" "}
            Evolua de forma prática, eficiente e flexível, no seu ritmo e no
            dispositivo que preferir, e alcance a confiança para se{" "}
            <strong>comunicar em poucos meses</strong>.
          </p>

          {!finalizado && (
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-center">
                {perguntas[indice].q}
              </h2>

              <div className="mt-6 grid gap-4">
                {perguntas[indice].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleResposta(opt)}
                    className="px-6 py-3 border rounded-2xl hover:bg-slate-100"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {finalizado && (
            <>
              <h3 className="text-2xl font-bold text-center mb-6">
                🎉 Plano recomendado para você:
              </h3>

              <div className="mt-10 gap-6 flex justify-center w-auto items-center">
                {planos
                  .filter((p) => p.name === nivelFinal)
                  .map((p) => (
                    <div
                      key={p.name}
                      className={`rounded-3xl border p-6 w-1/4 bg-white shadow-sm ${
                        p.highlight
                          ? "border-slate-900 ring-2 ring-slate-900"
                          : "border-slate-200"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">{p.name}</h3>
                        {p.highlight && (
                          <span className="text-xs rounded-full bg-slate-900 text-white px-2 py-0.5">
                            Mais escolhido
                          </span>
                        )}
                      </div>
                      <div className="mt-2 text-3xl font-extrabold">
                        {p.price}
                      </div>
                      <ul className="mt-4 space-y-2 text-sm">
                        {p.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-slate-700"
                          >
                            <CheckCircle2 className="w-4 h-4 mt-0.5" /> {b}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#cta"
                        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 text-white px-4 py-3 text-sm font-semibold hover:bg-slate-800"
                      >
                        Agendar aula teste <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA + FORM */}
      <section id="cta" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="bg-white p-6 rounded-2xl shadow-md max-w-lg mx-auto">
                <h3 className="text-xl font-bold mb-2">
                  Reserve seu horário agora — rápido, simples e sem compromisso.
                </h3>
                <p className="mb-2">
                  Escolha o melhor horário para você e comece a aprender inglês
                  de forma prática e personalizada. Totalmente gratuito e rápido
                  de agendar!
                </p>
                {enviado ? (
                  <div className="p-4 bg-green-100 text-green-800 rounded-md">
                    Seu agendamento foi enviado com sucesso! Entraremos em
                    contato em breve.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Nome completo"
                      className="w-full p-3 border rounded"
                      required
                    />

                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      type="email"
                      className="w-full p-3 border rounded"
                      required
                    />
                    {!emailValid && (
                      <span className="text-red-500">Email inválido</span>
                    )}
                    <input
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="WhatsApp"
                      className="w-full p-3 border rounded"
                    />
                    <input
                      name="data"
                      value={formData.data}
                      onChange={handleChange}
                      type="date"
                      className="w-full p-3 border rounded"
                      required
                    />

                    <label className="block mb-2 font-medium text-slate-700">
                      Qual é o seu nível de inglês?
                    </label>

                    <select
                      onChange={(e) => setNivel(e.target.value)}
                      className="w-full p-3 border rounded"
                    >
                      <option value="">Selecione</option>
                      <option value="iniciante">Iniciante</option>
                      <option value="intermediario">Intermediário</option>
                      <option value="avancado">Avançado</option>
                    </select>

                    <textarea
                      name="observacoes"
                      value={formData.observacoes}
                      onChange={handleChange}
                      placeholder="Observações"
                      className="w-full p-3 border rounded"
                    />
                    <button
                      type="submit"
                      className="w-full bg-slate-900 text-white p-3 rounded hover:bg-slate-800"
                    >
                      Enviar
                    </button>
                  </form>
                )}
              </div>

              <div
                id="benefits"
                className="mt-4 grid sm:grid-cols-3 gap-3 text-sm"
              >
                <div className="rounded-2xl border border-slate-300 px-4 py-3 flex flex-col items-center justify-center gap-2 hover:shadow-sm text-center">
                  <Calendar className="w-6 h-6 text-gray-700" />
                  <h4 className="font-semibold">Agendamento fácil</h4>
                  <p className="text-xs text-slate-600">
                    Marque sua aula gratuita em poucos cliques.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-300 px-4 py-3 flex flex-col items-center justify-center gap-2 hover:shadow-sm text-center">
                  <Star className="w-6 h-6 text-gray-700" />
                  <h4 className="font-semibold">Metodologia comprovada</h4>
                  <p className="text-xs text-slate-600">
                    English Pro: transforme seu inglês rapidamente.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-300 px-4 py-3 flex flex-col items-center justify-center gap-2 hover:shadow-sm text-center">
                  <MessageCircle className="w-6 h-6 text-gray-700" />
                  <h4 className="font-semibold">
                    Contato direto com o professor
                  </h4>
                  <p className="text-xs text-slate-600">
                    Tire dúvidas e receba orientações personalizadas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="contact"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-extrabold">Fale com o Prof. Alex</h3>
            <p className="mt-1 text-sm text-slate-600">
              Formulário enxuto para conversão máxima.
            </p>
            <form onSubmit={handleLeadSubmit} className="mt-4 space-y-3">
              <label className="block">
                <span className="text-sm">Nome</span>
                <input
                  required
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                  placeholder="Seu nome"
                />
              </label>
              <label className="block">
                <span className="text-sm">E-mail</span>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                  placeholder="voce@email.com"
                />
              </label>
              <label className="block">
                <span className="text-sm">WhatsApp</span>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300"
                  placeholder="(DDD) 9 9999-9999"
                />
              </label>

              <button
                type="submit"
                disabled={loadingLead || leadSent}
                className={`w-full rounded-2xl px-4 py-3 text-sm font-semibold inline-flex items-center justify-center ${
                  leadSent
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {leadSent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 mr-2" /> Lead enviado!
                  </>
                ) : loadingLead ? (
                  "Enviando…"
                ) : (
                  <>
                    Enviar mensagem <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>

              <p className="text-xs text-slate-500 text-center">
                Ao enviar, você concorda com a nossa política de privacidade
                (DEMO).
              </p>
            </form>

            <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
              <a
                href="mailto:alex@englishpro.demo"
                className="rounded-2xl border border-slate-300 px-4 py-3 flex items-center justify-center gap-2 hover:shadow-sm"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
              <a
                href="tel:+5500000000000"
                className="rounded-2xl border border-slate-300 px-4 py-3 flex items-center justify-center gap-2 hover:shadow-sm"
              >
                <Phone className="w-4 h-4" /> Ligar
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="rounded-2xl border border-slate-300 px-4 py-3 flex items-center justify-center gap-2 hover:shadow-sm"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BADGES */}
      <Integrations />

      {/* chatBot */}
      <Chatbot />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
