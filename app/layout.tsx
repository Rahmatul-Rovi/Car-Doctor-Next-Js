import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NextAuthProvider from "./Provider/NextAuthProvider";
import BlogPage from "./blog/page";
import AboutPage from "./about/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Doctor",
  description: "Best car repair service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextAuthProvider> 
          <Navbar />
          
          <main className="min-h-screen">
             {children}
          </main>
        
     
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}