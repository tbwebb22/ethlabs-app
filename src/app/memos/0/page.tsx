"use client";
import CodeBlock from "../../components/CodeBlock";
import Image from "next/image";
import H from "@/app/components/H";
import { useState } from "react";
import Link from "next/link";

export default function memo0() {
  return (
    <main className="flex flex-col items-center py-24">
      <div className="container mx-auto max-w-3xl items-start text-xl mt-12">
        <Link
          href="/memos"
          className="py-1 pr-2 text-[#bdfea3] text-opacity-75 hover:text-opacity-100"
        >
          &larr; Back
        </Link>
      </div>
      <div className="container mx-auto max-w-3xl text-xl mt-2 text-[#bdfea3] text-opacity-70 bg-black/70 py-10 px-16">
        <div className="font-bold text-xl font-medium">
          ETHLabs Founder Memo #0: Hello World
          <br />
          03/06/2024
        </div>
        <br />
        Today I&apos;m excited to announce the launch of ETHLabs, a Web3 dev
        agency. Initially ETHLabs will consist solely of myself, focused on
        building and testing EVM smart contracts for clients.
        <br /> <br />
        I&apos;ll be writing these memos in the spirit of transparency to:
        <ul className="list-disc">
          <li className="ml-4">Hold myself accountable</li>
          <li className="ml-4">
            Instill trust & confidence in potential clients
          </li>
          <li className="ml-4">Organize my own thoughts</li>
          <li className="ml-4">
            Enable feedback from others to improve myself and the business
          </li>
          <li className="ml-4">
            Share what I learn to help others pursuing similar journeys
          </li>
        </ul>
        <br /> I plan to share everything I can, including details on the
        clients and projects I&apos;m working on, challenges I&apos;m dealing
        with, billable hours / rates & revenue, and learnings both business
        related and technical.
        <br /> <br />
        Next, a little background on me. I got into crypto in 2015 when I
        discovered Bitcoin, and immediately became obsessed with the narrative
        of decentralized money. For the next several years I followed
        developments in the space, invested in newer projects such as Ethereum,
        and even built an algorithmic trading bot that placed over 20,000 trades
        on Binance in 2017 (barely broke even lol).
        <br /> <br />
        Then in 2019 I started learning about a few DeFi protocols on Ethereum,
        and was particularly inspired by Maker and Uniswap. This is when the
        value prop of Ethereum really clicked with me, and I started to see how
        programmable money could change the world.
        <br /> <br />
        I decided I wanted to start building in the space rather than just
        investing. I read books about Ethereum, took classes on Solidity, and
        studied more protocol codebases. In 2020 I built and launched a small
        DeFi protocol as a solo dev and learned a lot about building smart
        contracts and web apps, the degen culture, and many of the challenges
        that Web3 founders face.
        <br /> <br />
        While this project didn&apos;t make me rich, the experience I gained
        from it enabled me to transition from my previous career as a mechanical
        engineer into Web3 full time. I landed a job as a Solidity developer at
        Decent Labs, a Web3 venture studio. I worked at Decent for a little over
        two years, building both internal and client projects. This experience
        was invaluable as I further developed my technical skills, and also
        gained a lot of insight into launching startups and protocols in Web3.
        <br /> <br />
        Last year I decided it was time for me to part ways with Decent and
        restart my entrepreneurial journey in Web3. I wanted to level up my
        smart contract skills, and spent the next several month studying smart
        contract auditing and participating in code4rena audit contests. This
        experience fundamentally changed the way I look at and write smart
        contracts, and taught me how to prioritize security over everything
        else.
        <br /> <br />
        Now its time for me to start building again. Right now I&apos;m more
        bullish on Web3 than I&apos;ve ever been, and I&apos;m incredibly
        excited to see where this space will go over the coming years. If you
        have a project you need help with, please reach out, I&apos;d love to
        build something awesome with you.
        <br /> <br />- Taylor
      </div>
    </main>
  );
}
