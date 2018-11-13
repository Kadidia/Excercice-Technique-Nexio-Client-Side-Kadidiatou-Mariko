const initialState = {
    loading: false,
    error: null,
    response: []
  };
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case "GET_PENDING_CART":
        return {
          ...state,
          loading: true
        };
  
      case "GET_FULFILLED_CART":
        return {
          ...state,
          loading: false,
          response: action.dataCart
        };
  
      case "GET_REJECTED_CART":
        return {
          ...state,
          loading: false,
          error : action.dataCart.message ? action.dataCart.message : action.dataCart.data.Message
        };
  
      default:
        return state;
    }
  }
  