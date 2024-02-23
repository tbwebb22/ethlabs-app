"use client";

import Link from "next/link";
import CodeBlock from "../components/CodeBlock";
import H from "../components/H";

export default function Blog() {
  const codeString1 = 
`// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.20 and less than 0.9.0
pragma solidity ^0.8.20;
  
contract HelloWorld {
  string public greet = "Hello World!";
}`
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link href="/blog/delegatecall">
      <div className="flex flex-row w-[720px] h-18 rounded-r-full text-[#bdfea3] text-opacity-60 hover:text-opacity-80 text-2xl pl-5 pt-[10px] pb-[3px] bg-[#101f35]/70 hover:bg-[#101f35]/100">
        &lt;&gt; A mental model for understanding delegatecall
      </div>
      </Link>
    </main>
  );
}