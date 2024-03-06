"use client";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="flex flex-col items-center mt-24">
      <div className="flex flex-col">
        <Link href="/memos/0" className="my-4">
          <div className="flex flex-row ml-4 mr-4 pr-16 h-18 rounded-r-full text-[#bdfea3] text-opacity-70 hover:text-opacity-90 text-md md:text-xl pl-5 pt-[10px] pb-[3px] bg-black/70 ">
            &gt; ETHLabs Founder Memo #0: Hello World
          </div>
        </Link>
      </div>
    </div>
  );
}
