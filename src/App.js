
// import HomeScreen from "./Screens/HomeScreen";
// import ProductScreen from './Screens/ProductScreen';
import Header from './components/TopMenu';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Shop';
import DetailProduct from './pages/DetailProduct';
import Cart from './pages/Cart';
import Signin from './pages/Signin';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import PlaceOrder from './pages/PlaceOrder';
import OrderDetail from './pages/OrderDetail';
import Order from './pages/Order';
import Blog from './pages/Blog';
import Register from './pages/Register';
import ProductAdmin from './pages/Admin/Product';
import CategoryAdmin from './pages/Admin/Category';
import OrderAdmin from "./pages/Admin/Order";
import StockAdmin from './pages/Admin/Stock';

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
        <Route path="/adminproduct" exact component={ProductAdmin} />
        <Route path="/admincategory" exact component={CategoryAdmin} />
        <Route path="/adminstock" exact component={StockAdmin} />
        <Route path="/adminorder" exact component={OrderAdmin} />
        <Route path="/product/" exact component={Product}/>
        <Route path="/product/:id" exact component={DetailProduct}/>
        <Route path="/cart" exact component={Cart}/>
        <Route path="/signin"exact component={Signin}/>
        <Route path="/shipping" exact component={Shipping}/>
        <Route path="/payment" exact component={Payment}/>
        <Route path="/order" exact component={PlaceOrder}/>
        <Route path="/my_order" exact component={Order}/>
        <Route path="/order_detail/:id" exact component={OrderDetail}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/blog" exact component={Blog}/>
        <Footer/>
      </div>{/*jfkjspdfj */}
    </div>
    </Router>




  );
}

export default App;
