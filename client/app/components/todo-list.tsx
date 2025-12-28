import { IconCheck, IconCircle, IconCross } from '~/assets/icons';
import type { Todo } from '~/types';
interface TodoListProps {
  onDeleteTodo: (id: number) => void;
  onSetCompleted: (id: number) => void;
  todos: Todo[];
}

export default function TodoList({
  onDeleteTodo,
  onSetCompleted,
  todos,
}: TodoListProps) {
  return (
    <ul
      className="relative mt-4 rounded-t-md inset-shadow-dark bg-white"
      id="todo-list"
    >
      {todos.map((todo) => {
        return (
          <li
            className="flex justify-between items-center w-full py-4 px-5 text-preset-3 leading-5! border-b border-purple-300
            focus-visible:outline-2 focus-visible:outline-purple-300 focus-visible:outline-offset-2"
            key={todo.id}
          >
            <button
              type="button"
              className={`${todo.completed ? 'line-through' : ''} flex items-center gap-4 cursor-pointer`}
              onClick={() => onSetCompleted(todo.id)}
              aria-label="mark todo as completed"
            >
              <div
                className={`flex justify-center items-center w-5 h-5 rounded-full border border-gray-300 ${todo.completed ? 'border-none bg-blue-400' : ''}`}
              >
                {todo.completed && (
                  <img src={IconCheck} alt="" className="h-2 fill-purple-400" />
                )}
              </div>

              {todo.description}
            </button>
            <button type="button" className="cursor-pointer">
              <img
                src={IconCross}
                alt="delete todo"
                className="w-3 h-3"
                onClick={() => onDeleteTodo(todo.id)}
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
