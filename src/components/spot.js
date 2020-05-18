import React from "react"
import styled from "styled-components"
import "./style.css"

const Spot = styled.img`
  border-radius: 50%;
  border: 3px solid black;
  width: ${props => (props.width || "100%")};
  object-fit: cover;
  max-width: inherit;
`

export default ({src, width, height, className}) => (
  <div>
    <Spot src={src} className={className} width={width} height={width} />
  </div>
)
