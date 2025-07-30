import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import AddProduct from './components/AddProduct';
import { initialProducts } from './data';
import SliderComponent from './components/SliderComponent';
import Icons from './components/Icons';

function App() {
  const [products, setProducts] = useState(initialProducts);
  const location = useLocation();

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  const isDetailPage = location.pathname.startsWith('/product/');

  return (
    <>
      {!isDetailPage && (
        <>
          <Header />
          <marquee
            className="marquee-text text-white fw-bold"
            style={{
              backgroundColor: '#002f34',
              padding: '10px',
              fontSize: '18px',
              letterSpacing: '1px'
            }}
          >
            SHOP WITH US FOR THE BEST DEALS!
          </marquee>
          <SliderComponent />
          <Icons />
        </>
      )}

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/add" element={<AddProduct addProduct={addProduct} />} />
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
