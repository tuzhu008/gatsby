import React from "react"

import Functions from "../../components/function-list"
import { rhythm, scale } from "../../utils/typography"
import Container from "../../components/container"

class BrowserAPIDocs extends React.Component {
  render() {
    return (
      <Container>
        <h1 css={{ marginTop: 0 }}>Gatsby 浏览器 API</h1>
        <h2 css={{ marginBottom: rhythm(1 / 2) }}>用法</h2>
        <p css={{ marginBottom: rhythm(1) }}>
          从项目根目录下的一个名为{` `}
          <code>gatsby-browser.js</code> 的文件的导出实现了这些 API。
        </p>
        <hr />
        <h2 css={{ marginBottom: rhythm(1 / 2) }}>APIs</h2>
        <ul css={{ ...scale(-1 / 5) }}>
          {this.props.data.allDocumentationJs.edges.map(({ node }, i) => (
            <li key={`function list ${node.name}`}>
              <a href={`#${node.name}`}>{node.name}</a>
            </li>
          ))}
        </ul>
        <br />
        <hr />
        <h2>参考</h2>
        <Functions functions={this.props.data.allDocumentationJs.edges} />
      </Container>
    )
  }
}

export default BrowserAPIDocs

export const pageQuery = graphql`
  query BrowserAPIDocsQuery {
    allDocumentationJs(
      filter: { id: { regex: "/src.*api-browser-docs.js/" } }
      sort: { fields: [name] }
    ) {
      edges {
        node {
          name
          ...FunctionList
        }
      }
    }
  }
`
