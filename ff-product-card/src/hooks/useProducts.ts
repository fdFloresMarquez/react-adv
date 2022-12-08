import { useState, useEffect, useRef } from 'react';

import { InitialValues, onProductChangeArgs, Product } from '../types/types';

type Props = {
  value?: number;
  onChange?: (args: onProductChangeArgs) => void;
  product: Product;
  initialValues?: InitialValues;
};

export const useProduct = ({ value = 0, onChange, product, initialValues }: Props) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef<boolean>(false);

  const increaseBy = (value: number): void => {
    const newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) setCounter(Math.min(newValue, initialValues.maxCount));
    else setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = (): void => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    isMounted.current = true;
    setCounter(() => value);
  }, [value]);

  useEffect(() => {}, []);

  const isMaxCountReached = !!initialValues?.count && initialValues.maxCount === counter;

  return [counter, increaseBy, isMaxCountReached, reset] as const;
};
