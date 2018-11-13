import React from "react"
import Message from "../components/Message"
import { Redirect } from "react-router-dom"

export default class Authentification extends React.Component {
  constructor() {
    super();
    this.state = {
      login: "",
      password: "",
      IsShowMsgLoginKO: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.dataAuth.response = false;
    this.setState({
      ...this.state,
      IsShowErrorMsg: false
    })
  }

  handleChange(event) {
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.postAuthent(this.state);
    if (this.props.dataAuth === false)
    console.log("--" );
      this.setState({
        ...this.state,
        IsShowMsgLoginKO : true,
      });
  }

  render() {

    const data = this.props.dataAuth;
    
    if (data.loading)
      return (
        <div> Chargement en cours ... </div>
      );

      if (data.response === undefined || data.response === false) {
        sessionStorage.setItem("isConnected", "false");
      return (
        <fieldset>
          <div>
            <h4> Page de connexion </h4>
            <br /> 
            <Message IsShowMsgLoginKO={this.state.IsShowMsgLoginKO} /><br />
            <label>Login</label>&nbsp;
          <input type="text" name="login" value={this.state.value} onChange={this.handleChange} />
          </div><br />
          <div>
            <label>Password</label>&nbsp;
          <input type="password" name="password" value={this.state.value} onChange={this.handleChange} />&nbsp;&nbsp;&nbsp;
          <input type="button" className="btn--success" value="Se connecter" onClick={this.handleSubmit} />
          </div>
        </fieldset>
      )
    }
    sessionStorage.setItem("isConnected", "true");
    return (
      <div>
        <Redirect to={`/home`} />
      </div>
    )
    }
  }