import { createContext } from 'react';

import { useProduct } from '../hooks';
import styles from '../styles/styles.module.css';
import { Product, ProductContextProps } from '../types/types';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export type Props = {
  product: Product;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const ProductCard: React.FC<Props> = ({ children, product, className, style }) => {
  const [counter, increaseBy] = useProduct(0);

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
