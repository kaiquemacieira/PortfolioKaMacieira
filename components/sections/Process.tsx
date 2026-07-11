const steps = [
  {
    number: "01",
    title: "Entendemos sua ideia",
    description:
      "Conversamos sobre seus objetivos, necessidades e o problema que precisa resolver.",
  },
  {
    number: "02",
    title: "Planejamos a solução",
    description:
      "Definimos as melhores tecnologias, etapas e estratégias para o projeto.",
  },
  {
    number: "03",
    title: "Desenvolvemos o produto",
    description:
      "Criamos uma solução moderna, rápida e preparada para crescer.",
  },
  {
    number: "04",
    title: "Entregamos e evoluímos",
    description:
      "Publicamos o projeto e continuamos ajudando com melhorias quando necessário.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[#050505] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.35em] text-blue-400">
            Processo
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Um processo simples para transformar ideias em produtos.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Trabalhamos de forma organizada para entregar soluções
            digitais com qualidade e clareza em cada etapa.
          </p>
        </div>


        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >

              <span className="text-4xl font-black text-blue-500">
                {step.number}
              </span>

              <h3 className="mt-6 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}