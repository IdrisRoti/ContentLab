import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Content Lab",
  description: "AI copywriting partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dm_sans.className}>
      <body className="bg-[#0F0F0F] text-white">
      <Header />
        <main className="min-h-screen">
          {children}
        </main>
      <Footer />
      </body>
    </html>
  );
}
