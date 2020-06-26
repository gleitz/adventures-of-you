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
      You're invited to <b>Pup's Pride Party: Shelter Island</b>, the Bay Area's most sparse dance party.
                        </div>
      <div>
        Want to find the address? Then you better buy a ticket! The price of admission, matched by Pup's Pride Party Philanthropists, will be a donation in support of LGBTQ+ rights.
      </div>
      <div>
        Game opens <b>Sunday, June 28</b> at noon PST, with socially distant dance party from <b>4PM</b> till sunset.
      </div>
      <div>
      </div>
      <div style={{background: '#eee', padding: 30}}>
        Remember to:<br/><br/>
        <ul>
          <li>Bring masks.</li>
          <li>Dance 6 feet from others.</li>
          <li>Please don't make anyone have to remind you to respect the group commitment that makes us feel comfortable creating this space.</li>
        </ul>
      </div>
  </div>
  <a href="#">{generateFlatSpot("Sunday...", DogDance, ShelterIsland, "75%")}</a>
  </Layout>
)

export default IndexPage
