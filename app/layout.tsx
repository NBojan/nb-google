import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "./components";
import { Cabin, Quicksand } from "next/font/google";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cabin",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  description: "Google clone, NBojan, created with NextJS, uploaded on Vercel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cabin.variable} ${quicksand.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
