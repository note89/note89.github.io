import * as React from "react"

export default function Page() {
  //copy the text 'hello' to the clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText("hello")
  }

  const URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000"
      : "https://mirdin.com"

  return (
    <>
      <h1>Base</h1>
      <iframe
        src={`${URL}/next-course-iframe/?mode=base`}
        width="100%"
        className="h-80 sm:h-56"
      />
      <pre>
        {`
        <iframe
          src=${URL}/next-course-iframe/?mode=base
          width="100%"
          className="h-80 sm:h-56"
        />
      `}
      </pre>
      <h1>Flippy</h1>
      <iframe
        src={`${URL}/next-course-iframe/?mode=flippy`}
        width="100%"
        className="h-80 sm:h-56"
      />
      <pre>
        {`
        <iframe
          src=${URL}/next-course-iframe/?mode=flippy
          width="100%"
          className="h-80 sm:h-56"
        />
      `}
      </pre>
    </>
  )
}
