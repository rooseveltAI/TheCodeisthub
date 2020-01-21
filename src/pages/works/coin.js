import React from "react"
// import { Link } from "gatsby"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

import WorksPageCard from "src/components/Works/WorksPageCard"
import Cta from "src/components/Cta"

const WorksPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <WorksPageCard />
    </div>
    <Cta />
  </Layout>
)

export default WorksPage
