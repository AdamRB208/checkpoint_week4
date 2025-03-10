import { AuthController } from "./Auth/AuthController.js"
import { ClockController } from "./controllers/ClockController.js"
import { ImageController } from "./controllers/ImageController.js"
import { TodosController } from "./controllers/TodosController.js"


class App {

  authController = new AuthController

  TodosController = new TodosController

  ImageController = new ImageController

  ClockController = new ClockController

  // TODO create the quote controller
  // TODO create the weather controller


}

window['app'] = new App()


