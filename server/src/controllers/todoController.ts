import type { Request, Response, NextFunction } from 'express';
import { todos, type Todo } from '../models/todo';

export const getTodos = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export const getTodoById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id, 10);
    const todo = todos.find((t) => t.id === id);

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};

export const createTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { description } = req.body;
    const newTodo: Todo = {
      id: Date.now(),
      description,
      completed: false,
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};

export const updateTodo = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id, 10);
    const {
      description,
      completed,
    }: { description: string; completed: boolean } = req.body;
    const todoIndex = todos.findIndex((t) => t.id === id);

    if (todoIndex === -1) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    const updatedTodo: Todo = {
      ...todos[todoIndex],
      id,
      description,
      completed,
    };
    todos[todoIndex] = updatedTodo;

    res.status(200).json(updatedTodo);
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id, 10);
    const todoIndex = todos.findIndex((t) => t.id === id);

    if (todoIndex === -1) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    todos.splice(todoIndex, 1);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
