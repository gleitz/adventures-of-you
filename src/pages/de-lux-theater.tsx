import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { generateFlatSpot } from "../utils"

import DriveIn from "../images/drive-in.jpg"
// import DriveInKiss from "../images/drive-in-kiss.jpg"
import CountdownMovie from "../images/countdown-movie.gif"


const DeLuxPage = () => (
  <Layout>
    <SEO description="The Bay Area's most exclusive drive-in establishment" title="Shelter Island De Lux Theater" />
    <h1>Dim the Lights, Please!</h1>
    <div className='padded'>
      <div>
        Grab your buttery popcorn, Junior Mints, and Raisinets because we're headed to the <b>Shelter Island De Lux Theater</b>, the Bay Area's most exclusive drive-in establishment.
      </div>
      <div>
        The fun begins <b>TONITE</b>, with coming attractions starting at <b>8PM</b>.
      </div>
      <div>
        It doesn't matter if you drive a hotrod corvette or an old jalopy, just bring your main squeeze. You'll tune in with your car radio.
      </div>
      <div>
        Want to find the address? Want to know what's playing? Then you better buy a ticket! The price of admission, matched by the De Lux Theater, will be a donation in support of racial justice.
      </div>
    </div>
    <a href="/de-lux-captcha">{generateFlatSpot("TICKETS", CountdownMovie, DriveIn, "75%")}</a>
  </Layout>
)

export default DeLuxPage
