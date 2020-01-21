import React, { Component } from "react"
import { Link } from "gatsby"

export default class Works extends Component {
  render() {
    return (
      <div className="container">
        <div className="works__container">
          <h2>My Works</h2>

          <div className="work--card__container">
            <div className="work__card" />
            <div className="work__card" />
            {/* <div className="work__card" />
            <div className="work__card" /> */}
          </div>

          <Link to="/works">
            <button className="btn btn--pink">View All My Works &rarr;</button>
          </Link>
        </div>
      </div>
    )
  }
}
