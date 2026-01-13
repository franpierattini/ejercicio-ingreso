import { ITodo, Todo } from '../models/todo.model';
import { ITodoRepository } from '../repositories/todo.repository';

export class TodoService {
  constructor(private repository: ITodoRepository) {}

  getAll(): ITodo[] {
    return this.repository.getAll();
  }

  getById(id: string): ITodo | undefined {
    return this.repository.getById(id);
  }

  create(title: string): ITodo {
    return this.repository.create(title);
  }

  update(id: string, title: string, completed: boolean): ITodo | undefined {
    return this.repository.update(id, title, completed);
  }

  delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
