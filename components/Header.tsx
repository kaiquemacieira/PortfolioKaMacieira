"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Removi o "Contato" da lista de links comuns para destacá-lo
  const links = [
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Processo", href: "#process" },
    { name: "Projetos", href: "#projects" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] border-b border-white/10 bg-[#050505]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight transition hover:text-blue-400"
          onClick={() => setOpen(false)}
        >
          KaMacieira<span className="text-blue-500">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Botão de Conversão (Desktop) */}
          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-500 hover:scale-105 active:scale-95"
          >
            Fazer Orçamento
          </a>
        </div>

        {/* Botão Mobile */}
        <button
          type="button"
          className="text-gray-300 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <nav className="border-t border-white/10 bg-[#050505] md:hidden">
          <div className="flex flex-col gap-6 px-6 py-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-gray-300 transition hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
            
            {/* Botão de Conversão (Mobile) */}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex justify-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white transition hover:bg-blue-500"
            >
              Fazer Orçamento
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}