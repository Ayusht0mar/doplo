import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import { Analytics } from "@vercel/analytics/react"
import "doplo/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doplo | A Modern UI Library for React.",
  description: "Doplo is a modern UI library making it simple to build the UI components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="absolute top-0 z-[-2] min-h-svh w-full bg-[#000000] bg-[radial-gradient(#ffffff20_1px,#000_1px)] bg-[size:20px_20px]"> 
            <Navbar/>
            {children}
            <Analytics/>
            <p className="text-center text-balance w-full my-6">
                      Build by <a href="https://www.ayushtomar.in/">Ayush Tomar.</a> The source code is available on <a href="https://github.com/Ayusht0mar/doplo">Github.</a>
            </p> 
          </div>
      </body>
    </html>
  );
}
