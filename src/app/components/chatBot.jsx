"use client";

import {
  ChatBubbleOvalLeftEllipsisIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Chatbot() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Olá 👋! Quer agendar sua aula experimental?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    // Simulação simples de "IA" com regras básicas
    let botReply = "Desculpe, ainda estou aprendendo a responder isso.";
    if (input.toLowerCase().includes("sim")) {
      botReply = "Ótimo! 🎉 Clique no botão abaixo para agendar sua aula 👉";
    } else if (input.toLowerCase().includes("não")) {
      botReply = "Tudo bem! Se mudar de ideia, estarei aqui. 😉";
    } else if (input.toLowerCase().includes("preço")) {
      botReply = "Nossos planos começam a partir de R$79/aula.";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    }, 800); // atraso para parecer "pensando"

    setInput("");
  };

  return (
    <>
      {/* Botão Flutuante */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed cursor-pointer bottom-5 right-5  bg-slate-900 text-white rounded-full p-4 shadow-lg hover:bg-slate-800 transition"
      >
        <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />
      </button>

      {/* Caixa de Chat */}
      {showChat && (
        <div className="fixed bottom-20 right-5 w-80 bg-white border rounded-2xl shadow-xl flex flex-col overflow-hidden">
          <div className="bg-slate-600 text-white p-3 font-semibold">
            English Pro - Chat
          </div>
          <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-96">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.from === "bot"
                    ? "bg-gray-100 text-gray-900 self-start"
                    : "bg-slate-200 text-black self-end ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex gap-2">
            <input
              type="text"
              className="flex-1 border rounded-lg px-2 py-1 text-sm"
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-slate-900 text-white px-3 rounded-lg"
            >
              <PaperAirplaneIcon className="w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
