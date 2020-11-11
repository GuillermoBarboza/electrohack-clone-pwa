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
const createUser = credentials => {
  return {
    type: "CREATE_USER",
    payload: credentials
  }
}
export { getProducts, logIn, createUser };
