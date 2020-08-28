import React, { Component } from "react";

import Layout from "../components/layout"

class MoFWednesdayWorshipPage extends Component {

  componentDidMount() {
    window.location.replace("https://map.highfidelity.com/2EnLzUs798qmTxx6?mapJSON=https%3A%2F%2Fapi.jsonbin.io%2Fb%2F5f2195aec1edc4661760da97%2Flatest");
  }

  render() {
    return(
      <Layout>
        Transferring...
      </Layout>
    )
  }
}

export default MoFWednesdayWorshipPage
