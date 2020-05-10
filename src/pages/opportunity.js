import React, { Component } from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

import Layout from "../components/layout"
import SEO from "../components/seo"

import Gif from "../images/great-hu.gif"
import Still from "../images/secret-paths.jpg"
import Calendar from "../images/calendar.png"

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
            <SEO title="Vacation" />
          <h1>Mr. Envy's Jealousy Agency</h1>
            <div>
                <b>Human!</b> You have been chosen to apply for a once-in-a-lifetime, exclusive international gathering of the world's most <b> celebrated
                minds</b>. It will take just a minute but it will <b>last a lifetime</b>.
            </div>
            <div>
                <br/>
                First, help us collect a bit about your qualifications:
            </div>
            <div className="question">
                <label for="education"><b>Education</b></label>
                <label><em>Please select highest level attained</em></label>
              <select name="education">
                <option value="" disabled="" selected="" hidden="">
                </option>
                <option name="education" value="shame">Drug User</option>
                <option name="education" value="shame">Masters</option>
                <option name="education" value="shame">Ph.D</option>
                <option name="education" value="shame">Postdoc</option>
              </select>
            </div>
            <div className="question">
                <label><b>2019 (Reported) Annual Salary</b></label>
                <label><em>Just a general bracket, please</em></label>
              <select name="salary">
                <option value="" disabled="" selected="" hidden="">
                </option>
                <option name="salary" value="shame">Charity / Volunteer</option>
                <option name="salary" value="shame">$300-800k</option>
                <option name="salary" value="shame">$800k-10MM</option>
                <option name="salary" value="shame">$10MM-100MM</option>
                <option name="salary" value="shame">$100MM+</option>
              </select>
            </div>

            <div className="question">
                <b>Please mark your availability</b><br/>
                <em>must be able to conference call</em>
            <CanvasDraw 
                imgSrc={Calendar}
                canvasHeight="600px"
                canvasWidth="900px"
                lazyRadius="0"
                ref={this.canvas}/>
            </div>
            <div className="question">
            <button onClick={this.apply}>Apply</button>
            </div>
          </Layout>
         )
    }
}
export default IndexPage
