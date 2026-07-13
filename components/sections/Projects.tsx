import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Ajuê",
    description:
      "Aplicativo de corrida e esportes com GPS em tempo real. Projeto em desenvolvimento focado em alta performance e métricas precisas.",
    technologies: ["React Native", "Expo", "Firebase"],
    demo: "https://github.com/kaiquemacieira/Ajue", // Apontando para o GitHub
    github: "https://github.com/kaiquemacieira/Ajue", 
  },
  {
    title: "Portfolio KaMacieira",
    description:
      "Landing page moderna desenvolvida para apresentar serviços, projetos e facilitar o contato com clientes.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    demo: "https://kamacieira.vercel.app/", 
    github: "https://github.com/kaiquemacieira/PortfolioKaMacieira",
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
            Alguns dos projetos criados pela KaMacieira utilizando tecnologias
            modernas, foco em desempenho e uma boa experiência para o usuário.
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
        </div>
      </div>
    </section>
  );
}