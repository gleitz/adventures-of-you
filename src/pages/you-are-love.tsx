import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FlatText from "../components/flattext"

import Gif from "../images/its-love.gif"
import Still from "../images/love-compy.gif"

import AdventuresOfYouMp3 from "../audio/adventures-of-you.mp3"

import { generateFlatSpot, getEmotions, shuffle } from "../utils"

class YouAreLovePage extends React.Component {
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
      <Layout>
        <SEO title="You are Love" />
        <h1>You made it!</h1>
        <div>Congratulations &mdash; you've won!</div>
        <br />
        <div style={{ float: "left", marginRight: "60px" }}>
          {generateFlatSpot("", Gif, Still, "350px")}
        </div>
        <br />
        <div>
          And what an emotional rollercoaster it has been. Here are just a few
          of the emotions folks have been feeling this week:
        </div>
        <br />
          <div style={{color: '#ff0000'}}>
          {this.state.emotions &&
            this.state.emotions.slice(0, 6).map((emotion, i) => {
              if (!emotion) {
                return
              }
              return <div key={i}>{emotion.emotion1}</div>
            })}
        </div>
        <br />
        <div>
          Through the ups and downs, you've preserved. It took patience,
          courage, gratitude, honesty, candor and courage.
        </div>
        <br />
        <div>
          You’ve ended up at the most powerful of all emotions: love. Here are
          some things folks like you love:
        </div>
          <br/>
          <div style={{color: '#ff0000'}}>
          {this.state.emotions &&
            this.state.emotions.map((emotion, i) => {
              if (!emotion.questionLove) {
                return
              }
              return <div key={i}>{emotion.questionLove}<br/><br/></div>
            })}
          </div>
        <br />
        <div>
          And here's what folks are laughing about.
        </div>
          <br/>
          <div style={{color: '#ff0000'}}>
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
        <div>And just because we love you &mdash; here’s a little song for you:</div>
        <audio controls autoPlay>
          <source src={AdventuresOfYouMp3} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <br/>
        <br />
        <div>Thanks for playing, and remember &mdash; it all ends with Love. </div>
        <br />
        <div>
          (ps if you have thoughts, comments, concerns about the game &mdash; drop us
          a line! <a href="mailto:hello@adventuresofyou.online">hello@adventuresofyou.online</a>)
        </div>
        <br />
      </Layout>
    )
  }
}

export default YouAreLovePage
