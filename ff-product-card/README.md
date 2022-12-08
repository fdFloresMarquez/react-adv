# FF-Product-Card

Este es un paquete de pruebas de desplique en NPM

### Flores Marquez Facundo Daniel

## Ejemplo

```
import { ProductCard } from 'ff-product-card'
```

```
<ProductCard
    key={product.id}
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
```
