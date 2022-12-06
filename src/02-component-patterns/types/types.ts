export type Product = {
  id: string;
  title: string;
  img?: string;
};

export type ProductContextProps = {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
};

export type onProductChangeArgs = {
  count: number;
  product: Product;
};

export interface ProductInCart extends Product {
  count: number;
}
