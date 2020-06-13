/*global jscolor */

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import DriveIn from "../images/drive-in.jpg"
import DriveInKiss from "../images/drive-in-kiss.jpg"

import { saveEmotion, generateFlatSpot } from "../utils"

class DeLuxPage extends React.Component {
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
      window.location = "/de-lux-library"
    })
  }

  render () {
    return (
      <Layout>
        <SEO title="De Lux Theater Tickets" />
        <h1>Tickets</h1>
        <div className='padded'>
          <div style={{ float: "right", marginLeft: "0.5rem" }}>
            {generateFlatSpot("", DriveInKiss, DriveIn, "75%")}
          </div>
          <div>
            While tonite's film is free, the Shelter Island De Lux Theater will be matching all donations to organizations and funds that support racial justice. A few are listed below, but feel free to choose your own.
          </div>
          <div>
            <a target="_blank" href="https://www.flipcause.com/secure/cause_pdetails/NzU4MzM="><h2>Loveland Foundation</h2></a>
            <p>The Loveland Foundation makes it possible for Black women and girls nationally to receive therapy support.</p>
          </div>
          <div>
            <a target="_blank" href="https://www.paypal.me/theokraproject"><h2>The Okra Project</h2></a>
            <p>The Okra Project is a collective that seeks to address the global crisis faced by Black Trans people by bringing home cooked, healthy, and culturally specific meals and resources to Black Trans People wherever we can reach them.</p>
          </div>
          <div>
            <a target="_blank" href="https://unicornriot.ninja/donate/"><h2>Unicorn Riot</h2></a>
            <p>Unicorn Riot is a decentralized, educational 501(c)(3) non-profit media organization of artists and journalists. Their work is dedicated to exposing root causes of dynamic social and environmental issues through amplifying stories and exploring sustainable alternatives in today’s globalized world.</p>
          </div>
          <div>
            <a target="_blank" href="https://secure.eifoundation.org/site/Donation2?df_id=6082&mfc_pref=T&6082.donation=form1&s_src=kyrcmain&utm_source=kyrcmain"><h2>Know Your Rights Camp</h2></a>
            <p>Founded by Colin Kaepernick, their mission is to advance the liberation and well-being of Black and Brown communities through education, self-empowerment, mass-mobilization and the creation of new systems that elevate the next generation of change leaders.</p>
          </div>
          <div>
            <a target="_blank" href="https://twitter.com/theheartradio/status/1268291284562620416"><h2>Give Directly to Black People In Need</h2></a>
            <p>Donations through non-profits are only one way to support the movement &mdash; you can also donate directly to folks in this thread.</p>
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

export default DeLuxPage
