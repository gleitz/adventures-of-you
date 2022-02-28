import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { generateFlatSpot } from "../utils"

import LoveCompy from "../images/love-compy.gif"
import DogDance from "../images/dog-dance.gif"
import ShelterIsland from "../images/shelter-island.gif"

const TakeItBackPage = () => (
  <Layout pageTitle="Take It Back!">
    <SEO title="Take It Back!"
         description="Shelter Island, the Bay Area's most sparse dance party" />
    <div style={{ "textAlign": "right", marginBottom: '1rem' }}>
      “At long last we have arrived...
      <br />
      In the land of the lost, where we all belong.”
      <br />
    </div>
    <h1>Save the Date</h1>
    <div className='padded'>
      <div>
        You're invited to <b>Take It Back: Shelter Island</b>, the Bay Area's most sparse dance party.
      </div>
      <div>
        Want to find the address? Then you better buy a ticket! The price of admission, matched by your Take It Back hosts, will be a donation in support of feminist and LGBTQ+ grassroots rights organizations.
      </div>
      <div>
        Game opens <b>Sunday</b> at 10AM PST, with dance party from <b>noon till sunset</b>. The location will be in the East Bay.
      </div>
      <div>
      </div>
      <div style={{background: '#eee', padding: 30}}>
        Remember to:<br/><br/>
        <ul>
          <li>Bring drinks, snacks, and libations.</li>
          <li>Wear a jacket & bring a blanket &mdash; it might get a little chilly at sunset.</li>
          <li>Please respect the space and pack out your trash. It allows us to feel safe and comfortable creating this space.</li>
        </ul>
      </div>
  </div>
  <div>
    Come back this Sunday, and click the circle below to begin:
  </div>
  <br/>
  <a href="#">{generateFlatSpot("RETURN SUNDAY", DogDance, ShelterIsland, "75%")}</a>
  </Layout>
)

export default TakeItBackPage
