import React from "react"
import styled from "styled-components"

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
  var currentIndex = array.length,
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

const FlatTextHolder = styled.div`
  position: relative;
`

const FlatText = styled.div`
  font-family: "Rubik Mono One", sans-serif;
  font-size: ${props => props.fontSize};
  line-height: ${props => props.fontSize};
  color: ${props => props.color};
  position: relative;
  white-space: nowrap;
`

const FlatTextWithColor = styled(FlatText)`
  left: ${props => (props.left || "0") + "px"};
  top: ${props => (props.top || "0") + "px"};
  color: ${props => props.color};
  position: absolute;
  opacity: 0.85;
`

const generateFlatTextWithColor = (color, text, fontSize, width) => {
  return (
    <FlatTextWithColor
      color={color}
      fontSize={fontSize}
      top={getRandomInt(-1 * width, width)}
      left={getRandomInt(-1 * width, width)}
    >
      {text}
    </FlatTextWithColor>
  )
}

export default ({ text, fontSize, textStyle, width = 5 }) => {
  const colors = shuffle(["cyan", "magenta", "yellow"])
  return (
    <FlatTextHolder>
      {colors.map(color =>
        generateFlatTextWithColor(color, text, fontSize, width)
      )}
      <FlatText style={textStyle} fontSize={fontSize}>
        {text}
      </FlatText>
    </FlatTextHolder>
  )
}
