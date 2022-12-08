import React, { useContext } from 'react';

import styles from '../styles/styles.module.css';

import { ProductContext } from './ProductCard';

type Props = {
  className?: string;
};

export const ProductTitle: React.FC<Props> = ({ className }) => {
  const { product } = useContext(ProductContext);

  return <span className={`${styles.productDescription} ${className}`}>{product.title}</span>;
};
