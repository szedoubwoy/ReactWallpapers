const handleSpirituality = (
  state = {
    wallpapers: []
  },
  action
) => {
  if (action.type === "FETCH_SPIRITUALITY") {
    state = {
      ...state,
      wallpapers: action.payload
    };
  }

  return state;
};

export default handleSpirituality;
