import { useState } from 'react';

export const useProduct = (initialValue: number) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const increaseBy = (value: number): void => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return [counter, increaseBy] as const;
};
