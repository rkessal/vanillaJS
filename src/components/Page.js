import EventEmitter from "events";

export default class extends EventEmitter {
  constructor({
    element
  }) {
    super()
    this.selectors = {
      element
    }
  }

  create() {
    this.element = document.querySelector(this.selectors.element)
    console.log(this.element)
  }
}
