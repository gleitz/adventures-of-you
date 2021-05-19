import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { shuffle } from "../utils"

import "./emotional-captcha.css"

import GLEITZ1 from "../images/gleitz-no-1.png"
import GLEITZ2 from "../images/gleitz-no-2.png"
import GLEITZ3 from "../images/gleitz-no-3.png"
import GLEITZ4 from "../images/gleitz-no-4.png"
import GLEITZ5 from "../images/gleitz-yes-1.png"
import GLEITZ6 from "../images/gleitz-yes-2.png"
import GLEITZ7 from "../images/gleitz-yes-3.png"
import GLEITZ8 from "../images/gleitz-yes-4.png"
import GLEITZ9 from "../images/gleitz-yes-5.png"

const ITEMS = [
  {
    image: GLEITZ1,
    isWanted: false,
    isActive: false,
  },
  {
    image: GLEITZ2,
    isWanted: false,
    isActive: false,
  },
  {
    image: GLEITZ3,
    isWanted: false,
    isActive: false,
  },
  {
    image: GLEITZ4,
    isWanted: false,
    isActive: false,
  },
  {
    image: GLEITZ5,
    isWanted: true,
    isActive: false,
  },
  {
    image: GLEITZ6,
    isWanted: true,
    isActive: false,
  },
  {
    image: GLEITZ7,
    isWanted: true,
    isActive: false,
  },
  {
    image: GLEITZ8,
    isWanted: true,
    isActive: false,
  },
  {
    image: GLEITZ9,
    isWanted: true,
    isActive: false,
  },
]

class Captcha extends React.Component {
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
      // window.location = "/poco-smalltalk-generator"
      window.location = "/may-partay-tickets"
    }
  }

  componentDidMount() {
    this.setState({ isClient: true })
  }

  render() {
    return (
      <Layout key={this.state.isClient}>
        <SEO title="May Partay Captcha" />
        <div className="container">
          <div className="captcha-container">
            <div className="header">
              <p>
                Select all squares that contain <strong>gleitz</strong>.
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
