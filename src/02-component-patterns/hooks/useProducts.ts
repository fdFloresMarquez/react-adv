import { useState, useEffect, useRef } from 'react';

import { onProductChangeArgs, Product } from '../types/types';

type Props = {
  value?: number;
  onChange?: (args: onProductChangeArgs) => void;
  product: Product;
};

export const useProduct = ({ value = 0, onChange, product }: Props) => {
  const [counter, setCounter] = useState<number>(value);

  const isControlled = useRef<boolean>(!!onChange);

  useEffect(() => {
    setCounter(() => value);
  }, [value]);

  const increaseBy = (value: number): void => {
    if (isControlled.current) return onChange!({ count: value, product });

    const newValue = Math.max(counter + value, 0);

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  return [counter, increaseBy] as const;
};
