type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  demo?: string;
  github?: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  demo = "#",
  github = "#",
}: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/10">

      {/* Área da futura imagem */}
      <div className="flex h-56 items-center justify-center bg-gradient-to-br from-blue-600/20 via-[#111] to-black">

        <div className="text-center">

          <div className="text-6xl opacity-40">
            💻
          </div>

          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Preview em breve
          </p>

        </div>

      </div>

      <div className="p-8">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-3">

          <a
            href={demo}
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500"
          >
            Ver Projeto
          </a>

          <a
            href={github}
            className="rounded-xl border border-white/10 px-5 py-3 transition hover:border-blue-500"
          >
            GitHub
          </a>

        </div>

      </div>

    </div>
  );
}