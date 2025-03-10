import { Identity } from './Auth/Identity.js'
import { Todos } from './models/Todos.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /** @type {Identity} */
  identity = null

  /** @type {Todos[]} */
  todos = []

}

export const AppState = createObservableProxy(new ObservableAppState())