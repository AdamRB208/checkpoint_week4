import { AppState } from "../AppState.js"

export class Todos {
  constructor(data) {
    this.completed = data.completed
    this.description = data.description
    this.creatorId = data.creatorId
    this.id = data.id
  }


  get todosTemplate() {
    return `
      <div class="d-flex d-column">
        <p class="fs-3">${this.description}</p>
      </div>
      <div class="text-end">
          <input onchange="app.TodosController.toggleTodoCompleted('${this.id}')" type="checkbox" title="Toggle Todo" ${this.completed ? 'checked' : ''} >
          <button onclick="app.TodosController.deleteTodo('${this.id}')" class="btn btn-success mdi mdi-trash-can-outline" type="button">Delete</button>
      </div>
    `
  }

  get deleteButton() {

    const user = AppState.identity

    if (user == null) {
      return ''
    }

    if (this.creatorId != user.id) {
      return ''
    }

    return `
  <input onchange="app.TodosController.toggleTodoCompleted('${this.id}')" type="checkbox" title="Toggle Todo" ${this.completed ? 'checked' : ''} >
  <button onclick="app.TodosController.deleteTodo('${this.id}')" class="btn btn-success mdi mdi-trash-can-outline" type="button">Delete</button>
      `
  }


}

