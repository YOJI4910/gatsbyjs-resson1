import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import "./layout.css"

// fontawesomeのcssを先読みする
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

export default ({ children }) => (
  <>
    <Header />

    {children}

    <Footer />
  </>
)
