import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { generateFlatSpot } from "../utils"

import TypeIt from "typeit-react"

import PlayaSign from "../images/playa-sign-square.jpg"
import MonksLogo from "../images/monks-logo.png"

const strings = [
  "THE DANCE COMMANDMENTS",
  "THOU SHALT ADORN THYSELF - with your FAVORITE burner outfit",
  "THOU SHALT NOT FEEDBACK - mute yourself on the dancefloor, use headphones if you're chatting away from the dancefloor",
  "THOU SHALT EXPLORE - click the paintings for a suprise",
  "THOU SHALT GET DOWN TO THE FUNK",
  "CLICK THE MONK TO CONTINUE",
]

class MoFWednesdayWorshipPage extends Component {
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <SEO description="with the Monks of Funk" title="Wednesday Worship" />
        <div>
          <a href="https://map.highfidelity.com/2EnLzUs798qmTxx6?mapJSON=https%3A%2F%2Fapi.jsonbin.io%2Fb%2F5f2195aec1edc4661760da97%2Flatest">
            {generateFlatSpot("", PlayaSign, MonksLogo, "60%")}
          </a>
        </div>
        <div className="padded" style={{ textAlign: "center" }}>
          <div>
            <h1>
              <TypeIt
                options={{
                  waitUntilVisible: true,
                  speed: 70,
                  deleteSpeed: 35,
                  nextStringDelay: 5000,
                  strings,
                  lifeLike: true,
                  breakLines: false,
                }}
              ></TypeIt>
            </h1>
          </div>
        </div>
      </Layout>
    )
  }
}

export default MoFWednesdayWorshipPage
