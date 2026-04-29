import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "IPMMO Korwil Semarang–Salatiga | Website Resmi",
  description: "Wadah pemersatu dan pengembangan potensi mahasiswa Mimika (IPMMO) di wilayah Semarang dan Salatiga, Jawa Tengah.",
  keywords: ["IPMMO", "Semarang", "Salatiga", "Mahasiswa Mimika", "Organisasi Mahasiswa"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
