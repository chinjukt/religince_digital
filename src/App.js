
import './App.css';
import Slideshow, { Banner } from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Menubar from './components/Menubar';
import Navbar from './components/Navbar';
import { Allproduct } from './components/Productcard';
import Products from './components/Products';
import Titlebar from './components/Titlebar';

function App() {
  return (
    <div>
      <Titlebar/>
      <Header/>
      <Menubar/>
      <Banner/>
      <Slideshow/>
      <Products/>
      <Products/>
      <Allproduct/>
      <Footer/>
    </div>
  );
}

export default App;
