import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "ETERNA WATER — Agua del Aire",
  description:
    "ETERNA WATER — Generador Atmosférico de Agua Premium. Edición Limitada 999 unidades.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
