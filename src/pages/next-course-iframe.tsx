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

enum View {
  Front,
  Back,
}

export default function Component() {
  const modeRaw = new URLSearchParams(window.location.search).get("mode")
  const mode = parseWithDefault(modeRaw, Mode.Standard)

  const [view, setView] = React.useState(View.Front)

  return (
    <div
      className={twMerge(
        "cursor-pointer",
        "transition-all duration-700 card",
        view === View.Back ? "card-flipped" : ""
      )}
    >
      <div
        className="card-front transition-all duration-100 delay-200"
        onClick={() => setView(View.Back)}
      >
        <Front mode={mode} />
      </div>
      <div className="card-back" onClick={() => setView(View.Front)}>
        <Back mode={mode} />
      </div>
    </div>
  )
}

const Back = ({ mode }: { mode: Mode }) => {
  return (
    <div className="mb-8 mx-2 drop-shadow-lg hover:drop-shadow-xl transition ease-in-out duration-400 hover:bg-stone-900 bg-neutral-900 rounded-2xl flex items-center justify-center">
      <div className="flex flex-col text-center px-10 py-6">
        <div className="flex">
          <div>
            <div
              className={twMerge(
                "text-left text-sm text-neutral-300 pb-2 style-font-sans "
              )}
            >
              We have helped 250+ experienced engineers, go from good to great.
              The course is created by Jimmy Koppel Phd and aims to teach the
              deeper understanding of software that a Phd might bring but in
              weeks instead of years.
            </div>
          </div>
          <div className="pl-10">
            <StaticImage
              placeholder="blurred"
              height={60}
              layout="fixed"
              alt="mirdin logo"
              src="../images/mirdin_the_code_quality_company.png"
              className="mb-5"
            />

            <div className="text-yellow-400 text-base bold font-sans text-left">
              Learn more about the course on our website
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Front = ({ mode }: { mode: Mode }) => {
  return (
    <a>
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
        <h2 className="text-yellow-400 m-0 text-sm">
          Click to flip and learn more
        </h2>
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
