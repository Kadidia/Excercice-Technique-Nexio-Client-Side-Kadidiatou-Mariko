import React from "react"
import { NavLink } from "react-router-dom"
import { Redirect } from "react-router-dom"
import { v4 } from "uuid"

export default class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
       IsAddedToCart : false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if (this.props.dataDetail === false)
    console.log("--" );
    this.setState({
    });
  }

  componentDidMount() {
    if (this.props.match.params.productId) {
      this.props.getProductDetail(this.props.match.params.productId);
    }
  }

  render() {

      const data = this.props.dataDetail;
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
      
      //en cours de chargement
      if (data.loading) {
        return (
            <div>Chargement en cours ... </div>
        );
      }

      let productdetail = (
        <tbody key={v4()}>
          <tr>
            <td>{data.response.nom}</td>
            <td>{data.response.prix}</td>
            <td>{data.response.description}</td>
            <td>{data.response.longdescription}</td>
          </tr>
        </tbody>
      );
   
      return (
        <fieldset>
          <legend><h3>Détail de produit</h3></legend>
          <table border="1">
            <tbody>
              <tr>
                <th>Nom</th>
                <th>Prix</th>
                <th>Description</th>
                <th>Détails</th>
              </tr>
            </tbody>
            {productdetail}
          </table>
          <div><br />
            <NavLink to={`/home`}><input type="button" className="btn--info" value="Retour à la liste des produits" /></NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to={`/addtocart/${this.props.match.params.productId}`}><input type="button" className="btn--info" value="Ajouter au panier" /></NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to={`/cart`}><input type="button" className="btn--info" value="Afficher le contenu du panier" /></NavLink>&nbsp;&nbsp;&nbsp;
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

  