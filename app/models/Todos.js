
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
                  <input class="btn" type="checkbox" id="complete">
                  <button onclick="app.TodosController.deleteTodo('${this.id}')" class="btn btn-success mdi mdi-trash-can-outline" type="button">Delete</button>
                </div>
    `
  }



}