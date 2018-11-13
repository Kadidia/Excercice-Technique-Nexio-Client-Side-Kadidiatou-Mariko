const initialState = {
    loading: false,
    error: null,
    response: false
  };
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case "POST_PENDING_AUTH":
        return {
          ...state,
          loading: true
        };
  
      case "POST_FULFILLED_AUTH":
        return {
          ...state,
          loading: false,
          response: action.dataAuth
        };
  
      case "POST_REJECTED_AUTH":
        return {
          ...state,
          loading: false,
          response : false,
          error : action.dataAuth.message ? action.dataAuth.message : action.dataAuth.data.Message
        };
  
      default:
        return state;
    }
  }
  