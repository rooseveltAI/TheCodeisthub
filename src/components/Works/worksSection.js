import React from "react"
import kilo from "../../images/works/kilo.png"

export default function WorksSection() {
  return (
    <div className="container">
      <h2 className="works--title--h2">See my works</h2>
      <div className="works__container">
        <div className="works--card">
          <div class="works--contents__container">
            <img
              className="works--img"
              src={kilo}
              width="437px"
              alt="projects"
            />

            <div className="works--contents">
              <h1>Kilo App</h1>
              <p className="works--title">
                Kilo - An invoice app for small busuinesses
              </p>
              <h4>View it On:</h4>
            </div>
            {/* <div className="works__card--icon">
              <a
                href="https://twitter.com/TheLennyJohnson"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div> */}
          </div>
        </div>

        <div className="works--card">
          <div class="works--contents__container">
            <img
              className="works--img"
              src={kilo}
              width="437px"
              alt="projects"
            />

            <div className="works--contents">
              <h1>Kilo App</h1>
              <p className="works--title">
                Kilo - An invoice app for small busuinesses
              </p>
              <h4>View it On:</h4>
            </div>
            {/* <div className="works__card--icon">
              <a
                href="https://twitter.com/TheLennyJohnson"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div> */}
          </div>
        </div>

        <div className="works--card">
          <div class="works--contents__container">
            <img
              className="works--img"
              src={kilo}
              width="437px"
              alt="projects"
            />

            <div className="works--contents">
              <h1>Kilo App</h1>
              <p className="works--title">
                Kilo - An invoice app for small busuinesses
              </p>
              <h4>View it On:</h4>
            </div>
            {/* <div className="works__card--icon">
              <a
                href="https://twitter.com/TheLennyJohnson"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div> */}
          </div>
        </div>
      </div>
      <button className="btn crimson">View More</button>
    </div>
  )
}
