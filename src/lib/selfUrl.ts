const DOMAIN =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://note89.github.io/"

export const toSelfUrl = (s: string) => {
  return `${DOMAIN}${s}`
}
