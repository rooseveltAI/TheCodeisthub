import React from "react"
import vector from "../../images/h_vector.svg"
import { Link } from "gatsby"
import { Programmer1 } from "./AboutVectors"

export default function AboutIntro() {
  return (
    <div className="container">
      <div className="about--container">
        <section className="about--text__container">
          <h3 className="hello--h3">Hello,</h3>
          <p className="about--p--bold">My name is Roosevelt (TheCodeist)</p>
          <p className="about--header-p">
            This is a shitty intro of Let me help you build the next saas
            product website.
          </p>
        </section>

        <Programmer1 />
        <img
          src={vector}
          className="about--vector--bg"
          width="750px"
          alt="vector"
        />

        <section className="about__mac--container">
          <div className="about__mac--content">
            <h2 className="mac--h2">I’M A DEVELOPER AND A DESIGNER</h2>
            <p className="mac--p">
              <i className="quote">“</i> I help SaaS businesses build more
              intuitive user interfaces for their web pages and applications.
              I'm passionate about programming, just as much as I am about
              creating products that matter. <i className="quote">”</i>
            </p>
            <Link to="/contact">
              <button className="btn purple">Work with me</button>
            </Link>
          </div>
        </section>

        <div className="about__mac-mobile--content">
          <h2 className="mobile-mac--h2">I’M A DEVELOPER AND A DESIGNER</h2>
          <p className="mobile-mac--p">
            <i className="mobile-quote">“</i> I help SaaS businesses build more
            intuitive user interfaces for their web pages and applications. I'm
            passionate about programming, just as much as I am about creating
            products that matter. <i className="mobile-quote">”</i>
          </p>
          <Link to="/contact">
            <button className="btn purple">Work with me</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
