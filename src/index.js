import "./styles.css";

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
}

function getOrCreateTag(tagName) {
  let tag;
  if (app.findTagByName(tagName)) {
    tag = app.findTagByName(tagName);
  } else {
    tag = createTag(tagName);
  }
  return tag;
}

function init() {
  createTodo("Todo 1", [createTag("Tag 1")], "to do", "Description 1", new Date());
}

domManipulator.todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const tagName = data.get("tags");
  const tag = getOrCreateTag(tagName);

  createTodo(
    data.get("title"),
    [tag],
    TodoItem.category.TODO,
    data.get("description"),
    data.get("dueDate")
  );
});

init();