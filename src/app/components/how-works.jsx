import { Calendar, CheckCircle2, MessageCircle, Star } from "lucide-react";

export default function HowWorks() {
  const featureBullets = [
    "Imersão Guiada",
    "Correção Instantânea",
    "Prática Ativa",
    "Trilha Personalizada",
  ];
  return (
    <section
      id="how"
      className="bg-slate-50 border-y border-slate-200 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
    >
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
                viajar sem medo, crescer na carreira ou conquistar sua aprovação
                no TOEFL/IELTS.
              </strong>
            </h2>
            <ul className="mt-6 space-y-3">
              {featureBullets.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 dark:text-white" />
                  <span className="text-slate-700 dark:text-white">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="text-xs rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 dark:text-emerald-950">
                Economiza tempo
              </span>
              <span className="text-xs rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 dark:text-indigo-950">
                Resultados rápidos
              </span>
              <span className="text-xs rounded-full bg-rose-100 text-rose-700 px-3 py-1 dark:text-rose-950">
                Aplicabilidade prática
              </span>
              <span className="text-xs rounded-full bg-amber-100 text-gray-700 px-3 py-1 dark:text-gray-950">
                Motivação contínua
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-600">
            <h3 className="font-semibold">Como funciona na prática</h3>
            <ul className="mt-3 text-sm space-y-2 list-decimal pl-5 text-slate-700 dark:text-white">
              <li>
                Aluno agenda sua <strong>aula experimental gratuita</strong> em
                poucos cliques.
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
            </ul>

            <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
              <a
                href="#cta"
                className="rounded-2xl bg-slate-900 text-white px-4 py-3 flex items-center justify-center gap-2 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
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
  );
}
