/*global jscolor */

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Soul1 from "../images/soul-train-square.gif"
import Soul2 from "../images/soul-train-2-square.gif"

import { saveEmotion, generateFlatSpot } from "../utils"

class TakeItBackTicketsPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    jscolor.installByClassName("jscolor")
  }

  checkForm = () => {
    const donationName = document.getElementsByName("donation-name")[0].value
    const donationAmount = document.getElementsByName("donation-amount")[0].value
    const name = document.getElementsByName("name")[0].value
    const phoneNumber = document.getElementsByName("phone-number")[0].value
    const onYourMind = document.getElementsByName("on-your-mind")[0].value
    if (!donationName) {
      alert("Come on - even $5 helps!")
      return
    }

    const emotion = {
      donationName,
      donationAmount,
      name,
      phoneNumber,
      onYourMind
    }

    document.getElementById("submit-button").innerText = "Loading..."

    saveEmotion(emotion).then(data => {
      window.location = "/take-it-back-golden-ticket"
    })
  }

  render () {
    return (
      <Layout pageTitle="Take It Back!">
        <SEO title="Take It Back: Shelter Island Tickets" />
        <h1>Tickets</h1>
        <div className='padded'>
          <div style={{ float: "right", marginLeft: "0.5rem" }}>
            {generateFlatSpot("", Soul1, Soul2, "75%")}
          </div>
          <div>
            While today's party is free, your Take It Back hosts will be matching all donations to organizations and funds that support equity and justice. If you're looking for inspiration, below are a few groups in support of feminist and LGBTQ+ rights in Ukraine.
          </div>
          <div>
            <a target="_blank" href="https://sphere.org.ua/en/"><h2>Sphere</h2></a>
            <p>Working closely with the queer community and young people, Sphere is actively engaged in organizing in the region and across Ukraine. They are key players for Kharkiv Pride.<br/>(click green donate button in top right that says "&raquo; Підтримати нас")</p>
          </div>
          <div>
            <a target="_blank" href="https://www.insight-ukraine.org/en/join-donate/"><h2>Insight</h2></a>
            <p>Insight provides psychological and legal support to the LGBTQ+ community in Ukraine. Being vocal about anti-rights and religious fundamentalist organizing in Ukraine, Insignt advocates for human rights.</p>
          </div>
          <div>
            <a target="_blank" href="http://www.women.lviv.ua/en/pidtrymaty-2/"><h2>Women's Perspectives</h2></a>
            <p>Based in Lviv, Women's Perspectives is working on domestic violence issues - very important right now!</p>
          </div>
          <div>
            <a target="_blank" href="https://divchata.org"><h2>Divchata</h2></a>
            <p>Based in Kyiv, Divchata is working on safe access to abortions and conducting educational activities on the basics of women's physiology for adolescent girls.<br/>(click the red button in the middle of the page that says "Підтримати")</p>
          </div>
          <div>
            <a target="_blank" href="https://teenergizer.org/en/"><h2>Teenergizer</h2></a>
            <p>Teenergizer is a movement that has united teenagers, creating peer support spaces and services for young folks in Ukraine living with HIV. They work closely with activists in Central Asia.<br/>(click purple donate button in the top right)</p>
          </div>
        </div>
        <textarea placeholder="Who did you you donate to?" className="worksheet-field" name="donation-name"></textarea>
        <textarea placeholder="How much did you give? (we'll match it)" className="worksheet-field" name="donation-amount"></textarea>
        <textarea placeholder="What's on your mind?" className="worksheet-field" name="on-your-mind"></textarea>
        <textarea placeholder="(Optional) What is your name?" className="worksheet-field" name="name"></textarea>
        <textarea placeholder="(Optional) What is your phone number? (we'll txt you about the next event)" className="worksheet-field" name="phone-number"></textarea>
        <button id="submit-button" onClick={this.checkForm}>I Donated!</button>
        <br/>
        <br/>
      </Layout>
    )
  }
}

export default TakeItBackTicketsPage
