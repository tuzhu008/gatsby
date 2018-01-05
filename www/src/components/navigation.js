import React from "react"
import Link from "gatsby-link"
import GithubIcon from "react-icons/lib/go/mark-github"
import TwitterIcon from "react-icons/lib/fa/twitter"

import DiscordIcon from "../components/discord"
import logo from "../gatsby-negative.svg"
import typography, { rhythm, scale } from "../utils/typography"
import presets from "../utils/presets"
import { vP, vPHd, vPVHd, vPVVHd } from "./gutters"

const navItemStyles = {
  ...scale(-1 / 3),
  boxSizing: `border-box`,
  display: `inline-block`,
  color: `inherit`,
  textDecoration: `none`,
  textTransform: `uppercase`,
  letterSpacing: `0.03em`,
  lineHeight: `calc(${presets.headerHeight} - 4px)`,
  padding: `4px ${rhythm(0.5)} 0`,
  position: `relative`,
  top: 0,
  transition: `color .15s ease-out`,
  "&:hover": {
    opacity: 0.8,
  },
}
const NavItem = ({ linkTo, children }) => (
  <li
    css={{
      display: `inline-block`,
      margin: 0,
    }}
  >
    <Link to={linkTo} css={navItemStyles}>
      {children}
    </Link>
  </li>
)

export default ({ pathname }) => {
  const isHomepage = pathname == `/`
  const isBlog = pathname == `/blog/`
  let styles = {}
  if (isHomepage) {
    styles.backgroundColor = `rgba(255,255,255,0)`
    styles.borderBottomColor = `transparent`
    styles[presets.Tablet] = {
      position: isHomepage || isBlog ? `absolute` : `fixed`,
    }
  } else if (isBlog) {
    styles.backgroundColor = `#fff`
    styles[presets.Tablet] = {
      borderBottomColor: `transparent`,
      position: isHomepage || isBlog ? `absolute` : `fixed`,
      backgroundColor: presets.sidebar,
    }
  }
  const socialIconsStyles = {
    color: presets.brandLight,
    [presets.Phablet]: {
      color: isHomepage ? presets.brandLighter : false,
    },
  }
  const gutters = isHomepage
    ? {
        paddingLeft: vP,
        paddingRight: vP,
        paddingTop: rhythm(1.5),
        [presets.Hd]: {
          paddingLeft: vPHd,
          paddingRight: vPHd,
        },
        [presets.VHd]: {
          paddingLeft: vPVHd,
          paddingRight: vPVHd,
        },
        [presets.VVHd]: {
          paddingLeft: vPVVHd,
          paddingRight: vPVVHd,
        },
      }
    : {}

  return (
    <div
      role="navigation"
      css={{
        borderBottom: `1px solid ${presets.veryLightPurple}`,
        backgroundColor: `rgba(255,255,255,0.975)`,
        position: isHomepage ? `absolute` : false,
        height: presets.headerHeight,
        zIndex: `1`,
        left: 0,
        right: 0,
        [presets.Tablet]: {
          position: isHomepage || isBlog ? `absolute` : `fixed`,
        },
        ...styles,
      }}
    >
      <div
        css={{
          //maxWidth: rhythm(presets.maxWidth),
          margin: `0 auto`,
          paddingLeft: rhythm(3 / 4),
          paddingRight: rhythm(3 / 4),
          ...gutters,
          fontFamily: typography.options.headerFontFamily.join(`,`),
          display: `flex`,
          alignItems: `center`,
          width: `100%`,
          height: `100%`,
        }}
      >
        <Link
          to="/"
          css={{
            color: `inherit`,
            display: `inline-block`,
            textDecoration: `none`,
            marginRight: rhythm(0.5),
          }}
        >
          <img
            src={logo}
            css={{
              display: `inline-block`,
              height: rhythm(1.2),
              width: rhythm(1.2),
              margin: 0,
              marginRight: rhythm(2 / 4),
              verticalAlign: `middle`,
            }}
            alt=""
          />
          <h1
            css={{
              ...scale(2 / 5),
              display: `inline-block`,
              margin: 0,
              verticalAlign: `middle`,
            }}
          >
            Gatsby
          </h1>
        </Link>
        <ul
          css={{
            display: `none`,
            [presets.Tablet]: {
              display: `block`,
              margin: 0,
              padding: 0,
              listStyle: `none`,
            },
          }}
        >
          <NavItem linkTo="/docs/">文档</NavItem>
          <NavItem linkTo="/tutorial/">教程</NavItem>
          <NavItem linkTo="/community/">社区</NavItem>
          <NavItem linkTo="/features/">特性</NavItem>
          <NavItem linkTo="/blog/">博客</NavItem>
        </ul>
        <div
          css={{
            marginLeft: isHomepage ? rhythm(1 / 2) : `auto`,
            [presets.Phablet]: {
              marginLeft: isHomepage ? `auto` : `auto`,
            },
          }}
        >
          <a
            href="https://github.com/gatsbyjs/gatsby"
            title="GitHub"
            css={{
              ...navItemStyles,
              ...socialIconsStyles,
            }}
          >
            <GithubIcon style={{ verticalAlign: `text-top` }} />
          </a>
          <a
            href="https://discord.gg/0ZcbPKXt5bZjGY5n"
            title="Discord"
            css={{
              ...navItemStyles,
              ...socialIconsStyles,
            }}
          >
            <DiscordIcon overrideCSS={{ verticalAlign: `text-top` }} />
          </a>
          <a
            href="https://twitter.com/gatsbyjs"
            title="@gatsbyjs"
            css={{
              ...navItemStyles,
              ...socialIconsStyles,
              paddingRight: 0,
            }}
          >
            <TwitterIcon style={{ verticalAlign: `text-top` }} />
          </a>
        </div>
      </div>
    </div>
  )
}
