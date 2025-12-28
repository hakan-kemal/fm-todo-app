import type { NextFunction, Request, Response } from 'express';
import type { Todo, CreateTodoInput, UpdateTodoInput } from '../models/todo';
import pool from '../config/database.js';

export const getTodos = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await pool.query<Todo>(
      'SELECT * FROM todos ORDER BY id ASC'
    );
    res.status(200).json(result.rows);
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

    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid todo ID' });
    }

    const result = await pool.query<Todo>('SELECT * FROM todos WHERE id = $1', [
      id,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    console.log(result.rows);

    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const createTodo = async (
  req: Request<{}, {}, CreateTodoInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { description } = req.body;

    if (!description || description.trim() === '') {
      return res.status(400).json({ message: 'Description is required' });
    }

    const result = await pool.query<Todo>(
      'INSERT INTO todos (description) VALUES ($1) RETURNING *',
      [description.trim()]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateTodo = async (
  req: Request<{ id: string }, {}, UpdateTodoInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid todo ID' });
    }

    const { description, completed } = req.body;

    // Build dynamic SQL query based on provided fields
    const updates: string[] = [];
    const values: any[] = [];
    let paramCount = 1;

    if (description !== undefined) {
      if (description.trim() === '') {
        return res.status(400).json({ message: 'Description cannot be empty' });
      }
      updates.push(`description = $${paramCount}`);
      values.push(description.trim());
      paramCount++;
    }

    if (completed !== undefined) {
      updates.push(`completed = $${paramCount}`);
      values.push(completed);
      paramCount++;
    }

    if (updates.length === 0) {
      return res.status(400).json({ message: 'No fields to update' });
    }

    // Add updated_at timestamp
    updates.push(`updated_at = CURRENT_TIMESTAMP`);
    values.push(id);

    const result = await pool.query<Todo>(
      `UPDATE todos SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`,
      values
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json(result.rows[0]);
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

    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid todo ID' });
    }

    const result = await pool.query(
      'DELETE FROM todos WHERE id = $1 RETURNING id',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
