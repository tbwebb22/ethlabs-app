import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-grow grid grid-rows-3 ">
      <div />

      <div className="flex justify-center items-center">
        <div className="text-center text-3xl text-[#bdfea3] opacity-70">
          Building and educating on
          <br />
          Ethereum for the Web3 era
        </div>
      </div>

      <div className="flex justify-center items-center mx-4">
        <div className="group">
          <Link href="https://google.com" target="_blank" className="relative">
            <Image
              src="/CTAButton2.png"
              className="opacity-80 group-hover:opacity-100"
              alt="Let's work together"
              width={400}
              height={200}
              priority
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <span className="text-[#cee5f9] text-opacity-100 group-hover:text-[#bdfea3] group-hover:text-opacity-100 font-orbitron text-2xl font-medium">
                Let&apos;s build together
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
