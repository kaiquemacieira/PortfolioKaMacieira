export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050505] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="uppercase tracking-[0.35em] text-blue-400">
          Contato
        </p>

        <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-6xl">
          Vamos transformar sua ideia em um projeto digital.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Entre em contato para conversar sobre sites,
          sistemas web ou aplicativos personalizados.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:contato@kamacieira.com"
            className="inline-flex rounded-xl bg-blue-500 px-8 py-4 font-semibold transition hover:bg-blue-400"
          >
            Entrar em contato
          </a>

          <a
            href="#projects"
            className="inline-flex rounded-xl border border-white/10 px-8 py-4 font-semibold transition hover:border-blue-500"
          >
            Ver projetos
          </a>
        </div>

      </div>
    </section>
  );
}