import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-50 border-t border-white/10 bg-[#050505] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">

        {/* Marca */}
        <div>
          <h2 className="text-3xl font-black">
            KaMacieira<span className="text-blue-500">.</span>
          </h2>

          <p className="mt-6 max-w-sm leading-7 text-zinc-400">
            Desenvolvimento de sites, sistemas web e aplicativos modernos
            para empresas e profissionais.
          </p>
        </div>


        {/* Navegação */}
        <div>
          <h3 className="text-lg font-bold">
            Navegação
          </h3>

          <nav className="mt-6 flex flex-col gap-3 text-zinc-400">

            <a
              href="#about"
              className="transition hover:text-blue-400"
            >
              Sobre
            </a>

            <a
              href="#services"
              className="transition hover:text-blue-400"
            >
              Serviços
            </a>

            <a
              href="#process"
              className="transition hover:text-blue-400"
            >
              Processo
            </a>

            <a
              href="#projects"
              className="transition hover:text-blue-400"
            >
              Projetos
            </a>

            <a
              href="#contact"
              className="transition hover:text-blue-400"
            >
              Contato
            </a>

          </nav>
        </div>


        {/* Contato */}
        <div>
          <h3 className="text-lg font-bold">
            Contato
          </h3>

          <div className="mt-6 flex flex-col gap-4">

            <a
              href="https://wa.me/5579988529932"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-zinc-400 transition hover:text-green-400"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>


            <a
              href="mailto:kaaiqq@gmail.com"
              className="flex items-center gap-3 text-zinc-400 transition hover:text-blue-400"
            >
              <Mail size={20} />
              kaaiqq@gmail.com
            </a>

          </div>
        </div>

      </div>


      {/* Copyright */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-zinc-500">
        © 2026 KaMacieira. Todos os direitos reservados.
      </div>

    </footer>
  );
}