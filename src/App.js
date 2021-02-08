import './App.css';
import Navbar from "./components/Navbar";
import Login from "./screens/Login";
import Shop from "./screens/Shop";
import AddListing from "./screens/AddListing";
import ProductDetails from "./screens/ProductDetails";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/admin">
            <Navbar />
            <div className="container">
              Admin
            </div>
            <Footer / >
          </Route>
          <Route exact path="/login">
            <Navbar /> 
            <div className="container">
              <Login />
            </div>
            <Footer / >
          </Route>
          <Route exact path="/addListing">
            <Navbar />
            <div className="container">
              <AddListing />
            </div>
            <Footer / >
          </Route>
          <Route exact path="/">
            <Navbar />
            <div className="container">
              <Shop />
            </div>
            <Footer / >
          </Route>
          <Route exact path="/products/:id">
            <Navbar />
            <div className="container">
              <ProductDetails />
            </div>
            <Footer / >
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
