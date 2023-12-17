enum Tag {
  erc20 = 'ERC-20',
  erc721 = 'ERC-721',
  erc1155 = 'ERC-1155',
}

const tags = (Object.keys(Tag) as (keyof typeof Tag)[]).map(key => ({ value: key, label: Tag[key] }));

export interface Resource {
    name: string;
    author: string;
    url: string;
    tags: Tag[];
};

const resources: Resource[] = [
  {
    name: 'ERC-20 Standard',
    author: 'Vitalik Buterin',
    url: 'https://eips.ethereum.org/EIPS/eip-20',
    tags: [Tag.erc20]
  },
];

const resourcesAndTags = { resources, tags };

export default resourcesAndTags;