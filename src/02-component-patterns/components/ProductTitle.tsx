import { useContext } from 'react';

import styles from '../styles/styles.module.css';

import { ProductContext } from './ProductCard';

export const ProductTitle: React.FC = () => {
  const { product } = useContext(ProductContext);

  return <span className={styles.productDescription}>{product.title}</span>;
};
