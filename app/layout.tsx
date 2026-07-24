import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ThreeBackground from "./components/ThreeBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Kirti | Full Stack Developer",
  description:
    "Full Stack Developer building BaatcheetAI, a voice-first AI companion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground antialiased`}
      >
        <ThreeBackground />
        <div className="relative z-10">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
