import React from "react"
import img1 from "../../images/roose1.png"
import img2 from "../../images/roose2.png"
import img3 from "../../images/roose3.png"
import img4 from "../../images/roose4.png"

export default function AboutImages() {
  return (
    <div className="container">
      <h2
        className="title--h2"
        style={{ textAlign: "center", color: "#6c63ff" }}
      >
        See Pictures
      </h2>
      <div className="about--pictures">
        <img className="img1" src={img1} alt="Roosevelt" />
        <img className="img2" src={img2} alt="Roosevelt" />
        <img className="img3" src={img3} alt="Roosevelt" />
        <img className="img4" src={img4} alt="Roosevelt" />
      </div>
    </div>
  )
}
