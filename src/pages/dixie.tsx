import React, { useState, useEffect } from "react"
import axios from "axios"

import TypeIt from "typeit-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { debounce } from "../utils"

import { ROSEN_URI } from "gatsby-env-variables"

// import DriveIn from "../images/drive-in.jpg"
// import DriveInKiss from "../images/drive-in-kiss.jpg"

interface RosenTurn {
  speaker: string;
  utterance: string;
}

interface RosenResponse {
  dialog: RosenTurn[][];
}

interface State {
  player: string;
  rosenResponse: RosenResponse;
}

const DixiePage = () => {

  const [player, setPlayer] = useState('')
  const [rosenResponse, setRosenResponse] = useState({})

  const checkForm = () => {
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

  const handleSelectPlayer = (event) => {
    const player = event.target.value
    setPlayer(player)
  }

  const runSearch = debounce((text: string) => {
    setRosenResponse({
      "dialog": [
        [
          {
            "speaker": "<speaker1>",
            "utterance": `${text}...`
          }
        ],
      ]
    })

    const data = JSON.stringify({"context":[{"speaker":"<speaker1>","utterance":text}]})

    const config = {
      method: 'post',
      url: `http://${ROSEN_URI}:8002/dialog/${player}?temperature=0.9&top_k=3&top_p=0.9&repetition_penalty=1.1&num_return_sequences=10&max_length=100&num_beams=1`,
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    }

    axios(config)
      .then(function (response) {
        const dialogs = response.data.dialog.map((dialog) => {
          return [{'speaker': '<speaker1>', 'utterance': dialog.map((turn) => turn['utterance']).join(' ')}]
        })
        setRosenResponse({'dialog': dialogs})
      })
      .catch(function (error) {
        console.log(error)
      });
  }, 1000)

  const handleTyping = (event) => {
    runSearch(event.target.value)
  }

  return (
    <Layout>
      <SEO title="Dixie Flatline Reading Library" />
      <h1>Dixie Flatline Reading Library</h1>
      <div className='padded'>
        <div>
          The MGMT invites you to browse our digital synapse reading library, a bespoke collection of Read-Only Memories (ROM).
        </div>
        <div style={{ width: '45%', float: 'left' }} className="question">
          <label htmlFor="player">Choose your player:</label>
          <select name="player" onChange={handleSelectPlayer}>
            <option value="" disabled="" selected="" hidden="">
              ...
            </option>
            <optgroup label="people">
              <option name="player" value="gleitz">
                🦀 GLEITZ
              </option>
              <option name="player" value="vivek">
                🐙 VIVEK
              </option>
              <option name="player" value="travis">
                🌲 TRAVIS
              </option>
              <option name="player" value="chuchu">
                🧶 CHU CHU
              </option>
            </optgroup>
            <optgroup label="news">
              <option name="player" value="ebony">
                🤵🏾 BEIGE
              </option>
              <option name="player" value="fox">
                👨🏼 WHITE
              </option>
            </optgroup>
          </select>
          { player &&
            <div>
              <label htmlFor="dixie-flatline">Begin writing in the first person:</label>
              <textarea placeholder=""
                        className="worksheet-field"
                        name="dixie-flatline"
                        onChange={handleTyping}></textarea>
            </div>
          }
        </div>
        <div style={{ width: '45%', float: 'right'}}>
          { rosenResponse.dialog &&
            rosenResponse.dialog.map((dialog, i) => {
              return (
                <div key={i}>
                  {
                    dialog.map((turn, j) => <div key={turn.utterance}><TypeIt options={{waitUntilVisible: true, speed: 70, strings: [turn.utterance.replace('\\\n', '<br>')]}}></TypeIt></div>)
                  }
                  <hr/>
                  <br/>
                </div>
              )
            })
          }
        </div>
      </div>
    </Layout>
  )
}

export default DixiePage
