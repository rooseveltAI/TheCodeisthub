import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import WorkSection from "../components/Works/workPage"
import { Works } from "../utils"

const WorksPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="page--margin">
      <Works>
        <WorkSection />
      </Works>
    </div>
  </Layout>
)

export default WorksPage
