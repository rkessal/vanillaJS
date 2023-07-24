const { aboutHandler, homeHandler } = require("./handlers");

function routes(app) {
  app.get('/', homeHandler)
  app.get('/about', aboutHandler)
}

module.exports = {
  routes
}
