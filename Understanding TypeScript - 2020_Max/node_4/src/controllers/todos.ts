import { RequestHandler } from 'express';
import { Todo } from '../models/todos'
const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodos = new Todo(Math.random().toString(), text);

  TODOS.push(newTodos);
  res.status(201).json({ message: 'random', createdTodo: newTodos })
}