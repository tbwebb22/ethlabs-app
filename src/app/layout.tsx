/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next'
import Head from 'next/head';
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ETHLabs.io',
  description: 'The ETHLabs.io webapp',
}

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className="font-sans">
//         <Navbar />
//         {children}
//       </body>
//     </html>
//   )
// }

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
        {children}
      </body>
    </html>
  );
}
