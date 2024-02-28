"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function MobileNavModal({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <dialog className="fixed left-0 top-20 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center ">
        <div className="flex flex-col items-start">
          <Link
            className="mx-2 px-10 mt-10 text-2xl hover:bg-black/50 font-orbitron font-medium text-[#417ec3] hover:text-[#cdffb8]"
            href="/blog"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            className="mx-2 px-10 mt-8 text-2xl hover:bg-black/50 font-orbitron font-medium text-[#417ec3] hover:text-[#cdffb8]"
            href="/blog"
            onClick={() => setIsOpen(false)}
          >
            Memos
          </Link>
          <Link
            className="mx-2 px-10 mt-8 text-2xl hover:bg-black/50 font-orbitron font-medium text-[#417ec3] hover:text-[#cdffb8]"
            href="/about"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>
      </dialog>
    </>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute z-40 w-full">
      {isOpen && <MobileNavModal setIsOpen={setIsOpen} />}
      <div className="p-3">
        <div className="mx-auto flex items-center justify-between">
          <div>
            <Link href="/" className="">
              <Image
                src="/ETHLabsLogo.png"
                alt="Logo"
                width="250"
                height="1"
                className="opacity-90 mx-2 px-10 py-1 hover:bg-black/50 hover:opacity-100"
              />
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="#417ec3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div className={`md:flex md:items-center hidden`}>
            <Link
              className="mx-2 px-10 py-1 text-2xl hover:bg-black/50 font-orbitron font-medium text-[#417ec3] hover:text-[#cdffb8]"
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className="mx-2 px-10 py-1 text-2xl hover:bg-black/50 font-orbitron font-medium text-[#417ec3] hover:text-[#cdffb8]"
              href="/blog"
            >
              Memos
            </Link>
            <Link
              className="mx-2 px-10 py-1 text-2xl hover:bg-black/50 font-orbitron font-medium text-[#417ec3] hover:text-[#cdffb8]"
              href="/about"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
