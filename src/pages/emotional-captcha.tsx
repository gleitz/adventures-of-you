// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { shuffle } from "../utils"

import "./emotional-captcha.css"

import flowers from "../images/flowers.jpg"
import pizza from "../images/pizza.jpg"
import iceCream from "../images/ice-cream.jpg"
import dishes from "../images/dishes.jpg"
import dbs from "../images/dbs.jpg"
import kitten from "../images/kitten.jpg"
import lowBat from "../images/low-bat.jpg"
import hugging from "../images/hugging.jpg"
import tp from "../images/tp.jpg"

const ITEMS = [
  {
    image: pizza,
    isAnnoying: false,
    isActive: false,
  },
  {
    image: flowers,
    isAnnoying: false,
    isActive: false,
  },
  {
    image: iceCream,
    isAnnoying: true,
    isActive: false,
  },
  {
    image: dishes,
    isAnnoying: true,
    isActive: false,
  },
  {
    image: dbs,
    isAnnoying: true,
    isActive: false,
  },
  {
    image: kitten,
    isAnnoying: false,
    isActive: false,
  },
  {
    image: lowBat,
    isAnnoying: true,
    isActive: false,
  },
  {
    image: hugging,
    isAnnoying: false,
    isActive: false,
  },
  {
    image: tp,
    isAnnoying: true,
    isActive: false,
  },
]

class EmotionalCaptcha extends React.Component {
  constructor(props) {
    super(props)
    shuffle(ITEMS)
    this.state = {
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
      window.location = "/twenty-questions"
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Emotional Captcha" />
        <h1>Emotional Captcha</h1>
        <div>To enter the experience we need to check your humanity.</div>
        <div className="container">
          <div className="captcha-container">
            <div className="header">
              <p>
                Select all squares that contain something{" "}
                <strong>annoying</strong>.
              </p>
              <input type="hidden" value="selfiesticks" name="category" />
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

export default EmotionalCaptcha
