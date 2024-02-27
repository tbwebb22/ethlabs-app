import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // Use 'min-h-screen' to ensure the grid covers the full viewport height
    // 'grid grid-rows-3' creates a grid with 3 rows
    <div className="flex flex-grow grid grid-rows-3 ">
      {/* Empty div for the first row to push the content down */}
      <div></div>

      {/* Center content in the middle row */}
      <div className="flex justify-center items-center">
        <div className="text-center text-3xl text-[#bdfea3] opacity-70">
          Building and educating on
          <br />
          Ethereum for the Web3 era
        </div>
      </div>

      {/* CTA button in the bottom row */}
      <div className="flex justify-center items-center mx-4">
        <Link href="https://google.com" target="_blank" className="relative">
          <Image
            src="/CTAButton2.png"
            alt="Let's work together"
            width={400}
            height={200}
            priority
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="text-white text-opacity-80 hover:text-[#bdfea3] hover:text-opacity-100 font-orbitron text-2xl font-medium">
              Lets build together
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
