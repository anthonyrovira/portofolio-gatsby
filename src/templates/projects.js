import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = ({
  pageContext: {
    id,
    url,
    title,
    description,
    thumbnail,
    date,
    deploys,
    stacks,
    technologies,
    route,
  },
}) => {
  return (
    <Layout>
      <SEO title={title} />
      <div
        css={css`
          margin: 0 auto;
          max-width: 960px;
          min-height: calc(100vh - 180px);
          display: flex;
          flex-direction: column;
        `}
      >
        <h1>{title}</h1>
        <p
          css={css`
            color: grey;
          `}
        >
          {date}
        </p>
        <p>
          {" "}
          <strong>Description:</strong>{" "}
        </p>
        <p
          css={css`
            text-align: justify;
          `}
        >
          {description}
        </p>
        <br />

        <p>
          {" "}
          <strong>URL:</strong>{" "}
        </p>
        <p
          css={css`
            text-align: justify;
          `}
        >
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        </p>
        <br />
      </div>
      <p
        css={css`
          text-align: center;
        `}
      >
        <Link to="/">Go back to the homepage</Link>
      </p>
    </Layout>
  )
}

export default Projects
