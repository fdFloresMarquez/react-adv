import ProductCard from '../components';

import CoffeeMug from '/coffee-mug.png';

import '../styles/custom-styles.css';

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
        <ProductCard className="bg-dark text-white" product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

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
