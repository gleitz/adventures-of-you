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
            <SEO title="Vacation" />
            <div>
                <b>HI!</b> Excuse me, we need a hand planning an <b> exclusive
                getaway</b> for a <b>high-profile client</b>. For your
                trouble we'll try to book you an <b> extra spot</b>.
                It'll take just a minute, and it'll be <b> worth your
                while</b>.
            </div>
            <div>
                <br/>
                First, help me collect a bit about your qualifications:
            </div>
            <div className="question">
                <label for="education">Education </label>
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
                <label>2019 (Reported) Annual Salary</label>
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
                Please mark your evening availability <br/>
                <em>must be able to conference call</em>
            <CanvasDraw 
                imgSrc="https://i2.wp.com/cdn.shopify.com/s/files/1/1195/4692/files/2020_eCommerce__calendar-page-006.jpg?resize=1754%2C1240&ssl=1&utm_source=huratips.com&utm_medium=huratips.com&utm_campaign=article"
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
