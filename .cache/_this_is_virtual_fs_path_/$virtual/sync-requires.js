
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": preferDefault(require("/home/note/Programming/note89.github.io/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/home/note/Programming/note89.github.io/src/pages/index.tsx"))
}

