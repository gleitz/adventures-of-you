import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import FlatText from "./flattext"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div style={{ 'border-bottom': '1px solid #ccc'}}>
      <FlatText text={siteTitle} fontSize="60px" />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
