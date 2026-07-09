const projects = [
  {
    title: "Ajuê",
    description:
      "Aplicativo mobile para acompanhamento de atividades físicas, com foco em corrida, métricas e experiência do usuário.",
    technologies: ["React Native", "Expo", "Firebase"],
  },
  {
    title: "Sistemas Web",
    description:
      "Aplicações web personalizadas para automatizar processos e melhorar a organização de negócios.",
    technologies: ["Next.js", "TypeScript", "Banco de dados"],
  },
  {
    title: "Landing Pages",
    description:
      "Páginas modernas e responsivas para empresas apresentarem seus serviços e conquistarem clientes.",
    technologies: ["Next.js", "Tailwind CSS", "UI Design"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#050505] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="uppercase tracking-[0.35em] text-blue-400">
          Projetos
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-6xl">
          Trabalhos desenvolvidos.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}