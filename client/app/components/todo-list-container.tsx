import { useEffect, useState } from 'react';
import { TodoFilter, TodoInput, TodoList, TodoListFooter } from '~/components';
import type { Todo } from '~/types';
import instance from '~/lib/axios';

export default function TodoListContainer() {
  const [activeFilter, setActiveFilter] = useState<
    'all' | 'active' | 'completed'
  >('all');
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await instance.get('/todos');
        setTodos(res.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
        setError('Failed to load todos. Please refresh the page.');
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleDeleteTodo = async (id: number) => {
    // Optimistic update
    const previousTodos = todos;
    setTodos((prev) => prev.filter((t) => t.id !== id));

    try {
      await instance.delete(`/todos/${id}`);
    } catch (error) {
      console.error('Error deleting todo', error);
      // Rollback on error
      setTodos(previousTodos);
      setError('Failed to delete todo. Please try again.');
      setTimeout(() => setError(null), 3000);
    }
  };

  const handleSetCompleted = async (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    // Optimistic update
    const previousTodos = todos;
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

    try {
      const res = await instance.put(`/todos/${id}`, {
        completed: !todo.completed,
      });

      // Update with server response
      const updatedTodo: Todo = res.data;
      setTodos((prev) => prev.map((t) => (t.id === id ? updatedTodo : t)));
    } catch (error) {
      console.error('Error updating todo', error);
      // Rollback on error
      setTodos(previousTodos);
      setError('Failed to update todo. Please try again.');
      setTimeout(() => setError(null), 3000);
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (activeFilter === 'active') return !todo.completed;
    if (activeFilter === 'completed') return todo.completed;
    return true;
  });

  const handleClearCompleted = async () => {
    const completedTodos = todos.filter((todo) => todo.completed);
    if (completedTodos.length === 0) return;

    // Optimistic update
    const previousTodos = todos;
    setTodos((prev) => prev.filter((todo) => !todo.completed));

    try {
      await Promise.all(
        completedTodos.map((todo) => instance.delete(`/todos/${todo.id}`))
      );
    } catch (error) {
      console.error('Error clearing completed todos:', error);
      // Rollback on error
      setTodos(previousTodos);
      setError('Failed to clear completed todos. Please try again.');
      setTimeout(() => setError(null), 3000);
    }
  };

  const handleFilterChange = (filter: 'all' | 'active' | 'completed') => {
    setActiveFilter(filter);
  };

  const handleTodoCreated = (newTodo: Todo) => {
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <section className="max-w-xl w-full px-4 -mt-27">
      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}
      <TodoInput
        type="text"
        id="todo-input"
        autoComplete="off"
        placeholder="Create a new todo..."
        onTodoCreated={handleTodoCreated}
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
