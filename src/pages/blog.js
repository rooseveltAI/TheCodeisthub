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
      {/* <div className="blog--bg" /> */}
      <div className="page--margin container">
        <h3>Blog</h3>
        <div className="blog--card__container">
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <div className="blog-card">
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                  <br />
                  <span>Read - </span>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      {/* </div> */}
    </Layout>
  )
}

export default BlogPage
