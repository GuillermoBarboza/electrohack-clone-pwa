const products = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return action.payload;

    case "GET_CATEGORY":
      return action.payload;

    default:
      return state;
  }
};

export default products;
