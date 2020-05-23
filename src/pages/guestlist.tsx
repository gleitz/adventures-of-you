import React, { Component } from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

import Layout from "../components/layout"
import SEO from "../components/seo"

import Gif from "../images/shelter-island.gif"
import Still from "../images/smiley.jpg"

import { generateFlatSpot, getEmotions, shuffle } from "../utils"

import "./fear.css"

class FearPage extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  fetchEmotions() {
    getEmotions().then(data => {
      this.setState(state => {
        state.phoneNumbers = data.phone_numbers
        shuffle(state.phoneNumbers)
        return state
      })
    })
  }

  componentDidMount() {
    this.fetchEmotions()
  }

  render() {
    return(
      <Layout>
        <SEO title="Guestlist" />
        <h1>Guestlist</h1>
        <div class="padded">
          <div>
            There’s just one final challenge standing between you and the end of the game. For this one, you must conquer your fears.
          </div>
          <div>
            The enemy of fear is honesty. The things we’re most afraid of talking about, are the ones that hold us back. So tonight, it’s time to REVEAL YOUR FEAR.
          </div>
          <div>
            STEP 1: Below is the number of a stranger. In a few short words, text them one of your fears. Reveal your fear in a respectful and honest way. Remember, it is only the fears we can not speak of that hold us back.
          </div>
          <div>
            {this.state.phoneNumbers && this.state.phoneNumbers.length > 0 && this.state.phoneNumbers[0]}
          </div>
          <div>
            STEP 2: Next, screenshot your message to them and submit to <a href="mailto:fear@adventuresofyou.online">fear@adventuresofyou.online</a>. We will respond with the final step! Be brave. Be kind. Be true.
          </div>
          <div>
            {generateFlatSpot("", Gif, Still, "75%")}
          </div>
        </div>
      </Layout>
    )
  }
}

export default FearPage
