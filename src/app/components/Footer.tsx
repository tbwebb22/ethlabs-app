"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[black] bg-opacity-0 text-white h-[64px] flex justify-end items-center pr-8">
      <div className="flex justify-center items-center space-x-4">
        <div className="relative h-[20px] w-[48px] flex justify-center items-center">
          <Link
            href="https://twitter.com/TaylorWebb_eth"
            rel="noopener noreferrer"
            target="_blank"
            className="m-6"
          >
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
          <Link
            href="https://warpcast.com/taylorwebb.eth"
            rel="noopener noreferrer"
            target="_blank"
            className="m-6"
          >
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
  );
}
