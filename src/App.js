import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    // BEM CSS convention
    <div className="app">
      {/* HEADER */}
      <Header />
      <Home />
      {/* HOME COMPONENT */}
    </div>
  );
}

export default App;
