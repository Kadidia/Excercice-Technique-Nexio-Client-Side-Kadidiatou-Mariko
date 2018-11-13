import React from 'react';
import { HashRouter, Route } from "react-router-dom"
import './App.css';
import AuthentificationContainer from "../containers/AuthentificationContainer"
import ProductDetailContainer from "../containers/ProductDetailContainer"
import HomeContainer from "../containers/HomeContainer"
import CartContainer from "../containers/CartContainer"
import CartAddContainer from "../containers/CartAddContainer"
import CartDeleteContainer from "../containers/CartDeleteContainer"
import "./Knacss.css"

const App = () => (
  <HashRouter>
    <div>
      <header className="alert flex-container">
        <h1>&nbsp;Exercice Nexio - Kadidiatou Mariko</h1>
      </header>
      <br />
      <Route exact path="/" component={AuthentificationContainer} />
      <Route exact path="/home" component={HomeContainer} />
      <Route path="/home/:productId" component={ProductDetailContainer} />
      <Route path="/cart" component={CartContainer} />
      <Route path="/addtocart/:productId" component={CartAddContainer} />
      <Route path="/deletefromcart/:productId" component={CartDeleteContainer} />
      
    </div>
  </HashRouter>
);

export default App;
