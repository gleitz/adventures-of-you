import React from "react"
import styled from "styled-components"

const JsonBinIoApi = require("jsonbin-io-api")

import { JSBIN_API_KEY, JSBIN_BIN_ID } from "gatsby-env-variables"

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

let jsonApi
const getEmotions = () => {
  if (!jsonApi) {
    jsonApi = new JsonBinIoApi(JSBIN_API_KEY)
  }
  return jsonApi.readBin({
    id: JSBIN_BIN_ID,
    version: "latest",
  })
}

const saveEmotion = emotion => {
  if (!jsonApi) {
    jsonApi = new JsonBinIoApi(JSBIN_API_KEY)
  }
  return getEmotions().then(data => {
    data.emotions.push(emotion)
    return jsonApi
      .updateBin({
        id: JSBIN_BIN_ID,
        data,
        versioning: false,
      })
  })
}

const saveVenmo = venmoUsername => {
  if (!jsonApi) {
    jsonApi = new JsonBinIoApi(JSBIN_API_KEY)
  }
  return getEmotions().then(bin => {
    if (bin.data.venmo_usernames.indexOf(venmoUsername) === -1) {
      bin.data.venmo_usernames.push(venmoUsername)
    }
    return jsonApi
      .updateBin({
        id: JSBIN_BIN_ID,
        data: bin.data,
        versioning: false,
      })
  })
}

const generateFlatSpot = (text, gifSrc, stillSrc, width = "650px") => {
  return (
    <div
      style={{ marginBottom: "30px", paddingLeft: "10%", position: "relative" }}
    >
      <Spot src={stillSrc} className="static" width={width} />
      <Spot src={gifSrc} width={width} />
      <FlatTextCentered>
        <FlatText
          textStyle={{
            color: "white",
            textShadow: "rgba(0, 0, 0, 0.8) 0px 0px 100px",
          }}
          text={text}
          overflowWrap="normal"
          fontSize="5rem"
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

export { generateFlatSpot, getRandomInt, shuffle, saveEmotion, getEmotions, saveVenmo }
