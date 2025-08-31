import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Price() {
  const [respostas, setRespostas] = useState([]);
  const [indice, setIndice] = useState(0);
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

  return (
    <section
      id="pricing"
      className="bg-slate-50 border-y border-slate-200 dark:bg-slate-900 dark:border-slate-600"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center">
          Descubra seu Nível e Escolha o Plano Perfeito para sua Fluência
        </h2>

        <p className="text-center text-slate-600 mt-2 max-w-4xl mx-auto mb-8 dark:text-slate-300">
          Encontre em apenas 2 minutos o plano ideal para sua jornada no inglês!
          Nossos pacotes foram desenvolvidos para todos os níveis — do{" "}
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
                  className="px-6 py-3 border rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-700"
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
                    className={`rounded-3xl border p-6 w-1/4 bg-white shadow-sm dark:bg-slate-900  ${
                      p.highlight
                        ? "border-slate-900 ring-2 ring-slate-900"
                        : "border-slate-200 dark:border-slate-600"
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
                          className="flex items-start gap-2 text-slate-700 dark:text-white"
                        >
                          <CheckCircle2 className="w-4 h-4 mt-0.5" /> {b}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#cta"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 text-white px-4 py-3 text-sm font-semibold hover:bg-slate-800 dark:bg-slate-800"
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
  );
}
