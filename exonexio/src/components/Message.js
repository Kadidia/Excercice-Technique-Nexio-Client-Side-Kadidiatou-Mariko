import React from "react"

export default class Message extends React.Component {
 constructor(){
   super();
   this.state = {
   };

 } 

 
 render(){

 if (this.props.IsShowErrorMsg === true)
  return (
    <div className="alert--danger"> Une erreur est survenue, veuillez verifier les informations saisies ! </div>
  )
  else if (this.props.IsShowSucessMsg === true)
  return (
    <div className="alert--success"> Action réalisée avec succès ! </div>
  )
  else if (this.props.IsShowMsgEmptyCart === true)
  return (
    <div className="alert--success"> Le panier est vide ! </div>
  )
  else if (this.props.IsShowMsgLoginKO === true)
  return (
    <div className="alert--danger"> Echec Authentification : Les informations saisies sont incorrectes ! </div>
  )
  else if (this.props.IsAddedToCartMsg === true)
  return (
    <div className="alert--success"> Produit ajouté au panier avec succès ! </div>
  )
  else if (this.props.IsDeletedFromCartMsg === true)
  return (
    <div className="alert--danger"> Produit supprimé du panier avec succès ! </div>
  )
  else  return (<div> </div>)


 }

}