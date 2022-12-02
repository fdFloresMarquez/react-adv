import ProductCard from '../components';

import CoffeeMug from '/coffee-mug.png';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: CoffeeMug,
};

const ShoppingPage: React.FC = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
