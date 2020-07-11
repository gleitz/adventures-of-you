import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { generateFlatSpot, saveBook } from "../utils"

// import DriveIn from "../images/drive-in.jpg"
// import DriveInKiss from "../images/drive-in-kiss.jpg"

class AutocompletePage extends React.Component {
  constructor(props) {
    super(props)
  }

  checkForm = () => {
    return
    // const bookSelection = document.getElementsByName("book-selection")[0].value
    // if (!bookSelection) {
    //   alert("Choose something from the library!")
    //   return
    // }

    // const book = {
    //   bookSelection
    // }

    // saveBook(book).then(data => {
    //   window.location = "/de-lux-location"
    // })
  }

  render () {
    return (
      <Layout>
        <SEO title="Dixie Flatline Reading Library" />
        <h1>Dixie Flatline Reading Library</h1>
        <div className='padded'>
          <div>
            The MGMT invites you to browse our digital synapse reading library, a bespoke collection of Read-Only Memories (ROM).
          </div>
          <div className="question">
            <label htmlFor="player">Choose your player:</label>
            <select name="player">
              <option value="" disabled="" selected="" hidden="">
                ...
              </option>
              <option name="player" value="gleitz">
                🦀 GLEITZ
              </option>
              <option name="player" value="vivek">
                🦑 VIVEK
              </option>
              <option name="player" value="travis">
                🌲 TRAVIS
              </option>
            </select>
          </div>
          <div>
            <textarea placeholder="" className="worksheet-field" name="book-selection"></textarea>
          </div>
        </div>
        <a onClick={this.checkForm}>{generateFlatSpot("SHOWTIME", DriveInKiss, DriveIn, "75%")}</a>
      </Layout>
    )
  }
}

export default AutocompletePage
