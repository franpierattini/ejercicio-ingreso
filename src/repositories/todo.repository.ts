import { Todo, ITodo } from '../models/todo.model';
const { v4: uuidv4 } = require('uuid');

export interface ITodoRepository {
  getAll(): ITodo[];
  getById(id: string): ITodo | undefined;
  create(title: string): ITodo;
  update(id: string, title: string, completed: boolean): ITodo | undefined;
  delete(id: string): boolean;
}

export class InMemoryTodoRepository implements ITodoRepository {
  private todos: ITodo[] = [];

  getAll(): ITodo[] {
    return this.todos;
  }

  getById(id: string): ITodo | undefined {
    return this.todos.find(todo => todo.id === id);
  }

  create(title: string): ITodo {
    const todo = new Todo(uuidv4(), title);
    this.todos.push(todo);
    return todo;
  }

  update(id: string, title: string, completed: boolean): ITodo | undefined {
    const todo = this.getById(id);
    if (todo) {
      todo.title = title;
      todo.completed = completed;
    }
    return todo;
  }

  delete(id: string): boolean {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }
}
