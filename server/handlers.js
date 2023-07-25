const { client } = require("./prismic/config/prismicConfig")

async function homeHandler(req, res) {
  const { data } = await client.getSingle("home")
  res.render("pages/home", {data})
}

async function aboutHandler(req, res) {
  const { data } = await client.getSingle("about")
  res.render("pages/about", {data})
}

module.exports = {
  homeHandler,
  aboutHandler
}
