import React, { Component } from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

import Layout from "../components/layout"
import SEO from "../components/seo"

import Gif from "../images/shelter-island.gif"
import Still from "../images/smiley.jpg"
import DrinkTicket from "../images/drink-ticket.jpg"

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
        <SEO title="Drink Ticket" />
        <img src={DrinkTicket} />
        <div class="padded">
          <div>
            Alright, you made it past the door guy. Time to for some refreshment.
          </div>
          <div>
            Shelter Island is BYOB, but everyone needs a little recommendation from time to time. I mean how long can you really drink rosé right from the bottle?
          </div>
          <div>
            STEP 1: Below is the number of another Shelter Island guest. Text them one of your favorite drink recipes.
          </div>
          <div>
            {this.state.phoneNumbers && this.state.phoneNumbers.length > 0 && this.state.phoneNumbers[0]}
          </div>
          <div>
            STEP 2: Screenshot your message to them and send it to <a href="mailto:location@adventuresofyou.online">location@adventuresofyou.online</a>. We will respond with the final location!
          </div>
          <br/>
          <div>
            {generateFlatSpot("", Gif, Still, "75%")}
          </div>
        </div>
      </Layout>
    )
  }
}

export default FearPage
