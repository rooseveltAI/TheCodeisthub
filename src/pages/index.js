import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import LandingHeader from "../components/Header/LandingHeader"

import "../scss/layout.scss"
import BigTitle from "../components/bigTitle"
import Works from "src/components/Works/Works"
// import Blog from "src/components/Blog/Blog"
import About from "src/components/About/About"
import Cta from "../components/Cta"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div>
      <LandingHeader />

      <Works />

      {/* <Blog /> */}

      <About />

      <Cta />

      <BigTitle />
    </div>
  </Layout>
)

export default IndexPage
