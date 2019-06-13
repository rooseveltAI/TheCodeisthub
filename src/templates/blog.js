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
      <div className="page--margin container">
        <h3>{props.data.markdownRemark.frontmatter.title}</h3>
        <i>Published On: {props.data.markdownRemark.frontmatter.date}</i>
      </div>
      <div
        className="container"
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </Layout>
  )
}

export default Blog
