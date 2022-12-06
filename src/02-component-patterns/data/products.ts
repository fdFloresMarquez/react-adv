import { Product } from '../types/types';

import CoffeeMug from '/coffee-mug.png';
import CoffeeMug2 from '/coffee-mug2.png';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: CoffeeMug,
};

const product2 = {
  id: '2',
  title: 'Coffee Mug - Meme',
  img: CoffeeMug2,
};

export const products: Product[] = [product, product2];
