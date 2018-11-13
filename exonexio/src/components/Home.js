import React from "react"
import { NavLink } from "react-router-dom"
import { Redirect } from "react-router-dom"
import { v4 } from "uuid"

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    this.props.postHome();
  }

  render() {

      const data = this.props.dataHome;
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

      let productlist = data.response.map((prod) =>
        <tbody key={v4()}>
          <tr>
            <td><NavLink to={`/home/${prod.id}`}>{prod.nom}</NavLink></td>
            <td>{prod.prix}</td>
            <td>{prod.description}</td>
          </tr>
        </tbody>
      );
      if (this.props.dataHome.loading === true) {
        return (<div> Chargement en cours ... </div>);
      }
   
      return (
        <fieldset>
          <legend><h3>La liste des produits</h3></legend>
          <table border="1">
            <tbody>
              <tr>
                <th>Nom</th>
                <th>Prix</th>
                <th>Description</th>
              </tr>
            </tbody>
            {productlist}
          </table>
          <div><br />
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

  