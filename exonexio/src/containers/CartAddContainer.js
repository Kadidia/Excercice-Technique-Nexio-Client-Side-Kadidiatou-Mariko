import { connect } from "react-redux"
import CartAdd from "../components/CartAdd"
import { addToCart } from "../actions"

const mapStateToProps = state => ({
    dataCartAdd: state.cartAddReducer
})

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (input) => {
      dispatch(addToCart(input))
    }
  }
}

const CartAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartAdd)

export default CartAddContainer
