import { connect } from "react-redux"
import CartDelete from "../components/CartDelete"
import { deleteFromCart } from "../actions"

const mapStateToProps = state => ({
    dataCartDelete: state.cartDeleteReducer
})

const mapDispatchToProps = dispatch => {
  return {
    deleteFromCart: (input) => {
      dispatch(deleteFromCart(input))
    }
  }
}

const CartDeleteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartDelete)

export default CartDeleteContainer
