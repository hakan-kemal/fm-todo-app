import { useState } from 'react';
import type { Todo } from '~/types';
import instance from '~/lib/axios';

interface TodoInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onKeyDown'> {
  onTodoCreated?: (todo: Todo) => void;
}

export default function TodoInput({ onTodoCreated, ...props }: TodoInputProps) {
  const [value, setValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const styles = `relative bg-white inset-shadow-input rounded-md w-full pl-14 py-4 pr-5 text-preset-3 leading-5! text-purple-800
    bg-[url(./assets/icons/icon-circle.svg)] bg-position-[1.25rem_center] bg-no-repeat bg-size-[1.25rem_1.25rem]
    focus-visible:outline-2 focus-visible:outline-purple-300 focus-visible:outline-offset-2`;

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    
    const trimmedValue = value.trim();
    if (!trimmedValue || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const res = await instance.post('/todos', {
        description: trimmedValue,
      });

      if (res.status === 201) {
        const newTodo: Todo = res.data;
        setValue('');
        onTodoCreated?.(newTodo);
      }
    } catch (error) {
      console.error('Error creating todo:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <input
      className={styles}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      disabled={isSubmitting}
      {...props}
    />
  );
}
