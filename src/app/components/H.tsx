import React, { ReactNode } from 'react';

interface HProps {
  children?: ReactNode;
}

const H = ({ children }: HProps) => {
  return <text className="pt-1 px-1 bg-black/50 rounded-md">{children}</text>;
};

export default H;