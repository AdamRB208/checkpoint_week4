import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js"


export class QuotesController {
  constructor() {
    AppState.on('identity', this.getQuotes)
  }

  async getQuotes() {
    try {
      await quotesService.getQuotes()
      console.log('got quotes running')
    } catch (error) {
      Pop.error(error)
      console.error('couldnt get quotes', error);
    }

  }
}