import './App.css';
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from './Screens/ProductScreen';
import Header from './components/TopMenu';
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
      <Header/>

      <main  id="mainContainer">
        <div className="container">
        <Route path="/product/:id" exact component={ProductScreen} ></Route>
        <Route path="/" exact component={HomeScreen} ></Route>
            
        </div>
        <div className="panel panel-default">
          <div className="panel-footer">
            Panel footer
          </div>
      </div>
      </main>

      
      
      
    
    </div>
    
    </Router>
    

  );
}

export default App;
