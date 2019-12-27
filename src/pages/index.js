import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
import SEO from "../components/seo"
// import { HomeHeader, Services, Works, Contact } from "../utils"
// import AboutIntro from "../components/About/AboutIntro"
// import ServicesSection from "../components/Service/ServicesSection"
// import WorkSection from "../components/Works/workPage"
// import ContactContainer from "../components/Contact/contactContainer"

// import About from "../components/HomePageComponents/About"

const IndexPage = () => (
  <div className="container main-body">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="come--later__container">
      <h1>Hello There!</h1>
      <p>
        My site is currently under maintanance. Please check back on January!
      </p>
      <p>For the mean time you can connect with me on</p>
      <a
        href="https://twitter.com/CodeUXI"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      <a
        href="https://www.linkedin.com/in/roosevelt-innocent/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://dribbble.com/CodeUXI"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dribbble
      </a>
      <a
        href="https://github.com/CodeUXI"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <p>Or email me at</p>
      <a
        href="mailto:howdy.roosevelt@gmail.com"
        target="_top"
        rel="noopener noreferrer"
      >
        howdy.roosevelt@gmail.com
      </a>
    </div>

    {/* <HomeHeader>
      <AboutIntro />
    </HomeHeader>
    <Services>
      <ServicesSection />
    </Services>

    <Works>
      <WorkSection />
    </Works>

    <Contact>
      <ContactContainer />
    </Contact> */}
  </div>
)

export default IndexPage
