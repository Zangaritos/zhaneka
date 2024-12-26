import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Для навигации на страницу корзины
import '../styles/style.css';

import dressImage from '../assets/dress.jpg';
import coatImage from '../assets/coat.jpg';
import casualImage from '../assets/casual.jpg';

function Products() {
  // Массив товаров
  const products = [
    { id: 1, name: 'Summer Dress', price: '$29.99', image: dressImage },
    { id: 2, name: 'Winter Coat', price: '$49.99', image: coatImage },
    { id: 3, name: 'Casual T-shirt', price: '$19.99', image: casualImage },
  ];

  // Состояние для корзины
  const [cartItems, setCartItems] = useState([]);

  // Функция для добавления товара в корзину
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Функция для перехода на страницу корзины
  const navigate = useNavigate();
  const goToCart = () => {
    navigate('/cart', { state: { cartItems } });
  };

  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Кнопка для перехода в корзину */}
      <button onClick={goToCart}>Go to Cart</button>
    </div>
  );
}

export default Products;
