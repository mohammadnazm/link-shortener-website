import axios from "axios"
import React, { useEffect } from "react"
import { useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"

function LinkResult({ inputValue }) {
  console.log(inputValue)
  const [shortenLink, setShortenLink] = useState("")
  console.log(shortenLink)
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      )
      setShortenLink(res.data)
    } catch (err) {
    } finally {
    }
  }

  useEffect(() => {
    if (inputValue.length) {
      fetchData()
    }
  }, [inputValue])

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false)
    }, 1000)
  }, [copied])

  return (
    <div className="result">
      {/* <p>{shortenLink}</p> */}
      <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
        <button className={copied ? "copied" : ""}>Copy to clipboard</button>
      </CopyToClipboard>
    </div>
  )
}

export default LinkResult
