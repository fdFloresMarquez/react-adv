import { createContext } from 'react';

import { useProduct } from '../hooks';
import styles from '../styles/styles.module.css';
import { ProductCardProps, ProductContextProps } from '../types/types';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard: React.FC<ProductCardProps> = ({ children, product }) => {
  const [counter, increaseBy] = useProduct(0);

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
