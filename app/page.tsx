import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}