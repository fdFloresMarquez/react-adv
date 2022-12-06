export type Product = {
  id: string;
  title: string;
  img?: string;
};

export type ProductContextProps = {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?: number;
};

export type onProductChangeArgs = {
  count: number;
  product: Product;
};

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export type ProductCardHandlers = {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
};
