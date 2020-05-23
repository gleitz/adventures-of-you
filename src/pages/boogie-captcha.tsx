import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { shuffle } from "../utils"

import "./emotional-captcha.css"

import highFive from "../images/high-five.jpg"
import monks from "../images/monks-of-funk.jpg"
import cuddlePuddle from "../images/cuddle-puddle.jpg"
import faceMask from "../images/face-mask.jpg"
import zoomMeeting from "../images/zoom-meeting.jpg"
import homeAlone from "../images/home-alone.jpg"
import netflix from "../images/netflix.jpg"
import hugging from "../images/hugging.jpg"
import coupleKissing from "../images/couple-kissing.jpg"

const ITEMS = [
  {
    image: highFive,
    isWanted: true,
    isActive: false,
  },
  {
    image: monks,
    isWanted: true,
    isActive: false,
  },
  {
    image: cuddlePuddle,
    isWanted: true,
    isActive: false,
  },
  {
    image: faceMask,
    isWanted: false,
    isActive: false,
  },
  {
    image: zoomMeeting,
    isWanted: false,
    isActive: false,
  },
  {
    image: homeAlone,
    isWanted: false,
    isActive: false,
  },
  {
    image: netflix,
    isWanted: false,
    isActive: false,
  },
  {
    image: hugging,
    isWanted: true,
    isActive: false,
  },
  {
    image: coupleKissing,
    isWanted: true,
    isActive: false,
  },
]

class ShelterCaptcha extends React.Component {
  constructor(props) {
    super(props)
    shuffle(ITEMS)
    this.state = {
      isClient: false,
      items: ITEMS,
    }
  }

  handleClick = e => {
    const index = e.target.getAttribute("data-key")
    this.setState(state => {
      const item = state.items[index]
      item.isActive = !item.isActive
      return state
    })
  }

  checkImages = () => {
    let valid = true
    this.state.items.forEach(item => {
      if (item.isActive !== item.isWanted) {
        location.reload()
        valid = false
      }
    })
    if (valid) {
      window.location = "/guestbook"
    }
  }

  componentDidMount() {
    this.setState({ isClient: true })
  }

  render() {
    return (
      <Layout key={this.state.isClient}>
        <SEO title="Boogie Captcha" />
        <div>There's a lot of ticket scalping bots out there trying to snap up passes to Shelter Island.</div>
        <div className="container">
          <div className="captcha-container">
            <div className="header">
              <p>
                Select all squares that contain something{" "}
                <strong>you miss</strong>.
              </p>
            </div>

            <div className="content">
              {this.state.items.map((item, i) => (
                <div
                  key={i}
                  className={
                    item.isActive ? "captcha-image active" : "captcha-image"
                  }
                >
                  <img
                    data-key={i}
                    src={item.image}
                    onClick={this.handleClick}
                  />
                </div>
              ))}{" "}
            </div>
          </div>

          <div className="footer">
            <a onClick={this.checkImages} href="#" className="button">
              Verify
            </a>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ShelterCaptcha
