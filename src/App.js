import './App.css';
import Header from './components/header/header.js';
import Cart from './components/cart/cart.js';
import Home from './components/home/home.js';
import {
  Route,
  Switch
} from "react-router-dom";

//main application renders header along with Home page and routing config
function App() {
  return (
    <Switch>
          <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
          </div>
    </Switch>
  );
}

export default App;
