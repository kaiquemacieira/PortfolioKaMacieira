"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505]"
    >
      <div className="pointer-events-none absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 uppercase tracking-[0.35em] text-blue-400"
        >
          KaMacieira
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.7,
          }}
          className="max-w-4xl text-6xl font-black leading-tight md:text-8xl"
        >
          Criamos soluções digitais
          <br />
          que geram resultados.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.45,
          }}
          className="mt-8 max-w-2xl text-xl leading-9 text-zinc-400"
        >
          Desenvolvimento de sites, sistemas web e aplicativos personalizados
          para empresas e projetos que querem crescer no digital.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.7,
          }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a href="#projects">
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-500"
            >
              Ver Projetos
            </Button>
          </a>

          <a
            href="https://wa.me/5579988529932?text=Olá!%20Vim%20pelo%20site%20da%20KaMacieira%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-blue-500 bg-transparent text-blue-400 hover:bg-blue-500 hover:text-white"
            >
              Solicitar orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>

      </div>
    </section>
  );
}