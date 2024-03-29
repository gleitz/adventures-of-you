import React from "react"
import styled from "styled-components"

import { readBin, updateBin } from './jsonBinApi'

const JSBIN_API_KEY = process.env.GATSBY_JSBIN_API_KEY
const JSBIN_BIN_ID = process.env.GATSBY_JSBIN_BIN_ID

import Spot from "./components/spot"
import FlatText from "./components/flattext"

const FlatTextCentered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: 40px;
  transform: translateX(
    -53%
  ); // should ber 50, but needs a little more to look even
  margin-top: -40px;
  pointer-events: none;
`

const getEmotions = async () => {
  const result = await readBin(JSBIN_BIN_ID, "latest")
  return result?.record || {}
}

const saveEmotion = emotion => {
  return getEmotions().then(data => {
    if (!data.emotions) {
      data = { emotions: [] }
    }
    data.emotions.push(emotion)
    return updateBin(
      JSBIN_BIN_ID,
      data,
      false
    )
  })
}

const saveVenmo = venmoUsername => {
  return getEmotions().then(data => {
    if (!data.venmo_usernames) {
      data = { venmo_usernames: [] }
    }
    if (venmoUsername && data.venmo_usernames.indexOf(venmoUsername) === -1) {
      data.venmo_usernames.push(venmoUsername)
    }
    return updateBin(
      JSBIN_BIN_ID,
      data,
      false
    )
  })
}

const saveBook = book => {
  return getEmotions().then(data => {
    if (!data.books) {
      data = { books: [] }
    }
    data.books.push(book)
    return updateBin(
      JSBIN_BIN_ID,
      data,
      false
    )
  })
}

const generateFlatSpot = (text, gifSrc, stillSrc, width = "100%") => {
  return (
    <div
      style={{ margin: "0 auto 2rem auto", position: "relative", width }}
    >
      <Spot src={stillSrc} className="static" />
      <Spot src={gifSrc} />
      <FlatTextCentered>
        <FlatText
          textStyle={{
            color: "white",
            textShadow: "rgba(0, 0, 0, 0.8) 0px 0px 100px",
          }}
          text={text}
          overflowWrap="normal"
          fontSize="3.5vw"
          width="4"
        />
      </FlatTextCentered>
    </div>
  )
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const value = Math.floor(Math.random() * (max - min + 1)) + min
  if (value === 0) {
    // if 0, try again for for variation
    return getRandomInt(min, max)
  }
  return value
}

const shuffle = array => {
  if (!array) {
    return
  }
  let currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const debounce = (callback, wait, immediate = false) => {
  let timeout = null

  return function() {
    const callNow = immediate && !timeout
    const next = () => callback.apply(this, arguments)

    clearTimeout(timeout)
    timeout = setTimeout(next, wait)

    if (callNow) {
      next()
    }
  }
}

export {
  debounce,
  generateFlatSpot,
  getRandomInt,
  shuffle,
  saveEmotion,
  getEmotions,
  saveVenmo,
  saveBook,
}
