import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import ChatWidget from "./components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IGTA BD Training | Business Development Curriculum",
  description: "Complete business development training curriculum for IGTA visa services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 min-h-screen`}>
        <Navigation />
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
        <ChatWidget />
      </body>
    </html>
  );
}
