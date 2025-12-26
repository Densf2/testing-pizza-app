import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pizza Express - Your Yummy Pizza Delivered Fast & Fresh",
  description:
    "Craving for a cheesy pizza in the comfort of your own home? Pizza Express to the rescue. We are always ready to help you when the pizza pangs hit! :)",
  keywords: "Pizza, pizza delivery, home delivery, online ordering",
  robots: "index, follow",
  authors: [{ name: "Pizza Express Team" }],
  openGraph: {
    title: "Pizza Express - Your Yummy Pizza Delivered Fast & Fresh",
    description:
      "Craving for a cheesy pizza in the comfort of your own home? Pizza Express to the rescue.",
    type: "website",
    siteName: "Pizza Express",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pizza Express - Your Yummy Pizza Delivered Fast & Fresh",
    description:
      "Craving for a cheesy pizza in the comfort of your own home? Pizza Express to the rescue.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
