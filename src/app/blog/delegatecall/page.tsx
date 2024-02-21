"use client";
import CodeBlock from "../../components/CodeBlock";
import Image from 'next/image'
import H from "@/app/components/H";

export default function Delegatecall() {
  const codeString1 = 
`// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.20 and less than 0.9.0
pragma solidity ^0.8.20;
  
contract HelloWorld {
  string public greet = "Hello World!";
}`
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
                {/* <CodeBlock code={codeString1} /> */}
        <div className="container mx-auto max-w-2xl text-xl mt-12 text-[#bdfea3] text-opacity-70">
            <div className="text-4xl font-medium"> 
            {/* text-[#417ec3] */}
            A mental model for understanding <H>delegatecall</H>
            </div>
            <br /><br />
            Quiz: <br />
            The following chain of function calls is executed:
            <Image 
                src="/blog-images/delegatecall/delegatecall1.png"
                className=""
                alt="Example chain of calls and delegatecalls" 
                width={700}
                height={200}
                priority
            />
            <br />
            In the context of the <H>call</H> from <H>C</H> to <H>D</H>, <H>msg.sender</H> is which of the following?
            <br />
            a) EOA <H>A</H>
            <br />
            b) Contract <H>B</H>
            <br />
            c) Contract <H>C</H>
            <br />
            d) Contract <H>D</H>
       </div>
    </main>
  );
}