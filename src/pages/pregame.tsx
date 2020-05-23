import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FlatText from "../components/flattext"

import { generateFlatSpot, saveEmotion } from "../utils"

import Gif from "../images/shelter-island.gif"
import Still from "../images/smiley.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Pregame" />
    <div className="padded">
      <div>
        You're one step closer to <b>the clurb</b>.
      </div>
      <div>
        But...what to wear? What to pack? What am I gonna do about my hair? We know it's been a minute since you saw people in meatspace – so we've got a pandemic party guide to help you prepare.
      </div>
      <div>
        Call this number:
      </div>
      <div>
        <FlatText text="669-281-0057" fontSize="50px" />
      </div>
      <div>
        {generateFlatSpot("", Gif, Still, "75%")}
      </div>
    </div>
  </Layout>
)

export default IndexPage
