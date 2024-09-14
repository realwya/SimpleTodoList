class DOMManipulator {
  constructor() {
    this.todoForm = document.querySelector(".todo-form");
    this.watchForm = document.querySelector(".watch-form");
    this.laterForm = document.querySelector(".later-form");
    this.todoList = document.querySelector(".todo-list");
    this.watchList = document.querySelector(".watch-list");
    this.laterList = document.querySelector(".later-list");
  }

  addTodo(todo) {
    const category = todo.category;
    const element = this.createTodoElement(todo);
    if (category === "todo") {
      this.todoList.appendChild(element);
    } else if (category === "watch") {
      this.watchList.appendChild(element);
    } else if (category === "later") {
      this.laterList.appendChild(element);
    }
  }

  createTodoElement(todo) {
    const li = document.createElement("li");
    li.classList.add("task-item");
    li.innerHTML = `
      <input type="checkbox" id="${todo.title}" name="${todo.title}">
      <label for="${todo.title}">${todo.title}</label>
    `;
    return li;
  }
}

const domManipulator = new DOMManipulator();

export default domManipulator;