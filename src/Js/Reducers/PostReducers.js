import {
  GET_POSTS,
  DELETE_POST,
  ADD_NEW_POST,
} from "../Constants/ActionsTypes";

const initialState = {
  posts: [],
  loading: true,
  error: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: true,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case ADD_NEW_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    default:
      return state;
  }
};
export default postReducer;
