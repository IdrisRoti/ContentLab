import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Logo from "@/components/Logo";

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
    <html lang="en">
      <body className={dm_sans.className}>
        <Logo />
        {children}</body>
    </html>
  );
}
