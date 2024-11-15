import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProductSection from "./ProductSection";

const RelatedProducts = ({category, products}) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter(product => product.category === category).slice(0, 5);
    setFilteredProducts(filtered);
  }, [category, products]);

  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //   {filteredProducts.map((product) => (
    //     <div key={product.id} className="border rounded-lg p-4">
    //       <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    //       <h3 className="mt-2 font-medium">{product.name}</h3>
    //       <p className="text-gray-600">{product.price} VNĐ</p>
    //     </div>
    //   ))}
    // </div>
    <ProductSection products={filteredProducts} title="Sản phẩm liên quan" />
  )
}

export default RelatedProducts

RelatedProducts.propTypes = {
  category: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired
}

