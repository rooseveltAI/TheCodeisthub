import React from "react"
import ContactButton from "../components/contactBtn"
import Layout from "../components/layout"

const Works = () => {
  return (
    <Layout>
      <div className="container">
        <h2 style={{ width: "40vw", textAlign: "center" }}>My Works</h2>
        <section className="works__card-container">
          <div className="works--card" />
          <div className="works--card" />
          <div className="works--card" />
          <div className="works--card" />
        </section>
        <ContactButton>Veiw more</ContactButton>
      </div>
    </Layout>
  )
}

export default Works
