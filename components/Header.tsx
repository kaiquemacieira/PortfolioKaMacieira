"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Processo", href: "#process" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
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
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botão Mobile */}
        <button
          type="button"
          className="md:hidden"
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
                className="text-lg transition hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}