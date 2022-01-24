const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const {
    data: {
      allWpPage: { nodes: allPage },
    },
  } = await graphql(`
    query {
      allWpPage: allWpPage {
        nodes {
          id
          uri
        }
      }
    }
  `)

  allPage.forEach(page => {
    const { id, uri } = page
    createPage({
      path: `${uri}`,
      component: path.resolve(`src/templates/page.js`),
      context: { id },
    })
  })
}