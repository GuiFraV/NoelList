import ProductItem from './ProductItem';
import products from '../data/products';

const ProductList = () => {
  return (
    <div>
      {products.map((product, index) => (
        <ProductItem key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;