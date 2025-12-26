import { TodoFilter, TodoInput, TodoList, TodoListFooter } from '~/components';

export default function TodoListContainer() {
  return (
    <section className="max-w-xl w-full space-y-6 px-4">
      <TodoInput
        type="text"
        id="todo-input"
        placeholder="Create a new todo..."
        autoComplete="off"
      />
      <TodoList />
      <TodoFilter count={5} />
      <TodoListFooter text="Drag and drop to reorder list" />
    </section>
  );
}
