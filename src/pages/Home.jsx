import { useOutletContext } from 'react-router';
import Card from '../components/Card';
import { useState, useEffect } from 'react';

function Home() {
  const { addToCart } = useOutletContext();  // Get addToCart from Outlet context
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {products.map((product) => (
        <Card key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Home;