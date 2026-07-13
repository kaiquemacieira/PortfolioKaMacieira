const steps = [
  {
    number: "01",
    title: "Alinhamento Estratégico",
    description:
      "Analisamos seu negócio e seus objetivos para garantir que o projeto resolva um problema real e gere retorno.",
  },
  {
    number: "02",
    title: "Design e Planejamento",
    description:
      "Definimos o fluxo, a interface e as tecnologias ideais para que o produto seja intuitivo e de alta performance.",
  },
  {
    number: "03",
    title: "Desenvolvimento Ágil",
    description:
      "Transformo o plano em código limpo, moderno e escalável, mantendo o foco em prazos e qualidade técnica.",
  },
  {
    number: "04",
    title: "Entrega e Suporte",
    description:
      "Publicamos seu projeto e dou todo o suporte necessário para que ele continue performando como o esperado.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#050505] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.35em] text-blue-400 font-medium">
            Processo de Trabalho
          </p>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Do conceito à entrega em <span className="text-blue-500">4 passos.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Minha metodologia é baseada em transparência e foco no seu resultado, 
            garantindo que cada etapa seja clara para você.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:border-blue-500/50 hover:bg-white/[0.05]"
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