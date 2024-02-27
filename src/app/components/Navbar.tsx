"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute z-40 w-full">
      <div className="p-3">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <Link href="/" className="">
              <Image
                src="/ETHLabsLogo.png"
                alt="Logo"
                width="250"
                height="1"
                className="opacity-100 mx-2 px-10 py-1 hover:bg-black/50"
              />
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
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
          <div
            className={`md:flex md:items-center ${isOpen ? "block" : "hidden"}`}
          >
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
