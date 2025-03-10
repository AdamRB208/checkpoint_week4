import { Identity } from './Auth/Identity.js'
import { Images } from './models/Image.js'
import { Todos } from './models/Todos.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /** @type {Identity} */
  identity = null

  /** @type {Todos[]} */
  todos = []

  /** @type {Images} */
  activeImg = null
}

export const AppState = createObservableProxy(new ObservableAppState())

