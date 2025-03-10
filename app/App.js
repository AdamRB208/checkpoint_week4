import { AuthController } from "./Auth/AuthController.js"
import { ImageController } from "./controllers/ImageController.js"
import { TodosController } from "./controllers/TodosController.js"


class App {

  authController = new AuthController

  TodosController = new TodosController

  ImageController = new ImageController
}

window['app'] = new App()


