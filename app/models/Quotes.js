

export class Quotes {
  constructor(data) {
    this.quote = data.quote || data.author || data.source;
  }

  get quoteTemplate() {
    return `
  <h1 class="quotes">${this.quote}</h1>
  `
  }

}