import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export * from './ProductButtons';
export * from './ProductImage';
export * from './ProductTitle';

export const ProductCard = Object.assign(ProductCardHOC, {
  Buttons: ProductButtons,
  Image: ProductImage,
  Title: ProductTitle,
});

export default ProductCard;
