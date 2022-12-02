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
