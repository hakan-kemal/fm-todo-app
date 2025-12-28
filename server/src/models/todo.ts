// Todo as stored in database (all fields present)
export interface Todo {
  id: number;
  description: string;
  completed: boolean;
  created_at: Date;
  updated_at: Date;
}

// For creating new todos (timestamps and completed auto-generated)
export interface CreateTodoInput {
  description: string;
}

// For updating todos (all fields optional except what's being updated)
export interface UpdateTodoInput {
  description?: string;
  completed?: boolean;
}
