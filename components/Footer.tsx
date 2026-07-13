import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const whatsappMessage = encodeURIComponent("Olá, Ka! Vi seu portfólio e gostaria de falar sobre um projeto.");
  const whatsappUrl = `https://wa.me/5579988529932?text=${whatsappMessage}`;

  return (
    <footer className="relative z-50 border-t border-white/10 bg-[#050505] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">

        {/* Marca */}
        <div>
          <h2 className="text-3xl font-black">
            KaMacieira<span className="text-blue-500">.</span>
          </h2>
          <p className="mt-6 max-w-sm leading-7 text-zinc-400">
            Transformo ideias em plataformas digitais de alta performance. 
            Sites rápidos, seguros e focados em gerar resultados reais para o seu negócio.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="text-lg font-bold text-zinc-100">Navegação</h3>
          <nav className="mt-6 flex flex-col gap-3 text-zinc-400">
            {['Sobre', 'Serviços', 'Processo', 'Projetos'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="w-fit transition hover:text-blue-400">
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Contato e Redes */}
        <div>
          <h3 className="text-lg font-bold text-zinc-100">Vamos conversar?</h3>
          <div className="mt-6 flex flex-col gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex w-fit items-center gap-3 text-zinc-400 transition hover:text-green-400">
              <MessageCircle size={20} />
              (79) 98852-9932
            </a>
            <a href="mailto:kaaiqq@gmail.com" className="flex w-fit items-center gap-3 text-zinc-400 transition hover:text-blue-400">
              <Mail size={20} />
              kaaiqq@gmail.com
            </a>

            <div className="mt-2 flex gap-4">
              <a href="https://www.linkedin.com/in/kmacieira" target="_blank" rel="noopener noreferrer" className="text-zinc-400 transition hover:text-blue-500 hover:scale-110" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com/kaiquemacieira" target="_blank" rel="noopener noreferrer" className="text-zinc-400 transition hover:text-white hover:scale-110" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0 .2-3.8s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 1.6 5 2 5 2a5.5 5.5 0 0 0 .2 3.8A5.5 5.5 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} KaMacieira. Todos os direitos reservados.
      </div>
    </footer>
  );
}