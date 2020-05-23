import React, { Component } from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

import Layout from "../components/layout"
import SEO from "../components/seo"

import Gif from "../images/great-hu.gif"
import Still from "../images/secret-paths.jpg"
import FakeId from "../images/fake-id.jpg"

import "./opportunity.css"

class IndexPage extends Component {

  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  clear = () => {
    console.log(this.canvas);
    this.canvas.current.clear();
  }

  apply = () => {
    window.location = "/rsvp-3"
  }

  render() {
    return(
      <Layout>
        <SEO title="Door Guy" />
        <h1>Door Guy</h1>
        <div class="padded">
          <div>
            Huh, doesn't really look like you.
          </div>
          <div className="question">
            <label>You sure this is yours?</label>
            <select name="birthday">
              <option value="" disabled="" selected="" hidden="">
              </option>
              <option name="birthday" value="shame">Umm...</option>
              <option name="birthday" value="shame">What? What are you talking about??</option>
              <option name="birthday" value="shame">Yeah, it was a phase</option>
              <option name="birthday" value="shame">(nod convincingly)</option>
              <option name="birthday" value="shame">(slip him a $20)</option>
            </select>
          </div>
        </div>
        <div className="question">
          <button onClick={this.apply}>Try it</button>
        </div>
      </Layout>
    )
  }
}
export default IndexPage
