"use client";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="flex flex-col items-center mt-24">
      <div className="flex flex-col">
        <Link href="/blog/delegatecall" className="my-4">
          <div className="flex flex-row ml-4 mr-4 pr-16 h-18 rounded-r-full text-[#bdfea3] text-opacity-70 hover:text-opacity-90 text-lg md:text-2xl pl-5 pt-[10px] pb-[3px] bg-black/70 ">
            &gt; A mental model for understanding delegatecall
          </div>
        </Link>
      </div>
    </div>
  );
}
