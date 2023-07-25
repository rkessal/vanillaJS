import EventEmitter from "events";

export default class extends EventEmitter {
  constructor({
    element
  }) {
    super()
    this.selectors = {
      element,
      content: ".content"
    }
  }

  create() {
    this.element = document.querySelector(this.selectors.element)
    this.content = document.querySelector(this.selectors.content)
    console.log(this.element)
    console.log(this.content)
  }

  getLinks() {
    return this.element.querySelectorAll("a")
  }

  async setRouting(e, href) {
    e.preventDefault()
    const request = await window.fetch(href)
    const response = await request.text()
    const html = document.createElement('div')
    html.innerHTML = response
    const content = html.querySelector('.content')
    document.title = html.querySelector('title').textContent
    this.content.innerHTML = content.innerHTML
    this.content.dataset.template = content.dataset.template
    this.template = content.dataset.template
  }

  addEventListeners() {
    const links = this.getLinks()
    links.forEach((link) => {
      const target = link.getAttribute("href")
      link.addEventListener('click', (e) => {
        this.setRouting(e, target)

      })
    })
  }
}
