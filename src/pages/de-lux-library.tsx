import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { generateFlatSpot, saveBook } from "../utils"

import DriveIn from "../images/drive-in.jpg"
import DriveInKiss from "../images/drive-in-kiss.jpg"

class DeLuxPage extends React.Component {
  constructor(props) {
    super(props)
  }

  checkForm = () => {
    const bookSelection = document.getElementsByName("book-selection")[0].value
    if (!bookSelection) {
      alert("Choose something from the library!")
      return
    }

    const book = {
      bookSelection
    }

    saveBook(book).then(data => {
      window.location = "/de-lux-location"
    })
  }

  render () {
    return (
      <Layout>
        <SEO title="Shelter Island De Lux Library" />
        <h1>Black History</h1>
        <div className='padded'>
          <div>
            The De Lux Theater invites you to browse the following collection of books and readings on race and equality, compiled by Charles Preston.
          </div>
          <div>
            <h2><a target="_blank" href="https://drive.google.com/drive/u/0/folders/0Bz011IF2Pu9TUWIxVWxybGJ1Ync">Black History Month Library</a></h2>
          </div>
          <div>What do you want to read first? (leave your name too if you'd like to find buddies for a book club)</div>
          <div>
            <textarea placeholder="" className="worksheet-field" name="book-selection"></textarea>
          </div>
        </div>
        <a onClick={this.checkForm}>{generateFlatSpot("SHOWTIME", DriveInKiss, DriveIn, "75%")}</a>
      </Layout>
    )
  }
}

export default DeLuxPage
