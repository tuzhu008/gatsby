---
title: 'Gatsby 启动器'
---

Gatsby CLI 工具可以让你安装 “启动器”。它们是预先配置好的站点，以帮助您在创建特定类型的站点时更快地移植。


当创建一个新站点时，您可以选择指定一个启动器来作为您的新站点的基础。例如：

`gatsby new [SITE_DIRECTORY] [URL_OF_STARTER_GITHUB_REPO]`

例如，要想使用 Gatsby 快速创建一个博客，你可以安装 Gatsby Starter Blog，如下所示：

`gatsby new blog https://github.com/gatsbyjs/gatsby-starter-blog`

这将下载文件并通过运行 `npm install` 来初始化站点

如果你不指定自定义的启动器，你的站点将使用
[默认的启动器](https://github.com/gatsbyjs/gatsby-starter-default) 被创建。

这里有几个已经创建的启动器。创建一个 PR 来包含进你的！

官方的:

* [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default)
  [(demo)](http://gatsbyjs.github.io/gatsby-starter-default/)
* [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)
  [(demo)](http://gatsbyjs.github.io/gatsby-starter-blog/)
* [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world)
  [(demo)](https://aberrant-fifth.surge.sh/)

社区:

* [gatsby-starter-blog-no-styles](https://github.com/noahg/gatsby-starter-blog-no-styles)
  [(demo)](http://capricious-spring.surge.sh/)

  特性:

  * 与官方的 gatsby-starter-blog 相同，但是所有的样式都被移除

* [gatsby-material-starter](https://github.com/Vagr9K/gatsby-material-starter)
  [(demo)](https://vagr9k.github.io/gatsby-material-starter/)

  特性:

  * React-MD for Material design
  * SASS/SCSS
  * Tags
  * Categories
  * Google Analytics
  * Disqus
  * Offline support
  * Web App Manifest
  * SEO
  * [完整列表!](https://github.com/Vagr9K/gatsby-material-starter#features)

* [gatsby-typescript-starter](https://github.com/fabien0102/gatsby-starter)
  [(demo)](https://fabien0102-gatsby-starter.netlify.com/)

  特性:

  * Semantic-ui for styling
  * TypeScript
  * Offline support
  * Web App Manifest
  * Jest/Enzyme testing
  * Storybook
  * Markdown linting
  * [Full list here!](https://github.com/fabien0102/gatsby-starter#whats-inside)

* [gatsby-starter-bootstrap](https://github.com/jaxx2104/gatsby-starter-bootstrap)
  [(demo)](https://jaxx2104.github.io/gatsby-starter-bootstrap/)

  特性:

  * Bootstrap CSS framework
  * Single column layout
  * Simple components: SiteNavi, SitePost, SitePage

* [gatsby-blog-starter-kit](https://github.com/dschau/gatsby-blog-starter-kit)

  特性:

  * 带预览的博客文章列表
  * 使用 previous/next 按钮的文章导航
  * 标签和标签导航

* [gatsby-advanced-starter](https://github.com/Vagr9K/gatsby-advanced-starter)
  [(demo)](https://vagr9k.github.io/gatsby-advanced-starter/)

  特性:

  * Great for learning about advanced features and their implementations
  * Does not contain any UI frameworks
  * Provides only a skeleton
  * Tags
  * Categories
  * Google Analytics
  * Disqus
  * Offline support
  * Web App Manifest
  * SEO
  * [Full list here!](https://github.com/Vagr9K/gatsby-advanced-starter#features)

* [glitch-gatsby-starter-blog](https://github.com/100ideas/glitch-gatsby-starter-blog/)
  ([demo](https://gatsby-starter-blog.glitch.me))

  特性:

  * [live-edit](https://glitch.com/edit/#!/remix/gatsby-starter-blog) a temp,
    anon copy of app
  * same code as
    [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)
    (mostly)
  * free hosting & web IDE on glitch.com
  * HMR working w/ glitch IDE (see
    [note](https://github.com/100ideas/glitch-gatsby-starter-blog/blob/5fce8999bd952087ecdc74c9787a0cb3cb884371/README.md#enabling-hmr))
  * 谨慎:
    * app running in **develop** mode
    * glitch serves assets over CDN, API unclear
    * virtual server container provides
      [**128MB** for app](https://glitch.com/faq#restrictions) (512MB for
      assets)
    * server can't install certain gatsby plugins (`sharp`-based; out of mem?)

* [gatsby-starter-grommet](https://github.com/alampros/gatsby-starter-grommet)
  [(demo)](https://alampros.github.io/gatsby-starter-grommet/)

  特性:

  * Barebones configuration for using the [Grommet](https://grommet.github.io/)
    design system
  * Uses SASS (with CSS modules support)

* [gatsby-starter-basic](https://github.com/PrototypeInteractive/gatsby-react-boilerplate)
  [(demo)](https://prototypeinteractive.github.io/gatsby-react-boilerplate/)

  特性:

  * Basic configuration and folder structure
  * Uses postcss and sass (with autoprefixer and pixrem)
  * Uses boostrap 4 grid
  * Leaves the styling to you
  * Uses data from local json files
  * Contains Node.js server code for easy, secure, and fast hosting

* [gatsby-starter-typescript](https://github.com/haysclark/gatsby-starter-typescript)
  [(demo)](https://haysclark.github.io/gatsby-starter-typescript/)

  特性:

  * TypeScript

* [gatsby-starter-default-i18n](https://github.com/angeloocana/gatsby-starter-default-i18n)
  [(demo)](https://gatsby-starter-default-i18n.netlify.com)

  特性:

  * localization (Multilanguage)

* [gatsby-starter-gatsbythemes](https://github.com/saschajullmann/gatsby-starter-gatsbythemes)
  [(demo)](https://themes.gatsbythemes.com/gatsby-starter/)

  特性:

  * CSS-in-JS via [Emotion](https://github.com/emotion-js/emotion).
  * Jest and Enzyme for testing.
  * Eslint in dev mode with the airbnb config and prettier formatting rules.
  * React 16.
  * A basic blog, with posts under src/pages/blog. There's also a script which
    creates a new Blog entry (post.sh).
  * Data per JSON files.
  * A few basic components (Navigation, Footer, Layout).
  * Layout components make use of
    [Styled-System](https://github.com/jxnblk/styled-system).
  * Google Analytics (you just have to enter your tracking-id).
  * Gatsby-Plugin-Offline which includes Service Workers.
  * [Prettier](https://github.com/prettier/prettier) for a uniform codebase.
  * [Normalize](https://github.com/necolas/normalize.css/) css (7.0).
  * [Feather](https://feather.netlify.com/) icons.
  * Font styles taken from [Tachyons](http://tachyons.io/).

* [gatsby-starter-netlify-cms](https://github.com/AustinGreen/gatsby-starter-netlify-cms)
  [(demo)](https://gatsby-netlify-cms.netlify.com/)

  特性:

  * A simple blog built with Netlify CMS
  * Basic directory organization
  * Uses [Bulma](https://bulma.io/) for styling
  * Visit [the repo](https://github.com/AustinGreen/gatsby-starter-netlify-cms)
    to learn how to set up authentication, and begin modeling your content.

* [gatsby-starter-portfolio-emma](https://github.com/LeKoArts/gatsby-starter-portfolio-emma)
  [(demo)](https://embalmer-glues-43220.netlify.com/)

  特性:

  * Perfect for designers and photographers
  * Full-width Photo Grid-Layout (Responsive Images through
    [gatsby-image](https://using-gatsby-image.gatsbyjs.org/))
  * Minimalistic light theme with large images
  * Create your projects in Markdown
  * Styling with SCSS and
    [Typography.js](https://kyleamathews.github.io/typography.js/)
  * Easily configurable
  * And other good stuff (SEO, Offline Support, WebApp Manifest Support)

* [gatsby-starter-bootstrap-netlify](https://github.com/konsumer/gatsby-starter-bootstrap-netlify)
  [(demo)](https://gatsby-starter-bootstrap-netlify.netlify.com)

  特性:

  * Very similar to
    [gatsby-starter-netlify-cms](https://github.com/AustinGreen/gatsby-starter-netlify-cms),
    slightly more configurable (eg set site-title in `gatsby-config`) with
    bootstrap/bootswatch instead of bulma

* [open-crowd-fund](https://github.com/rwieruch/open-crowd-fund)
  [(demo)](https://www.roadtolearnreact.com/)

  特性:

  * Open source crowdfunding for your own ideas
  * Alternative for Kickstarter, GoFundMe, etc.
  * Secured Credit Card payments with Stripe
  * Storing of funding information in Firebase

* [gatsby-starter-dimension](https://github.com/ChangoMan/gatsby-starter-dimension)
  [(demo)](http://gatsby-dimension.surge.sh/)

  特性:

  * Based off of the Dimension site template. Designed by
    [HTML5 UP](https://html5up.net/dimension)
  * Simple one page site that's perfect for personal portfolios
  * Fully Responsive
  * Styling with SCSS

* [gatsby-starter-docs](https://github.com/ericwindmill/gatsby-starter-docs)
  [(demo)](https://gatsby-docs-starter.netlify.com/)

  特性:

  * All the features from
    [gatsby-advanced-starter](https://github.com/Vagr9K/gatsby-advanced-starter),
    plus:
  * Designed for Documentation / Tutorial Websites
  * 'Table of Contents' Component: Auto generates ToC from posts - just follow
    the file frontmatter conventions from markdown files in 'lessons'.
  * Styled Components w/ ThemeProvider
  * Basic UI
  * A few extra components
  * Custom prismjs theme
  * React Icons

* [gatsby-styled-blog-starter](https://github.com/greglobinski/gatsby-styled-blog-starter)
  [(demo)](https://gsbs.greglobinski.com/)

  特性:

  * sidebar navigation
  * look like an app
  * page transitions
  * pwa
  * styling with styled-components
  * easily restyled through theme object
  * [README](https://github.com/greglobinski/gatsby-styled-blog-starter)

* [gatsby-starter-deck](https://github.com/fabe/gatsby-starter-deck)
  [(demo)](https://gatsby-deck.netlify.com/)

  特性:

  * Create presentations/slides using Gatsby.
  * Offline support.
  * Page transitions.

* [gatsby-starter-forty](https://github.com/ChangoMan/gatsby-starter-forty)
  [(demo)](http://gatsby-forty.surge.sh/)

  特性:

  * Based off of the Forty site template. Designed by
    [HTML5 UP](https://html5up.net/forty)
  * Colorful homepage, and also includes a Landing Page and Generic Page components.
  * Many elements are available, including buttons, forms, tables, and pagination.
  * Styling with SCSS

* [gatsby-firebase-authentication](https://github.com/rwieruch/gatsby-firebase-authentication) [(demo)](https://react-firebase-authentication.wieruch.com/)

  特性:

  * Sign In, Sign Up, Sign Out
  * Password Forget
  * Password Change
  * Protected Routes with Authorization
  * Realtime Database with Users
