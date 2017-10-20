import { mapObjectToArray } from '../../util/util';
import { sortBy } from 'lodash';
import { GET_YEARS } from './actions';

function yearsReducer(state = {}, action) {
  switch (action.type) {
    case GET_YEARS:
      return {
        ...state,
        years: action.years
      };

    default:
      return state;
  }
}

export default yearsReducer;
