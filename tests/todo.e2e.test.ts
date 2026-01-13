import request from 'supertest';
import app from '../src/index';

describe('Todo API', () => {
  let todoId: string;

  it('should create a new todo', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ title: 'Test Todo' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Test Todo');
    expect(res.body.completed).toBe(false);
    todoId = res.body.id;
  });

  it('should get all todos', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should get a todo by id', async () => {
    const res = await request(app).get(`/todos/${todoId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(todoId);
  });

  it('should update a todo', async () => {
    const res = await request(app)
      .put(`/todos/${todoId}`)
      .send({ title: 'Updated Todo', completed: true });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Updated Todo');
    expect(res.body.completed).toBe(true);
  });

  it('should delete a todo', async () => {
    const res = await request(app).delete(`/todos/${todoId}`);
    expect(res.statusCode).toBe(204);
  });

  it('should return 404 for non-existent todo', async () => {
    const res = await request(app).get(`/todos/nonexistent`);
    expect(res.statusCode).toBe(404);
  });
});
