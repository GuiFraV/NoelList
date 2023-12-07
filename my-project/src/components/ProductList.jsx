import ProductItem from './ProductItem';
import products from '../data/products';

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <ProductItem key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
