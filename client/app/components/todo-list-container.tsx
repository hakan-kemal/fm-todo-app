import { useEffect, useState } from 'react';
import { TodoFilter, TodoInput, TodoList, TodoListFooter } from '~/components';
import type { Todo } from '~/types';

export default function TodoListContainer() {
  const [activeFilter, setActiveFilter] = useState<
    'all' | 'active' | 'completed'
  >('all');
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/todos');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const data: Todo[] = await res.json();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleDeleteTodo = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Failed to delete todo');
      }

      setTodos(todos.filter((t) => t.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleSetCompleted = async (id: number) => {
    try {
      const todo = todos.find((t) => t.id === id);
      if (!todo) return;

      const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          completed: !todo.completed,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to update todo');
      }

      const updatedTodo: Todo = await res.json();
      setTodos(todos.map((t) => (t.id === id ? updatedTodo : t)));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

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
      {loading && <div>Loading todos...</div>}
      <TodoList
        onDeleteTodo={handleDeleteTodo}
        onSetCompleted={handleSetCompleted}
        todos={filteredTodos}
      />
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
