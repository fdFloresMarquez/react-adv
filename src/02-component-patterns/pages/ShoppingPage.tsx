import ProductCard from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';
import { Product } from '../types/types';

const ShoppingPage: React.FC = () => {
  const [shoppingCart, onProductCardChange] = useShoppingCart();

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            className="bg-dark text-white"
            product={product}
            value={shoppingCart[product.id] && shoppingCart[product.id].count}
            onChange={(event) => onProductCardChange(event)}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-white text-bold" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => {
          return (
            <ProductCard
              key={key}
              className="bg-dark text-white"
              product={product}
              style={{ width: '150px' }}
              value={product.count}
              onChange={(event) => onProductCardChange(event)}
            >
              <ProductCard.Image
                className="custom-image"
                style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
              />
              <ProductCard.Buttons className="custom-buttons" />
            </ProductCard>
          );
        })}
      </div>

      <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div>
    </div>
  );
};

export default ShoppingPage;
