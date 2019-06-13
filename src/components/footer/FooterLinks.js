import React, { Component } from "react"
import { Link } from "gatsby"

export default class FooterLinks extends Component {
  state = {
    footer: [
      {
        id: 0,
        title1: "TheCodeist",
        path0: "/about/",
        name0: "About",
      },
      {
        id: 1,
        path1: "/works/",
        name1: "Works",
      },
      {
        id: 2,
        path2: "/blog/",
        name2: "Blog",
      },
      {
        id: 3,
        title2: "Customers",
        path3: "/services/",
        name3: "Services",
      },
      {
        id: 4,
        path4: "/contact/",
        name4: "Contact",
      },
    ],
  }

  render() {
    return (
      <div>
        <div className="footer__links--container">
          <ul>
            <h3 className="footer--h3">TheCodeist</h3>
            {this.state.footer.map(item => {
              return (
                <li key={item.id}>
                  <Link to={item.path0}>{item.name0}</Link>
                  <Link to={item.path1}>{item.name1}</Link>
                  <Link to={item.path2}>{item.name2}</Link>
                </li>
              )
            })}
          </ul>

          <ul>
            <h3 className="footer--h3">Customers</h3>
            {this.state.footer.map(item => {
              return (
                <li key={item.id}>
                  <Link to={item.path3}>{item.name3}</Link>
                  <Link to={item.path4}>{item.name4}</Link>
                </li>
              )
            })}
          </ul>

          <ul>
            {this.state.footer.map(item => {
              return (
                <li key={item.id}>
                  <h3>{item.title2}</h3>
                  <Link to={item.path3}>{item.name3}</Link>
                  <Link to={item.path4}>{item.name4}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
