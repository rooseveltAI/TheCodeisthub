import React from "react"
import ContactButton from "../components/contactBtn"
import Layout from "../components/layout"

const Works = () => {
  return (
    <Layout>
      <h3
        style={{
          marginLeft: "5vw",
          color: "#fff",
          fontFamily: "Montserrat ExtraBold",
          fontSize: "3em",
        }}
      >
        My Works
      </h3>
      <div className="container">
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
