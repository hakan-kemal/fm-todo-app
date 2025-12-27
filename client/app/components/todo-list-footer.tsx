export default function TodoListFooter({ text }: { text: string }) {
  return (
    <p className="mt-10 text-preset-2-regular text-gray-600 text-center">
      {text}
    </p>
  );
}
