import { CREATE, FETCH_ALL, FETCH_ID ,CREATE_MESSAGE,DELETE_MESSAGE} from '../constants/actionTypes';


export default (message = [], action) => {
  switch (action.type) {
    case FETCH_ID:
      return [action.payload]
    case CREATE_MESSAGE:
      return [...action,action.payload]
      case DELETE_MESSAGE:
        return message.filter((post) => post._id !== action.payload)
    default:
      return message;
  }
};