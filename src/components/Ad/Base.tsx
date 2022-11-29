import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { format, addWeeks } from "date-fns"

export const Base = () => {
  return <Front />
}

type Weeks = number
type CourseParameters = {
  titleElement: () => JSX.Element
  link: string
  startDate: Date
  runningLength: Weeks
  highlightElement: () => JSX.Element
}

class Course {
  #titleElement: () => JSX.Element
  #link: string
  #startDate: Date
  #runningLength: Weeks
  #highlightElement: () => JSX.Element

  constructor(c: CourseParameters) {
    this.#titleElement = c.titleElement
    this.#link = c.link
    this.#startDate = c.startDate
    this.#runningLength = c.runningLength
    this.#highlightElement = c.highlightElement
  }

  getTitleElement() {
    return this.#titleElement
  }
  getHighlightElement() {
    return this.#highlightElement
  }

  getRunningLengthInWeeks() {
    return this.#runningLength
  }

  getHref() {
    return this.#link
  }

  getDateElement() {
    return () => (
      <>
        <span>{format(this.#startDate, "do 'of' LLLL")}</span> -{" "}
        <span>
          {format(
            addWeeks(this.#startDate, this.getRunningLengthInWeeks()),
            "do 'of' LLLL"
          )}
        </span>
      </>
    )
  }
}

const ExpressCourseHighlight = () => <>New offering! 5 weeks, 3h/week</>
const RegularCourseHighlight = () => <>New cohort starting soon!</>
const Dates = ({ startDate, weeks }: { startDate: Date; weeks: number }) => (
  <>
    <span>{format(startDate, "do 'of' LLLL")}</span> -{" "}
    <span>{format(addWeeks(startDate, weeks), "do 'of' LLLL")}</span>
  </>
)

const Express = () => (
  <>
    THE ADVANCED SOFTWARE DESIGN{" "}
    <span className="text-yellow-400">EXPRESS</span> COURSE
  </>
)

const Regular = () => <>THE ADVANCED SOFTWARE DESIGN COURSE</>
const expressLink =
  "https://mirdin.com/the-advanced-software-design-express-course/"
const regularLink = "https://mirdin.com/the-advanced-software-design-course/"

const CurrentCourse = new Course({
  titleElement: Regular,
  link: regularLink,
  startDate: new Date("2022-12-16"),
  runningLength: 12,
  highlightElement: RegularCourseHighlight,
})

const Front = () => {
  return (
    <a href={CurrentCourse.getHref()} target="__blank">
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
                {React.createElement(CurrentCourse.getTitleElement())}
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
        <div>{React.createElement(CurrentCourse.getHighlightElement())}</div>
        <div className="flex flex-row items-end justify-between">
          <span className="text-slate-300">
            {React.createElement(CurrentCourse.getDateElement())}
          </span>
          <span className="text-yellow-400 text-sm text-right ">
            Click to learn more
          </span>
        </div>
      </div>
    </h2>
  )
}
