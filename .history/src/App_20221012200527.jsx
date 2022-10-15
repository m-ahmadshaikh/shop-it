import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Browse from './pages/Browse';
import Category from './pages/Browse/Category';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';

function App() {
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
          <Route path="orders" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
