import React from "react"
import Message from "../components/Message"
import { NavLink } from "react-router-dom"
import { Redirect } from "react-router-dom"
import { v4 } from "uuid"

export default class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
        IsShowMsgEmptyCart: false
        
    };
  }

  componentDidMount() {
    this.props.postCart();
  }

  render() {

      const data = this.props.dataCart;
      const isConnected = sessionStorage.getItem("isConnected");
      if (isConnected === "true") {
      //si data est null
      if (!data) {
          return null;
      }

      //si erreur
      if (data.error) {
        return (
         <div>Erreur !</div>
        );
      }

      // en cours de chargement
      if (data.loading) {
        return (
            <div>Chargement en cours ... </div>
        );
      }

      let cartproductlist = data.response.map((prod) =>
        <tbody key={v4()}>
          <tr>
            <td><NavLink to={`/home/${prod.id}`}>{prod.nom}</NavLink></td>
            <td>{prod.prix}</td>
            <td>{prod.description}</td>
            <td><NavLink to={`/deletefromcart/${prod.id}`}>supprimer</NavLink></td>
          </tr>
        </tbody>
      );
      if (this.props.dataCart.loading === true) {
        return (<div> Chargement en cours ... </div>);
      }
   
      return (
        <fieldset>
          <legend><h3>La liste des produits dans le panier</h3></legend>
          <Message IsShowMsgEmptyCart={data.response.length===0} /><br />
          <table border="1">
            <tbody>
              <tr>
                <th>Nom</th>
                <th>Prix</th>
                <th>Description</th>
                <th>Supprimer du panier</th>
              </tr>
            </tbody>
            {cartproductlist}
          </table>
          <div><br />
          <NavLink to={`/home`}><input type="button" className="btn--info" value="Retour à la liste des produits" /></NavLink>&nbsp;&nbsp;&nbsp;
          <NavLink to={`/`}><input type="button" className="" value="Se deconnecter" /></NavLink>&nbsp;&nbsp;&nbsp;
          </div>
        </fieldset>
      );
      }

  return (
    <div>      
      <Redirect to={`/`} />
    </div>
  )
}
}

  