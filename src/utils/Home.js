import React from "react"

const HomeHeader = ({ children }) => {
  return <div className="cover">{children}</div>
}

const Services = ({ children }) => {
  return <div className="services--bg">{children}</div>
}

const Works = ({ children }) => {
  return <div className="works">{children}</div>
}

const Contact = ({ children }) => {
  return <div className="contact--bg">{children}</div>
}

export { HomeHeader, Services, Works, Contact }
