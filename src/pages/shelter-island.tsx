import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { generateFlatSpot } from "../utils"

import Gif from "../images/shelter-island.gif"
import Still from "../images/landscape-8bit.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/*
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
      The Great Hu, humanoid representative of all AI and leader on Earth, has
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
    <div>
    (if you have thoughts, comments, or questions about the game &mdash; drop us
    a line! <a href="mailto:hello@adventuresofyou.online">hello@adventuresofyou.online</a>)
    </div>
    <br />
    */}
    <div className='padded'>
      <div>
        The year is 2020. All places of recreation have been closed. A virus lurks in secret, turning friends and family members into suspicious vectors. Friendship and celebrations have been reduced to awkward zoom calls.
      </div>
      <div>
        <b>BUT</b> &mdash; another world is possible.
      </div>
      <div>
        Through the powers of technology, we've recreated 2020's hottest (and only) club: <b>Shelter Island</b>.
      </div>
      <div>
        A secret speakeasy, out in the open, but hidden from plain sight. Want in? You've got to complete a couple challenges...
      </div>
      <div>
        Doors open today at noon...
      </div>
    </div>

    <a href="#">{generateFlatSpot("SEE YOU SOON", Gif, Still, "75%")}</a>
  </Layout>
)

export default IndexPage
