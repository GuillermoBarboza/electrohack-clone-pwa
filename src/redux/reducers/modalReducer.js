const modal = (state = true, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return action.payload;

    default:
      return state;
  }
};

export default modal;
