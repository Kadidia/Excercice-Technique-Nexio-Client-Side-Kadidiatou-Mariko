import { connect } from "react-redux"
import ProductDetail from "../components/ProductDetail"
import { getProductDetail } from "../actions"

const mapStateToProps = state => ({
  dataDetail: state.productDetailReducer
})

const mapDispatchToProps = dispatch => {
  return {
    getProductDetail: (input) => {
      dispatch(getProductDetail(input))
    }
  }
}

const ProductDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail)

export default ProductDetailContainer
