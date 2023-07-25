const fetch = require("node-fetch")
const prismic = require("@prismicio/client")

const repoName = "vanillajs"

const client = prismic.createClient(repoName, {fetch})

module.exports = {
  client
}
