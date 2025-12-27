interface TodoFilterProps {
  activeFilter: 'all' | 'active' | 'completed';
  count: number;
  onClearCompleted: () => void;
  onFilterChange: (filter: 'all' | 'active' | 'completed') => void;
}

export default function TodoFilter({
  activeFilter,
  count,
  onClearCompleted,
  onFilterChange,
}: TodoFilterProps) {
  return (
    <nav className="grid grid-cols-2 grid-rows-2 gap-y-4 rounded-md text-gray-600">
      <p className="relative bg-white rounded-bl-md inset-shadow-dark py-4 px-5 text-preset-3 text-left">
        {count} items left
      </p>

      <button
        type="button"
        className="relative bg-white rounded-br-md inset-shadow-dark py-4 px-5 text-preset-3 text-right cursor-pointer hover:text-gray-800"
        onClick={onClearCompleted}
      >
        Clear Completed
      </button>

      <ul className="relative bg-white rounded-md inset-shadow-dark py-4 px-5 col-span-2 flex justify-center gap-4 text-preset-2-bold">
        <li>
          <button
            type="button"
            className={`cursor-pointer hover:text-gray-800 ${
              activeFilter === 'all' ? 'text-blue-500' : ''
            }`}
            onClick={() => onFilterChange('all')}
          >
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`cursor-pointer hover:text-gray-800 ${
              activeFilter === 'active' ? 'text-blue-500' : ''
            }`}
            onClick={() => onFilterChange('active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`cursor-pointer hover:text-gray-800 ${
              activeFilter === 'completed' ? 'text-blue-500' : ''
            }`}
            onClick={() => onFilterChange('completed')}
          >
            Completed
          </button>
        </li>
      </ul>
    </nav>
  );
}
