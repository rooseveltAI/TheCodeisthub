import React from "react"

import img from "../images/Roosevelt2.jpg"
import ContactButton from "../components/contactBtn"

const About = () => {
  return (
    <div id="about" style={{ marginBottom: "20vh" }}>
      <section className="about--profile">
        <img className="avatar avatar-150" src={img} alt="Profile" />
        <span style={{ marginLeft: "2vw", color: "#fff" }}>
          <h1>Roosevelt Innocent</h1>
          <h3>Front end Developer</h3>
        </span>
      </section>
      <div className="about__section-2">
        <h2 className="about--h2">About Me</h2>
        <div className="about__card">
          <p>
            I help SaaS businesses create more intuitive user interfaces for
            their web and mobile applications. I'm passionate about programming,
            just as much as I am about creating products that matter.
          </p>
          <ContactButton>Contact Me</ContactButton>
        </div>
      </div>
    </div>
  )
}

export default About
