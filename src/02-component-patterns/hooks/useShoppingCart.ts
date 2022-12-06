import { useState } from 'react';

import { onProductChangeArgs, ProductInCart } from '../types/types';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCardChange = ({ count, product }: onProductChangeArgs) => {
    setShoppingCart((current) => {
      const productInCart: ProductInCart = current[product.id] || { ...product, count: 0 };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;

        return {
          ...current,
          [product.id]: productInCart,
        };
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [product.id]: toDelete, ...rest } = current;

      return rest;

      // if (count < 1) {
      //   const { [product.id]: toDelete, ...rest } = current;

      //   return rest;
      // } else
      //   return {
      //     ...current,
      //     [product.id]: { ...product, count },
      //   };
    });
  };

  return [shoppingCart, onProductCardChange] as const;
};
