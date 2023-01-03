import { combineReducers } from 'redux';

const dummyReducer = () => '';

const postsReducer = (state = [], action) => {
//   debugger;
  switch (action.type) {
    case 'GET_POSTS':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  dummy: dummyReducer,
  posts: postsReducer,
});
