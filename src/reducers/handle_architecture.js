const handleArchitecture = (
  state = {
    wallpapers: []
  },
  action
) => {
  if (action.type === "FETCH_ARCHITECTURE") {
    state = {
      ...state,
      wallpapers: action.payload
    };
  }

  return state;
};

export default handleArchitecture;
