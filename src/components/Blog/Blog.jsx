import React, { Component } from "react"
import { Link } from "gatsby"

export default class Blog extends Component {
  render() {
    return (
      <div className="container">
        <div className="blog__container">
          <h2>My Blog</h2>

          <div className="blog--card__container">
            <div className="blog__card">
              <div className="blog__img" />
              <p>Category</p>
              <h3>Title and description</h3>
              <button>Read &rarr;</button>
            </div>

            <div className="blog__card">
              <div className="blog__img" />
              <p>Category</p>
              <h3>Title and description</h3>
              <button>Read &rarr;</button>
            </div>

            <div className="blog__card">
              <div className="blog__img" />
              <p>Category</p>
              <h3>Title and description</h3>
              <button>Read &rarr;</button>
            </div>
          </div>

          <Link to="/blog">
            <button className="btn btn--pink">
              View All My Articles &rarr;
            </button>
          </Link>
        </div>
      </div>
    )
  }
}
