import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; // Import Navbar

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Use the Metadata type
export const metadata: Metadata = {
  title: "Ruhan Pacolli",
  description: "Welcome to my portfolio, here you can find projects I do and something about me.",
  icons: {
    icon: "./favicon.ico", // Favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="zg5Kdlc85AAxzI35mpwGrMFVMN3pkuFYx7xNvohbOgs" />
      <link rel="icon" href="./favicon.ico" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Vercel Analytics and Speed Insights */}
        <Analytics />
        <SpeedInsights />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
