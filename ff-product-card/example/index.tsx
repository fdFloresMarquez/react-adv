import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  // img: CoffeeMug,
};

const App = () => {
  return (
    <>
      <ProductCard
        initialValues={{
          count: 4,
          // maxCount: 10,
        }}
        product={product}
      >
        {({ count, reset, increaseBy, isMaxCountReached }) => (
          <>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
