import React, { Component } from "react"
import { Link } from "gatsby"
import Coin from "src/images/workImages/coin_hero.png"
import Gosquare from "src/images/workImages/gosquare_hero.png"

export default class Works extends Component {
  render() {
    return (
      <div className="container">
        <div className="works__container">
          <h2>My Works</h2>

          <div className="work--card__container">
            <div className="work__card">
              <img className="work--image" width="100%" src={Coin} alt="Coin" />
              <div className="work--card__content">
                <h3>COIN</h3>
                <p>
                  is a fin-tech mobile app for the Nigeria local market which
                  involves money lending with ease
                </p>
                <a
                  title="Open in new tab"
                  href="https://medium.com/@CodeUXI/coin-loan-app-ux-case-study-5526124c69ba"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn">View this project</button>
                </a>
              </div>
            </div>

            <div className="work__card">
              <img
                className="work--image"
                width="100%"
                src={Gosquare}
                alt="Coin"
              />
              <div className="work--card__content">
                <h3>Gosquare</h3>
                <p>
                  GoSquare is an on-demand delivery platform that provides easy
                  and convenient delivery services for small businesses.
                </p>
                <button className="btn">View this project</button>
              </div>
            </div>
          </div>

          <Link to="/works">
            <button className="btn btn--pink">View All My Works &rarr;</button>
          </Link>
        </div>
      </div>
    )
  }
}
