import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section>
      <h2>Hello,</h2>
      <p>My name is Roosevelt (TheCodeist)</p>
      <p>
        This is a shitty intro of Let me help you build the next saas product
        website.
      </p>
    </section>
    <section>
      <h2>I’M A FRONT END DEVELOPER</h2>
      <h4>
        “ I help SaaS businesses build more intuitive user interfaces for their
        web pages and applications. I'm passionate about programming, just as
        much as I am about creating products that matter. ”
      </h4>
    </section>
    <section>
      <h4>See Pictures</h4>
    </section>
  </Layout>
)

export default AboutPage
