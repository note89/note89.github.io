import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { twMerge } from "tailwind-merge"

enum View {
  Front,
  Back,
}

export const Flippy = () => {
  const [view, setView] = React.useState(View.Front)
  const flip = () => setView(view === View.Front ? View.Back : View.Front)

  return (
    <div
      onClick={flip}
      className={twMerge(
        "card cursor-pointer",
        view === View.Back ? "card-flipped" : ""
      )}
    >
      <div className="card-front ">
        <Front />
      </div>
      <div className="card-back">
        <Back />
      </div>
    </div>
  )
}

const Back = () => {
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
          <div className="pl-4">
            <StaticImage
              placeholder="blurred"
              height={60}
              layout="fixed"
              alt="mirdin logo"
              src="../../images/mirdin_the_code_quality_company.png"
              className="mb-5"
            />
            <a
              href="https://mirdin.com/the-advanced-software-design-course/"
              target="__blank"
            >
              <div className="text-right">
                <h2 className="text-yellow-400 hover:text-yellow-500 m-0 text-sm">
                  Click to open course website
                </h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Front = () => {
  return (
    <div className="mb-8 mx-2 drop-shadow-lg hover:drop-shadow-xl transition ease-in-out duration-400 hover:bg-stone-900 bg-neutral-900 rounded-2xl flex items-center justify-center">
      <div className="flex flex-col text-center px-10 py-6">
        <div className="flex">
          <div className="pr-10">
            <StaticImage
              placeholder="blurred"
              height={60}
              layout="fixed"
              alt="mirdin logo"
              src="../../images/mirdin_the_code_quality_company.png"
              className="mb-5"
            />
          </div>

          <div>
            <div className="text-right text-xl text-neutral-200 pb-2 style-font-sans style-bold">
              THE ADVANCED SOFTWARE DESIGN COURSE
            </div>
          </div>
        </div>
        <NextCohort />
        <LearnMore />
      </div>
    </div>
  )
}

const LearnMore = () => {
  return (
    <div className="text-right">
      <h2 className="text-yellow-400 m-0 text-sm">
        Click to flip and learn more
      </h2>
    </div>
  )
}

const NextCohort = () => {
  return (
    <h2 className="text-yellow-400 m-0 pb-1 text-lg text-right">
      New cohort{" "}
      <span className="text-slate-300">
        <span>6th of October</span> - <span>19th of December</span>
      </span>
    </h2>
  )
}
