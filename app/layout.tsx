import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dribble clone",
  description: "This is a next.js application which gives the similar functions like dribble",
};

import React from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="inter">
          <NavBar/>
          <main className="px-5">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}

