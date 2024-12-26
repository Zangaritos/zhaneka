import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; // Для получения состояния из Products.js
import '../styles/style.css';

function Cart() {
  // Получаем данные о товарах в корзине через location.state
  const location = useLocation();
  const [cartItems, setCartItems] = useState(location.state ? location.state.cartItems : []);
  
  // Состояние для хранения данных пользователя
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  
  // Состояние для отображения сообщений об ошибке или успехе
  const [message, setMessage] = useState('');

  // Функция для отправки данных на сервер
  const handleSubmit = async (event) => {
    event.preventDefault();

    const orderData = {
      name: userName,
      email: userEmail,
      items: cartItems,
    };

    try {
      // Отправка данных на сервер
      const response = await axios.post('https://6736be3baafa2ef222315f5b.mockapi.io/orders', orderData);
      setMessage('Order successfully submitted!');
      console.log(response.data);  // Для отладки
    } catch (error) {
      setMessage('Error submitting order: ' + error.message);
    }
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Start shopping!</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Форма для ввода данных пользователя */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Order</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Cart;
