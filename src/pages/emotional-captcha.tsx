// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./emotional-captcha.css"

import flowers from "../images/flowers.jpg"
import pizza from "../images/pizza.jpg"
import iceCream from "../images/ice-cream.jpg"
import dishes from "../images/dishes.jpg"
import socks from "../images/socks.jpg"
import kitten from "../images/kitten.jpg"
import lowBat from "../images/low-bat.jpg"
import hugging from "../images/hugging.jpg"
import tp from "../images/tp.jpg"

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  var j, x, i
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return a
}

class EmotionalCaptcha extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
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
          image: socks,
          isAnnoying: false,
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
      ],
    }
    shuffle(this.state.items)
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
        <div class="container">
          <div class="captcha-container">
            <div class="header">
              <p>
                Select all squares that <strong>annoy you</strong>.
              </p>
              <input type="hidden" value="selfiesticks" name="category" />
            </div>

            <div class="content">
              {this.state.items.map((item, i) => (
                <div
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

          <div class="footer">
            <a onClick={this.checkImages} href="#" class="button">
              Verify
            </a>
          </div>
        </div>
      </Layout>
    )
  }
}

export default EmotionalCaptcha
