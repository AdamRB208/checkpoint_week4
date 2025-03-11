
import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js"


export class TodosController {
  constructor() {
    AppState.on('identity', this.getTodos)
    AppState.on('todos', this.drawTodos)


  }


  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      Pop.error(error)
      console.error('get controller is running', error);
    }
  }


  drawTodos() {
    const todos = AppState.todos
    let todoContent = ''
    todos.forEach(todo => todoContent += todo.todosTemplate)

    const todoElem = document.getElementById('todoContent')
    todoElem.innerHTML = todoContent
    // console.log('drawing To DOs');

    const incomplete = todos.filter(todo => !todo.completed)

    document.getElementById('todoCount').innerText = `${incomplete.length}/${todos.length}`

  }

  async createTodo() {
    try {
      event.preventDefault()
      const todoFormElem = event.target
      const todoData = getFormData(todoFormElem)
      await todosService.createTodo(todoData)
    } catch (error) {
      Pop.error('could not create TO DO', error)
      console.error('could not create TO DO', error);
    }
  }

  async deleteTodo(todoId) {
    try {
      const todoToDelete = await Pop.confirm('Are you sure you want to delete this To Do?')
      if (!todoToDelete) return
      await todosService.deleteTodo(todoId)
    } catch (error) {
      Pop.error('unable to delete To Do', error)
      console.error('unable to delete To Do', error);
    }
  }

  async toggleTodo(todoId) {
    try {
      // console.log('toggling todo with the id of' + todoId);
      //== good to here
      await todosService.updateTodo(todoId)
    } catch (error) {
      Pop.error(error, 'Could not toggle To Do')
      console.error('Could not toggle To Do', error);
    }

  }
}

