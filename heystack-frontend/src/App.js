import Routing from './component/Routing/index.js';
import NavBar from './component/NavBar/index.js';
import Footer from './component/Footer/index.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar noBackground={true} />
      <Routing />
      <button className="TestingBtn">Click Me</button>
      <Footer />
    </div>
  );
}

export default App;
