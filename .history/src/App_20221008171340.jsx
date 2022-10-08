import { Route } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';

function App() {
  return (
    <div className="App">
      <Route element={Layout}></Route>
    </div>
  );
}

export default App;
