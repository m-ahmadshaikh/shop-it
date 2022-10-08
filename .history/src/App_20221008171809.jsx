import { Route } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import MainNavigation from './layouts/MainNavigation';

function App() {
  return (
    <div className="App">
      <Route path="/" element={Layout}>
        <h1>hehehe</h1>
        <MainNavigation />
      </Route>
    </div>
  );
}

export default App;
