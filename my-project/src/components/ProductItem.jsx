
import { motion } from 'framer-motion';

const ProductItem = ({ title, link, image }) => {
  return (
    <motion.div className="product-item" whileHover={{ scale: 1.1 }}>
      <h3>{title}</h3>
      <a href={link}>Buy Now</a>
      <img src={image} alt={title} />
    </motion.div>
  );
};

export default ProductItem;
