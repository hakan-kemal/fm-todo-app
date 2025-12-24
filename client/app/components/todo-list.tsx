import { Input } from '~/components';

export default function TodoList() {
  return (
    <section className="max-w-xl w-full space-y-6 px-4">
      <Input
        type="text"
        id="todo-input"
        placeholder="Create a new todo..."
        autoComplete="off"
      />
      <ul
        className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4"
        id="todo-list"
      >
        {/* Todo items will be dynamically added here */}
        <li>No todos yet</li>
      </ul>

      <p className="text-center">
        <span id="items-count"></span> items left
      </p>

      <nav>
        <ul className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
          <li>
            <button type="button">All</button>
          </li>
          <li>
            <button type="button">Active</button>
          </li>
          <li>
            <button type="button">Completed</button>
          </li>
        </ul>
      </nav>

      <button type="button">Clear Completed</button>

      <p className="text-center">Drag and drop to reorder list</p>
    </section>
  );
}
