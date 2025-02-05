import getProducts from '../data/fakeStore';
import { useState, useEffect } from "react";
import Card from '../components/Card';
import "../style.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Cart updated:", cart);
  };

  return (
    <>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}

export default Home;