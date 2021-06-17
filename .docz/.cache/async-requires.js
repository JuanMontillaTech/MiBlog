// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-components-alert-mdx": () => import("./../../../../src/components/Alert.mdx" /* webpackChunkName: "component---src-components-alert-mdx" */),
  "component---src-docs-mdx": () => import("./../../../../src/docs.mdx" /* webpackChunkName: "component---src-docs-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

