export default function TodoList() {
  return (
    <ul
      className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4"
      id="todo-list"
    >
      {/* Todo items will be dynamically added here */}
      <li>No todos yet</li>
    </ul>
  );
}
