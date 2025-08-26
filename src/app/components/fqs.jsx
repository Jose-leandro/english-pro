import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Preciso ter nível básico?",
    answer:
      "Não! As aulas são adaptadas ao seu nível, do iniciante ao avançado.",
  },
  {
    question: "Posso agendar em qualquer horário?",
    answer:
      "Sim! Ofereço horários flexíveis de acordo com a sua disponibilidade.",
  },
  {
    question: "A primeira aula é realmente gratuita?",
    answer:
      "Sim, você pode experimentar a aula sem compromisso e decidir se quer continuar.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Perguntas Frequentes
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition">
            <CardContent className="p-6 flex justify-between items-center cursor-pointer">
              <div>
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </div>
              <ChevronDown className="w-6 h-6 text-gray-400" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
