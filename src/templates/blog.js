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
      <div style={{ color: "#111", marginLeft: "5vw" }}>
        <h3
          style={{
            fontFamily: "Montserrat ExtraBold",
            fontSize: "3em",
          }}
        >
          {props.data.markdownRemark.frontmatter.title}
        </h3>
        <i>Published On: {props.data.markdownRemark.frontmatter.date}</i>
      </div>
      <div
        style={{
          width: "70vw",
          marginLeft: "4vw",
          marginTop: "20vh",
          padding: "2em",
        }}
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </Layout>
  )
}

export default Blog
