import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { generateFlatSpot } from "../utils"

import Gif from "../images/great-hu.gif"
import Still from "../images/secret-paths.jpg"

import "./twenty-questions.css"

const TwentyQuestionsPage = () => (
  <Layout>
    <SEO title="Twenty Questions" />
    <div className="question">
      <label for="color">What color is your current emotion?</label>
      <input
        name="color"
        className="jscolor {valueElement:null} worksheet-field"
      />
    </div>

    <div className="question">
      <label for="shape">What is your spirit animal?</label>
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
      <label for="emotion-in-2020">List your top 3 emotions from the past week:</label>
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
      <label for="take-a-moment-to-think-about-how-youll-achieve-your-desired-feelings-in-2020">
        What's something you love? Why?
      </label>
      <textarea className="worksheet-field" name="question-1"></textarea>
    </div>

    <div className="question">
      <label for="is-there-anything-you-can-stop-doing-in-2020">
        What's something that made you laugh? Links please!
      </label>
      <textarea className="worksheet-field" name="question-2"></textarea>
    </div>

    <div className="question">
      <label for="is-there-anything-you-can-start-doing-in-2020">
        What keeps you up at night?
      </label>
      <textarea className="worksheet-field" name="question-3"></textarea>
    </div>

    <div className="question">
      <label for="emotion">What emotion would you like to explore first?</label>
      <select name="shape">
        <option value="" disabled="" selected="" hidden="">
          ...
        </option>
        <option name="animal" value="shame">Shame</option>
      </select>
    </div>

    <a href="/phone-call-to-god">{generateFlatSpot("SUBMIT", Gif, Still)}</a>
  </Layout>
)

export default TwentyQuestionsPage
