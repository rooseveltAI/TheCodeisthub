import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactContainer from "../components/Contact/contactContainer"

import { Contact } from "../utils"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="page--margin">
      <Contact>
        <ContactContainer />
      </Contact>
    </div>
  </Layout>
)

export default ContactPage
