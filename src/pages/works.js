import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import WorksSection from "../components/Works/worksSection"
import { Works } from "../../utils"

const WorksPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="page--margin">
      <Works>
        <WorksSection />
      </Works>
    </div>
  </Layout>
)

export default WorksPage
