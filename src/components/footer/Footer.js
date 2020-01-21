import React, { Component } from "react"
import FooterLinks from "./FooterLinks"

export default class footer extends Component {
  render() {
    return (
      <div className="footer__container">
        <FooterLinks />
        <div className="footer--credits">
          <p>
            © {new Date().getFullYear()}, Developed by{" "}
            <strong>Roosevelt Innocent</strong>
          </p>
        </div>
      </div>
    )
  }
}
