/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next'
import Head from 'next/head';
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Image from 'next/image'
import 'highlight.js/styles/dark.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ETHLabs.io',
  description: 'The ETHLabs.io webapp',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>ETHLabs</title>
        <meta name="description" content="The ETHLabs webapp" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap" 
          rel="stylesheet"
        />
      </Head>
      <body className="font-sans">
        <Navbar />
        <div className="fixed top-0 h-[1000px] w-full overflow-hidden -z-10">
        <Image 
            src="/ETHLabsCity.png"
            alt="Hero Image" 
            layout="fill" 
            objectFit="cover"
            priority
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[black] bg-opacity-80" />
      </div>
      <div className="flex flex-col min-h-screen">
        {children}
        <footer className="mt-auto bg-[black] bg-opacity-90 text-white h-[64px] flex justify-end items-center pr-16">
        <div className="flex justify-center items-center space-x-4">
        <div className="relative h-[20px] w-[48px] flex justify-center items-center">

        <Link href="https://twitter.com/TaylorWebb_eth" rel="noopener noreferrer" target="_blank" className="m-6">
        <Image 
          src="/XLogo.png"
          alt="X Logo"
          layout="fill"
          objectFit="contain"
          quality={100}
          className="opacity-60 hover:opacity-100"
        />
        </Link>
        </div>
        <div className="relative h-[20px] w-[48px] flex justify-center items-center">
        <Link href="https://warpcast.com/taylorwebb.eth" rel="noopener noreferrer" target="_blank" className="m-6">
        <Image 
          src="/WarpcastLogo.png"
          alt="X Logo"
          layout="fill"
          objectFit="contain"
          quality={100}
          className="opacity-60 hover:opacity-100"
        />
        </Link>
        </div>

        </div>

          </footer>
      </div>

      </body>
    </html>
  );
}
