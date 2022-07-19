import { GET_POSTS, ADD_POSTS } from "../actions/post.actions";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POSTS:
      return [action.payload, ...state];
    default:
      return state;
  }
}
