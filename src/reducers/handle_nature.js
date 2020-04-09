const handleNature = (
  state = {
    wallpapers: []
  },
  action
) => {
  if (action.type === "FETCH_NATURE") {
    state = {
      ...state,
      wallpapers: action.payload
    };
  }

  return state;
};

export default handleNature;
