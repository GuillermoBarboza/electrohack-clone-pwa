const carousel = (state = [], action) => {
  switch (action.type) {
    case "CHANGE_CAROUSEL":
      return action.payload;

    default:
      return state;
  }
};

export default carousel;
