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
      {/* Glow azul */}
      <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

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
            delay: .15,
            duration: .7
          }}
          className="max-w-4xl text-6xl font-black leading-tight md:text-8xl"
        >
          Transformo ideias
          <br />
          em produtos digitais.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: .45
          }}
          className="mt-8 max-w-2xl text-xl leading-9 text-zinc-400"
        >
          Desenvolvimento de sites, sistemas web e aplicativos modernos,
          rápidos e escaláveis para empresas e empreendedores.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: .7
          }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <Button size="lg">
            Ver Projetos
          </Button>

          <Button variant="outline" size="lg">
            Solicitar orçamento
            <ArrowRight className="ml-2 h-5 w-5"/>
          </Button>
        </motion.div>

      </div>
    </section>
  );
}