import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { generateFlatSpot } from "../utils"

import SoulTrain from "../images/soul-train-square.gif"
import DogDance from "../images/dog-dance.gif"
import ShelterIsland from "../images/shelter-island.gif"
import Calendar from "../images/calendar.jpg"

const mailto = "mailto:hello@adventuresofyou.online?subject=A May Partay&body=Name:%0D%0A%0D%0ARSVP:%0D%0A%0D%0AFavorite Color:%0D%0A%0D%0AA Book You're Reading:%0D%0A%0D%0AComments/Questions/Affirmations:%0D%0A%0D%0A"

const IndexPage = () => (
  <Layout>
    <SEO title="A May Partay"
         description="Shelter Island, the Bay Area's most sparse dance party" />
    <div style={{ "textAlign": "right", marginBottom: '1rem' }}>
      “Dance, when you’re broken open.
      <br/>
      Dance, if you’ve torn the bandage off.
      <br/>
      Dance in the middle of the fighting.
      <br/>
      Dance in your blood.
      <br/>
      Dance when you’re perfectly free.”
      <br/>
      <i>– Rumi</i>
    </div>
    <h1 style={{ "textAlign": "center"}}>Save the Date for May 22, 3PM to Sunset!</h1>
    <a href={mailto}>{generateFlatSpot("RSVP", DogDance, ShelterIsland, "40%")}</a>
    <div className='padded'>
      <div>
      You're invited to <b>Shelter Island: A May Partay</b>, the Bay Area's most sparse dance party.
      </div>
      <div>
        Want to find the address? Then you better buy a ticket! The price of admission will be a donation in support of indigenous rights organizations, matched by May Partay Philanthropists.
      </div>
      <div>
        Game opens <b>May 22</b> at noon with outdoor dance partay from <b>3PM till Sunset</b>. The location will be within biking/driving distance of Oakland.
      </div>
      <div>
      </div>
      {/*
      <div style={{background: '#eee', padding: 30}}>
        Remember to:<br/><br/>
        <ul>
          <li>Bring masks.</li>
          <li>Dance 6 feet from others.</li>
          <li>Please respect these two rules. It allows us to feel safe and comfortable creating this space.</li>
        </ul>
      </div>
       */}
  </div>
  <div>
    Click the circle below to RSVP:
  </div>

  <br/>
      <a href={mailto}>{generateFlatSpot("🌙", SoulTrain, Calendar, "80%")}</a>
  </Layout>
)

export default IndexPage
