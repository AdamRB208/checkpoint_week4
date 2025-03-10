
import { Pop } from "../utils/Pop.js"
import { imageService } from "../services/ImageService.js";



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
}