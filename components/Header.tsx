"use client";

import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight transition hover:text-blue-400"
        >
          KaMacieira<span className="text-blue-500">.</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          <a href="#about" className="transition hover:text-blue-400">
            Sobre
          </a>

          <a href="#services" className="transition hover:text-blue-400">
            Serviços
          </a>

          <a href="#projects" className="transition hover:text-blue-400">
            Projetos
          </a>

          <a href="#contact" className="transition hover:text-blue-400">
            Contato
          </a>
        </nav>

        <button className="md:hidden">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
}