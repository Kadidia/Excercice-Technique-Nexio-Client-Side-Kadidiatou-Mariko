import { connect } from "react-redux"
import Home from "../components/Home"
import { postHome } from "../actions"

const mapStateToProps = state => ({
  dataHome: state.homeReducer
})

const mapDispatchToProps = dispatch => {
  return {
    postHome: (input) => {
      dispatch(postHome(input))
    }
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer
