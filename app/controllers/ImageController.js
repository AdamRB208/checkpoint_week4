
import { Pop } from "../utils/Pop.js"
import { imageService } from "../services/ImageService.js";
import { AppState } from "../AppState.js";



export class ImageController {
  constructor() {
    this.getImage()
  }

  async getImage() {
    try {
      console.log('getting image');
      await imageService.getImage()
    } catch (error) {
      Pop.error(error)
      console.log('Could not get image', error)
    }
  }

  async drawImage() {
    const image = AppState.activeImg
    let drawnImage = ''
    image.forEach(image => drawnImage += image.imageTemplate)
    const imageElem = document.getElementById('main')
    imageElem.innerHTML = image

  }

}