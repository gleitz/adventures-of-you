import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { generateFlatSpot } from "../utils"

import LoveCompy from "../images/love-compy.gif"
import DogDance from "../images/dog-dance.gif"
import ShelterIsland from "../images/shelter-island.gif"

const IndexPage = () => (
  <Layout>
    <SEO title="Pup's Pod Party" />
    <div style={{ "textAlign": "right", marginBottom: '1rem' }}>
      “There was a star danced,
      <br />
      and under that was I born.”
      <br />
    </div>
    <h1>Save the Date!</h1>
    <div className='padded'>
      <div>
      You're invited to <b>Pup's Pod Party: Shelter Island</b>, the Bay Area's most sparse dance party.
                        </div>
      <div>
        Want to find the address? Then you gotta play the game!
      </div>
      <div>
        Game opens <b>Sunday, June 28</b> at noon PST, with socially distant dance party from <b>2PM</b> till sunset.
      </div>
      <div>
      </div>
    </div>
    <a href="#">{generateFlatSpot("Sunday", DogDance, ShelterIsland, "75%")}</a>
  </Layout>
)

export default IndexPage
