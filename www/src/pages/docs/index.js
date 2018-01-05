import React from "react"
import Link from "gatsby-link"

import SidebarBody from "../../components/sidebar-body"
import docsSidebar from "./doc-links.yaml"
import Container from "../../components/container"
import presets from "../../utils/presets"

class IndexRoute extends React.Component {
  render() {
    return (
      <Container>
        <h1 css={{ marginTop: 0 }}>开始</h1>
        <p>Gatsby 是为 React 而生的快速静态网站生成器。</p>
        <h2>安装 Gatsby 命令行工具</h2>
        <p>
          <code>npm install --global gatsby-cli</code>
        </p>
        <h2>使用 Gatsby CLI</h2>
        <ol>
          <li>
            创建一个新站点。
            {` `}
            <code>gatsby new gatsby-site</code>
          </li>
          <li>
            <code>cd gatsby-site</code>
          </li>
          <li>
            <code>gatsby develop</code> — Gatsby 将启动一个热替换开发环境，可访问 <code>localhost:8000</code>
          </li>
          <li>
            尝试在 <code>src/pages</code> 中编辑这个 javascript 页面。保存的更改将在浏览器中重新加载。
          </li>
          <li>
            <code>gatsby build</code> — 将为您的站点执行一个优化的生产构建，生成静态 HTML 和每个路由的 JavaScript 代码包。
          </li>
          <li>
            <code>gatsby serve</code> — Gatsby 启动一个本地的 HTML 服务器，用于测试你构建的站点。
          </li>
        </ol>
        <h2>其他启动器</h2>
        <p>
          运行 <code>gatsby new</code> 安装默认的 Gatsby 启动器。
          这里有{` `}
          <Link to="/docs/gatsby-starters/">
            许多其他的官方的和社区的启动器
          </Link>
          {` `}
          你可以用来建立你的 Gatsby 网站。
        </p>
        <h2>教程</h2>
        <p>
          它会让你从头到成品的建立一个 Gatsby 的网站。
          {` `}
          <Link to="/tutorial/">学习教程</Link>.
        </p>
        <div
          css={{
            display: `block`,
            [presets.Tablet]: {
              display: `none`,
            },
          }}
        >
          <h2>文档</h2>
          <SidebarBody inline yaml={docsSidebar} />
        </div>
      </Container>
    )
  }
}

export default IndexRoute
