import { AppState } from "../AppState.js";
import { Images } from "../models/Image.js";
import { api } from "../utils/Axios.js";



// const nasaAPi = api.create({
//   baseURL: 'https://api.nasa.gov/planetary/'

// })

// const apiKey = 's1RURnFHSIwTW93lBnhWPxRlmW9LONuuJcmG3XG7'

class ImageService {

  async getImage() {
    const response = await api.get(`api/images`)
    console.log('got Image', response.data)
    const image = new Images(response.data)
    AppState.activeImg = image
    console.log('Got Image from Service', AppState.activeImg);

  }
}

export const imageService = new ImageService