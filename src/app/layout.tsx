import type { Metadata } from "next";
import { Open_Sans, Rye } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: "400",
});

const rye = Rye({
  variable: "--font-rye",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "ClaimJump",
  description: `An online tool that lets families view estate items, 
    express their preferences, and coordinate distribution fairly - 
    bringing clarity and peace of mind during a challenging time`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${rye.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
