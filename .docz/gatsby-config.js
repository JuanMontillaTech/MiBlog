const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Docz Example Basic',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Docz2\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Docz Example Basic',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Docz2',
          templates: 'C:\\Docz2\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Docz2\\.docz',
          cache: 'C:\\Docz2\\.docz\\.cache',
          app: 'C:\\Docz2\\.docz\\app',
          appPackageJson: 'C:\\Docz2\\package.json',
          appTsConfig: 'C:\\Docz2\\tsconfig.json',
          gatsbyConfig: 'C:\\Docz2\\gatsby-config.js',
          gatsbyBrowser: 'C:\\Docz2\\gatsby-browser.js',
          gatsbyNode: 'C:\\Docz2\\gatsby-node.js',
          gatsbySSR: 'C:\\Docz2\\gatsby-ssr.js',
          importsJs: 'C:\\Docz2\\.docz\\app\\imports.js',
          rootJs: 'C:\\Docz2\\.docz\\app\\root.jsx',
          indexJs: 'C:\\Docz2\\.docz\\app\\index.jsx',
          indexHtml: 'C:\\Docz2\\.docz\\app\\index.html',
          db: 'C:\\Docz2\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
