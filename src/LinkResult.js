import React, { useEffect } from "react"
import { useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"

function LinkResult({ inputValue }) {
  console.log(inputValue)
  const [shortenLink, setShortenLink] = useState("Hello World")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false)
    }, 1000)
  }, [copied])

  return (
    <div className="result">
      <p>{shortenLink}</p>
      <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
        <button className={copied ? "copied" : ""}>Copy to clipboard</button>
      </CopyToClipboard>
    </div>
  )
}

export default LinkResult
