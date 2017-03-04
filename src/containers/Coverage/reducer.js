import { GET_COVERAGE } from './actions';

function coverageReducer(state = {}, action) {

  switch(action.type) {
    case GET_COVERAGE:
    return {
        coverage: action.coverage
    }  
    default:
      return state;
  }
}

export default coverageReducer;