"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="bg-[#09111c] text-white p-3">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link href="/">
            <Image
              src="/fullLogoLight.png"
              alt="Logo"
              width="200"
              height="1"
            />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link className="mx-8 text-xl text-[#aac5e3] hover:text-[#cdffb8]" href="/library">
            Library
          </Link>
          <Link className="mx-8 text-xl text-[#aac5e3] hover:text-[#cdffb8]" href="/university">
            University
          </Link>
        </div>
      </div>
    </div>
    <div className="bg-[#aac5e3] h-[1px]">

    </div>
    </>
  );
};