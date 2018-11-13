const initialState = {
    loading: false,
    error: null,
    response: []
  };
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case "GET_PENDING_CART_ADD":
        return {
          ...state,
          loading: true
        };
  
      case "GET_FULFILLED_CART_ADD":
        return {
          ...state,
          loading: false,
          response: action.dataCartAdd
        };
  
      case "GET_REJECTED_CART_ADD":
        return {
          ...state,
          loading: false,
          error : action.dataCartAdd.message ? action.dataCartAdd.message : action.dataCartAdd.data.Message
        };
  
      default:
        return state;
    }
  }
  