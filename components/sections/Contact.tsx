"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MessageCircle } from "lucide-react";
import confetti from "canvas-confetti";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
} as const;

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
} as const;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const dispararCelebracao = () => {
    const duracao = 3 * 1000;
    const fim = Date.now() + duracao;

    const intervalo = setInterval(() => {
      const tempoRestante = fim - Date.now();

      if (tempoRestante <= 0) {
        return clearInterval(intervalo);
      }

      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: ["#60a5fa", "#34d399", "#fbbf24", "#f43f5e"],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: ["#60a5fa", "#34d399", "#fbbf24", "#f43f5e"],
      });
    }, 150);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await emailjs.send(
        "service_v470fik",
        "template_qq984qi",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "ljY62bc6GsyKbL9WF"
      );

      setSuccess("Mensagem enviada com sucesso! Entrarei em contato em breve.");
      setForm({ name: "", email: "", message: "" });
      dispararCelebracao();
    } catch (err: any) {
      console.error("Erro EmailJS:", err);
      setError("Não foi possível enviar sua mensagem. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#050505] text-white py-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2"
      >
        {/* Coluna da Esquerda */}
        <motion.div variants={fadeLeft}>
          <motion.p variants={fadeUp} className="uppercase tracking-[0.35em] text-blue-400 font-medium">
            Contato
          </motion.p>

          <motion.h2
            key="contact-main-title"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="mt-4 text-4xl font-black leading-tight md:text-6xl block"
          >
            Vamos conversar sobre o seu próximo projeto.
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-6 text-lg leading-8 text-zinc-400">
            Precisa de um site, sistema web ou aplicativo? Conte sua ideia e vamos encontrar a melhor solução para transformar seu projeto em realidade.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              href="https://wa.me/5579988529932?text=Olá!%20Vim%20pelo%20site%20da%20KaMacieira%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-500"
            >
              <MessageCircle className="h-5 w-5" />
              Conversar no WhatsApp
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              href="mailto:kaaiqq@gmail.com?subject=Novo%20Projeto%20-%20KaMacieira"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-4 font-semibold transition hover:border-blue-500 hover:text-blue-400"
            >
              <Mail className="h-5 w-5" />
              Enviar e-mail
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Coluna da Direita (Formulário) */}
        <motion.div variants={fadeRight} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <motion.form onSubmit={handleSubmit} className="space-y-6">
            
            <motion.div variants={fadeUp}>
              <label className="mb-2 block text-sm font-medium">Nome</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Seu nome"
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="mb-2 block text-sm font-medium">E-mail</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="voce@email.com"
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="mb-2 block text-sm font-medium">Conte sobre seu projeto</label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Descreva seu projeto..."
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </motion.div>

            {success && (
              <motion.p 
                initial={{ opacity: 0, y: 15, scale: 0.95 }} 
                animate={{ opacity: 1, y: 0, scale: 1 }} 
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-lg bg-green-500/10 p-4 text-green-400 font-medium border border-green-500/20"
              >
                {success}
              </motion.p>
            )}

            {error && (
              <motion.p 
                initial={{ opacity: 0, y: 15, scale: 0.95 }} 
                animate={{ opacity: 1, y: 0, scale: 1 }} 
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-lg bg-red-500/10 p-4 text-red-400 font-medium border border-red-500/20"
              >
                {error}
              </motion.p>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={!loading ? { scale: 1.03, y: -2 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              transition={{ duration: 0.2 }}
              className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Enviando..." : "Solicitar orçamento"}
            </motion.button>

          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
}