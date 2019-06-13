import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Services } from "../utils"

import ServicesSection from "../components/Service/ServicesSection"

const ServicesPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="page--margin">
      <Services>
        <ServicesSection />
      </Services>
    </div>
  </Layout>
)

export default ServicesPage
