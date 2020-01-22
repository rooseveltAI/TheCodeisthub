import React, { Component } from "react"
import { Link } from "gatsby"

import Logo from "../../images/logo.svg"
import waving from "../../images/waving_hand.svg"

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav__container">
        <ul className="nav--lists">
          <li>
            <Link to="/">
              <img src={Logo} alt="Roosevelt" />
            </Link>
          </li>

          <div className="menu-wrap">
            <input type="checkbox" className="toggler" />
            <div className="hamburger">
              <div />
            </div>

            <div className="menu">
              <div>
                <div>
                  <ul className="nav--ul">
                    <li>
                      <Link to="/about">About</Link>
                    </li>

                    <li>
                      <a
                        href="https://www.behance.net/roosevelt-innocent"
                        target="_top"
                        rel="noopener noreferrer"
                      >
                        Portfolio
                      </a>
                    </li>

                    <li>
                      <a
                        title="Open in new tab"
                        href="https://medium.com/@CodeUXI"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Articles
                      </a>
                    </li>

                    <li className="nav--email">
                      <span className="email">
                        <a
                          href="mailto:howdy.roosevelt@gmail.com"
                          target="_top"
                          rel="noopener noreferrer"
                        >
                          howdy.roosevelt@gmail.com
                        </a>
                        <img src={waving} alt="waving hand" />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    )
  }
}
