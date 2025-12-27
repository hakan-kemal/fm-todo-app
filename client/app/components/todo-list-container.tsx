import { useState } from 'react';
import { TodoFilter, TodoInput, TodoList, TodoListFooter } from '~/components';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoListContainer() {
  const initialState = () => {
    const todos = [
      { id: 1, text: 'Complete online JavaScript course', completed: true },
      { id: 2, text: 'Jog around the park 3x', completed: false },
      { id: 3, text: '10 minutes meditation', completed: false },
      { id: 4, text: 'Read for 1 hour', completed: false },
      { id: 5, text: 'Pick up groceries', completed: false },
      { id: 6, text: 'Complete Todo App on Frontend Mentor', completed: false },
    ];

    return todos;
  };

  const [todos, setTodos] = useState<Todo[]>(initialState);
  const [activeFilter, setActiveFilter] = useState<
    'all' | 'active' | 'completed'
  >('all');

  const filteredTodos = todos.filter((todo) => {
    if (activeFilter === 'active') return !todo.completed;
    if (activeFilter === 'completed') return todo.completed;
    return true;
  });

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const handleFilterChange = (filter: 'all' | 'active' | 'completed') => {
    setActiveFilter(filter);
  };

  return (
    <section className="max-w-xl w-full px-4 -mt-27">
      <TodoInput
        type="text"
        id="todo-input"
        autoComplete="off"
        placeholder="Create a new todo..."
      />
      <TodoList todos={filteredTodos} />
      <TodoFilter
        activeFilter={activeFilter}
        count={todos.filter((todo) => !todo.completed).length}
        onClearCompleted={handleClearCompleted}
        onFilterChange={handleFilterChange}
      />
      <TodoListFooter text="Drag and drop to reorder list" />
    </section>
  );
}
