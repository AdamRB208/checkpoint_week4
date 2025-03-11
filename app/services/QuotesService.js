import { api } from "../utils/Axios.js";


class QuotesService {

  async getQuotes() {
    const response = await api.get('api/quotes')
    console.log('got quotes', response.data)

  }
}

export const quotesService = new QuotesService()