import axios from "axios";
import {
  ADD_NEW_POST,
  DELETE_POST,
  ERROR_POSTS,
  GET_POSTS,
} from "../Constants/ActionsTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:8000/posts`);
    dispatch({
      type: GET_POSTS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: ERROR_POSTS, payload: console.log(error) });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8000/posts/${id}`);
    dispatch({
      type: DELETE_POST,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: ERROR_POSTS,
      payload: console.log(error),
    });
  }
};

export const addPost = (newPost) => async (dispatch) => {
  try {
    await axios.post("http://localhost:8000/posts/", newPost);
    dispatch({
      type: ADD_NEW_POST,
      payload: newPost,
    });
  } catch (error) {
    dispatch({
      type: ERROR_POSTS,
      payload: console.log(error),
    });
  }
};
