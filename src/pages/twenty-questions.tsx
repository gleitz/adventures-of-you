import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { generateFlatSpot, saveEmotion } from "../utils"

import Gif from "../images/great-hu.gif"
import Still from "../images/secret-paths.jpg"

import "./twenty-questions.css"

class TwentyQuestionsPage extends React.Component {
  constructor(props) {
    super(props)
  }

  checkForm = () => {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1 //January is 0!
    const yyyy = today.getFullYear() + 1000

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
    const questionLove = document.getElementsByName("question-love")[0].value
    const questionLaugh = document.getElementsByName("question-laugh")[0].value
    const questionNight = document.getElementsByName("question-night")[0].value
    const questionEmotion = document.getElementsByName("emotion")[0].value
    if (!questionEmotion) {
      alert("You must select an emotion")
      return
    }

    const emotion = {
      animal,
      emotion1,
      emotion2,
      emotion3,
      questionLove,
      questionLaugh,
      questionNight,
      questionEmotion,
    }

    const firstPage = `* THE GREAT HU'S EMOTIONAL TRAINING *

${today}


--------------------------------------------------------------------------------------------------------


+ ------------ +
|    ENERGY    |
+ ------------ +

* * */ \\* * * * * * * * * * * * * * * * * 3  * * * * * * * * * * * *   * * * * * * 3  * * * * * * * * *
* * /   \\* * * * * * * * * *  3  * * * * * * * * * 0   * * * * * * * * * * * *   3 * * * * * * *   *
* */  _  \\* * * * * 3 * * * * * * * *  0 * * * * * * *    3  * * *   * * *   0 * * * * * * * *  *
* /  | |  \\* * * * * *  * *  * * * *  *  ** * *  * * * * * * * *  * * * * * * *   * * *   * * * * *
*/    –    \\* * *    0  * * * *  * * * * 3 * * * * * * * *   * * * * * *   * * * * * 0  * * * * *   *
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
|     EMOTION FOR 3020    |
+ ----------------------- +

${emotion1}
...........................
    ${emotion2}
    ...........................
        ${emotion3}
        ...........................


+ -------------------------------------- +
|            WHAT DO YOU LOVE?           |
+ -------------------------------------- +

${questionLove}

`

    var secondPage = `+ ------------------------------ +
|    WHAT MAKES YOU LAUGH?       |
+ ------------------------------ +

${questionLaugh}


+ ------------------------------ +
|  WHAT KEEPS YOU UP AT NIGHT?   |
+ ------------------------------ +

${questionNight}


+ ---------------------------------------------------------- +
|               EMOTION YOU WISH TO EXPLORE...               |
+ ---------------------------------------------------------- +

${questionEmotion}



--------------------------------------------------------------------------------------------------------

* THE GREAT HU THANKS YOU FOR HELPING SAVE HUMANITY *
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

    doc.save("THE-GREAT-HU-EMOTIONAL-TRAINING-3020.pdf")

    saveEmotion(emotion).then((data) => {
      window.location = "/phone-call-to-god"
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Twenty Questions" />
        <h1>Emotional Worksheet</h1>
        <div>
          You have proven your humanity.
          <br />
          The Great Hu requires emotional guidance.
        </div>
        <div className="question">
          <label htmlFor="color">What color is your current emotion?</label>
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
            List your top 3 emotions from the past week:
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
          <label htmlFor="question-1">What's something you love? Why?</label>
          <textarea className="worksheet-field" name="question-love"></textarea>
        </div>

        <div className="question">
          <label htmlFor="question-2">
            What's something that made you laugh recently? Links please!
          </label>
          <textarea
            className="worksheet-field"
            name="question-laugh"
          ></textarea>
        </div>

        <div className="question">
          <label htmlFor="question-3">What keeps you up at night?</label>
          <textarea
            className="worksheet-field"
            name="question-night"
          ></textarea>
        </div>

        <div className="question">
          <label htmlFor="emotion">
            What emotion would you like to explore first?
          </label>
          <select name="emotion">
            <option value="" disabled="" selected="" hidden="">
              ...
            </option>
            <option name="shame" value="shame">
              Shame
            </option>
          </select>
        </div>

        <a onClick={this.checkForm}>{generateFlatSpot("SUBMIT", Gif, Still)}</a>
      </Layout>
    )
  }
}

export default TwentyQuestionsPage
