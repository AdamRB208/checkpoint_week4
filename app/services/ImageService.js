import { AppState } from "../AppState.js";
import { Images } from "../models/Image.js";
import { api } from "../utils/Axios.js";


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