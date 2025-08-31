import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import { useState } from "react";

export default function CtaForm() {
  const [loadingLead, setLoadingLead] = useState(false);
  const [leadSent, setLeadSent] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const [errors, setErrors] = useState({});
  const [emailValid, setEmailValid] = useState(true);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    data: "",
    horario: "",
    observacoes: "",
  });

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

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setLoadingLead(true);
    // Simula envio de lead (substituir por integração real: API/CRM/Email)
    setTimeout(() => {
      setLoadingLead(false);
      setLeadSent(true);
    }, 900);
  };
  return (
    <section id="cta" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-600">
            <div className="bg-white p-6 rounded-2xl shadow-md max-w-lg mx-auto dark:bg-slate-900 dark:shadow-slate-950">
              <h3 className="text-xl font-bold mb-2">
                Reserve seu horário agora — rápido, simples e sem compromisso.
              </h3>
              <p className="mb-2">
                Escolha o melhor horário para você e comece a aprender inglês de
                forma prática e personalizada. Totalmente gratuito e rápido de
                agendar!
              </p>
              {enviado ? (
                <div className="p-4 bg-green-100 text-green-800 rounded-md">
                  Seu agendamento foi enviado com sucesso! Entraremos em contato
                  em breve.
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 dark:text-white"
                >
                  <input
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Nome completo"
                    className="w-full p-3 border rounded dark:text-white dark:border-slate-600
    dark:focus:outline-none dark:focus:border-slate-300"
                    required
                  />

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    type="email"
                    className="w-full p-3 border rounded dark:text-white dark:border-slate-600
    dark:focus:outline-none dark:focus:border-slate-300"
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
                    className="w-full p-3 border rounded dark:text-white dark:border-slate-600
    dark:focus:outline-none dark:focus:border-slate-300"
                  />
                  <input
                    name="data"
                    value={formData.data}
                    onChange={handleChange}
                    type="date"
                    className="w-full p-3 border rounded dark:text-white dark:border-slate-600
    dark:focus:outline-none dark:focus:border-slate-300"
                    required
                  />

                  <label className="block mb-2 font-medium text-slate-700 dark:text-white">
                    Qual é o seu nível de inglês?
                  </label>

                  <select
                    onChange={(e) => setNivel(e.target.value)}
                    className="w-full p-3 border rounded dark:bg-slate-800 dark:border-slate-600
    dark:focus:outline-none dark:focus:border-slate-300"
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
                    className="w-full p-3 border rounded dark:border-slate-600
    dark:focus:outline-none dark:focus:border-slate-300"
                  />
                  <button
                    type="submit"
                    className="w-full bg-slate-900 text-white p-3 rounded hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
                  >
                    Enviar
                  </button>
                </form>
              )}
            </div>

            <div
              id="benefits"
              className="mt-4 grid sm:grid-cols-3 gap-3 text-sm "
            >
              <div className="rounded-2xl border border-slate-300 px-4 py-3 flex flex-col items-center justify-center gap-2 hover:shadow-sm text-center dark:border-slate-600 ">
                <Calendar className="w-6 h-6 text-gray-700 dark:text-white" />
                <h4 className="font-semibold">Agendamento fácil</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Marque sua aula gratuita em poucos cliques.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-300 px-4 py-3 flex flex-col items-center justify-center gap-2 hover:shadow-sm text-center dark:border-slate-600">
                <Star className="w-6 h-6 text-gray-700  dark:text-white" />
                <h4 className="font-semibold">Metodologia comprovada</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  English Pro: transforme seu inglês rapidamente.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-300 px-4 py-3 flex flex-col items-center justify-center gap-2 hover:shadow-sm text-center dark:border-slate-600">
                <MessageCircle className="w-6 h-6 text-gray-700  dark:text-white" />
                <h4 className="font-semibold  dark:text-white">
                  Contato direto com o professor
                </h4>
                <p className="text-xs text-slate-600  dark:text-slate-400">
                  Tire dúvidas e receba orientações personalizadas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="contact"
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-600"
        >
          <h3 className="text-xl font-extrabold">Fale com o Prof. Alex</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-white">
            Formulário enxuto para conversão máxima.
          </p>
          <form onSubmit={handleLeadSubmit} className="mt-4 space-y-3">
            <label className="block">
              <span className="text-sm">Nome</span>
              <input
                required
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 dark:focus:ring-0 focus:ring-slate-300 dark:border-slate-600
    dark:focus:outline-none dark:focus:border-slate-300"
                placeholder="Seu nome"
              />
            </label>
            <label className="block">
              <span className="text-sm">E-mail</span>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 dark:focus:ring-0 focus:ring-slate-300 dark:border-slate-600
    dark:focus:outline-none dark:focus:border-slate-300"
                placeholder="voce@email.com"
              />
            </label>
            <label className="block">
              <span className="text-sm">WhatsApp</span>
              <input
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 dark:focus:ring-0 focus:ring-slate-300 dark:border-slate-600
    dark:focus:outline-none dark:focus:border-slate-300"
                placeholder="(DDD) 9 9999-9999"
              />
            </label>

            <button
              type="submit"
              disabled={loadingLead || leadSent}
              className={`w-full rounded-2xl px-4 py-3 text-sm font-semibold inline-flex items-center justify-center ${
                leadSent
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-900 text-white hover:bg-slate-800  dark:bg-slate-800  dark:hover:bg-slate-700"
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

            <p className="text-xs text-slate-500 text-center dark:text-slate-400">
              Ao enviar, você concorda com a nossa política de privacidade
              (DEMO).
            </p>
          </form>

          <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
            <a
              href="mailto:alex@englishpro.demo"
              className="rounded-2xl border border-slate-300 px-4 py-3 flex items-center justify-center gap-2 hover:shadow-sm dark:border-slate-600"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
            <a
              href="tel:+5500000000000"
              className="rounded-2xl border border-slate-300 px-4 py-3 flex items-center justify-center gap-2 hover:shadow-sm dark:border-slate-600"
            >
              <Phone className="w-4 h-4" /> Ligar
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="rounded-2xl border border-slate-300 px-4 py-3 flex items-center justify-center gap-2 hover:shadow-sm dark:border-slate-600"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
