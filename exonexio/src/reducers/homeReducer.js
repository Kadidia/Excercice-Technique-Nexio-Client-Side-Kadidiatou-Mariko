const initialState = {
    loading: false,
    error: null,
    response: []
  };
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case "GET_PENDING_HOME":
        return {
          ...state,
          loading: true
        };
  
      case "GET_FULFILLED_HOME":
        return {
          ...state,
          loading: false,
          response: action.dataHome
        };
  
      case "GET_REJECTED_HOME":
        return {
          ...state,
          loading: false,
          error : action.dataHome.message ? action.dataHome.message : action.dataHome.data.Message
        };
  
      default:
        return state;
    }
  }
  