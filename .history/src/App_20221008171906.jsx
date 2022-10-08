import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import MainNavigation from './layouts/MainNavigation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={Layout}>
          <MainNavigation />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
