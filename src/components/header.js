import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"

const Header = ({ siteTitle }) => (
  <header
    css={css`
      width: 100%;
      height: 120px;
      background-color: #5c48d3;
      margin-bottom: 20px;
    `}
  >
    <div
      css={css`
        margin: 0 auto;
        max-width: 960px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <StaticImage
        src="../images/lereacteur.jpeg"
        width={120}
        height={120}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Le Reacteur logo"
      />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
