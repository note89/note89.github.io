import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { twMerge } from "tailwind-merge"

enum Mode {
  Standard,
  Compact,
}

const parseWithDefault = (value: string | null, defaultValue: Mode) => {
  return value === "compact" ? Mode.Compact : defaultValue
}

export default function Component() {
  const modeRaw = new URLSearchParams(window.location.search).get("mode")
  const mode = parseWithDefault(modeRaw, Mode.Standard)

  return (
    <a
      target="__blank"
      href="https://mirdin.com/the-advanced-software-design-course/"
      className=""
    >
      <div className="mb-8 mx-2 drop-shadow-lg hover:drop-shadow-xl transition ease-in-out duration-400 hover:bg-stone-900 bg-neutral-900 rounded-2xl flex items-center justify-center">
        <div className="flex flex-col text-center px-10 py-6">
          <div className="flex">
            <div className="pr-10">
              <StaticImage
                placeholder="blurred"
                height={60}
                layout="fixed"
                alt="mirdin logo"
                src="../images/mirdin_the_code_quality_company.png"
                className="mb-5"
              />
            </div>

            <div>
              <div
                className={twMerge(
                  "text-right text-2xl text-neutral-300 pb-2 style-font-sans style-bold",
                  mode === Mode.Compact ? "text-xl" : ""
                )}
              >
                THE ADVANCED SOFTWARE DESIGN COURSE
              </div>
            </div>
          </div>
          <NextCohort mode={mode} />
          <LearnMore mode={mode} />
        </div>
      </div>
    </a>
  )
}

const LearnMore = ({ mode }: { mode: Mode }) => {
  if (mode === Mode.Compact) {
    return (
      <div className="text-right">
        <h2 className="text-yellow-400 m-0 text-sm">Click to learn more</h2>
      </div>
    )
  }
  return (
    <div className="text-left">
      <h2 className="text-yellow-400 m-0 text-2xl">Click to learn more</h2>
    </div>
  )
}

const NextCohort = ({ mode }: { mode: Mode }) => {
  // Inverse dependency and make Config object
  // Like in unit 6
  if (mode === Mode.Compact) {
    return (
      <h2 className="text-yellow-400 m-0 pb-1 text-lg text-right">
        New cohort{" "}
        <span className="text-slate-300">
          <span>6th of October</span> - <span>19th of December</span>
        </span>
      </h2>
    )
  }

  return (
    <h1 className="text-yellow-400 m-0 pb-4 text-2xl ">
      Next cohort
      <br />
      <span className="text-slate-300">
        <span>6th of October</span> - <span>19th of December</span>
      </span>
    </h1>
  )
}
