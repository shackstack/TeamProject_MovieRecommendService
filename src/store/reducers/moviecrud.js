import axios from "axios";

const MOVIE_CREATE = "MOVIE_CREATE";
const MOVIE_UPDATE = "MOVIE_UPDATE";
const MOVIE_DELETE = "MOVIE_DELETE";

export const movieCreate = (payload) => {
  return {
    type: MOVIE_CREATE,
    payload,
  };
};

export const movieUpdate = (payload) => {
  return {
    type: MOVIE_UPDATE,
    payload,
  };
};

export const movieDelete = (payload) => {
  return {
    type: MOVIE_DELETE,
    payload,
  };
};

const initialState = {
  movieNumber: 0,
  title: "",
  image_url: "",
  content: "",
  star: 0,
};
// 리듀서
const movieCRUDReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_CREATE:
      return {
        movieNumber: state.movieNumber + 1,
        title: action.payload.title,
        image_url: action.payload.url,
        content: action.payload.content,
        star: action.payload.star,
      };
    case MOVIE_UPDATE:
      return {
        movieNumber: state.movieNumber,
        title: action.payload.title,
        image_url: action.payload.url,
        content: action.payload.content,
      };
    case MOVIE_DELETE:
      return {
        movieNumber: state.movieNumber,
      };
    default:
      return state;
  }
};

export default movieCRUDReducer;
