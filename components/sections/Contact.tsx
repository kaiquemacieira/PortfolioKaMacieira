import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050505] py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Lado esquerdo */}
        <div>

          <p className="uppercase tracking-[0.35em] text-blue-400">
            Contato
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Vamos conversar sobre o seu próximo projeto.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Precisa de um site, sistema web ou aplicativo?
            Conte sua ideia e vamos encontrar a melhor solução
            para transformar seu projeto em realidade.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://wa.me/5579988529932?text=Olá!%20Vim%20pelo%20site%20da%20KaMacieira%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-500"
            >
              <MessageCircle className="h-5 w-5" />
              Conversar no WhatsApp
            </a>

            <a
              href="mailto:kaaiqq@gmail.com?subject=Novo%20Projeto%20-%20KaMacieira"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-4 font-semibold transition hover:border-blue-500 hover:text-blue-400"
            >
              <Mail className="h-5 w-5" />
              Enviar e-mail
            </a>

          </div>

        </div>

        {/* Lado direito */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

          <form className="space-y-6">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Nome
              </label>

              <input
                type="text"
                placeholder="Seu nome"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                E-mail
              </label>

              <input
                type="email"
                placeholder="voce@email.com"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Conte sobre seu projeto
              </label>

              <textarea
                rows={6}
                placeholder="Descreva seu projeto..."
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-500"
            >
              Solicitar orçamento
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}