const initState = { items: [], bookmarks: [] };

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_STATE":
      return {
        ...state,
        items: action.payload,
      };
    case "INPUT_BOOKMARK":
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };
    case "OUTPUT_BOOKMARK":
      return {
        ...state,
        bookmarks: state.bookmarks.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default itemReducer;
