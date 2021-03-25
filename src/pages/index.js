import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      css={css`
        margin: 0 auto;
        max-width: 960px;
        min-height: calc(100vh - 180px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <StaticImage
        src="../images/pp-cv.png"
        width={80}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Anthony Rovira Profile Picture"
      />
      <br />
      <h1
        css={css`
          color: #333666;
        `}
      >
        Anthony Rovira
      </h1>
      <br />

      <p>
        Hello, I’m Anthony. I’m a web developer looking for an internship. You
        can contact me on <a href="https://twitter.com/hysteria_9">Twitter</a>.
      </p>
      <p>
        (This is a sample website created during the{" "}
        <a href="https://www.lereacteur.io/formation/react-redux/">
          Rocket Training
        </a>
        . Courses was given by{" "}
        <a href="https://github.com/FaridSafi">Farid Safi</a>).
      </p>
      <br />
      <h2
        css={css`
          color: #333666;
        `}
      >
        My Web Projects:
      </h2>
      <p>
        <Link to="/projects/tripadvisor/">TripAdvisor - Buenos Aires</Link>
      </p>
      <p>
        <Link to="/projects/mybank/">My Bank - React</Link>
      </p>
      <p>
        <Link to="/projects/simpleform/">Simple Form</Link>
      </p>
      <p>
        <Link to="/projects/netflix/">Netflix</Link>
      </p>
    </div>
  </Layout>
)

export default IndexPage
