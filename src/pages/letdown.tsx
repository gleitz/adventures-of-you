import React, { Component } from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

import Layout from "../components/layout"
import SEO from "../components/seo"

import Gif from "../images/great-hu.gif"
import Still from "../images/secret-paths.jpg"

import { saveVenmo } from "../utils"

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
      const venmoUsername = document.getElementsByName("venmoUsername")[0].value
      saveVenmo(venmoUsername).then(data => {
        window.location = "/fear"
      })
    }

    render() {
        return(
        <Layout>
            <SEO title="Aww shucks" />
            <div className="question">
                <b>Aww Shucks!</b> Looks like you didn't quite make the cut for this once-in-a-lifetime gathering of the world'd most talented and accomplished people.<br/><br/>
              That's really too bad because while the wold's elite will be enjoying the finest food, wine, and horseback rides into the sunset, sounds like you'll just be home, following along on <a target="_blank" href="https://www.instagram.com/cashcats/">Instagram</a>.
                <br/>
                <br/> <b>However!</b> You do qualify for a pity loan.<br/>
                            </div>
            <div className="question">
                <input name="venmoUsername" placeholder="Venmo username" type="text" />
            </div>
        <div className="question">
        <button onClick={this.apply}>Grovel</button>
        </div>

          </Layout>
         )
    }
}

export default IndexPage
