import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";
import { Lexend } from 'next/font/google'


const lexend =  Lexend({
  subsets : ['latin'],
  display : 'swap'
})  


export const metadata: Metadata = {
  title: "Musyafa Portofolio",
  description: "Generated by next app"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={lexend.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
