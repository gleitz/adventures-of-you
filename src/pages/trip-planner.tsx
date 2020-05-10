import React, { Component } from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

import Layout from "../components/layout"
import SEO from "../components/seo"

import Face from "../images/face.jpg"

import Gif from "../images/great-hu.gif"
import Still from "../images/secret-paths.jpg"

import map from "../images/map.jpg"

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
        window.location = "/letdown"
    }

    render() {
        return(
        <Layout>
            <SEO title="Apply Within" />
            <div>
              <b>Well, you're certainly not the most qualified.</b>
                <br/>But let's move on.
            </div>

            <div className="question">
                Draw a portrait of yourself (Note: many of our applicants are blessed with extraordinary good looks):
            <CanvasDraw
                imgSrc={Face}
                canvasHeight="600px"
                canvasWidth="900px"
                brushRadius="4"
                lazyRadius="0"
                ref={this.faceCanvas}/>
            </div>
            <div className="question">
              Our exclusive club requires exquisite travel taste. Mark all places you have not been:
            <CanvasDraw
                imgSrc={map}
                brushColor="rgba(255,12,60,1)"
                canvasHeight="600px"
                canvasWidth="900px"
                brushRadius="2"
                lazyRadius="0"
                ref={this.canvasRoute}/>
            </div>

            <div className="question">
          <label htmlFor="question-2">
Name every famous person you know.<br/>
              <em>Why are you not on the list?</em><br/>
          </label>
          <textarea
            className="worksheet-field"
            name="question-meal"
          ></textarea>
        </div>
        <div className="question">
        <button onClick={this.apply}>Submit</button>
        </div>

          </Layout>
         )
    }
}

export default IndexPage
