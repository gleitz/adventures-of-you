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

export { generateFlatSpot }
