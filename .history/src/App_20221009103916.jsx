import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Browse from './pages/Browse/Browse';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Browse />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
