import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


function ViewProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/products/${id}`);
        setProduct(response.data.data); 
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <h1>Product Not Found...</h1>;
  }

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <div className="product-preview">
            <img
              src={product.image}
              alt="some product"
              width="250"
              height="250"
            />
        </div>
        <div className="view-product-detail">
          <h2>Name: {product.name}</h2>
          <h2>{product.price} THB</h2>
          <p>{product.description}</p>
        </div>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
