/*global jscolor */

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import DriveIn from "../images/drive-in.jpg"
import DriveInKiss from "../images/drive-in-kiss.jpg"

import { saveEmotion, generateFlatSpot } from "../utils"

class PridePage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    jscolor.installByClassName("jscolor")
  }

  checkForm = () => {
    const donationName = document.getElementsByName("donation-name")[0].value
    const donationAmount = document.getElementsByName("donation-amount")[0].value
    if (!donationName) {
      alert("Come on - even $5 helps!")
      return
    }

    const emotion = {
      donationName,
      donationAmount
    }

    saveEmotion(emotion).then(data => {
      window.location = "/pride-2020-ticket"
    })
  }

  render () {
    return (
      <Layout>
        <SEO title="Pup's Pride Party Tickets" />
        <h1>Tickets</h1>
        <div className='padded'>
          <div style={{ float: "right", marginLeft: "0.5rem" }}>
            {generateFlatSpot("", DriveInKiss, DriveIn, "75%")}
          </div>
          <div>
            While today's socially distant dance party is free, Shelter Island will be matching all donations to organizations and funds that support LGBTQ+ rights. A few are listed below, but feel free to choose your own.
          </div>
          <div>
            <a target="_blank" href="https://www.paypal.me/blackqueercolumbus"><h2>Black Queer & Intersectional Collective</h2></a>
            <p>Black Queer & Intersectional Collective is a grassroots community organization that works towards the liberation of Black queer, trans, and intersex people from all walks of life through direct action, community organizing, education on our issues, and creating spaces to uplift our voices.</p>
          </div>
          <div>
            <a target="_blank" href="https://www.paypal.me/theokraproject"><h2>The Okra Project</h2></a>
            <p>The Okra Project is a collective that seeks to address the global crisis faced by Black Trans people by bringing home cooked, healthy, and culturally specific meals and resources to Black Trans People.</p>
          </div>
          <div>
            <a target="_blank" href="https://www.artsbusinesscollaborative.org/asp-products/for-the-gworls-rent-and-gender-affirming-surgery-fund/"><h2>For The Gworls</h2></a>
            <p>For the Gworls actively fights to reduce homelessness rates in the Black transgender community, as well as lower the risk for affirmative surgeries being done in ways that put the transgender community at greater health risks. Now more than ever, this work is especially important considering that many Black transgender people are being laid off in high numbers, which is only exacerbating the already terrible conditions that Black transgender people generally live in.</p>
          </div>
          <div>
            <a target="_blank" href="https://brownboiproject.nationbuilder.com/donate"><h2>The Brown Boi Project</h2></a>
            <p>The Brown Boi Project is a community of masculine of center womyn, men, two-spirit people, transmen, and our allies committed to changing the way that communities of color talk about gender.</p>
          </div>
          <div>
            <a target="_blank" href="https://youthbreakout.kindful.com/"><h2>BreakOUT!</h2></a>
            <p>BreakOUT! seeks to end the criminalization of lesbian, gay, bisexual, transgender, and questioning youth to build a safer and more just New Orleans.</p>
          </div>
          <div>
            <a target="_blank" href="https://www.glitsinc.org/donations"><h2>G.L.I.T.S.</h2></a>
            <p>Gays & Lesbians Living In a Transgender Society is a grassroots organization dedicated to supporting the LGBTQ+ community. The organization addresses the immediate need and crisis support for transgender sex workers, including community members from the NYC area, across the US, and globally.</p>
          </div>
        </div>
        <textarea placeholder="Who did you you donate to?" className="worksheet-field" name="donation-name"></textarea>
        <textarea placeholder="How much did you give? (we'll match it)" className="worksheet-field" name="donation-amount"></textarea>
        <button onClick={this.checkForm}>I Donated!</button>
        <br/>
        <br/>
      </Layout>
    )
  }
}

export default PridePage
