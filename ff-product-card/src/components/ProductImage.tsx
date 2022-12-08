import React, { useContext } from 'react';

import NoImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

import { ProductContext } from './ProductCard';

type Props = {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const ProductImage: React.FC<Props> = ({ className, img = '', style }) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = NoImage;
  }

  return (
    <img
      alt="Product image"
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      style={style}
    />
  );
};
