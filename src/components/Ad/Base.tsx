import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

export const Base = () => {
  return <Front />
}

const Front = () => {
  return (
    <a
      href="https://mirdin.com/the-advanced-software-design-express-course/"
      target="__blank"
    >
      <div className="mb-8 mx-2 drop-shadow-lg hover:drop-shadow-xl transition ease-in-out duration-400 hover:bg-stone-900 bg-neutral-900 rounded-2xl flex items-center justify-center">
        <div className="flex flex-col text-center p-6">
          <div className="flex flex-col xs:flex-row items-center">
            <div className="pr-3 sm:pr-10">
              <StaticImage
                placeholder="tracedSVG"
                height={60}
                layout="fixed"
                alt="mirdin logo"
                src="../../images/mirdin_the_code_quality_company.png"
                className="mb-5"
              />
            </div>

            <div>
              <div className="text-left xs:text-right text-sm xs:text-xl text-neutral-200 pb-2 style-font-sans style-bold">
                THE ADVANCED SOFTWARE DESIGN <span className="text-yellow-400">EXPRESS</span> COURSE
              </div>
            </div>
          </div>
          <NextCohort />
        </div>
      </div>
    </a>
  )
}

const NextCohort = () => {
  return (
    <h2 className="text-yellow-400 m-0 pb-1 text-sm sm:text-lg text-left">
      <div className="w-full">
        <div>New offering! 5 weeks, 3h/week</div>
        <div className="flex flex-row items-end justify-between">
          <span className="text-slate-300">
            <span>21st of November</span> - <span>19th of December</span>
          </span>
          <span className="text-yellow-400 text-sm text-right ">
            Click to learn more
          </span>
        </div>
      </div>
    </h2>
  )
}
