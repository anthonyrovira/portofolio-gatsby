import React from "react"
import { css } from "@emotion/react"

const Footer = props => {
  return (
    <footer
      css={css`
        width: 100%;
        height: 30px;
        background-color: #5c48d3;
        margin-top: 20px;
        color: white;
      `}
    >
      <p
        css={css`
          text-align: center;
          color: white;
        `}
      >
        © {new Date().getFullYear()}, Built with
        {` `}{" "}
        <a
          css={css`
            color: white;
          `}
          href="https://www.gatsbyjs.com"
        >
          Gatsby
        </a>{" "}
      </p>
    </footer>
  )
}

export default Footer
