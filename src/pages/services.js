import React from "react"

import ContactButton from "../components/contactBtn"

const Services = () => {
  return (
    <div id="services" className="services__container">
      <h2 className="services--h2">My Services</h2>
      <section className="services__card-container container">
        <div className="services--card">
          <h3>Services I offer</h3>
          <p>
            I help SaaS businesses create more intuitive user interfaces for
            their web and mobile applications. I'm passionate about programming,
            just as much as I am about creating products that matter.I help SaaS
            businesses create more intuitive user interfaces for their web and
            mobile applications. I'm passionate about programming, just as much
            as I am about creating products that matter.I help SaaS businesses
            create more intuitive user
          </p>
          <ContactButton>Contact Me</ContactButton>
        </div>

        <div className="services--card">
          <h3>Services I Don't offer</h3>
          <p>
            I help SaaS businesses create more intuitive user interfaces for
            their web and mobile applications. I'm passionate about programming,
            just as much as I am about creating products that matter.I help SaaS
            businesses create more intuitive user interfaces for their web and
            mobile applications. I'm passionate about programming, just as much
            as I am about creating products that matter.I help SaaS businesses
            create more intuitive user
          </p>
        </div>
      </section>
    </div>
  )
}

export default Services
