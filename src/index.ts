import express, { Application } from 'express';
import { json } from 'body-parser';
import { todoRouter } from './routes/todo.routes';

const app: Application = express();
app.use(json());
app.use('/todos', todoRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
