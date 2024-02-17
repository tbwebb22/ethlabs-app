"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Select, { ActionMeta, MultiValue, StylesConfig } from 'react-select';
import makeAnimated from 'react-select/animated';
import resourcesAndTags from '../resources';

const { resources, tags } = resourcesAndTags;

export default function Library() {
  const [selectedTags, setSelectedTags] = useState<string[]>();

  const animatedComponents = makeAnimated();

  useEffect(() => {
    console.log('selectedTags: ', selectedTags);
    console.log('TAGS array! ', tags);
  }, [selectedTags]);

  const handleChange = (_selectedTags: MultiValue<{
    value: string;
    label: string;
  }>, actionMeta: ActionMeta<{
    value: string;
    label: string;
  }>) => {
    setSelectedTags(_selectedTags.map(_selectedTag => _selectedTag.value));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="container mx-auto max-w-2xl text-xl">
          ***dummy text from chatGPT*** 
          <br />
          <br />
          Journal Entry: ETHLabs - The Beginning of a New Venture
          <br />
          <br />
          Date: February 16, 2024
          <br />
          <br />
          Today marks the official launch of ETHLabs, a venture born from my passion for blockchain technology and a vision to revolutionize the way businesses leverage Ethereum. The journey to this point has been both exhilarating and daunting, filled with late nights of coding, learning, and strategizing.
          <br />
          <br />
          The idea for ETHLabs started to take shape nearly a year ago, as I observed the growing demand for Ethereum-based solutions in the market. The potential of smart contracts to automate, secure, and streamline operations across various industries is immense, and yet, I noticed a gap in the market for specialized agencies that could bridge the technical complexities for businesses. Thats where ETHLabs comes in. Our mission is to be that bridge, providing custom software development services on the Ethereum blockchain to help businesses unlock new levels of efficiency and innovation.
          <br />
          <br />
          Starting ETHLabs by myself has been a challenging yet rewarding decision. Ive taken on multiple roles - from developer to marketer, salesperson to strategist. Each day brings new learning opportunities and problems to solve. The process of setting up the business structure, developing a portfolio of services, and establishing our online presence has been a whirlwind. Yet, the excitement of building something from scratch, something that has the potential to make a significant impact, keeps me going.
          <br />
          <br />
          The technical foundation of ETHLabs is something I take great pride in. Were not just another software development agency; were specialists in the Ethereum ecosystem. This means staying on the cutting edge of Ethereum developments, understanding the intricacies of smart contract programming, and navigating the challenges of scalability and security. Its a tall order, but one that Im committed to mastering.
          <br />
          <br />
          Networking has been crucial. Ive been reaching out to my contacts in the tech and blockchain spaces, introducing them to ETHLabs and the services we offer. The response has been encouraging, with several potential projects already in the pipeline. Its clear that theres a demand for what were offering, and now its up to us to deliver.
          <br />
          <br />
          Looking ahead, my immediate goals are to solidify our service offerings, build a strong portfolio of successful projects, and start assembling a team of talented developers and blockchain experts. I envision ETHLabs not just as a business, but as a community of innovators pushing the boundaries of whats possible with Ethereum.
          <br />
          <br />
          Theres a lot of work ahead, and the path is fraught with challenges. But as I sit here, reflecting on the journey so far and the road ahead, Im filled with a sense of purpose and optimism. ETHLabs is more than a company; its a manifestation of my belief in the transformative power of blockchain technology.
          <br />
          <br />
          Heres to the beginning of an exciting journey. May ETHLabs thrive and contribute to shaping the future of blockchain applications.
        </div>
    </main>
  );
}