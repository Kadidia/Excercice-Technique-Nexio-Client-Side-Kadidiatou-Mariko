import { connect } from "react-redux"
import Cart from "../components/Cart"
import { postCart } from "../actions"

const mapStateToProps = state => ({
  dataCart: state.cartReducer
})

const mapDispatchToProps = dispatch => {
  return {
    postCart: (input) => {
      dispatch(postCart(input))
    }
  }
}

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)

export default CartContainer
