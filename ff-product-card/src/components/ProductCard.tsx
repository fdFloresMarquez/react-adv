import React, { createContext } from 'react';

import { useProduct } from '../hooks';
import styles from '../styles/styles.module.css';
import {
  InitialValues,
  onProductChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from '../types/types';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export type Props = {
  product: Product;
  // children?: React.ReactNode;
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onProductChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
};

export const ProductCard: React.FC<Props> = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}) => {
  const [counter, increaseBy, isMaxCountReached, reset] = useProduct({
    value,
    onChange,
    product,
    initialValues,
  });
  const maxCount = initialValues?.maxCount;

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
