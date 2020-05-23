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
    window.location = "/rsvp-2"
  }

  render() {
    return(
      <Layout>
        <SEO title="Door Guy" />
        <h1>Door Guy</h1>
        <div className="question">
          Can I see some ID?<br/>
          <CanvasDraw
            imgSrc={FakeId}
            canvasHeight="514px"
            canvasWidth="900px"
            lazyRadius="0"
            brushRadius="4"
            ref={this.canvas}/>
        </div>
        <div className="question">
          <button onClick={this.apply}>Hand it over</button>
        </div>
      </Layout>
    )
  }
}
export default IndexPage
