import React, { Component } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"

class Navbar extends Component {
  state = {
    navbarClicked: false,
  }

  handleNavbar = () => {
    this.setState(() => {
      return { navbarClicked: !this.state.navbarClicked }
    })
  }
  render() {
    return (
      <header className="nav--header">
        <div className="container">
          <nav className="nav">
            <NavbarHeader handleNavbar={this.handleNavbar} />
            <NavbarLinks navbarClicked={this.state.navbarClicked} />
          </nav>
        </div>
      </header>
    )
  }
}

export default Navbar
