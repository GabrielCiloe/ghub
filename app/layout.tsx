import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import "./globals.css";

// Configuração da fonte Inter
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Configuração da fonte DM Mono
const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: "400", // Você pode ajustar o peso da fonte conforme necessário
});

export const metadata: Metadata = {
  title: "Ghub - Portfólio Web",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body
        className={`${inter.variable} ${dmMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}