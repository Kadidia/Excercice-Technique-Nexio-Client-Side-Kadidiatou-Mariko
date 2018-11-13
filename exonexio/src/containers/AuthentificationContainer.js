import { connect } from "react-redux"
import Authentification from "../components/Authentification"
import { postAuthent } from "../actions"

const mapStateToProps = state => ({
  dataAuth: state.authentificationReducer
})

const mapDispatchToProps = dispatch => {
  return {
    postAuthent: (input) => {
      dispatch(postAuthent(input))
    }
  }
}

const AuthentificationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentification)

export default AuthentificationContainer
