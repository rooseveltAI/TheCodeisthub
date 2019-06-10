import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Services, Works, Contact } from "../utils"
import AboutIntro from "../components/About/AboutIntro"
import ServicesSection from "../components/Service/ServicesSection"
import WorksSection from "../components/Works/worksSection"
import ContactContainer from "../components/Contact/contactContainer"

// import About from "../components/HomePageComponents/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader>
      <AboutIntro />
    </HomeHeader>
    <Services>
      <ServicesSection />
    </Services>

    <Works>
      <WorksSection />
    </Works>

    <Contact>
      <ContactContainer />
    </Contact>
  </Layout>
)

export default IndexPage
