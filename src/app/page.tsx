import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex place-content-center">
      <div className="absolute top-[400px] text-center text-3xl text-[#bdfea3] opacity-70">
      Building and educating on
      <br />
      Ethereum for the Web3 era
      </div>
      <div className="group absolute top-[650px] flex justify-center items-center p-2">
        <Link href="https://google.com">
        <Image 
            src="/CTAButton2.png"
            className="opacity-80 group-hover:opacity-100"
            alt="Let's work together" 
            width={400}
            height={200}
            priority
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-white text-opacity-80 group-hover:text-[#bdfea3] group-hover:text-opacity-100 font-orbitron text-2xl font-medium">Let&apos;s build together</span>
        </div>
        </Link>
      </div>
    </div>
  )
}
