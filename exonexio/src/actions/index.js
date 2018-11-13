function processResponse(response) {
    return new Promise((resolve, reject) => {
      let func;
      response.status < 400 ? func = resolve : func = reject;
      response.json().then(data => func({ "status": response.status, "data": data }));
    });
  }
  
  //authentification : check user authentification
  export function postAuthent(input) {
    return function (dispatch) {
      dispatch({ type: "POST_PENDING_AUTH" });
      fetch("http://localhost:8080/user/authentification", {
        method: "post",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
      })
        .then(processResponse)
        .then(response => {
          dispatch({ type: "POST_FULFILLED_AUTH", dataAuth: response.data });
        }).catch(response => {
          dispatch({ type: "POST_REJECTED_AUTH", dataAuth: response });
        });
    }
  }
  
  //home : get products list
   export function postHome() {  
    return function (dispatch) {
      dispatch({ type: "GET_PENDING_HOME" });
      fetch("http://localhost:8080/products")
        .then(processResponse)
        .then(response => {
          dispatch({ type: "GET_FULFILLED_HOME", dataHome: response.data });
        })
        .catch(response => {
          dispatch({ type: "GET_REJECTED_HOME", dataHome: response });
        });
    }
  }

  //home : get product detail by id
  export function getProductDetail(input) {
      const url = "http://localhost:8080/productdetail/"+input;
      return function (dispatch) {
        dispatch({ type: "GET_PENDING_DETAIL" });
        fetch(url)
          .then(processResponse)
          .then(response => {
            dispatch({ type: "GET_FULFILLED_DETAIL", dataDetail: response.data });
          })
          .catch(response => {
            dispatch({ type: "GET_REJECTED_DETAIL", dataDetail: response });
          });
      }
  }
  //Cart : get cart products list
  export function postCart() {  
    return function (dispatch) {
      dispatch({ type: "GET_PENDING_CART" });
      fetch("http://localhost:8080/products/cart")
        .then(processResponse)
        .then(response => {
          dispatch({ type: "GET_FULFILLED_CART", dataCart: response.data });
        })
        .catch(response => {
          dispatch({ type: "GET_REJECTED_CART", dataCart: response });
        });
    }
  }

  //Cart : add product to cart
  export function addToCart(input) {
    const url = "http://localhost:8080/products/addtocart/"+input;
    return function (dispatch) {
      dispatch({ type: "GET_PENDING_CART_ADD" });
      fetch(url)
        .then(processResponse)
        .then(response => {
          dispatch({ type: "GET_FULFILLED_CART_ADD", dataCartAdd: response.data });
        })
        .catch(response => {
          dispatch({ type: "GET_REJECTED_CART_ADD", dataCartAdd: response });
        });
    }
}
//Cart : delete product from cart
export function deleteFromCart(input) {
    const url = "http://localhost:8080/products/deletefromcart/"+input;
    return function (dispatch) {
      dispatch({ type: "GET_PENDING_CART_DELETE" });
      fetch(url)
        .then(processResponse)
        .then(response => {
          dispatch({ type: "GET_FULFILLED_CART_DELETE", dataCartDelete: response.data });
        })
        .catch(response => {
          dispatch({ type: "GET_REJECTED_CART_DELETE", dataCartDelete: response });
        });
    }
}


  export function resetState() {
    return {
      type: "RESET"
    }
  };