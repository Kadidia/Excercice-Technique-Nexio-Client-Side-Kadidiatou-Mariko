const initialState = {
    loading: false,
    error: null,
    response: []
  };
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case "GET_PENDING_CART_DELETE":
        return {
          ...state,
          loading: true
        };
  
      case "GET_FULFILLED_CART_DELETE":
        return {
          ...state,
          loading: false,
          response: action.dataCartDelete
        };
  
      case "GET_REJECTED_CART_DELETE":
        return {
          ...state,
          loading: false,
          error : action.dataCartDelete.message ? action.dataCartDelete.message : action.dataCartDelete.data.Message
        };
  
      default:
        return state;
    }
  }
  