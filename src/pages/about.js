import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutIntro from "../components/About/AboutIntro"
import AboutImages from "../components/About/AboutImages"
import { Services } from "../utils"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <AboutIntro />
    <Services>
      <AboutImages />
    </Services>
  </Layout>
)

export default AboutPage
