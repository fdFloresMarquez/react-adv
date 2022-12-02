export type ProductCardProps = {
  product: Product;
  children: React.ReactNode;
};

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

export type ProductImageProps = {
  img?: string;
};
