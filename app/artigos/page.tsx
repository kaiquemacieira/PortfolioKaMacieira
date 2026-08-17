import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Artigos() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <section className="bg-[#050505] py-24 pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.35em] text-blue-400 font-medium">
              Artigos
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Artigos publicados.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <a
              href="https://github.com/kaiquemacieira"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 flex flex-col h-full transition hover:border-blue-500/50"
            >
              <h3 className="text-2xl font-bold">GitHub</h3>
              <p className="mt-4 flex-grow text-zinc-400">
                Confira os projetos e artigos publicados no GitHub.
              </p>
              <span className="mt-8 text-sm font-semibold hover:text-blue-400 transition">
                Acessar →
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
