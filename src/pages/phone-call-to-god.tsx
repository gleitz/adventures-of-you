import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FlatText from "../components/flattext"

const IndexPage = () => (
  <Layout>
    <SEO title="Phone Call to God" />
    <div>
      Your emotions have been submitted.
      <br />
      <br />
      You have selected: <b>SHAME</b>.
    </div>
    <br />
    <div>For further processing, call the Department of Shame.</div>
    <br />
    <div>
      <FlatText text="617-900-5450" fontSize="50px" />
    </div>
    <br />
    <div>Operators are standing by. Please have your shame handy.</div>
  </Layout>
)

export default IndexPage
