import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
