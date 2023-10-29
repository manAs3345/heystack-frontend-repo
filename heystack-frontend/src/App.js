import Routing from './components/Routing/index.js';
import NavBar from './components/NavBar/index.js';
import Footer from './components/Footer/index.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar noBackground={true} />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
