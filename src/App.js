
// import HomeScreen from "./Screens/HomeScreen";
// import ProductScreen from './Screens/ProductScreen';
import Header from './components/TopMenu';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Shop';
import DetailProduct from './pages/DetailProduct';
import Cart from './pages/Cart';
import Blog from './pages/Blog';
import {
  BrowserRouter as Router,
  //Switch,
  Route,
  //Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <div id="wrapper" className="homepage-1">
        <Header/>
        <Route path="/" exact component={Home} />
        <Route path="/product/" exact component={Product}/>
        <Route path="/product/:id" exact component={DetailProduct}/>
        <Route path="/cart/:id/:qty/:area" component={Cart}/>
        <Route path="/blog" exact component={Blog}/>
        <Footer/>
      </div>{/*jfkjspdfj */}
    </div>
    </Router>




  );
}

export default App;
