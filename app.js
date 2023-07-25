const express = require("express")
const path = require("path")
const { routes } = require("./server/routes") 
const { prismic } = require("./server/middlewares")

const app = express()
const port = 3000;

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'views')))
app.use(prismic)
routes(app)

app.listen(port, () => {
  console.log(`app is running on ${port}`)
})

module.exports = app
