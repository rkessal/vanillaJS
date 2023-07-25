const express = require("express")
const path = require("path")
const { routes } = require("./server/routes") 

const app = express()
const port = 3000;

app.set("view engine", "pug");
app.set("views", "views")
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'views')))
routes(app)

app.listen(port, () => {
  console.log(`app is running on ${port}`)
})

module.exports = app
