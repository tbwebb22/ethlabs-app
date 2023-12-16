"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Select, { ActionMeta, MultiValue } from 'react-select';
import makeAnimated from 'react-select/animated';

export default function Library() {
  const [selectedTags, setSelectedTags] = useState<string[]>();
  const options = [
    { value: 'erc-20', label: 'ERC-20' },
    { value: 'erc-721', label: 'ERC-721' },
    { value: 'erc-1155', label: 'ERC-1155' }
  ];

  const animatedComponents = makeAnimated();

  useEffect(() => {
    console.log('selectedTags: ', selectedTags);
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
      <div className="container mx-auto">
        Welcome to the ETHLabs Library

        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={[options[0]]}
          isMulti
          options={options}
          onChange={handleChange}
        />
      </div>
    </main>
  );
}