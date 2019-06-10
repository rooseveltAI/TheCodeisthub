import React from "react"
import vector1 from "../../images/s_vector1.svg"
import vector2 from "../../images/s_vector2.svg"

export default function ServicesSection() {
  return (
    <div className="container">
      <div className="services__container">
        <h2 className="services--title--h2">My Services</h2>
        <span>
          <img src={vector1} alt="vector" />
        </span>
        <section className="services--grid">
          <div className="services--card">
            <h2 className="services--content--h2">Create intuitive layouts</h2>
            <p className="services--content--p">
              lorem ipsuim dolor sit ammet, consecetur lorem ipsuim dolor sit
              ammet, consecetur lorem ipsuim dolor sit ammet, consecetur
            </p>
          </div>

          <div className="services--card">
            <h2 className="services--content--h2">Create intuitive layouts</h2>
            <p className="services--content--p">
              lorem ipsuim dolor sit ammet, consecetur lorem ipsuim dolor sit
              ammet, consecetur lorem ipsuim dolor sit ammet, consecetur
            </p>
          </div>
        </section>

        <section className="bottom--card">
          <div className="services--card">
            <h2 className="services--content--h2">Create intuitive layouts</h2>
            <p className="services--content--p">
              lorem ipsuim dolor sit ammet, consecetur lorem ipsuim dolor sit
              ammet, consecetur lorem ipsuim dolor sit ammet, consecetur
            </p>
          </div>
        </section>
        <span style={{ display: "flex", justifyContent: "flex-end" }}>
          <img src={vector2} alt="vector" />
        </span>
      </div>
    </div>
  )
}
