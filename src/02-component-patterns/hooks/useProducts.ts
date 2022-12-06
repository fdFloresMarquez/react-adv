import { useState, useEffect } from 'react';

import { onProductChangeArgs, Product } from '../types/types';

type Props = {
  value?: number;
  onChange?: (args: onProductChangeArgs) => void;
  product: Product;
};

export const useProduct = ({ value = 0, onChange, product }: Props) => {
  const [counter, setCounter] = useState<number>(value);

  useEffect(() => {
    setCounter(() => value);
  }, [value]);

  const increaseBy = (value: number): void => {
    const newValue = Math.max(counter + value, 0);

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  return [counter, increaseBy] as const;
};
