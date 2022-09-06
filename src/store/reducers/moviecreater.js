const MOVIE_LISTING = "MOVIE_LISTING";

export const movieListing = () => {
  return {
    type: MOVIE_LISTING,
  };
};

const initialState = {
  movieNumber: 0,
  title: "",
  url: "",
  content: "",
  isAlive: true,
};
// 리듀서
const movieCreater = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_LISTING:
      return {
        ...state,
        movieNumber: state.movieNumber + 1,
        title: action.payload.title,
        url: action.payload.url,
        content: action.payload.content,
      };

    default:
      return state;
  }
};

export default movieCreater;
