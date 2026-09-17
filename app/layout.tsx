import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meu Primeiro Site",
  description: "Um primeiro passo no desenvolvimento web: projeto educacional para aprender Next.js.",
};

// O layout raiz envolve todas as páginas da aplicação.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
