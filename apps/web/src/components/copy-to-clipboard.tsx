"use client";

import React, { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  textToCopy: string;
}

export default function CopyButton({ textToCopy }: CopyButtonProps): JSX.Element {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); // ✅ Store error in state

  const copyToClipboard = useCallback(async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch {
      setError("Failed to copy. Please try again."); // ✅ Store error instead of alert
    }
  }, [textToCopy]);

  return (
    <div>
      <button type="button" onClick={() => void copyToClipboard()} aria-label={isCopied ? "Copied" : "Copy to clipboard"}>
        {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>} {/* ✅ Show error message in UI */}
    </div>
  );
}
