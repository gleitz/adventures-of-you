import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { shuffle } from "../utils"

import "./emotional-captcha.css"

import highFive from "../images/high-five.jpg"
import rave from "../images/90s-rave.jpg"
import cuddlePuddle from "../images/cuddle-puddle.jpg"
import faceMask from "../images/face-mask.jpg"
import zoomMeeting from "../images/zoom-meeting.jpg"
import homeAlone from "../images/home-alone.jpg"
import netflix from "../images/netflix.jpg"
import hugging from "../images/hugging.jpg"
import ladyAndTramp from "../images/lady-and-tramp.jpg"

const ITEMS = [
  {
    image: highFive,
    isWanted: true,
    isActive: false,
  },
  {
    image: rave,
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
    image: ladyAndTramp,
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
      if (item.isActive !== item.isAnnoying) {
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
        <SEO title="Shelter Captcha" />
        <h1>What year is it?</h1>
        <div>Due to potential rips in the space-time continuum, no time travelers are allowed to enter Shelter Island.</div>
        <div className="container">
          <div className="captcha-container">
            <div className="header">
              <p>
                Select all squares that contain something{" "}
                <strong>wanted</strong>.
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
