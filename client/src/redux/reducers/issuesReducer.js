import { FETCH_BY_SEARCH } from '../actionTypes/issiesAT';

export const issuesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BY_SEARCH:
      localStorage.setItem('issues', JSON.stringify({...action.payload}));
      return {...state, data: action.payload };
    default:
      return state;
  }
};
