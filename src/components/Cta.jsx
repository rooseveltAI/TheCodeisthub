import React from "react"
import waving from "src/images/waving_hand.svg"

export default function Cta() {
  return (
    <div className="container">
      <div className="cta__container">
        <span className="waving__cta">
          <img src={waving} alt="Hi There" />
          <p>If you'd like to talk, just send me an email at</p>
        </span>
        <a href="">howdy.roosevelt@gmail.com</a>
      </div>
    </div>
  )
}
