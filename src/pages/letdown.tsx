import React, { Component } from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

import Layout from "../components/layout"
import SEO from "../components/seo"

import Gif from "../images/great-hu.gif"
import Still from "../images/secret-paths.jpg"

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
            <SEO title="Aww shucks" />
            <div className="question">
                <b>Aww Shucks!</b> Our client, Mr. O'Day, has informed us
                that you're not coming, but thanks for the help!
                <br/>
                <br/> However, he asked for your <b>venmo</b> so he could
                compensate you for your time.
                <br/>
                Mr. O'Day believes in a <b>living wage!</b>
            </div> 
            <div className="question">
                <input name="mySingleLineTextField" placeholder="Venmo username" type="text" />
            </div>
        <div className="question">
        <button onClick={this.apply}>Get Paid</button>
        </div>

          </Layout>
         )
    }
}

export default IndexPage
