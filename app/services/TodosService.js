import { AppState } from "../AppState.js";
import { Todos } from "../models/Todos.js";
import { api } from "../utils/Axios.js";


class TodosService {

  async getTodos() {
    const response = await api.get('api/todos')
    console.log('got Todos', response.data);
    const todos = response.data.map(todosPOJO => new Todos(todosPOJO))
    AppState.todos = todos
  }

  async createTodo(todoData) {
    const response = await api.post('api/todos', todoData)
    console.log('created TO DO', response.data);
    const todo = new Todos(response.data)
    AppState.todos.unshift(todo)
  }

  async deleteTodo(todoId) {
    const response = await api.delete(`api/todos/${todoId}`)
    console.log('delete todo', response.data)
    const todoIndex = AppState.todos.findIndex(todos => todos.id == todoId)
    AppState.todos.splice(todoIndex, 1)
  }
}

export const todosService = new TodosService()
