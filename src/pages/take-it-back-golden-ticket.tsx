import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FlatText from "../components/flattext"

import Gif from "../images/its-love.gif"
import Still from "../images/shelter-island.gif"

import AdventuresOfYouMp3 from "../audio/adventures-of-you.mp3"

import { generateFlatSpot, getEmotions, shuffle } from "../utils"

class TakeItBackGoldenTicketPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { emotions: [] }
  }

  fetchEmotions() {
    getEmotions().then(data => {
      this.setState(state => {
        shuffle(data.emotions)
        state.emotions = data.emotions
        return state
      })
    })
  }

  componentDidMount() {
    this.fetchEmotions()
  }

  render() {
    return (
      <Layout pageTitle="Take It Back!">
        <SEO title="Take It Back: Golden Ticket"/>
        <h1>Thanks for donating. Here's your ticket...</h1>
        <div>The secret coordinates are <a target="_blank" href="https://goo.gl/maps/53CtAAL9HQkqpWJf8">37°46'17.1"N 122°17'35.1"W</a> in Alameda.</div>
        <br />
        <div>We'll be there Sunday from <b>noon</b> till <b>sunset</b>.</div>
        <br />
        {/*
        <div>See you soon! Here's music for your drive:</div>
          <br/>
          <audio controls autoPlay style={{width: '100%'}}>
            <source src={AdventuresOfYouMp3} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <br/>
          <br/>
          */}
        <div style={{ float: "left", marginRight: "2rem" }}>
          {generateFlatSpot("", Gif, Still, "80%")}
        </div>
        <div>
          Party Notes:
        </div>
        <br />
          <div style={{background: '#eee', padding: 20}}>
            <ul>
              <li>We'll be dancing by the water, so bring whatever you need to be comfy and cozy (like picnic blankets, fluffy things for loungin', sunscreen, and your dancing shoes). Terrain is good ol' fashioned dirt :)</li>
<li>No restrooms super close but there's plenty of bushes! Gleitz also lives a couple blocks away if the situation gets serious.</li>
              <li>Bring a picnic to make it a party! Local favorite take-out spots are Abigail's Moroccan Cuisine, Neptune's / Cafe Jolie (until 2PM) or the Bonfare Market for drinks and snacks.</li>
              <li>The spot is kid-friendly and baby-friendly. We're vaxxed and it's outdoors.</li>
<li>We’ll provide the tunes and a little bit of bubbles. We can’t wait to see you!</li>
            </ul>
          </div>
                <br/>
                <div>
                  Oh, and here's some things on people's minds:
                  <ul style={{marginTop: '8px'}}>
                    {this.state.emotions &&
                     this.state.emotions.filter(emotion => !!emotion.onYourMind).slice(0, 6).map((emotion, i) => {
                       return <li key={i}>{emotion.onYourMind}</li>
                     })}
                  </ul>
                  </div>
        <br />
                {/*
        <div>
          Through the ups and downs, you've preserved. It took patience,
          courage, gratitude, honesty, candor and courage.
        </div>
        <br />
        <div>
          You’ve ended up at the most powerful of all emotions: love.
        </div>
          <br/>
        <div>And just because we love you &mdash; here’s a little song for you:</div>
        <audio controls autoPlay style={{width: '100%'}}>
          <source src={AdventuresOfYouMp3} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <br/>
        <br />
<h2>Here are
          some things folks like you love:</h2>
          <div style={{background: '#ccc', padding: 30}}>
          {this.state.emotions &&
            this.state.emotions.map((emotion, i) => {
              if (!emotion.questionLove) {
                return
              }
              return <div key={i}>{emotion.questionLove}<br/><br/></div>
            })}
          </div>
        <br />
          <hr/>
        <div>
          <h2>And here's what folks are laughing about.</h2>
        </div>
          <br/>
          <div style={{background: '#ccc', padding: 30}}>
          {this.state.emotions &&
            this.state.emotions.map((emotion, i) => {
              if (!emotion.questionLaugh) {
                return
              }
              return <div key={i}>{emotion.questionLaugh}<br/><br/></div>
            })}
          </div>
        <br />
        <div>
          Through the ups and downs, you've preserved. It took patience,
          courage, gratitude, honesty, candor and courage.
        </div>
        <br />
        <div>Thanks for playing, and remember &mdash; it all ends with Love. </div>
        <br />
        <div>
          (ps if you have thoughts, comments, concerns about the game &mdash; drop us
          a line! <a href="mailto:hello@adventuresofyou.online">hello@adventuresofyou.online</a>)
        </div>
        <br />
        */}
      </Layout>
    )
  }
}

export default TakeItBackGoldenTicketPage
