import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import FlatText from "./flattext"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      margin: `1.45rem 0`,
    }}
  >
    <div style={{ 'borderBottom': '1px solid #ccc'}}>
      <FlatText text={siteTitle} fontSize="2em" />
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
