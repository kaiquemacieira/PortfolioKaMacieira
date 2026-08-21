import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Fasc APP",
    description:
      "Aplicativo desenvolvido para otimizar processos e facilitar o dia a dia dos usuários com uma experiência moderna e intuitiva.",
    technologies: ["React Native", "Expo", "Firebase"],
    demo: "https://cricri-2026.vercel.app/",
    github: "https://github.com/kaiquemacieira/fascunderground",
  },
  {
    title: "Portfolio Kå",
    description:
      "Landing page moderna desenvolvida para apresentar serviços, projetos e facilitar o contato com clientes.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    demo: "https://kamacieira.vercel.app/", 
    github: "https://github.com/kaiquemacieira/PortfolioKaMacieira",
  },
  {
    title: "Copa Vela 2026",
    description:
      "Guia digital completo da Copa Vela em Paulo Afonso (BA): programação, clima ao vivo, acessibilidade (VLibras), leads de patrocínio e portal da cidade.",
    technologies: ["HTML", "JavaScript", "Supabase", "Vercel"],
    demo: "https://copa-vela-2026.vercel.app/",
    github: "https://copa-vela-2026.vercel.app/",
  },
  {
    title: "Abatômetro",
    description:
      "Plataforma de conscientização sobre o consumo de carne, com contadores em tempo real baseados em dados da FAOSTAT e uma calculadora de impacto pessoal.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://abatometro.vercel.app/",
    github: "https://github.com/kaiquemacieira/Abatometro",
  },
  {
    title: "Seu projeto pode ser o próximo",
    description:
      "Desenvolvimento de sites, sistemas web e aplicativos personalizados para empresas e profissionais.",
    demo: "#contact", // Este mantém o link para o formulário de contato
    github: "#contact",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#050505] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.35em] text-blue-400 font-medium">
            Projetos
          </p>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Trabalhos desenvolvidos.
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            projetos e artigos.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              demo={project.demo}
              github={project.github}
            />
          ))}

          <Link
            href="/artigos"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 flex flex-col h-full justify-between transition hover:border-blue-500/50"
          >
            <div>
              <h3 className="text-2xl font-bold">Artigos Publicados</h3>
              <p className="mt-4 text-zinc-400">
                Confira os artigos e conteúdos publicados.
              </p>
            </div>
            <span className="mt-8 text-sm font-semibold hover:text-blue-400 transition">
              Ver artigos →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}