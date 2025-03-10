

export class Images {
  constructor(data) {
    this.id = data.id
    this.height = data.height
    this.width = data.width
    this.imgUrls = data.imgUrls

  }


  get imageTemplate() {
    return `
    <main id="${this.imgUrls}">
    `
  }
}