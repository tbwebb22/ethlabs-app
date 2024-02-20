import React, { useEffect } from 'react';
import hljs from '../utils/highlightSetup';

const CodeBlock: React.FC<{ code: string }> = ({ code }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className="solidity">{code}</code>
    </pre>
  );
};

export default CodeBlock;