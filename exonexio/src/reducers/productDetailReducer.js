const initialState = {
    loading: false,
    error: null,
    response: []
  };
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case "GET_PENDING_DETAIL":
        return {
          ...state,
          loading: true
        };
  
      case "GET_FULFILLED_DETAIL":
        return {
          ...state,
          loading: false,
          response: action.dataDetail
        };
  
      case "GET_REJECTED_DETAIL":
        return {
          ...state,
          loading: false,
          error : action.dataDetail.message ? action.dataDetail.message : action.dataDetail.data.Message
        };
  
      default:
        return state;
    }
  }
  