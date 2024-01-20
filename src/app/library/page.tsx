"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Select, { ActionMeta, MultiValue } from 'react-select';
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
      <div className="container mx-auto">
        <div className="text-xl text-white text-opacity-70">
        Welcome to the ETHLabs Library
        </div>

        <Select
          instanceId={'tagSelector'}
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={[tags[0]]}
          isMulti
          options={tags}
          onChange={handleChange}
        />
      </div>
    </main>
  );
}