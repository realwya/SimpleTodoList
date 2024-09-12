import app from "./app";
import Tag from "./tag";
import TodoItem from "./todo-item";
import domManipulator from "./DOMmanipulator";

function createTodo(title, tags, category, description, dueDate) {
  const todo = new TodoItem(title, tags, category, description, dueDate);
  app.addTodo(todo);
  domManipulator.addTodo(todo);
}

function createTag(name) {
  const tag = new Tag(name);
  app.addTag(tag);
  domManipulator.addTag(tag);
}

function init() {
  createTodo("Todo 1", [createTag("Tag 1")], "to do", "Description 1", new Date());
}

init();