import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h3
        style={{
          marginBottom: "25vh",
          marginLeft: "5vw",
          color: "#fff",
          fontFamily: "Montserrat ExtraBold",
          fontSize: "3em",
        }}
      >
        Blog
      </h3>
      <div className="blog-card--container">
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <div className="blog-card">
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h4>{edge.node.frontmatter.title}</h4>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogPage
