import { Code2, Globe, Smartphone, Wrench } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites profissionais",
    description:
      "Landing pages e sites modernos, rápidos e responsivos para apresentar sua marca e atrair clientes.",
  },
  {
    icon: Code2,
    title: "Sistemas web",
    description:
      "Sistemas personalizados para automatizar processos e melhorar a operação do seu negócio.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos mobile",
    description:
      "Aplicativos Android e iOS com foco em experiência do usuário e desempenho.",
  },
  {
    icon: Wrench,
    title: "Manutenção e melhorias",
    description:
      "Correções, atualizações e evolução contínua de sistemas já existentes.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#050505] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.35em] text-blue-400">
            Serviços
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Soluções digitais para transformar ideias em produtos.
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Desenvolvemos tecnologia sob medida para empresas,
            profissionais e projetos que precisam crescer.
          </p>
        </div>


        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-blue-500/50"
              >
                <Icon className="h-10 w-10 text-blue-400" />

                <h3 className="mt-6 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-zinc-400 leading-7">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}