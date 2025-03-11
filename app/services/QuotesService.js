import { AppState } from "../AppState.js";
import { Quotes } from "../models/Quotes.js";
import { api } from "../utils/Axios.js";


class QuotesService {

  async getQuotes() {
    const response = await api.get('api/quotes')
    console.log('got quotes', response.data)
    const quote = new Quotes(response.data)
    AppState.quotes = quote

  }

}

export const quotesService = new QuotesService()