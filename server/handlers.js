function homeHandler(req, res) {
  res.render("pages/home")
}

function aboutHandler(req, res) {
  res.render("pages/about")
}

module.exports = {
  homeHandler,
  aboutHandler
}
