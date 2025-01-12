"use client"

import { CheckCheck, Copy } from 'lucide-react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface CopyToClipboardComponentProps {
  textToCopy: string;
}

const CopyToClipboardComponent: React.FC<CopyToClipboardComponentProps> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div>
      <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
        <div className='my-auto h-4'>
            <button>{copied ? <CheckCheck size={16}/>  : <Copy size={16}/>}</button>
        </div>
      </CopyToClipboard>
    </div>
  );
};

export default CopyToClipboardComponent;