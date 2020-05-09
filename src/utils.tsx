import React from "react"
import styled from "styled-components"

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

const generateFlatSpot = (text, gifSrc, stillSrc) => {
  return (
    <div
      style={{ marginBottom: "30px", paddingLeft: "10%", position: "relative" }}
    >
      <Spot src={stillSrc} className="static" width="650px" />
      <Spot src={gifSrc} width="650px" />
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

export { generateFlatSpot, getRandomInt, shuffle }
