interface TodoListProps {
  todos: {
    id: number;
    text: string;
    completed: boolean;
  }[];
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <ul
      className="relative mt-4 rounded-t-md inset-shadow-dark bg-white"
      id="todo-list"
    >
      {todos.map((todo) => {
        return (
          <li
            className="w-full pl-14 py-4 pr-5 text-preset-3 leading-5! border-b border-purple-300
            bg-[url(./assets/icons/icon-circle.svg)] bg-position-[1.25rem_center] bg-no-repeat bg-size-[1.25rem_1.25rem]
            focus-visible:outline-2 focus-visible:outline-purple-300 focus-visible:outline-offset-2"
            key={todo.id}
          >
            {todo.text}
          </li>
        );
      })}
    </ul>
  );
}
