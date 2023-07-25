const { client } = require("./prismic/config/prismicConfig.js")

function prismic(_, res, next) {
  res.locals.ctx = {
    prismic: client
  }
  next()
}

module.exports = {
  prismic
}
