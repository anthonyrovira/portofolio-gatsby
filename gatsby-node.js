/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions: { createPage } }) => {
  const projects = require("./src/json/ar-projects.json")
  for (let i = 0; i < projects.length; i++) {
    const {
      id,
      url,
      title,
      description,
      thumbnail,
      date,
      deploys,
      route,
    } = projects[i]
    const stacks = projects[i]["stacks-tags"]
    const technologies = projects[i]["technologies-tags"]
    createPage({
      path: `/projects/${route}`,
      component: require.resolve("./src/templates/projects.js"),
      context: {
        id,
        url,
        title,
        description,
        thumbnail,
        date,
        deploys,
        stacks,
        technologies,
        route,
      },
    })
  }
}
