import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Navbar from "./components/Navbar";
import Image from "next/image";
import "highlight.js/styles/dark.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "ETHLabs",
  description: "Building and educating on Ethereum for the Web3 era",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>ETHLabs</title>
        <meta name="description" content="The ETHLabs webapp" />
      </Head>
      <body className="font-eurostile">
        <Navbar />
        <div className="fixed top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden">
          <Image
            src="/ETHLabsCity.png"
            alt="ETHLabs city hero image"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[black] bg-opacity-80" />
        </div>
        <div className="flex flex-col min-h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
