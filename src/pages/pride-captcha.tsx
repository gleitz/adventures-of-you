import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { shuffle } from "../utils"

import "./emotional-captcha.css"

import PRIDE1 from "../images/pride-1.png"
import PRIDE2 from "../images/pride-2.png"
import PRIDE3 from "../images/pride-3.png"
import PRIDE4 from "../images/pride-4.png"
import PRIDE5 from "../images/pride-5.png"
import PRIDE6 from "../images/pride-6.png"
import PRIDE7 from "../images/pride-7.png"
import PRIDE8 from "../images/pride-8.png"
import PRIDE9 from "../images/pride-9.png"

const ITEMS = [
  {
    image: PRIDE1,
    isWanted: false,
    isActive: false,
  },
  {
    image: PRIDE2,
    isWanted: false,
    isActive: false,
  },
  {
    image: PRIDE3,
    isWanted: false,
    isActive: false,
  },
  {
    image: PRIDE4,
    isWanted: false,
    isActive: false,
  },
  {
    image: PRIDE5,
    isWanted: false,
    isActive: false,
  },
  {
    image: PRIDE6,
    isWanted: false,
    isActive: false,
  },
  {
    image: PRIDE7,
    isWanted: false,
    isActive: false,
  },
  {
    image: PRIDE8,
    isWanted: false,
    isActive: false,
  },
  {
    image: PRIDE9,
    isWanted: false,
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
      window.location = "/pride-tickets"
    }
  }

  componentDidMount() {
    this.setState({ isClient: true })
  }

  render() {
    return (
      <Layout key={this.state.isClient}>
        <SEO title="Pup's Pride Party Captcha" />
        <div className="container">
          <div className="captcha-container">
            <div className="header">
              <p>
                Select all squares that contain <strong>items</strong> present at the first Gay Pride, also known as The Stonewall Riots on June 28, 1969.
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
