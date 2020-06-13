import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FlatText from "../components/flattext"

import Gif from "../images/its-love.gif"
import Still from "../images/shelter-island.gif"

import AdventuresOfYouMp3 from "../audio/adventures-of-you.mp3"

import { generateFlatSpot, getEmotions, shuffle } from "../utils"

class YouAreLovePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { books: [] }
  }

  fetchEmotions() {
    getEmotions().then(data => {
      this.setState(state => {
        shuffle(data.books)
        state.books = data.books
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
        <SEO title="De Lux Theater Location" />
        <h1>Showtime!</h1>
        <div className="padded">
          <div>
            Thanks for your support. Remember, this is a marathon, not a sprint, and the movement goes far beyond this moment.
            </div>
            <div>Tonite's film is <b>Do The Right Thing</b>, Spike Lee's poignant and relevant classic from 1989.
          </div>
          <div>
            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/yVAD4fYRcvA?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div>The secret coordinates for the show are <a target="_blank" href="https://goo.gl/maps/53CtAAL9HQkqpWJf8">37°46'17.1"N 122°17'35.1"W</a>.</div>
          <div>Previews begin at 8PM, with the Feature Presentation starting at 9PM. The movie is 2 hours long.</div>
            <div style={{ float: "left", marginRight: "2rem" }}>
              {generateFlatSpot("", Gif, Still, "75%")}
            </div>
            <div>
              A few notes:
            </div>
          <div style={{background: '#eee', padding: 30, borderRadius: 10}}>
              <ul>
                <li>When you're about a mile away, tune into 87.9, Shelter Island Radio.</li>
                  <li>Bring your own treats and drinks, and blankets to cuddle up in.</li>
                  <li>Please bring a mask. If you decide to get our of your car to mingle, please wear the mask!</li>
                  <li>There are no bathrooms on site, but there are bushes.</li>
                  </ul>
                  </div>
                  <div>
                    <h2>Here are some of the books you're reading:</h2>
                  </div>
                  <div>
                    {this.state.books &&
                     this.state.books.map((book, i) => {
                       if (!book) {
                         return
                       }
                       return <div style={{background: '#eee', marginBottom: 30, padding: 30, borderRadius: 10}} key={i}>{book.bookSelection}</div>
                     })}
                  </div>
                <div>See you soon! Here's some music for your drive:</div>
                <audio controls style={{width: '100%'}}>
                  <source src={AdventuresOfYouMp3} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </Layout>
    )
  }
}

export default YouAreLovePage
