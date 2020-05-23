import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { generateFlatSpot, saveEmotion } from "../utils"

import Gif from "../images/great-hu.gif"
import Still from "../images/gleitz-goggles.jpg"

import "./emotional-worksheet.css"

class EmotionalWorksheetPage extends React.Component {
  constructor(props) {
    super(props)
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
    const animal = document.getElementsByName("animal")[0].value.toUpperCase()
    const emotion1 = document.getElementsByName("emotion-in-2020-1")[0].value
    const emotion2 = document.getElementsByName("emotion-in-2020-2")[0].value
    const emotion3 = document.getElementsByName("emotion-in-2020-3")[0].value
    const questionLaugh = document.getElementsByName("question-laugh")[0].value
    const questionMemory = document.getElementsByName("question-memory")[0]
      .value
    const questionSelfie = document.getElementsByName("selfie")[0].value
    if (!emotion1) {
      alert("You must select an emotion!")
      return
    }

    const emotion = {
      animal,
      emotion1,
      emotion2,
      emotion3,
      questionLaugh,
      questionMemory,
      questionSelfie,
    }

    const firstPage = `* SHELTER ISLAND GUESTBOOK *

${today}


--------------------------------------------------------------------------------------------------------


+ ------------ +
|    ENERGY    |
+ ------------ +

* * */ \\* * * * * * * * * * * * * * * * * 2  * * * * * * * * * * * *   * * * * * * 2  * * * * * * * * *
* * /   \\* * * * * * * * * *  2  * * * * * * * * * 0   * * * * * * * * * * * *   2 * * * * * * *   *
* */  _  \\* * * * * 2 * * * * * * * *  0 * * * * * * *    2  * * *   * * *   0 * * * * * * * *  *
* /  | |  \\* * * * * *  * *  * * * *  *  ** * *  * * * * * * * *  * * * * * * *   * * *   * * * * *
*/    –    \\* * *    0  * * * *  * * * * 2 * * * * * * * *   * * * * * *   * * * * * 0  * * * * *   *
 ===========   *   *        *        *   * *       *           *     * *        *  *          *     *
* |       |    *           *    *        *      *          *             *         *       * *    *
  |       |  *         *            *                *          *              *         *         *
----\\/----\\/--\\/-\\@/--   -- -    - -- - - -- ----  -- - - -------- - - -- - -- - -- -- - - - -- - ----
-\\/---\\/----\\@/---\\/--  - - - -- - ----- -- -- -- -- - - -- ---- ----- ----- -- -- - -- -- - -- -- - --
-----\\/------\\/---------\\--\\@/----  -- - -- - - -- ----- ---- - --- -- -- - - -- - - -- - -- - -- --


+ ------------ +
|    ANIMAL    |
+ ------------ +

* ${animal} *


+ ----------------------- +
|      DAILY EMOTIONS     |
+ ----------------------- +

${emotion1}
...........................
    ${emotion2}
    ...........................
        ${emotion3}
        ...........................

`

    const secondPage = `+ ------------------------------ +
|    WHAT MAKES YOU LAUGH?       |
+ ------------------------------ +

${questionLaugh}


+ ------------------------------------ +
|    FOND MEMORY OF THE BIRTHDAY BOI   |
+ ------------------------------------ +

${questionMemory}



--------------------------------------------------------------------------------------------------------

* DRINKS ARE 2 FOR 1 ALL NIGHT AND DAPPER GENTLEMEN GET IN FOR FREE *
`

    const pageWidth = 8.0,
      lineHeight = 1.2,
      margin = 0.5,
      maxLineWidth = pageWidth - margin * 2,
      fontSize = 8,
      ptsPerInch = 72,
      oneLineHeight = (fontSize * lineHeight) / ptsPerInch,
      doc = new jsPDF({
        unit: "in",
        lineHeight: lineHeight,
      }).setProperties({ title: "Worksheet: Emotional Planning for 2020" })

    // splitTextToSize takes your string and turns it in to an array of strings,
    // each of which can be displayed within the specified maxLineWidth.
    const one = doc
      .setFont("courier")
      .setFontSize(fontSize)
      .setTextColor(0, 0, 0)
      .splitTextToSize(firstPage, maxLineWidth)

    const two = doc
      .setFont("courier")
      .setFontSize(fontSize)
      .setTextColor(0, 0, 0)
      .splitTextToSize(secondPage, maxLineWidth)

    doc.setLineWidth(1)
    doc.setDrawColor(0)
    doc.setFillColor(color)
    doc.circle(0.93, 2.8, 0.5, "F")

    // doc.text can now add those lines easily; otherwise, it would have run text off the screen!
    doc.text(one, margin, margin + 2 * oneLineHeight)

    doc.addPage()

    doc.text(two, margin, margin + 2 * oneLineHeight)

    doc.save("SHELTER-ISLAND-GUESTBOOK.pdf")

    saveEmotion(emotion).then(data => {
      window.location = "/pregame"
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Guestbook" />
        <h1>Guestbook</h1>
        <div className="padded">
          <div>
            Welcome to Shelter Island &mdash; the Bay Area's hottest (and only)
            club.
          </div>
          <div>
            Drinks are 2 for 1 all night and dapper gentlemen get in for free.
          </div>
          <div>
            Shelter Island is celebrating some <b>special occasions</b> today!
          </div>
          <div>
            🍾 Best wishes on your 50th anniversary Dave and Savannah.
            <br />
            🥂 Condolences to the Class of 2020 &mdash; you never really had a
            chance.
            <br />
            🎉 Three cheers to the Webster-Guineys for explicitly prepping for
            Peak Oil but accidently prepping for Corona.
            <br />
            🕺 To the empty-nesters Vivek and Xtina &mdash; they grow up so
            quick.
            <br />
            🥳 Happy Birthday Pup!
            <br />
            🎁 Congrats Dom &amp; Mike on your new arrival.
            <br />
          </div>
          <div>
            Please sign the <b>Guestbook</b> to make our patrons of honor feel
            special.
          </div>
        </div>
        <div className="question">
          <label htmlFor="color">What color is your energy?</label>
          <input
            name="color"
            className="jscolor {valueElement:null} worksheet-field"
          />
        </div>

        <div className="question">
          <label htmlFor="animal">What is your spirit animal?</label>
          <select name="animal">
            <option value="" disabled="" selected="" hidden="">
              ...
            </option>
            <option name="animal" value="dolphin">
              🦈
            </option>
            <option name="animal" value="whale">
              🐋
            </option>
            <option name="animal" value="crab">
              🦀
            </option>
            <option name="animal" value="squid">
              🦑
            </option>
            <option name="animal" value="octopus">
              🐙
            </option>
            <option name="animal" value="rabbit">
              🐇
            </option>
            <option name="animal" value="mouse">
              🐁
            </option>
            <option name="animal" value="fish">
              🐠
            </option>
            <option name="animal" value="duck">
              🦆
            </option>
            <option name="animal" value="elephant">
              🐘
            </option>
            <option name="animal" value="horse">
              🐎
            </option>
            <option name="animal" value="cow">
              🐄
            </option>
            <option name="animal" value="pig">
              🐖
            </option>
            <option name="animal" value="deer">
              🦌
            </option>
            <option name="animal" value="goat">
              🐐
            </option>
            <option name="animal" value="giraffe">
              🦒
            </option>
            <option name="animal" value="llama">
              🦙
            </option>
            <option name="animal" value="hedgehog">
              🦔
            </option>
            <option name="animal" value="zebra">
              🦓
            </option>
            <option name="animal" value="turtle">
              🐢
            </option>
            <option name="animal" value="cat">
              🐈
            </option>
            <option name="animal" value="swan">
              🦢
            </option>
            <option name="animal" value="parrot">
              🦜
            </option>
          </select>
        </div>

        <div className="question">
          <label htmlFor="emotion-in-2020-1">
            Take us through a typical day of your emotions, from waking up
            (left) to when you go to bed (right)
          </label>
          <select name="emotion-in-2020-1">
            <option value="" disabled="" selected="" hidden="">
              ...
            </option>
            <option name="emotion-in-2020-1" value="Accomplished">
              Accomplished
            </option>
            <option name="emotion-in-2020-1" value="Amused">
              Amused
            </option>
            <option name="emotion-in-2020-1" value="Anxious">
              Anxious
            </option>
            <option name="emotion-in-2020-1" value="Bored">
              Bored
            </option>
            <option name="emotion-in-2020-1" value="Busy">
              Busy
            </option>
            <option name="emotion-in-2020-1" value="Calm">
              Calm
            </option>
            <option name="emotion-in-2020-1" value="Capable">
              Capable
            </option>
            <option name="emotion-in-2020-1" value="Content">
              Content
            </option>
            <option name="emotion-in-2020-1" value="Challenged">
              Challenged
            </option>
            <option name="emotion-in-2020-1" value="Determined">
              Determined
            </option>
            <option name="emotion-in-2020-1" value="Fearful">
              Fearful
            </option>
            <option name="emotion-in-2020-1" value="Focused">
              Focused
            </option>
            <option name="emotion-in-2020-1" value="Happy">
              Happy
            </option>
            <option name="emotion-in-2020-1" value="Healthy">
              Healthy
            </option>
            <option name="emotion-in-2020-1" value="Lazy">
              Lazy
            </option>
            <option name="emotion-in-2020-1" value="Loved">
              Loved
            </option>
            <option name="emotion-in-2020-1" value="Miserable">
              Miserable
            </option>
            <option name="emotion-in-2020-1" value="Optimistic">
              Optimistic
            </option>
            <option name="emotion-in-2020-1" value="Overwhelmed">
              Overwhelmed
            </option>
            <option name="emotion-in-2020-1" value="Peaceful">
              Peaceful
            </option>
            <option name="emotion-in-2020-1" value="Relaxed">
              Relaxed
            </option>
            <option name="emotion-in-2020-1" value="Safe">
              Safe
            </option>
            <option name="emotion-in-2020-1" value="Secure">
              Secure
            </option>
            <option name="emotion-in-2020-1" value="Stressed">
              Stressed
            </option>
            <option name="emotion-in-2020-1" value="Successful">
              Successful
            </option>
            <option name="emotion-in-2020-1" value="Supported">
              Supported
            </option>
            <option name="emotion-in-2020-1" value="Trapped">
              Trapped
            </option>
            <option name="emotion-in-2020-1" value="Understood">
              Understood
            </option>
            <option name="emotion-in-2020-1" value="Wild">
              Wild
            </option>
          </select>
          <select name="emotion-in-2020-2" id="emotion-in-2020-2">
            <option value="" disabled="" selected="" hidden="">
              ...
            </option>
            <option name="emotion-in-2020-2" value="Accomplished">
              Accomplished
            </option>
            <option name="emotion-in-2020-2" value="Amused">
              Amused
            </option>
            <option name="emotion-in-2020-2" value="Anxious">
              Anxious
            </option>
            <option name="emotion-in-2020-2" value="Bored">
              Bored
            </option>
            <option name="emotion-in-2020-2" value="Busy">
              Busy
            </option>
            <option name="emotion-in-2020-2" value="Calm">
              Calm
            </option>
            <option name="emotion-in-2020-2" value="Capable">
              Capable
            </option>
            <option name="emotion-in-2020-2" value="Content">
              Content
            </option>
            <option name="emotion-in-2020-2" value="Challenged">
              Challenged
            </option>
            <option name="emotion-in-2020-2" value="Determined">
              Determined
            </option>
            <option name="emotion-in-2020-2" value="Fearful">
              Fearful
            </option>
            <option name="emotion-in-2020-2" value="Focused">
              Focused
            </option>
            <option name="emotion-in-2020-2" value="Happy">
              Happy
            </option>
            <option name="emotion-in-2020-2" value="Healthy">
              Healthy
            </option>
            <option name="emotion-in-2020-2" value="Lazy">
              Lazy
            </option>
            <option name="emotion-in-2020-2" value="Loved">
              Loved
            </option>
            <option name="emotion-in-2020-2" value="Miserable">
              Miserable
            </option>
            <option name="emotion-in-2020-2" value="Optimistic">
              Optimistic
            </option>
            <option name="emotion-in-2020-2" value="Overwhelmed">
              Overwhelmed
            </option>
            <option name="emotion-in-2020-2" value="Peaceful">
              Peaceful
            </option>
            <option name="emotion-in-2020-2" value="Relaxed">
              Relaxed
            </option>
            <option name="emotion-in-2020-2" value="Safe">
              Safe
            </option>
            <option name="emotion-in-2020-2" value="Secure">
              Secure
            </option>
            <option name="emotion-in-2020-2" value="Stressed">
              Stressed
            </option>
            <option name="emotion-in-2020-2" value="Successful">
              Successful
            </option>
            <option name="emotion-in-2020-2" value="Supported">
              Supported
            </option>
            <option name="emotion-in-2020-2" value="Trapped">
              Trapped
            </option>
            <option name="emotion-in-2020-2" value="Understood">
              Understood
            </option>
            <option name="emotion-in-2020-2" value="Wild">
              Wild
            </option>
          </select>
          <select name="emotion-in-2020-3" id="emotion-in-2020-3">
            <option value="" disabled="" selected="" hidden="">
              ...
            </option>
            <option name="emotion-in-3020-3" value="Accomplished">
              Accomplished
            </option>
            <option name="emotion-in-3020-3" value="Amused">
              Amused
            </option>
            <option name="emotion-in-3020-3" value="Anxious">
              Anxious
            </option>
            <option name="emotion-in-3020-3" value="Bored">
              Bored
            </option>
            <option name="emotion-in-3020-3" value="Busy">
              Busy
            </option>
            <option name="emotion-in-3020-3" value="Calm">
              Calm
            </option>
            <option name="emotion-in-3020-3" value="Capable">
              Capable
            </option>
            <option name="emotion-in-3020-3" value="Content">
              Content
            </option>
            <option name="emotion-in-3020-3" value="Challenged">
              Challenged
            </option>
            <option name="emotion-in-3020-3" value="Determined">
              Determined
            </option>
            <option name="emotion-in-3020-3" value="Fearful">
              Fearful
            </option>
            <option name="emotion-in-3020-3" value="Focused">
              Focused
            </option>
            <option name="emotion-in-3020-3" value="Happy">
              Happy
            </option>
            <option name="emotion-in-3020-3" value="Healthy">
              Healthy
            </option>
            <option name="emotion-in-3020-3" value="Lazy">
              Lazy
            </option>
            <option name="emotion-in-3020-3" value="Loved">
              Loved
            </option>
            <option name="emotion-in-3020-3" value="Miserable">
              Miserable
            </option>
            <option name="emotion-in-3020-3" value="Optimistic">
              Optimistic
            </option>
            <option name="emotion-in-3020-3" value="Overwhelmed">
              Overwhelmed
            </option>
            <option name="emotion-in-3020-3" value="Peaceful">
              Peaceful
            </option>
            <option name="emotion-in-3020-3" value="Relaxed">
              Relaxed
            </option>
            <option name="emotion-in-3020-3" value="Safe">
              Safe
            </option>
            <option name="emotion-in-3020-3" value="Secure">
              Secure
            </option>
            <option name="emotion-in-3020-3" value="Stressed">
              Stressed
            </option>
            <option name="emotion-in-3020-3" value="Successful">
              Successful
            </option>
            <option name="emotion-in-3020-3" value="Supported">
              Supported
            </option>
            <option name="emotion-in-3020-3" value="Trapped">
              Trapped
            </option>
            <option name="emotion-in-3020-3" value="Understood">
              Understood
            </option>
            <option name="emotion-in-3020-3" value="Wild">
              Wild
            </option>
          </select>
        </div>

        <div className="question">
          <label htmlFor="question-laugh">
            What's something that made you laugh recently? Links please!
          </label>
          <textarea
            className="worksheet-field"
            name="question-laugh"
          ></textarea>
        </div>

        <div className="question">
          <label htmlFor="question-memory">
            What's a fond memory of you and the birthday boi?
          </label>
          <textarea
            className="worksheet-field"
            name="question-memory"
          ></textarea>
        </div>

        <div className="question">
          <label htmlFor="selfie">
            We can't take our group pyramid picture this year (for obvious
            reasons), so upload your selfie here.
          </label>{" "}
          <input type="file" id="img" name="selfie" accept="image/*" />
        </div>

        <a onClick={this.checkForm}>
          {generateFlatSpot("SUBMIT", Gif, Still, "75%")}
        </a>
      </Layout>
    )
  }
}

export default EmotionalWorksheetPage
