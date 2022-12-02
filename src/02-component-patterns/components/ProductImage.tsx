import { useContext } from 'react';

import { ProductImageProps } from '../types/types';
import NoImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

import { ProductContext } from './ProductCard';

export const ProductImage: React.FC<ProductImageProps> = ({ img = '' }) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = NoImage;
  }

  return <img alt="Product image" className={styles.productImg} src={imgToShow} />;
};
