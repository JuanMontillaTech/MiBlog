const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Docz2\\.docz\\.cache\\dev-404-page.js"))),
  "component---src-components-alert-mdx": hot(preferDefault(require("C:\\Docz2\\src\\components\\Alert.mdx"))),
  "component---src-docs-mdx": hot(preferDefault(require("C:\\Docz2\\src\\docs.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Docz2\\.docz\\src\\pages\\404.js")))
}

