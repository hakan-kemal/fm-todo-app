export default function TodoFilter({ count }: { count?: number }) {
  return (
    <nav className="flex items-center gap-24 p-6 bg-white rounded-md inset-shadow-dark text-gray-600">
      <p className="text-preset-3 text-center">{count} items left</p>

      <ul className="text-preset-2-bold flex justify-center gap-4">
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

      <button className="text-preset-3" type="button">
        Clear Completed
      </button>
    </nav>
  );
}
