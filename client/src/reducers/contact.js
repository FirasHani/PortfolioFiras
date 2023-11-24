import {  CREATE,GETCONTACT } from '../constants/actionTypes';

export default (contact = [], action) => {
  switch (action.type) {
        case CREATE:
            return [...contact,action.payload]
        case GETCONTACT:
            return  action.payload
    default:
      return contact;
  }
};