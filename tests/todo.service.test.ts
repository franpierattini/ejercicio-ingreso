import { TodoService } from '../src/services/todo.service';
import { InMemoryTodoRepository } from '../src/repositories/todo.repository';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(new InMemoryTodoRepository());
  });

  it('should create a todo', () => {
    const todo = service.create('Test');
    expect(todo.title).toBe('Test');
    expect(todo.completed).toBe(false);
  });

  it('should get all todos', () => {
    service.create('Test1');
    service.create('Test2');
    const todos = service.getAll();
    expect(todos.length).toBe(2);
  });

  it('should get a todo by id', () => {
    const todo = service.create('Test');
    const found = service.getById(todo.id);
    expect(found).toEqual(todo);
  });

  it('should update a todo', () => {
    const todo = service.create('Test');
    const updated = service.update(todo.id, 'Updated', true);
    expect(updated?.title).toBe('Updated');
    expect(updated?.completed).toBe(true);
  });

  it('should delete a todo', () => {
    const todo = service.create('Test');
    const deleted = service.delete(todo.id);
    expect(deleted).toBe(true);
    expect(service.getById(todo.id)).toBeUndefined();
  });
});
