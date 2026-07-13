export default function About() {
  const techs = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Node.js"];

  return (
    <section id="about" className="bg-[#050505] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="uppercase tracking-[0.35em] text-blue-400 font-medium">
          Sobre mim
        </p>
        
        <h2 className="mt-4 text-4xl font-black md:text-6xl">
          Transformo ideias complexas em <span className="text-blue-500">experiências digitais simples.</span>
        </h2>

        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <p className="text-lg leading-8 text-zinc-400">
            Meu nome é Kaíque Macieira e sou desenvolvedor web focado em criar soluções que realmente funcionam. Não crio apenas sites; eu construo ferramentas que ajudam empresas e empreendedores a crescerem no ambiente digital.
          </p>
          <p className="text-lg leading-8 text-zinc-400">
            Minha abordagem une design funcional, performance técnica e estratégia de mercado. Meu objetivo é garantir que o seu projeto não seja apenas bonito, mas uma máquina de gerar resultados e credibilidade para o seu negócio.
          </p>
        </div>

        {/* Seção de Tecnologias */}
        <div className="mt-12">
          <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4">Tecnologias que domino:</p>
          <div className="flex flex-wrap gap-3">
            {techs.map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-sm text-zinc-300 hover:border-blue-500/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}