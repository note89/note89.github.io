import * as React from "react"
import { Base } from "./Base"
import { Flippy } from "./Flippy"

enum Mode {
  Base,
  Flippy,
}

const parseWithDefault = (value: string | null, defaultValue: Mode): Mode => {
  switch (value) {
    case "flippy":
      return Mode.Flippy
    default:
      return defaultValue
  }
}

const getView = (mode: Mode): JSX.Element => {
  switch (mode) {
    case Mode.Base:
      return <Base />
    case Mode.Flippy:
      return <Flippy />
    default:
      return <Base />
  }
}

export const Ad = () => {
  const modeRaw = new URLSearchParams(window.location.search).get("mode")
  const mode = parseWithDefault(modeRaw, Mode.Base)

  return getView(mode)
}
