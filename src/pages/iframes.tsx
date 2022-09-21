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
      <div className="mirdin--container">
        <iframe
          src={toSelfUrl("/next-course-iframe/?mode=base")}
          width="100%"
          title="Date of next cohort: Design base"
          style={{ maxWidth: "650px" }}
          className="mirdin--iframe"
        />
      </div>
      <h2>Put this in your HTML</h2>
      <pre>
        {`
        <div className="mirdin--container">
          <iframe
            src=${URL}/next-course-iframe/?mode=base
            title="Date of next cohort: Design base"
            width="100%"
            style="maxWidth: 650px"
            className="mirdin--iframe"
          />
        </div>
      `}
      </pre>
      <h2>
        Put this in your <pre>{` <head>...</head> `}</pre> or include CSS
      </h2>
      <pre>
        {`
<link href="https://cdn.jsdelivr.net/gh/note89/note89.github.io@live-iframe-v1/src/mirdin--iframe.css" rel="stylesheet" integrity="a/wyNIKmaSqrcKKexv86OKX9GC/UefBIiFJbXNkhRPoyjXEiHPqmxLcdV/O/gVKj" crossorigin="anonymous" />
        `}
      </pre>
      <h2>IF You don't: Put this in your CSS</h2>
      <pre>
        {`
.mirdin--container {
  container-type: inline-size;
}

.mirdin--iframe {
  height: 20rem;
}

/* ************************* */
/* Fallback for old browsers */
/* ************************* */
@media (min-width: 640px) {
  .mirdin--iframe {
     height: 14rem;
   } 
 }

@container (max-width: 501px){
  .mirdin--iframe {
    height: 20rem;
  }
}
/* ************************* */
/* Fallback END */
/* ************************* */

@container (min-width: 500px){
  .mirdin--iframe {
    height: 14rem;
  }
}

        
        `}
      </pre>

      <h1>Flippy (don't use yet)</h1>
      <iframe
        src={toSelfUrl("/next-course-iframe/?mode=flippy")}
        width="100%"
        title="Date of next cohort: Design flip-book"
        style={{ maxWidth: "650px" }}
        className="mirdin--iframe"
      />
      <pre>
        {`
        <iframe
          src=${URL}/next-course-iframe/?mode=flippy
          title="Date of next cohort: Design flip-book"
          width="100%"
          style="maxWidth: 650px"
          className="miridn--iframe"
        />
      `}
      </pre>
    </>
  )
}
