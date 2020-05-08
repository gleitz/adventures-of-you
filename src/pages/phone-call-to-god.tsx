import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FlatText from "../components/flattext"

import Gif from "../images/great-hu.gif"
import Still from "../images/secret-paths.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Phone Call to God" />
    <div>
      You have selected: <b>SHAME</b>.
    </div>
    <br />
    <div>
      Please call the Great Hu's Shame hotline. Operators are standing by.
    </div>
    <br />
    <div>
      <FlatText text="617-900-5450" fontSize="40px"/>
    </div>
  </Layout>
)

export default IndexPage
