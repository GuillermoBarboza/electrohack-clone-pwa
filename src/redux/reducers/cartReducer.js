const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let is_id = false;
      let arr = [];
      arr = state.map((product) => {
        if (product._id !== action.payload._id) {
          return product;
        } else {
          is_id = true;
          product.quantity = product.quantity + 1;
          return product;
        }
      });
      if (!is_id) {
        action.payload.quantity = 1;
        arr = [...state, action.payload];
      }
      return arr;

    default:
      return state;
  }
};

export default cart;
