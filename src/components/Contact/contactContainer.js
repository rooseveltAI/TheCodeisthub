import React, { Component } from "react"
import ContactForm from "./contactForm"
import ContactText from "./ContactText"

export default class ContactContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="contact__container">
          <ContactText />
          <ContactForm />
        </div>
      </div>
    )
  }
}
