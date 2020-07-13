import React, { useState, useEffect } from "react"
import axios, { AxiosRequestConfig, CancelToken } from "axios"

import TypeIt from "typeit-react"

import Grid from '@material-ui/core/Grid'

import Flipcard from '@kennethormandy/react-flipcard'

import '@kennethormandy/react-flipcard/dist/Flipcard.css'
import "../components/style.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { debounce } from "../utils"

import { ROSEN_URI } from "gatsby-env-variables"

let cancel // for cancelling Axios request

const classes = {
  root: {
    flexGrow: 1
  },
  paper: {
    padding: 20,
    textAlign: "center"
  }
}

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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const DixiePage = () => {

  const [player, setPlayer] = useState('')
  const [rosenResponse, setRosenResponse] = useState({})
  const [isFirstPerson, setIsFirstPerson] = useState(false)

  const getDixieFlatline = () => {
    const flatlines = document.getElementsByName("dixie-flatline")
    if (flatlines.length === 0) {
      return []
    }
    return isFirstPerson ? flatlines[1] : flatlines[0]
  }

  useEffect(() => {
    const dixieFlatline = getDixieFlatline()
    if (dixieFlatline && dixieFlatline.value) {
      coreSearch(dixieFlatline.value.trim())
    }
  }, [player]);

  const handleSelectPlayer = (event) => {
    const player = event.target.value
    setPlayer(player)
  }

  const coreSearch = (text: string) => {
    if (cancel) {
      cancel('Operation canceled by the user.')
    }

    if (text.trim().length === 0) {
      return
    }
    setRosenResponse({
      "dialog": [
        [
          {
            "speaker": "<speaker1>",
            // "utterance": `${text}...`
            "utterance": `...`
          }
        ],
      ]
    })

    const data = JSON.stringify({"context":[{"speaker":"<speaker1>","utterance": isFirstPerson ? text : `${text} I think`}]})

    const config: AxiosRequestConfig = {
      method: 'post',
      url: `http://${ROSEN_URI}:8002/dialog/${player}?temperature=0.9&top_k=3&top_p=0.9&repetition_penalty=1.1&num_return_sequences=10&max_length=100&num_beams=1`,
      headers: {
        'Content-Type': 'application/json'
      },
      data : data,
      cancelToken: new CancelToken((c) => {
        cancel = c;
      })
    }

    axios(config)
      .then(function (response) {
        const avgSizeSet = new Set()
        let dialogs = response.data.dialog.map((dialog) => {
          let utterance
          if (isFirstPerson) {
            utterance = dialog.map((turn) => turn['utterance']).join(' ').trim()
          } else {
            utterance = capitalizeFirstLetter(dialog.map((turn) => turn['utterance']).slice(0,2).join(' ').replace(`${text} I think`, '').trim())
          }

          const words = utterance.split(' ')
          const avgSize = words.map((word) => Math.min(word.length, 10)).reduce((a, b) => a + b, 0) / words.length
          const phraseLength = words.length
          return [{'speaker': '<speaker1>', utterance, phraseLength, avgSize}]
        })

        dialogs.sort((a,b) => (a[0].avgSize > b[0].avgSize) ? 1 : ((b[0].avgSize > a[0].avgSize) ? -1 : 0)).reverse()

        dialogs = dialogs.filter((dialog) => {
          const shouldExclude = avgSizeSet.has(dialog[0].avgSize)
          if (shouldExclude) {
            return false
          }
          avgSizeSet.add(dialog[0].avgSizeSet)
          return true
        })

        setRosenResponse({'dialog': dialogs})
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  const runSearch = debounce(coreSearch, 1000)

  const handleTyping = (event) => {
    if (cancel) {
      cancel('Operation canceled by the user.')
    }
    runSearch(event.target.value)
  }

  return (
    <Layout>
      <SEO title="Dixie Flatline Reading Library" />
      <h1>Dixie Flatline Reading Library</h1>
      <div className={classes.root}>
        <div>
          The MGMT invites you to browse our digital synapse reading library, a bespoke collection of Read-Only Memories (ROM).
        </div>
        <Grid alignContent="center" container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{marginTop: '18px'}}
        >
          <Grid item xs={12}>
            <label htmlFor="player"><b>Choose your you</b></label>
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
                <option name="player" value="rob">
                  🏃 ROB
                </option>
                <option name="player" value="rob">
                  🐉 MICHELLE
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
          </Grid>
          { player &&
            <div>
            <Grid item xs={12} style={{position: 'relative', minHeight: '218px'}}>
              <button className="flip" style={{float: 'right', marginRight: '-75px'}} type="button" onClick={() => setIsFirstPerson(!isFirstPerson)}>Flip</button>
              <Flipcard flipped={isFirstPerson} style={{margin: '0 auto', minWidth: '500px'}}>
                <div>
                  <label htmlFor="dixie-flatline"><b>Ask a question</b></label>
                  <textarea placeholder="Ask yourself what you want to know."
                            className="worksheet-field"
                            name="dixie-flatline"
                            onChange={handleTyping}
                            style={{minWidth: '500px'}}></textarea>
                </div>
                <div>
                  <label htmlFor="dixie-flatline"><b>Start a sentence for you to finish</b></label>
                  <textarea placeholder="Use I statements, because this is you."
                            className="worksheet-field"
                            name="dixie-flatline"
                            onChange={handleTyping}
                            style={{minWidth: '500px'}}></textarea>
                </div>
              </Flipcard>
            </Grid>
            <hr/>
            </div>
          }
          <Grid xs={8} style={{width: '100%'}}>
            { rosenResponse.dialog &&
              rosenResponse.dialog.map((dialog, i) => {
                return (
                  <div key={i}>
                    {
                      dialog.map((turn, j) => <div key={turn.utterance}><TypeIt options={{waitUntilVisible: true, speed: 70, strings: [turn.utterance.replace('\n', '<br>')]}}></TypeIt></div>)
                    }
                    <hr/>
                    <br/>
                  </div>
                )
              })
            }
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default DixiePage
