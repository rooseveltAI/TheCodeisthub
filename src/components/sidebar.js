import React from "react"
import logo from "../images/logo.png"
import twitter from "../images/iconmonstr-twitter-4.svg"
import linkedin from "../images/iconmonstr-linkedin-4.svg"
import instagram from "../images/iconmonstr-instagram-14.svg"
import github from "../images/iconmonstr-github-1.svg"
import codepen from "../images/icons8-codepen-filled.svg"
import { Link } from "gatsby"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <aside style={{ position: "fixed" }}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul
          className="sidebar--lists wrapper"
          style={{ marginTop: "5vh", color: "#fff" }}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <Link to="works">Works</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <Link to="blog">Blog</Link>
          </li>
          <span style={{ marginTop: "4vh" }}>
            <li>
              <a href="https://twitter.com/TheCodeist" target="_blank">
                {" "}
                <img title="Twitter" src={twitter} width="30%" alt="logo" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/roosevelt-innocent" target="_blank">
                {" "}
                <img title="LinkedIn" src={linkedin} width="30%" alt="logo" />
              </a>{" "}
            </li>
            <li>
              <a href="https://github.com/TheCodeistHub" target="_blank">
                <img title="Github" src={github} width="30%" alt="logo" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/the-codeist" target="_blank">
                <img title="Instagram" src={instagram} width="30%" alt="logo" />
              </a>
            </li>
            <li>
              <a href="https://codepen.com/Thecodeist" target="_blank">
                <img title="Codepen" src={codepen} width="30%" alt="logo" />
              </a>
            </li>
          </span>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar
