import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { generateFlatSpot } from "../utils"

import LoveCompy from "../images/love-compy.gif"
import DogDance from "../images/dog-dance.gif"
import SmileFace from "../images/smile-face.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Pup's Pod Party" />
    <div style={{ "textAlign": "right" }}>
      “There was a star danced,
      <br />
      and under that was I born.”
      <br />
    </div>
    <h1>Save the Date</h1>
    <div className='padded'>
      <div>
      You're invited to <b>Pup's Pod Party: Shelter Island</b>, the Bay Area's most sparse dance party.
                        </div>
      <div>
        Doors open <b>Saturday, May 23</b> at noon, with birthday festivities running through the evening.
      </div>
      <div>
        While cyberspace attendance is possible from anywhere in the known universe, there will be <i>real, in-person</i> experiences to explore. Bring your pod, but be sure to pack a mask and hand sanitizer.
      </div>
      <div>
      </div>
    </div>
    <a href="#">{generateFlatSpot("", DogDance, SmileFace)}</a>
  </Layout>
)

export default IndexPage
