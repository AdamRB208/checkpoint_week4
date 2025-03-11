import { AppState } from "../AppState.js";
import { Quotes } from "../models/Quotes.js";
import { api } from "../utils/Axios.js";


class QuotesService {

  async getQuotes() {
    const response = await api.get('api/quotes')
    console.log('got quotes', response.data)
    const quote = new Quotes(response.data)
    AppState.quotes = quote
    // const quote = response.data.map(quotesPOJO => new Quotes(quotesPOJO))
    // AppState.quotes = quote
    // console.log('storing quotes', quote)
    // const quotes = [];
    // quotes.push("quote", "author", "source");
    // console.log('pushing quotes', quotes.length);
  }

}

export const quotesService = new QuotesService()