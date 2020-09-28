export const initialState = {
  videos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return {
        ...state,
        videos: action.videos,
      };

    default:
      return state;
  }
};

export default reducer;
