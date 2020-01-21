import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import LandingHeader from "src/components/Header/LandingHeader"
import WorksPageCard from "src/components/Works/WorksPageCard"
import Cta from "../components/Cta"

const WorksPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <LandingHeader />
      <WorksPageCard />
    </div>
    <Cta />
  </Layout>
)

export default WorksPage
