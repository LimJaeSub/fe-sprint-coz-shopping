const initState = {};

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_STATE":
      return {
        ...state,
        items: action.payload,
        bookmarks: [],
      };
    default:
      return state;
  }
};

export default itemReducer;
