import { Todos } from './models/Todos.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /** @type {Todos[]} */

  todos = []

}

export const AppState = createObservableProxy(new ObservableAppState())