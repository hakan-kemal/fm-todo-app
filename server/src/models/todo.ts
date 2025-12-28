export interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

export let todos: Todo[] = [
  { id: 1, description: 'Complete online JavaScript course', completed: true },
  { id: 2, description: 'Jog around the park 3x', completed: false },
  { id: 3, description: '10 minutes meditation', completed: false },
  { id: 4, description: 'Read for 1 hour', completed: false },
  { id: 5, description: 'Pick up groceries', completed: false },
  {
    id: 6,
    description: 'Complete Todo App on Frontend Mentor',
    completed: false,
  },
];
