import React, { Component } from "react"
// import { Link } from "gatsby"
import Coin from "src/images/workImages/coin_hero.png"
import Gosquare from "src/images/workImages/gosquare_hero.png"

export default class Works extends Component {
  render() {
    return (
      <div className="container">
        <div className="works__container">
          <h2>My Recent Works</h2>

          <div className="work--card__container">
            <div className="work__card">
              <img className="work--image" width="100%" src={Coin} alt="Coin" />
              <div className="work--card__content">
                <h3>COIN</h3>
                <p>
                  is a fin-tech mobile app for the Nigeria local market which
                  involves money lending with ease
                </p>
                <button className="btn">View this project</button>
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
                  is a fin-tech mobile app for the Nigeria local market which
                  involves money lending with ease
                </p>
                <button className="btn">View this project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
