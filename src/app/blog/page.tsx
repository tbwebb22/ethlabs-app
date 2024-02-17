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
          styles={{
            multiValue: (provided) => ({
              ...provided,
              backgroundColor: '#101f35ff',
            }),
            multiValueLabel: (provided) => ({
              ...provided,
              color: '#ffffff',
            }),
            option: (provided, state) => ({
              ...provided,
              color: state.isSelected ? 'yourSelectedTextColor' : '#58fe13', // Replace 'yourSelectedTextColor' with the color for selected text
              backgroundColor: state.isSelected ? 'yourSelectedBackgroundColor' : 'yourBackgroundColor', // Replace with your desired background colors for selected and regular states
              ':active': {
                backgroundColor: state.isSelected ? 'yourActiveSelectedBackgroundColor' : 'yourActiveBackgroundColor', // Replace with your desired background colors for active states
              },
            }),
            // control: (provided) => ({
            //   ...provided,
            //   backgroundColor: '#244776', // Background color for the control
            //   borderColor: '#244776'
            // }),
            control: (provided, state) => ({
              ...provided,
              backgroundColor: '#244776',
              borderColor: state.isFocused ? '#417ec3' : '#244776',
              boxShadow: state.isFocused ? `0 0 0 1px ${'#417ec3'}` : 'none',
              ':hover': {
                borderColor: '#ffffff22', // Border color on hover
              },
            }),
            menu: (provided) => ({
              ...provided,
              backgroundColor: '#244776', // Background color for the menu
            }),
            dropdownIndicator: (provided, state) => ({
              ...provided,
              color: state.isFocused ? '#58fe13ff' : '#58fe1399',
              ':hover': {
                color: '#58fe13ff', // Color on hover
              },
            }),
            clearIndicator: (provided, state) => ({
              ...provided,
              color: state.isFocused ? '#58fe13ff' : '#58fe1399',
              ':hover': {
                color: '#58fe13ff', // Color on hover
              },
            }),
          }}
          
        />
      </div>
    </main>
  );
}