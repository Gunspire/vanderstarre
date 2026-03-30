import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../sections/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Van der Starre | Timmerman Zoetermeer",
  description: "Kwalitatief timmerwerk en onderhoud in Zoetermeer en omgeving. Ricardo van der Starre — 5+ jaar vakervaring, altijd met garantie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="nl" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
