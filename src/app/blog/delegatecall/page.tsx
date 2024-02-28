"use client";
import CodeBlock from "../../components/CodeBlock";
import Image from "next/image";
import H from "@/app/components/H";
import { useState } from "react";
import Link from "next/link";

export default function Delegatecall() {
  const [answerRevealed, setAnswerRevealed] = useState<boolean>(false);

  const codeString1 = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "hardhat/console.sol";

contract B {
    error DelegateCallFailed();

    function bFunc(address c, address d) external returns (bytes memory) {
        console.log("B msg.sender: ", msg.sender);

        // delegatecall function cFunc() on contract C and 
        // pass it the address of contract D
        (bool success, bytes memory data) = 
            c.delegatecall(abi.encodeWithSignature("cFunc(address)", d));

        if (!success) revert DelegateCallFailed();
        return data;
    }
}

contract C {
    function cFunc(address d) external view {
        console.log("C msg.sender: ", msg.sender);

        // Call function dFunc on contract D
        D(d).dFunc();
    }
}

contract D {
    function dFunc() external view {
        console.log("D msg.sender: ", msg.sender);
    }
}
`;

  const codeString2 = `
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "hardhat/console.sol";

contract B {
    error DelegateCallFailed();

    function bFunc(address d) external view {
        console.log("B msg.sender: ", msg.sender);

        // Call function cFunc that is now inside this contract
        cFunc(d);
    }

    function cFunc(address d) public view {
        console.log("C msg.sender: ", msg.sender);

        // Call function dFunc on contract D
        D(d).dFunc();
    }
}

contract D {
    function dFunc() external view {
        console.log("D msg.sender: ", msg.sender);
    }
}
`;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto max-w-3xl items-start text-xl mt-12">
        <Link
          href="/blog"
          className="py-1 pr-2 text-[#bdfea3] text-opacity-75 hover:text-opacity-100"
        >
          &larr; Back
        </Link>
      </div>
      <div className="container mx-auto max-w-3xl text-xl mt-2 text-[#bdfea3] text-opacity-75 bg-black/70 p-10">
        <div className="text-4xl font-medium">
          A mental model for understanding <H>delegatecall</H>
        </div>
        <br />
        <br />
        <b>Quiz: </b>
        <br />
        The following chain of function calls is executed: <br />
        <br />
        <Image
          src="/blog-images/delegatecall/delegatecall1.png"
          className=""
          alt="Example chain of calls and delegatecalls"
          width={700}
          height={200}
          priority
        />
        <br />
        In the context of the <H>call</H> from <H>C</H> to <H>D</H>,{" "}
        <H>msg.sender</H> is which of the following?
        <br />
        a) EOA <H>A</H>
        <br />
        b) Contract <H>B</H>
        <br />
        c) Contract <H>C</H>
        <br />
        d) Contract <H>D</H>
        <br />
        <br />
        {!answerRevealed && (
          <button
            onClick={() => setAnswerRevealed(true)}
            className="border-2 border-[#417ec3]/80 p-2 text-center text-[#417ec3] rounded-sm hover:bg-[#417ec3]/80 hover:text-[#bdfea3]"
          >
            Reveal answer
          </button>
        )}
        <br />
        {answerRevealed && (
          <>
            <hr className="border-[#bdfea3] mb-2" />
            {/* <br /> */}
            <b>Answer: </b>
            <br />
            b) Contract <H>B</H> <br />
            <br />
            If you didn&apos;t answer <H>B</H>, there is probably a knowledge
            gap in your understanding of <H>delegatecall</H>, but don&apos;t
            worry! In this article I&apos;ll introduce a simple mental model to
            close this gap.
            <hr className="border-[#bdfea3] mt-1" />
          </>
        )}
        <br />
        The <H>delegatecall</H> opcode is a low level call that is nearly
        identical to the <H>call</H> opcode, except that the code executed at
        the targeted contract is run in the context of the calling contract.
        This means:
        <br />
        <ul className="list-disc">
          <li className="ml-4">
            Storage is updated in the calling contract, not the targeted
            contract
          </li>
          <li className="ml-4">
            <H>msg.sender</H> is unchanged
          </li>
          <li className="ml-4">
            <H>msg.value</H> is unchanged
          </li>
        </ul>
        <br />
        <br />
        This allows us to do fun things like implementing libraries or proxy
        patterns: <br />
        <br />
        <Image
          src="/blog-images/delegatecall/delegatecall2.png"
          className=""
          alt="Delegatecalls used in proxy pattern"
          width={700}
          height={200}
          priority
        />
        <br />
        <br />
        Where in these calls from users to the proxy contracts: <br />
        <ul className="list-disc">
          <li className="ml-4">
            The function invoked on the logic contract updates state in the
            proxy contract
          </li>
          <li className="ml-4">
            The implementation contract <H>msg.sender</H> is the user&apos;s
            address
          </li>
          <li className="ml-4">
            The implementation contract <H>msg.value</H> is the ETH the user
            sent in the proxy contract call
          </li>
        </ul>
        <br />
        <br />
        Let&apos;s revisit the question from the beginning of this thread and
        write some code to prove that msg.sender is Contract B:
        <br />
        <CodeBlock code={codeString1} />
        <br />
        Once we&apos;ve deployed these three contracts, we can use our{" "}
        <H>EOA A</H> to call function <H>bFunc</H> on <H>Contract B</H>, passing
        it the addresses of the other two contracts. Inspecting our{" "}
        <H>console.logs</H>, we see:
        <br />
        <br />
        <Image
          src="/blog-images/delegatecall/delegatecall3.png"
          className=""
          alt="Console.logs from terminal"
          width={500}
          height={200}
          priority
        />
        <br />
        Where:
        <br />
        <H>0x5B38Da...</H> ⇒ <H>EOA A</H>
        <br />
        <H>0xF896bB...</H> ⇒ <H>Contract B</H>
        <br />
        <br />
        Let&apos;s update our function call diagram with these msg.senders for
        clarity:
        <br />
        <Image
          src="/blog-images/delegatecall/delegatecall4.png"
          className=""
          alt="Example chain of calls and delegatecalls"
          width={700}
          height={200}
          priority
        />
        <br />
        <br />
        Now I&apos;d like to introduce a mental model for thinking about{" "}
        <H>delegatecall</H> and the context it is being executed within:
        <br />
        <br />
        <b>
          <i>
            Whenever a function on a target contract is invoked via{" "}
            <H>delegatecall</H>, imagine the targeted function temporarily
            exists on the calling contract.
            <br />
            <br />
            The calling contract is delegating functionality from another
            contract to within its own context.
          </i>
        </b>
        <br />
        <br />
        Let&apos;s apply this mental model to the example function call chain
        from above.
        <br />
        <br />
        In the three contracts we wrote earlier, we can prove this mental model
        works by moving function <H>cFunc</H> out of <H>Contract C</H>, and into{" "}
        <H>Contract B</H>, and get rid of <H>Contract C</H> altogether:
        <br />
        <CodeBlock code={codeString2} />
        <br />
        <br />
        Since this code is functionally the same as our original code with the{" "}
        <H>delegatecall</H>, it should now be obvious that the call to{" "}
        <H>Contract D</H>
        was being invoked from within the context of <H>Contract B</H>, and
        therefore <H>msg.sender</H> inside <H>dFunc</H> is <H>Contract B</H>.
        <Image
          src="/blog-images/delegatecall/delegatecall5.png"
          className=""
          alt="Example chain of calls and delegatecalls"
          width={700}
          height={200}
          priority
        />
        <br />
        <br />
        So functionally this is what&apos;s meant when <H>delegatecall</H> is
        explained as &quot;code at the target address is executed in the context
        of the calling contract and <H>msg.sender</H> and <H>msg.value</H> do
        not change their values.&quot;
        <br />
        <br />
        This mental model can also be used to understand why <H>msg.value</H> is
        preserved, and why storage is updated on the calling contract, and not
        the targeted contract in a <H>delegatecall</H>.
        <br />
        <br />
        If <H>cFunc</H> in our first codebase updated state, it&apos;s now
        obvious that it would update state in <H>Contract B</H>. This is why the
        storage layout must be the same in both the calling contract and
        targeted contract when <H>delegatecall</H> is used.
        <br />
        <br />I hope this thread helped you understand <H>delegatecall</H> at a
        deeper level, and will help you in future smart contract development or
        audits.
      </div>
    </main>
  );
}
