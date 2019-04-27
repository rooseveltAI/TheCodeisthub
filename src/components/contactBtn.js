import React from "react"
import ContactBtn from "./contactbutton.module.css"

export default ({ children }) => (
  <button className={ContactBtn.ContactButton}>{children}</button>
)
