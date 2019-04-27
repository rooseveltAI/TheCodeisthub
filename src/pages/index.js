import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "./about"
import Services from "./services"
import Works from "./works"
import Contact from "./contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <About />
    <Services />
    <Contact />
  </Layout>
)

export default IndexPage
