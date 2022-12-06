import ProductCard from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

const ShoppingPage: React.FC = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <ProductCard
        key={product.id}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
        product={product}
      >
        {({ count, reset, increaseBy, isMaxCountReached }) => (
          <>
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-white text-bold" />
            <ProductCard.Buttons className="custom-buttons" />

            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            <button
              style={isMaxCountReached ? { display: 'none' } : {}}
              onClick={() => increaseBy(+2)}
            >
              +2
            </button>
            <span>{count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
