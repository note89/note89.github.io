import * as React from "react"

export default function Component() {
  return (
    <a href="https://mirdin.com/the-advanced-software-design-course/">
      <div className="transition ease-in-out duration-400 w-full hover:bg-emerald-500 bg-green-600 rounded-2xl flex items-center justify-center">
        <div className="flex flex-col text-center px-10 py-16">
          <div className="text-5xl text-white pb-8 style-font-sans style-bold">
            THE ADVANCED SOFTWARE DESIGN COURSE
          </div>
          <div className="divider-y"></div>
          <h1 className="text-slate-100 m-0 pb-4 text-3xl ">
            Next cohort: <span className="text-slate-700">6th of October</span>{" "}
            - <span className="text-slate-700">19th of December</span>
          </h1>
          <h2 className="text-slate-100 m-0 ">Click to learn more</h2>
        </div>
      </div>
    </a>
  )
}
