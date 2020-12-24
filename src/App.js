
// import HomeScreen from "./Screens/HomeScreen";
// import ProductScreen from './Screens/ProductScreen';
import Header from './components/TopMenu';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Shop';
import DetailProduct from './pages/DetailProduct';
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
        <Footer/>
      </div>{/*jfkjspdfj */}
    </div>
    </Router>




  );
}

export default App;
