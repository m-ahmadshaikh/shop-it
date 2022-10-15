import axios from 'axios';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Browse from './pages/Browse';
import Category from './pages/Browse/Category';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Product from './pages/Product';
import products from './data/products';
function App() {
  useEffect(() => {
    fetch('https://shop-it-58f9a-default-rtdb.firebaseio.com/products.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        products,
      },
    }).then((res) => console.log(res.data).catch((e) => console.log(e)));
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Browse />} />
          <Route path="browse/:id" element={<Category />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
