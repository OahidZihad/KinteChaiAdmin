const initState = null;

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_CATEGORIES":
      state = action.payload;
      break;

    default:
      break;
  }
  return state;
};

export default categoryReducer;
