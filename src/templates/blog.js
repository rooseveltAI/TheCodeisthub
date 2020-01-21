import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <div className="blog--text__container">
        <div className="text--container">
          <h2>{props.data.markdownRemark.frontmatter.title}</h2>
          <i>Published On: {props.data.markdownRemark.frontmatter.date}</i>
        </div>
        <div className="innerHTML--container">
          <div
            className="text--container"
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Blog
