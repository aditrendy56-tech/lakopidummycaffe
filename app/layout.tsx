import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Baloo_2, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta"
});

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Lakopi — Kedai Kopi Bandar Lampung",
  description: "Landing page Lakopi yang dibangun dengan Next.js, siap deploy ke Vercel dan terhubung ke Supabase.",
  robots: {
    index: false,
    follow: false
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${jakarta.variable} ${baloo.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}