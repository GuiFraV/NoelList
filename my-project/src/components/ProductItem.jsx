import { motion } from 'framer-motion';

const ProductItem = ({ title, link, image }) => {
  return (
    <motion.div className="p-4 m-2 border rounded shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}>
      <img src={image} alt={title} className="w-full h-64 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <a href={link} className="text-blue-500 hover:text-blue-700 transition-colors duration-300">Offrir</a>
    </motion.div>
  );
};

export default ProductItem;
