"use client";
import {
  CalendarDaysIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  InboxIcon,
  StarIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

const integrations = [
  {
    icon: CalendarDaysIcon,
    title: "Agendamento Simples",
    desc: "Marque sua aula experimental em segundos, com confirmação instantânea e horários claros.",
    proof: "+100 alunos agendaram aulas rapidamente neste mês",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Suporte Instantâneo",
    desc: "Tire dúvidas antes ou depois da aula via WhatsApp/Telegram, garantindo acompanhamento constante.",
    proof: "95% dos alunos relatam respostas rápidas e eficientes",
  },
  {
    icon: VideoCameraIcon,
    title: "Aulas Online Fluídas",
    desc: "Participe de aulas ao vivo via Zoom ou Google Meet, com qualidade e interação em qualquer dispositivo.",
    proof: "Alunos avaliam 4,9/5 a experiência das aulas online",
  },
  {
    icon: InboxIcon,
    title: "Organização de Contatos",
    desc: "Receba lembretes e materiais de estudo diretamente no seu e-mail ou app favorito, sem perder informações.",
    proof:
      "Mais de 3x mais alunos conseguem acompanhar todas as aulas e conteúdos",
  },
  {
    icon: DocumentTextIcon,
    title: "Materiais Exclusivos",
    desc: "Acesse PDFs, exercícios e guias de estudo estruturados para acelerar seu aprendizado.",
    proof: "Alunos relatam evolução rápida e aprendizado mais consistente",
  },
  {
    icon: ChartBarIcon,
    title: "Acompanhamento de Resultados",
    desc: "Veja seu progresso e feedback das aulas, entendendo onde avançou e o que melhorar.",
    proof: "Alunos percebem melhoria contínua em semanas de estudo",
  },
];

export default function Integrations() {
  return (
    <section id="integrations" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center">
        Integrações que melhoram sua experiência de aprendizado
      </h2>
      <p className="text-center text-slate-600 mt-2 max-w-2xl mx-auto">
        Ferramentas modernas que tornam suas aulas mais organizadas, rápidas e
        interativas. Cada recurso foi pensado para facilitar seu estudo e
        acelerar sua evolução no inglês.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((i, idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <i.icon className="w-6 h-6 text-blue-500" />
            <h3 className="mt-4 font-semibold text-lg">{i.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{i.desc}</p>
            {i.proof && (
              <div className="mt-3 flex items-center gap-1 text-xs text-green-600 font-medium">
                <StarIcon className="w-4 h-4" />
                <span>{i.proof}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
