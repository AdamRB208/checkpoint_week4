import { AuthController } from "./Auth/AuthController.js"
import { ClockController } from "./controllers/ClockController.js"
import { ImageController } from "./controllers/ImageController.js"
import { QuotesController } from "./controllers/QuotesController.js"
import { TodosController } from "./controllers/TodosController.js"


class App {

  authController = new AuthController

  TodosController = new TodosController

  ImageController = new ImageController

  ClockController = new ClockController

  QuotesController = new QuotesController

  // TODO create the quote controller
  // TODO create the weather controller


}

window['app'] = new App()


