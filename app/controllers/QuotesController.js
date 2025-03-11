import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js"


export class QuotesController {
  constructor() {
    AppState.on('identity', this.getQuotes)
    console.log('QuotesController initialized');
    this.drawQuotes()
  }

  async getQuotes() {
    try {
      await quotesService.getQuotes()
      console.log('quotes controller running')
    } catch (error) {
      Pop.error(error)
      console.error('could not get quotes', error);
    }
  }

  async drawQuotes() {
    console.log('draw quotes called');
    console.log('AppState.quotes:', AppState.quotes);
    await quotesService.getQuotes()
    const quote = AppState.quotes
    let quoteContent = ''
    quote.forEach(quote => quoteContent += quote.quoteTemplate)
    const quoteElem = document.getElementById('quotesContent')
    quoteElem.innerHTML = quoteContent
    console.log('drawing quotes', quote)
  }

}