
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
    //TODO pull image from AppState, log it

    //TODO log imgURL that you want

    // TODO grab Correct document ELement

    // TODO Set Element Style (no log here, the whole background will change)
  }

}