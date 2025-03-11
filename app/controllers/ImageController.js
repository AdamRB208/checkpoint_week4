
import { Pop } from "../utils/Pop.js"
import { imageService } from "../services/ImageService.js";
import { AppState } from "../AppState.js";



export class ImageController {
  constructor() {
    this.getImage()
    AppState.on('activeImg', this.drawImage)
  }

  async getImage() {
    try {
      // console.log('getting image');
      await imageService.getImage()
    } catch (error) {
      Pop.error(error)
      console.error('Could not get image', error)
    }
  }

  async drawImage() {
    //TODO pull image from AppState, log it
    const image = AppState.activeImg
    // console.log('pulled image', image.imgUrls)
    //TODO log imgURL that you want
    // console.log('logging image url', image.imgUrls.regular)
    // TODO grab Correct document ELement
    const imageElem = document.getElementById('main')
    imageElem.style.backgroundImage = `url(${image.imgUrls.regular})`

    // TODO Set Element Style (no log here, the whole background will change)
  }

}