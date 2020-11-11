const getProducts = (products) => {
  return {
    type: "GET_PRODUCTS",
    payload: products,
  };
};

const logIn = credentials => {
  return {
    type: "LOGIN",
    payload: credentials
  }
}

export { getProducts, logIn };
