import { BrowserRouter, Routes, Route } from 'react-router';
import { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Categories from './pages/Categories';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<MainLayout cart={cart} addToCart={addToCart} />} 
        >
          <Route index element={<Home addToCart={addToCart} />} />
          <Route path="cart" element={<Cart cart={cart} />} />
          <Route path="category/:category" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;