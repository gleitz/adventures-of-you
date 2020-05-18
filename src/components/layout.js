/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { PAGE_TYPE } from "gatsby-env-variables"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="page-content-holder">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="page-content">
          <main>{children}</main>
        </div>
        <footer>{PAGE_TYPE === 'birthday' ? `© ${new Date().getFullYear()}, P³ Productions`: `© ${new Date().getFullYear() + 1000}, The Great Hu`}</footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
