import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { generateFlatSpot } from "../utils"

import DriveIn from "../images/drive-in.jpg"
import DriveInKiss from "../images/drive-in-kiss.jpg"

const DeLuxPage = () => (
  <Layout>
    <SEO title="Shelter Island De Lux Theater" />
    <h1>Yum! Yum!</h1>
    <div className='padded'>
      <div>
        It's time for a tasty and refreshing snack.
      </div>
      <div>
        Grab your buttery popcorn, Junior Mints, and Raisinets because we're headed to the <b>Shelter Island De Lux Theater</b>, the Bay Area's most exclusive drive-in establishment.
      </div>
      <div>
        The fun begins <b>Saturday, June 13</b>, with coming attractions starting at 8PM.
      </div>
      <div>
        It doesn't matter if you drive a hotrod corvette or an old jalopy, just bring your main squeeze and a working radio.
      </div>
      <div>
        Want to find the address? Then you gotta play the game! The price of admission, matched by the De Lux Theater, will be a donation to an organization that supports racial justice.
      </div>
    </div>
    <a href="#">{generateFlatSpot("Saturday", DriveInKiss, DriveIn, "75%")}</a>
  </Layout>
)

export default DeLuxPage
