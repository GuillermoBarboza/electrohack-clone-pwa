const getProducts = (products) => {
  return {
    type: "GET_PRODUCTS",
    payload: products,
  };
};

const changeCarousel = (option) => {
  return {
    type: "CHANGE_CAROUSEL",
    payload: option,
  };
};

const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

const removeFromCart = (product) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  };
};

const logIn = (credentials) => {
  return {
    type: "GET_USER",
    payload: credentials,
  };
};
const createUser = (credentials) => {
  return {
    type: "CREATE_USER",
    payload: credentials,
  };
};
export {
  getProducts,
  changeCarousel,
  addToCart,
  removeFromCart,
  logIn,
  createUser,
};
