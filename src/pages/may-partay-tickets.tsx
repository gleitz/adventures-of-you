/*global jscolor */

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Smiley from "../images/soul-train-2-square.gif"
import GleitzGoggles from "../images/gleitz-goggles.jpg"

import { saveEmotion, generateFlatSpot } from "../utils"

class MayPartayPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    jscolor.installByClassName("jscolor")
  }

  checkForm = () => {
    const donationName = document.getElementsByName("donation-name")[0].value
    const donationAmount = document.getElementsByName("donation-amount")[0].value
    if (!donationName) {
      alert("Come on - even $5 helps!")
      return
    }

    const emotion = {
      donationName,
      donationAmount
    }

    saveEmotion(emotion).then(data => {
      window.location = "/may-partay-golden-ticket"
    })
  }

  render () {
    return (
      <Layout>
        <SEO title="May Partay Tickets" />
        <h1>Tickets</h1>
        <div className='padded'>
          <div style={{ float: "right", width: "50%" }}>
            {generateFlatSpot("", GleitzGoggles, Smiley, "100%")}
          </div>
          <div>
            While today's party is free, all donations to organizations and funds that support indigenous sovereignty and palestinian aid will be matched by May Partay Philanthropists. A few are listed below, but feel free to choose your own.
            </div>
            <div>
              <a target="_blank" href="https://sogoreate-landtrust.org/donate/"><h2>Sogorea Te’ Land Trust</h2></a>
              <p>Sogorea Te' Land Trust, based in the Bay Area, is an urban Indigenous women-led land trust that facilitates the return of Indigenous land to Indigenous people.</p>
            </div>
            <div>
              <a target="_blank" href="https://www.mecaforpeace.org/"><h2>Middle East Children’s Alliance</h2></a>
              <p>The Middle East Children’s Alliance (MECA) works to protect the rights and improve the lives of children in the Middle East through aid, empowerment and education. They are actively responding to the most urgent needs of children and families in Gaza.</p>
            </div>
            <div>
              <a target="_blank" href="https://www.sbfoundation.org/give-now/foothills-forever/"><h2>Save the San Marcos Foothills</h2></a>
              <p>$8.8 million is still needed by June 1st to acquire the San Marcos Foothills West Mesa in Santa Barbara. This will permanently preserve and protect the land for future generations.</p>
            </div>
            <div>
              <a target="_blank" href="https://shellmound.org/"><h2>Save West Berkeley Shellmound</h2></a>
              <p>Save West Berkeley Shellmound and Village Site is a coalition of Ohlone tribes, indigenous organizations, and individuals who advocate for historic preservation, indigenous sovereignty and environmental justice.</p>
            </div>
      </div>
      <textarea placeholder="Who did you you donate to?" className="worksheet-field" name="donation-name"></textarea>
      <textarea placeholder="How much did you give? (we'll match it)" className="worksheet-field" name="donation-amount"></textarea>
      <button onClick={this.checkForm}>I Donated!</button>
      <br/>
      <br/>
      </Layout>
    )
  }
}

export default MayPartayPage
