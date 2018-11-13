import React from "react"
import Message from "../components/Message"
import { NavLink } from "react-router-dom"
import { Redirect } from "react-router-dom"

export default class Authentification extends React.Component {
  constructor() {
    super();
    this.state = {
    IsDeletedFromCart : false
    };

  }

  componentWillMount() {
    if (this.props.match.params.productId) {
        this.props.deleteFromCart(this.props.match.params.productId);
      }
      this.setState({
        ...this.state,
        IsDeletedFromCart : true,
      });
  }

  render() {

    const data = this.props.dataCartDelete;
    
    if (data.loading)
      return (
        <div> Chargement en cours ... </div>
      );
      
     const isConnected = sessionStorage.getItem("isConnected");
      if (isConnected === "true") {
      return (
        <fieldset>
          <div>
            <h4> Suppression d'un produit du panier </h4>
            <br /> 
            <Message IsDeletedFromCartMsg={this.state.IsDeletedFromCart} /><br />
            
          <NavLink to={`/home`}><input type="button" className="btn--info" value="Retour à la liste des produits" /></NavLink>&nbsp;&nbsp;&nbsp;
          <NavLink to={`/cart`}><input type="button" className="btn--info" value="Afficher le contenu du panier" /></NavLink>&nbsp;&nbsp;&nbsp;
          <NavLink to={`/`}><input type="button" className="" value="Se deconnecter" /></NavLink>&nbsp;&nbsp;&nbsp;
          </div>
        </fieldset>
      )
    }
    sessionStorage.setItem("isConnected", "true");
    return (
      <div>
        <Redirect to={`/`} />
      </div>
    )
    }
  }