class TodoItem {
  static category = {
    TO_DO: "to do",
    WATCHING: "watching",
    LATER: "later",
  };

  constructor(title, description, dueDate, tags = [], category = category.TO_DO) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.tags = tags;
    this.category = category;
    this.done = false;
  }

  setTitle(title) {
    this.title = title;
  }

  setDescription(description) {
    this.description = description;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  addTag(tag) {
    this.tags.push(tag);
  }

  removeTag(tag) {
    this.tags = this.tags.filter((t) => t !== tag);
  }

  setCategory(category) {
    this.category = category;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getDueDate() {
    return this.dueDate;
  }

  getTags() {
    return this.tags;
  }

  getCategory() {
    return this.category;
  }
  
  toggleDone() {
    this.done = !this.done;
  } 
  
}

export default TodoItem;