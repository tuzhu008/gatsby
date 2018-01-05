---
title: "部署 Gatsby"
---

## 在不同的静态站点主机上部署的教程

* [S3/Cloudfront](/docs/deploy-gatsby/#amazon-s3-and-cloudfront)
* [GitHub Pages](/docs/deploy-gatsby/#github-pages)
* [GitLab Pages](/docs/deploy-gatsby/#gitlab-pages)
* [Heroku](/docs/deploy-gatsby/#heroku)

## Amazon S3 and Cloudfront

If you decide to host your Gatsby site on S3 with Cloudfront as CDN, you should
change the "Origin Domain Name" on the Cloudfront panel with the real URL of
your S3 bucket: **examplewebsite.com.s3-website-eu-west-1.amazonaws.com**
replacing the default URL suggested by Amazon
**examplewebsite.com.s3.amazonaws.com**.

Without this change,
[S3 doesn't look for index.html files when serving "clean urls"](https://forums.aws.amazon.com/message.jspa?messageID=314454).

## GitHub Pages

### 部署项目页面

您可以在 GitHub Pages 上部署站点，或者不使用自定义域名。
如果您选择使用默认的设置(不使用自定义域名)，或者您创建一个项目站点，
您将需要使用[路径前缀](/docs/path-prefix/)来设置您的站点。

在 Github 上，你可以在 Github 的帐号和组织中获得一个站点，
以及无限的项目站点。所以你很有可能会创建一个项目网站。
如果你没有计划使用的 Github 现有的存储库，那么现在就花时间在 Github上 创建一个新的存储库。

### 使用 NPM 包 `gh-pages` 来部署

首先添加 **gh-pages** 作为你的站点的一个 `devDependency`，然后运行

```bash
npm install gh-pages --save-dev
```
或
```bash
yarn add gh-pages --dev
```

然后添加一个 `deploy` 脚本到 `package.json` 文件中，用来部署项目：

```js
"scripts": {
  "deploy": "gatsby build --prefix-paths && gh-pages -d public"
}
```

在 `gatsby-config.js` 中，设置 `pathPrefix` 为被添加到你的网站的链接路径。
`pathPrefix` 应该是你的存储库的项目名称。(ex.
`https://github.com/username/project-name` -  `pathPrefix` 应该是
`/project-name`)。参见
[路径前缀的文档页面](/docs/path-prefix/).

```js
module.exports = {
  pathPrefix: `/project-name`,
}
```

如果您还没有在您的工作的 gatsby 站点 repo 中初始化 git 存储库，
那么在您的项目中使用 `git init` 在您的项目中设置 git。
然后告诉 Gatsby 在哪里部署您的站点，通过使用 https 或 ssh 添加 git 远程地址。
下面是如何使用 `git remote add origin git@github.com:username/project-name.git`。

现在运行 `yarn deploy` 或 `npm run deploy`。
在 GitHub page `https://username.github.io/project-name/` 预览变化。
你还可以在 GitHub 下的 `Settings` > `GitHub Pages` 找到你的网站链接。

### 部署一个用户/组织的网站

与项目页面不同的是，GitHub 上的用户/组织站点都位于特别的存储库中，专门用于站点文件。
站点必须从存储库的 `master` 分支发布，这意味着站点源文件应该保存在一个名为 `source` 的分支或类似的分支中。
我们也不需要像与项目网站一样，对链接添加前缀。

这些站点的存储库需要一个特殊的名称。请参阅 https://help.github.com/articles/user-organization-and-project-pages/  获取关于命名站点的存储库的文档。

如果您希望将您的自定义域名与您的 `user.github.io` repo 连接起来，你需要在根目录层的 `static` 文件夹里的 `static` 种自定义域名 url，就像这样:

```
your-custom-domain.com
```

## Gitlab Pages

Gitlab Pages are similar to GitHub pages, perhaps even easier to setup. It also
supports custom domain names and SSL certificates. The process of setting GitLab
pages up is made a lot easier with GitLab's included continuous integration
platform.

Create a new GitLab repository, initialize your Gatsby project folder if you
haven't already, and add the GitLab remote.

```
git init
git remote add origin git@gitlab.com:examplerepository
git add .
git push -u origin master
```

To use GitLab's continuous integration (CI), you need to add a `.gitlab-ci.yml`
configuration file. This can be added into your project folder, or once you have
pushed the repository, you can add it with GitLab's website. The file needs to
contain a few required fields:

```
image: node:latest

# This folder is cached between builds
# http://docs.gitlab.com/ce/ci/yaml/README.html#cache
cache:
  paths:
  - node_modules/

pages:
  script:
  - yarn install
  - ./node_modules/.bin/gatsby build
  artifacts:
    paths:
    - public
  only:
  - master
```

The CI platform uses Docker images/containers, so `image: node:latest` tells the
CI to use the latest node image. `cache:` caches the `node_modules` folder
in between builds, so subsequent builds should be a lot faster as it doesn't have
to reinstall all the dependancies required. `pages:` is the name of the
CI stage. You can have multiple stages, e.g. 'Test', 'Build', 'Deploy' etc.
`script:` starts the next part of the CI stage, telling it to start running the
below scripts inside the image selected. We have used the `yarn install` and
`./node_modules/.bin/gatsby build` which will install all dependancies, and
start the static site build, respectively. We have used
`./node_modules/.bin/gatsby build` because we then don't have to install
gatsby-cli to build the image, as it has already been included and installed
with `yarn install`. `artifacts:` and `paths:` are used to tell GitLab pages
where the static files are kept. `only:` and `master` tells the CI to only run
the above instructions when the master branch is deployed.

Add that configuration, and with the next master branch push, your site should
have been built correctly. This can be checked by going to your repository on
GitLab, and selecting CI/CD in the sidebar. This will then show you a log of all
jobs that have either succeeded or failed. You can click on the failed status,
and then select the job to get more information about why your build may have
failed.

If all went well, you should now be able to access your site. It will be hosted
under gitlab.io - for example if you have have a repository under your
namespace, the url will be yourname.gitlab.io/examplerepository.

Visit the
[GitLab Pages](https://gitlab.com/help/user/project/pages/getting_started_part_one.md)
to learn how to setup custom domains and find out about advanced configurations.

## Heroku

You can use the [heroku buildpack static](https://github.com/heroku/heroku-buildpack-static) to handle the static files of your site.

Set the `heroku/node.js` and `heroku-buildpack-static` buildpacks on your application creating an `app.json` file on the root of your project.

```
{
  "buildpacks": [
    {
      "url": "heroku/nodejs"
    },
    {
      "url": "https://github.com/heroku/heroku-buildpack-static"
    }
  ]
}
```

Sometimes specifying buildpacks via the `app.json` file doesn't work. If this is your case try to add them in the Heroku dashboard or via the CLI.

Add a `heroku-postbuild` script in your `package.json`:

```
{

  // ...
  "scripts": {
    // ...
    "heroku-postbuild": "gatsby build"
    // ...
  }
  // ...
}
```

Finally, add a `static.json` file in the root of your project to define the directory where your static assets will be. You can check all the options for this file in the [heroku-buildpack-static configuration](https://github.com/heroku/heroku-buildpack-static#configuration).

```
{
  "root": "public/"
}
```

## Debugging tips

### Don't minify HTML

If you see the following error:

```
Unable to find element with ID ##
```

or alternatively

```
Uncaught Error: Minified React error #32; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=32&args[]=## for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
```

This is a new problem when dealing with static sites built with React. This is
not caused by Gatsby. React uses HTML comments to help identify locations of
components that do not render anything. If you are using a CDN that minifies
your HTML, it will eliminate the HTML comments used by React to take control of
the page on the client. Cloudflare is a CDN that minifies HTML by default.
