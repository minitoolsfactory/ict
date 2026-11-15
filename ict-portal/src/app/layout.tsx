import type { Metadata } from "next";
import { Poppins, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ICT Learning Portal | Classes 6–8",
  description:
    "Bilingual (English/हिंदी) ICT learning portal based on SCERT Delhi's revised ICT curriculum - chapter notes, quizzes, fun computer facts and unit test papers for Classes 6, 7 & 8.",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={poppins.variable + " " + notoDevanagari.variable + " h-full antialiased"}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
