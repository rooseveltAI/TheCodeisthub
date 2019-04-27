import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className="footer">
      © {new Date().getFullYear()}, Created by {data.site.siteMetadata.author}
    </footer>
  )
}

export default footer
