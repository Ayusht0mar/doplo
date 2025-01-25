"use client"

import React, { useState, useCallback } from "react"
import { Copy, Check } from "lucide-react"

interface CopyButtonProps {
  textToCopy: string
}

export default function CopyButton({ textToCopy }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 3000)
    })
  }, [textToCopy])

  return (
    <button onClick={copyToClipboard} >
      {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      <span className="sr-only">{isCopied ? "Copied" : "Copy to clipboard"}</span>
    </button>
  )
}

