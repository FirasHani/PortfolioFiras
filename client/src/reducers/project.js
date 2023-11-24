import { CREATE, FETCH_ALL, FETCH_ID } from '../constants/actionTypes';


export default (project = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...project, action.payload];

    case FETCH_ID:
      return [action.payload]

    case FETCH_ALL:
      return [...action.payload]

    default:
      return project;
  }
};