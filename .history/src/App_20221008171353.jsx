import { Route } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';

function App() {
  return (
    <div className="App">
      <Route element={Layout}>
        <h1>hehehe</h1>
      </Route>
    </div>
  );
}

export default App;
