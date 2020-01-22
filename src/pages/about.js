import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutHeader from "src/components/Header/AboutHeader"
import AboutPageText from "src/components/About/AboutPageText"
import BigTitle from "../components/bigTitle"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="about--page__container">
      <AboutHeader />
      <AboutPageText />
    </div>
    <BigTitle />
  </Layout>
)

export default AboutPage
