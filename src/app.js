class App {
  constructor() {
    this.todos = [];
    this.tags = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  addTag(tag) {
    this.tags.push(tag);
  }

  findTagByName(tagName) {
    return this.tags.find((t) => t.getName() === tagName);
  }

  getAllTodos() {
    return this.todos;
  }

  getTags() {
    return this.tags;
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter((t) => t !== todo);
  }

  deleteTag(tag) {
    const todosWithTag = this.getTodosByTag(tag);
    todosWithTag.forEach((todo) => {
      todo.removeTag(tag);
    });
    this.tags = this.tags.filter((t) => t !== tag);
  }

  getTodosByTag(tag) {
    return this.todos.filter((t) => t.tags.includes(tag));
  }

  getTodosByCategory(category) {
    return this.todos.filter((t) => t.category === category);
  }
}

const app = new App();

export default app;