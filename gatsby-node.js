/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


// exports.onCreateWebpackConfig = ({ actions }) => {
  // actions.setWebpackConfig({
    // resolve: {
      // fallback: {
      // }
    // }
  // })
// }

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === "build-javascript") {
    const webpackConfig = getConfig()

    delete webpackConfig.optimization.splitChunks.cacheGroups.styles

    actions.replaceWebpackConfig(webpackConfig)
  }
}

// You can delete this file if you're not using it
