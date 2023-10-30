import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import SampleBanner from './assets/images/sample-banner.jpg';
function App() {
  return (
    <Banner bannerImageName={SampleBanner} bannerText="About Us"/>
  );
}

export default App;
