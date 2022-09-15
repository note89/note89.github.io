import * as React from "react"
import { toSelfUrl } from "../lib/selfUrl"

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
        src={toSelfUrl("/next-course-iframe/?mode=base")}
        width="100%"
        title="Date of next cohort: Design base"
        style={{ maxWidth: "650px" }}
        className="h-80 sm:h-56"
      />
      <pre>
        {`
        <iframe
          src=${URL}/next-course-iframe/?mode=base
          title="Date of next cohort: Design base"
          width="100%"
          style="maxWidth: 650px"
          className="h-80 sm:h-56"
        />
      `}
      </pre>
      <h1>Flippy</h1>
      <iframe
        src={toSelfUrl("/next-course-iframe/?mode=flippy")}
        width="100%"
        title="Date of next cohort: Design flip-book"
        style={{ maxWidth: "650px" }}
        className="h-80 sm:h-56"
      />
      <pre>
        {`
        <iframe
          src=${URL}/next-course-iframe/?mode=flippy
          title="Date of next cohort: Design flip-book"
          width="100%"
          style="maxWidth: 650px"
          className="h-80 sm:h-56"
        />
      `}
      </pre>
    </>
  )
}
