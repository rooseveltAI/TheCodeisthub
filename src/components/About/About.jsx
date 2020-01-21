import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "src/images/roosevelt.jpg"

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="about__container">
          <img
            src={Img}
            width="334px"
            height="334px"
            alt="Roosevelt Innocent"
          />

          <p>
            Roosevelt Innocent is a UX/UI focused designer and developer that’s
            passionate about user-centered design, and strongly believes that
            design should be purposeful and made for people, not trends.
          </p>

          <Link to="/about">
            <button className="btn btn--pink">Learn More About Me</button>
          </Link>
        </div>
      </div>
    )
  }
}
