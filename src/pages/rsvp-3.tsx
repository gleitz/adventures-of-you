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
    window.location = "/bar"
  }

  render() {
    return(
      <Layout>
        <SEO title="Door Guy" />
        <h1>Door Guy</h1>
        <div class="padded">
          <div>
            Whatever, you look like you really need this. Got one more question.
          </div>
          <div className="question">
            <label>How does this measure up to your expectation of the end times?</label>
            <select name="birthday">
              <option value="" disabled="" selected="" hidden="">
              </option>
              <option name="birthday" value="shame">Unsatisfied</option>
              <option name="birthday" value="shame">Somewhat satisfied</option>
              <option name="birthday" value="shame">Pretty much what I expected</option>
              <option name="birthday" value="shame">Not enough zombies</option>
              <option name="birthday" value="shame">💩</option>
            </select>
          </div>
        </div>
        <div className="question">
          <button onClick={this.apply}>Continue</button>
        </div>
      </Layout>
    )
  }
}
export default IndexPage
