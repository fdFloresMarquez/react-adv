import { useState } from 'react';

import { onProductChangeArgs, ProductInCart } from '../types/types';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCardChange = ({ count, product }: onProductChangeArgs) => {
    setShoppingCart((current) => {
      if (count < 1) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [product.id]: toDelete, ...rest } = current;

        return rest;
      } else
        return {
          ...current,
          [product.id]: { ...product, count },
        };
    });
  };

  return [shoppingCart, onProductCardChange] as const;
};
