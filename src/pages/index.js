import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { generateFlatSpot } from "../utils"

import Gif from "../images/great-hu.gif"
import Still from "../images/secret-paths.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ "textAlign": "right" }}>
      “Though we scorn the thought that fickle Fate
      <br />
      Has Destiny in her hand,
      <br />
      We all pay tribute at her gate
      <br />
      And bow low at her command.”
      <br />
    </div>
    <br />
    <div>
      The year is 3020, and the robot overlords have taken over. Every element
      of life is now conducted entirely by screens — work, concerts, and dating
      are now confined to pixels alone. There is no domain untouched by social
      digitaling. Big Tekka has trapped us apart, knowing that humanity’s true
      powers are unleashed only when humans huddle together.
    </div>
    <br />
    <div>
      Hu, the humanoid representative of all AI and leader on Earth, has
      re-appeared, but must gather complete understanding of the core human
      emotions of Love, Courage, Joy, Gratitude, Jealousy, Fear, Shame, and
      Pride.
    </div>
    <br />
    <div>
      You, dear reader, must summon all the power and wisdom of your precious
      emotions to snatch triumph from the jaws of digital defeat. You must
      choose, but choose wisely.
    </div>
    <br />
    <a href="/#">{generateFlatSpot("ENTER", Gif, Still)}</a>
  </Layout>
)

export default IndexPage
