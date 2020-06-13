import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./emotional-captcha.css"

import BLM1 from "../images/blm-1.jpg"
import BLM2 from "../images/blm-2.jpg"
import BLM3 from "../images/blm-3.jpg"
import BLM4 from "../images/blm-4.jpg"
import BLM5 from "../images/blm-5.jpg"
import BLM6 from "../images/blm-6.jpg"
import BLM7 from "../images/blm-7.jpg"
import BLM8 from "../images/blm-8.jpg"
import BLM9 from "../images/blm-9.jpg"

const ITEMS = [
  {
    image: BLM1,
    isWanted: true,
    isActive: false,
  },
  {
    image: BLM2,
    isWanted: true,
    isActive: false,
  },
  {
    image: BLM3,
    isWanted: true,
    isActive: false,
  },
  {
    image: BLM4,
    isWanted: true,
    isActive: false,
  },
  {
    image: BLM5,
    isWanted: true,
    isActive: false,
  },
  {
    image: BLM6,
    isWanted: true,
    isActive: false,
  },
  {
    image: BLM7,
    isWanted: true,
    isActive: false,
  },
  {
    image: BLM8,
    isWanted: true,
    isActive: false,
  },
  {
    image: BLM9,
    isWanted: true,
    isActive: false,
  },
]

class Captcha extends React.Component {
  constructor(props) {
    super(props)
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
      window.location = "/de-lux-tickets"
    }
  }

  componentDidMount() {
    this.setState({ isClient: true })
  }

  render() {
    return (
      <Layout key={this.state.isClient}>
        <SEO title="Boogie Captcha" />
        <div>Tonite's film, set on the hottest day of the year, is a culturally, historically, and aesthetically significant window into important topics that still ring true today. Before we begin, let's get something straight.</div>
        <div className="container">
          <div className="captcha-container">
            <div className="header">
              <p>
                Select all squares that contain something that{" "}
                <strong>matters</strong>.
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

export default Captcha
