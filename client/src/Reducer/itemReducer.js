const initState = { items: [], bookmarks: [] };

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_STATE":
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default itemReducer;
