import React from "react"
import styled from "styled-components"

import { shuffle, getRandomInt } from '../utils'

const FlatTextHolder = styled.div`
  position: relative;
`

const FlatText = styled.div`
  font-family: "Rubik Mono One", sans-serif;
  font-size: ${props => props.fontSize};
  line-height: 1em;
  color: ${props => props.color};
  position: relative;
`

const FlatTextWithColor = styled(FlatText)`
  left: ${props => (props.left || "0") + "px"};
  top: ${props => (props.top || "0") + "px"};
  color: ${props => props.color};
  overflow-wrap: ${props => props.overflowWrap};
  position: absolute;
  opacity: 0.85;
`

const generateFlatTextWithColor = (
  color,
  text,
  fontSize,
  width,
  overflowWrap
) => {
  return (
    <FlatTextWithColor
      color={color}
      fontSize={fontSize}
      top={getRandomInt(-1 * width, width)}
      left={getRandomInt(-1 * width, width)}
      overflowWrap={overflowWrap}
      key={color}
    >
      {text}
    </FlatTextWithColor>
  )
}

export default ({
  text,
  fontSize,
  textStyle,
  width = 5,
  overflowWrap = "anywhere",
}) => {
  const colors = shuffle(["yellow", "magenta", "cyan"])
  return (
    <FlatTextHolder>
      {colors.map(color =>
        generateFlatTextWithColor(color, text, fontSize, width, overflowWrap)
      )}
      <FlatText style={textStyle} fontSize={fontSize}>
        {text}
      </FlatText>
    </FlatTextHolder>
  )
}
