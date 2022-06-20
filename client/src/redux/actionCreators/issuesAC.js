import { FETCH_BY_SEARCH } from '../actionTypes/issiesAT';

import * as api from '../api/index';

export const getIssues = (searchQuery) => async (dispatch) => {
  try {

    const { data } = await api.fetchBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
