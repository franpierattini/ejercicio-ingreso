import { Router, Request, Response } from 'express';
import { InMemoryTodoRepository } from '../repositories/todo.repository';
import { TodoService } from '../services/todo.service';

const repository = new InMemoryTodoRepository();
const service = new TodoService(repository);
export const todoRouter = Router();

// GET /todos
// List all todos
// @returns {ITodo[]}
todoRouter.get('/', (req: Request, res: Response) => {
  res.json(service.getAll());
});

// GET /todos/:id
// Get a todo by id
// @returns {ITodo}
todoRouter.get('/:id', (req: Request, res: Response) => {
  const todo = service.getById(req.params.id);
  if (!todo) return res.status(404).json({ message: 'Todo not found' });
  res.json(todo);
});

// POST /todos
// Create a new todo
// @body {title: string}
// @returns {ITodo}
todoRouter.post('/', (req: Request, res: Response) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });
  const todo = service.create(title);
  res.status(201).json(todo);
});

// PUT /todos/:id
// Update a todo
// @body {title: string, completed: boolean}
// @returns {ITodo}
todoRouter.put('/:id', (req: Request, res: Response) => {
  const { title, completed } = req.body;
  if (typeof title !== 'string' || typeof completed !== 'boolean') {
    return res.status(400).json({ message: 'Invalid data' });
  }
  const todo = service.update(req.params.id, title, completed);
  if (!todo) return res.status(404).json({ message: 'Todo not found' });
  res.json(todo);
});

// DELETE /todos/:id
// Delete a todo
// @returns {void}
todoRouter.delete('/:id', (req: Request, res: Response) => {
  const deleted = service.delete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Todo not found' });
  res.status(204).send();
});
