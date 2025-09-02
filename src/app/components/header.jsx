import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Header() {
  const { theme, systemTheme, setTheme } = useTheme();

  // "system" = segue o SO. "theme" é o salvo no localStorage
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200 dark:bg-slate-900/70 dark:border-slate-600">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={
              theme === "dark"
                ? "/icons8-open-book-481-ezgif.com-optiwebp.webp"
                : "/icons8-livro-aberto-48-ezgif.com-optiwebp.webp"
            }
            alt="English Pro"
            width={28} // largura em pixels
            height={28} // altura em pixels
          />
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

        <button
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          className="px-4 py-2 rounded-lg bg-transparent underline cursor-pointer text-sm text-slate-900 dark:text-white flex items-center gap-2"
        >
          {currentTheme === "dark" ? (
            <>
              Modo claro <SunIcon className="w-4 h-4" />
            </>
          ) : (
            <>
              Modo noturno <MoonIcon className="w-4 h-4" />
            </>
          )}
        </button>
      </nav>
    </header>
  );
}
