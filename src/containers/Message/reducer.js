import { SHOW_MESSAGE, HIDE_MESSAGE} from './actions';

function messageReducer(state = {}, action) {

  switch(action.type) {
    case SHOW_MESSAGE:
    return {
      message: {
          type: action.message.type,
          message: action.message.message,
          show: true
      }
    }
    case HIDE_MESSAGE:
    return {
      message: {
          type: '',
          message: '',
          show: false
      }
    }    
    default:
      return state;
  }
}

export default messageReducer;
