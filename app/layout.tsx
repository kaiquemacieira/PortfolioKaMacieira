import type { Metadata, Viewport } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaíque Macieira | Desenvolvedor Full Stack",
  description:
    "Desenvolvedor focado em criar sites e sistemas que geram resultados reais. Transforme sua ideia em um produto digital profissional.",
  authors: [{ name: "Kaíque Macieira" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} scroll-smooth`}>
      <body className={`${inter.className} bg-[#050505] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}