import Home from "pages/home"
import About from "pages/about"

class App {
  constructor () {
    this.content = document.querySelector(".content")
    this.template = this.content.dataset.template
    this.pages = new Map()
    this.pages.set("home", new Home())
    this.pages.set("about", new About())

    this.page = this.pages.get(this.template)
    this.page.create()
    this.page.addEventListeners()
  }
}

new App()
