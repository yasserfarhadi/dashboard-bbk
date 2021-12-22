import * as types from '../types';

// Auth Actions
export const login = () => ({
  type: types.LOGIN,
});

// Data Fetching Start

export const dataFetchingStart = () => ({
  type: types.FETCHING_START,
});

// Data Feching Actions
export const dataAction = (payload) => ({
  type: types.GET_DATA,
  payload,
});

export const fetchData = () => async (dispatch) => {
  dispatch(dataFetchingStart());
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
  const jsonPosts = await posts.json();
  dispatch(dataAction(jsonPosts));
};

// Edit Item Action

export const editItemAction = (payload) => {
  return {
    type: types.EDIT_ITEM,
    payload,
  };
};
