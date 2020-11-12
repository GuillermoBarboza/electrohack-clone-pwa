const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let is_id = false;
      let addArr = [];
      addArr = state.map((product) => {
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
        addArr = [...state, action.payload];
      }
      return addArr;

    case "REMOVE_FROM_CART":
      let removeArr = [];
      removeArr = state.map((product) => {
        if (product._id !== action.payload._id) {
          return product;
        } else {
          product.quantity = product.quantity - 1;
          return product;
        }
      });

      return removeArr.filter((product) => product.quantity !== 0);

    case "RESET_CART":
      return [];

    default:
      return state;
  }
};

export default cart;
