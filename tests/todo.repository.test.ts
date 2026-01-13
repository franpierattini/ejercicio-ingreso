import { ITodo } from '../src/models/todo.model';
import { InMemoryTodoRepository } from '../src/repositories/todo.repository';

describe('InMemoryTodoRepository', () => {
  let repo: InMemoryTodoRepository;

  beforeEach(() => {
    repo = new InMemoryTodoRepository();
  });

  it('should create a todo', () => {
    const todo = repo.create('Test');
    expect(todo.title).toBe('Test');
    expect(todo.completed).toBe(false);
    expect(todo.id).toBeDefined();
  });

  it('should get all todos', () => {
    repo.create('Test1');
    repo.create('Test2');
    const todos = repo.getAll();
    expect(todos.length).toBe(2);
  });

  it('should get a todo by id', () => {
    const todo = repo.create('Test');
    const found = repo.getById(todo.id);
    expect(found).toEqual(todo);
  });

  it('should update a todo', () => {
    const todo = repo.create('Test');
    const updated = repo.update(todo.id, 'Updated', true);
    expect(updated?.title).toBe('Updated');
    expect(updated?.completed).toBe(true);
  });

  it('should delete a todo', () => {
    const todo = repo.create('Test');
    const deleted = repo.delete(todo.id);
    expect(deleted).toBe(true);
    expect(repo.getById(todo.id)).toBeUndefined();
  });
});
