/*global jscolor jspdf */

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { generateFlatSpot, saveEmotion } from "../utils"

import Gif from "../images/shelter-island.gif"
import Still from "../images/gleitz-goggles.jpg"

import "./emotional-worksheet.css"

const css = `
    .question {
      line-height: 1.5em;
    }
    input {
      height: 50%;
      padding: 0px 10px;
    }
    select {
      margin: 0;
      padding: 0px 10px;
    }
`

class EmotionalWorksheetPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    jscolor.installByClassName("jscolor")
  }

  checkForm = () => {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1 //January is 0!
    const yyyy = today.getFullYear()

    if (dd < 10) {
      dd = "0" + dd
    }

    if (mm < 10) {
      mm = "0" + mm
    }

    today = mm + "/" + dd + "/" + yyyy

    const color = document.getElementsByName("color")[0].style[
      "background-color"
    ]


    const relationship_partner = document.getElementsByName("relationship-partner")[0].value || ""
    const relationship_status = document.getElementsByName("relationship-status")[0].value || ""
    const relationship_feeling = document.getElementsByName("relationship-feeling")[0].value || ""
    const place = document.getElementsByName("place")[0].value || ""
    const verb = document.getElementsByName("verb")[0].value || ""
    const other_place = document.getElementsByName("other-place")[0].value || ""
    const feeling = document.getElementsByName("feeling")[0].value || ""
    const month_or_event = document.getElementsByName("month-or-event")[0].value || ""
    const job_emotion = document.getElementsByName("job-emotion")[0].value || ""
    const life_direction = document.getElementsByName("life-direction")[0].value || ""
    const activity = document.getElementsByName("activity")[0].value || ""
    const action_verb = document.getElementsByName("action-verb")[0].value || ""
    const fun_fact = document.getElementsByName("fun-fact")[0].value || ""

    if (!fun_fact) {
      alert("Please complete the form, then click Generate")
      return
    }

    const emotion = {
      relationship_partner,
      relationship_status,
      relationship_feeling,
      place,
      verb,
      other_place,
      feeling,
      month_or_event,
      job_emotion,
      life_direction,
      activity,
      action_verb,
      fun_fact
    }

    const firstPage = `* POVAX SMALL TALK GENERATOR *

${today}


-------------------------------------------------------------------------------------------------------


+ ------------ +
|  SMALL TALK  |
+ ------------ +

* * */ \\* * * * * * * * * * * * * * * * * 2  * * * * * * * * * * * *   * * * * * * 2  * * * * * * * * *
* * /   \\* * * * * * * * * *  2  * * * * * * * * * 0   * * * * * * * * * * * *   2 * * * * * * *   *
* */  _  \\* * * * * 2 * * * * * * * *  0 * * * * * * *    2  * * *   * * *   1 * * * * * * * *  *
* /  | |  \\* * * * * *  * *  * * * *  *  ** * *  * * * * * * * *  * * * * * * *   * * *   * * * * *
*/    –    \\* * *    0  * * * *  * * * * 2 * * * * * * * *   * * * * * *   * * * * * 1  * * * * *   *
 ===========   *   *        *        *   * *       *           *     * *        *  *          *     *
* |       |    *           *    *        *      *          *             *         *       * *    *
  |       |  *         *            *                *          *              *         *         *
----\\/----\\/--\\/-\\@/--   -- -    - -- - - -- ----  -- - - -------- - - -- - -- - -- -- - - - -- - ----
-\\/---\\/----\\@/---\\/--  - - - -- - ----- -- -- -- -- - - -- ---- ----- ----- -- -- - -- -- - -- -- - --
-----\\/------\\/---------\\--\\@/----  -- - -- - - -- ----- ---- - --- -- -- - - -- - - -- - -- - -- --


Wow! It’s been such a crazy year.

${relationship_partner} and I ${relationship_status}. It’s been ${relationship_feeling}.

I was living in ${place} but then I ${verb} ${other_place}. It was pretty ${feeling} during ${month_or_event}.

I ${job_emotion} my job. I sort of wish I was ${life_direction}.

It hasn't been all bad though! I learned to ${activity} and thats been getting me through.

After all of this, I’m pretty excited to ${action_verb}.

But instead of all that, let’s talk about ${fun_fact}.

--------------------------------------------------------------------------------------------------------

^^^^ TO CONTINUE, VISIT https://adventuresofyou.online/may-partay-tickets/ ^^^^

* SHELTER ISLAND: THE BAY AREA'S HOTTEST (AND ONLY) DANCE PARTY *
`

    const pageWidth = 8.0,
          lineHeight = 1.2,
          margin = 0.5,
          maxLineWidth = pageWidth - margin * 2,
          fontSize = 8,
          ptsPerInch = 72,
          oneLineHeight = (fontSize * lineHeight) / ptsPerInch,
          doc = new jspdf.jsPDF({
            unit: "in",
            lineHeight: lineHeight,
          }).setProperties({ title: "POVAX SMALL TALK GENERATOR" })

    // splitTextToSize takes your string and turns it in to an array of strings,
    // each of which can be displayed within the specified maxLineWidth.
    const one = doc
          .setFont("courier")
          .setFontSize(fontSize)
          .setTextColor(0, 0, 0)
          .splitTextToSize(firstPage, maxLineWidth)

    doc.setLineWidth(1)
    doc.setDrawColor(0)
    doc.setFillColor(color)
    doc.circle(0.93, 2.8, 0.5, "F")

    // doc.text can now add those lines easily; otherwise, it would have run text off the screen!
    doc.text(one, margin, margin + 2 * oneLineHeight)

    const isIOS = /iPad|iPhone|iPod/.test(navigator.platform)
        || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    if (isIOS) {
      doc.output('dataurlnewwindow')
    } else {
      doc.save("SHELTER-ISLAND-POVAX-SMALL-TALK-GENERATOR.pdf")
    }

    // const selfie = document.getElementsByName("selfie")[0].files[0]
    // const reader = new FileReader();

    // if (selfie) {
    // reader.readAsBinaryString(selfie);
    // } else {
    // }

    // reader.onload = function() {
    // const selfieData = btoa(reader.result)
    // emotion['selfie'] = selfieData
    // saveEmotion(emotion).then(data => {
    // window.location = "/pregame"
    // })
    // };
    // reader.onerror = function() {
    // console.log('there are some problems');
    // };

    saveEmotion(emotion).then(data => {
      // const blob = doc.output()
      // window.open(URL.createObjectURL(blob), "_blank")
      window.location = "/may-partay-tickets"
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="PoVax Small Talk Generator" />
        <h1>PoVax Small Talk Generator</h1>
        <style>{css}</style>
        <div className="padded">
          <div>
            Here at Pup's Pool & HoNey Bee productions, we know it can be hard to re-enter the social scene after over a year of isolation. So to help y'all out we've created the Post-Vaccine Small Talk Generator.
            </div>
            <div>
              Just fill in the blanks and we'll create an easy to use small talk pass that you can hand off to anyone you haven't seen lately. Skip the small talk, and get to the rest!
            </div>

            <hr/>

            <div className="question">
              Wow! It's been such a crazy year.
              </div>

              <div className="question">
                <input
                  placeholder="person"
                  name="relationship-partner"
                ></input>
                &nbsp;and I&nbsp;
                <select name="relationship-status">
                  <option value="" disabled="" selected="" hidden="">
                    relationship status
                  </option>
                  <option value="broke up">
                    broke up
                  </option>
                  <option value="got engaged">
                    got engaged
                  </option>
                  <option value="moved in together">
                    moved in together
                  </option>
                  <option value="got married">
                    got married
                  </option>
                  <option value="got pregnant">
                    got pregnant
                  </option>
                  <option value="got together">
                    got together
                  </option>
                  <option value="became enemies">
                    became enemies
                  </option>
                  <option value="had a kid">
                    had a kid
                  </option>
                  <option value="started seeing other people">
                    started seeing other people
                  </option>
                  <option value="have been enjoying each other's company">
                    have been enjoying each other's company
                  </option>
                  <option value="are working on some cool projects">
                    are working on some cool projects
                  </option>
                </select>.
                &nbsp;It's been&nbsp;
                <select name="relationship-feeling">
                  <option value="" disabled="" selected="" hidden="">
                    feeling
                  </option>
                  <option value="terrible">
                    terrible
                  </option>
                  <option value="amazing">
                    amazing
                  </option>
                  <option value="challenging">
                    challenging
                  </option>
                  <option value="wonderful">
                    wonderful
                  </option>
                  <option value="disastrous">
                    disastrous
                  </option>
                  <option value="just okay">
                    just okay
                  </option>
                </select>.
                </div>

                <div className="question">
                  I was living in
                  &nbsp;
                  <input
                    placeholder="place"
                    name="place"
                  ></input>
                  &nbsp;but then I&nbsp;
                  <select name="verb">
                    <option value="" disabled="" selected="" hidden="">
                      verb
                    </option>
                    <option value="moved to">
                      moved to
                    </option>
                    <option value="traveled to">
                      traveled to
                    </option>
                    <option value="went back home to">
                      went back home to
                    </option>
                    <option value="bought a house in">
                      bought a house in
                    </option>
                  </select>
                  &nbsp;
                  <input
                    placeholder="other place"
                    name="other-place"
                  ></input>.
                  &nbsp;It was pretty&nbsp;
                  <input
                    placeholder="feeling"
                    name="feeling"
                  ></input>
                  &nbsp;during&nbsp;
                  <input
                    placeholder="month or event"
                    name="month-or-event"
                  ></input>.
                </div>

                <div className="question">
                  I
                  &nbsp;
                  <input
                    placeholder="emotion"
                    name="job-emotion"
                  ></input>
                  &nbsp; my job. I sort of wish I was&nbsp;
                  <input
                    placeholder="new life direction"
                    name="life-direction"
                  ></input>.
                </div>

                <div className="question">
                  It hasn't been all bad though! I learned to&nbsp;
                  <input
                    placeholder="activity"
                    name="activity"
                  ></input>
                  &nbsp; and that's been getting me through.
                  </div>

                    <div className="question">
                      After all of this, I'm pretty excited to&nbsp;
                      <select name="action-verb">
                        <option value="" disabled="" selected="" hidden="">
                          action verb
                        </option>
                        <option value="travel">
                          travel
                        </option>
                        <option value="have wild sex with strangers">
                          have wild sex with strangers
                        </option>
                        <option value="ride BART">
                          ride BART
                        </option>
                        <option value="go back to all my bad habits I had before">
                          go back to all my bad habits I had before
                        </option>
                        <option value="see my family">
                          see my family
                        </option>
                        <option value="stop washing my hands">
                          stop washing my hands
                        </option>
                        <option value="dance">
                          dance
                        </option>
                        <option value="meet new people">
                          meet new people
                        </option>
                      </select>.
                      </div>

                      <div className="question">
                        I'm ready for a change. I might dye my hair&nbsp;
                        <input
                          name="color"
                          className="jscolor {valueElement:null}"
          />.
        </div>

          <div className="question">
            But instead of all that, let's talk about&nbsp;
            <input
              placeholder="fun fact you learned"
              name="fun-fact"
            ></input>.
          </div>

      <br/>

        <hr/>
      <br/>

        <div>
          When you click Generate, a PDF will be generated with your story. Take a screeshot or save it. Follow the link at the bottom of the PDF for the next step, or come back to this page to continue.
          </div>

        <a onClick={this.checkForm}>
          {generateFlatSpot("GENERATE", Gif, Still, "75%")}
        </a>
      </div>
      </Layout>
    )
  }
}

export default EmotionalWorksheetPage
