import React, { Component } from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

import Layout from "../components/layout"
import SEO from "../components/seo"

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
        window.location = "/trip-planner"
    }

    render() {
        return(
        <Layout>
            <SEO title="Apply Within" />
            <div>
                <b>Congratulations</b> we can definitely <b>use you! </b>
                <br/>Let's get to it and get you on your way!  
            </div> 

            <div className="question">
                How should this vaction make our client (and maybe you!) feel:
            <CanvasDraw 
                imgSrc="https://lh3.googleusercontent.com/proxy/_4nVD0Ftng6JtOt3xrTsTLiYsKQ62JDsyDSBbFFSomZc14rswb3bcQGppPpZ9x-XLBtrilHeDWcLSvUJ-6Q2p1pMlUBZkPo"
                canvasHeight="600px"
                canvasWidth="900px"
                brushRadius="4"
                lazyRadius="0"
                ref={this.faceCanvas}/>
            </div>
            <div className="question">
                Choose your route:
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
              Describe the first night's dinner<br/>
              <em>Remember, treat yourself too!</em><br/>
              <em>(Also, our client has a peanut allergy.)</em>
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
