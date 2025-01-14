import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";

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
        </div>
      </body>
    </html>
  );
}
