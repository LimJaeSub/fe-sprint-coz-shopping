const ToastReducer = (
  state = { toastShow: false, toastType: true },
  action
) => {
  // type
  // true : off->on
  // false : on->off
  switch (action.type) {
    case "SHOW_TOAST":
      return {
        ...state,
        toastShow: true,
      };
    case "HIDE_TOAST":
      return {
        ...state,
        toastShow: false,
      };
    case "ONTOOFF_TOAST":
      return {
        ...state,
        toastType: false,
      };
    case "OFFTOON_TOAST":
      return {
        ...state,
        toastType: true,
      };
    default:
      return state;
  }
};

export default ToastReducer;
