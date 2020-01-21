import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import LandingHeader from "src/components/Header/LandingHeader"
import AboutPageText from "src/components/About/AboutPageText"
import BigTitle from "../components/bigTitle"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="about--page__container">
      <LandingHeader />
      <AboutPageText />
    </div>
    <BigTitle />
  </Layout>
)

export default AboutPage
