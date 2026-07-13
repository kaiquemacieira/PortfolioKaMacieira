interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[]; // O "?" torna opcional
  demo: string;
  github: string;
}

export default function ProjectCard({ title, description, technologies, demo, github }: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 flex flex-col h-full transition hover:border-blue-500/50">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-4 flex-grow text-zinc-400">{description}</p>
      
      {/* Aqui a verificação com ? evita o erro de 'undefined' */}
      <div className="mt-6 flex flex-wrap gap-2">
        {technologies?.map((tech) => (
          <span key={tech} className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        <a href={demo} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-blue-400 transition">
          Ver projeto →
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:text-white transition">
          GitHub
        </a>
      </div>
    </div>
  );
}