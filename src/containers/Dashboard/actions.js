import database from '../../database';
import { displayMessage } from '../Message/actions';
import { SAVE_SUCCESSFUL } from '../../util/messages';

export function saveTournamentYears(years) {
  return dispatch => {
    const ref = database.ref('years/tournaments');
    return ref
      .set(years)
      .then(response => {
        dispatch(displayMessage(SAVE_SUCCESSFUL));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function getTournamentYears() {
  return dispatch => {
    const ref = database.ref('years/tournaments');
    return ref
      .orderByValue()
      .once('value', data => data)
      .then(data => {
        let years = data.val();
        return years.sort((a, b) => {
          return parseInt(b, 10) - parseInt(a, 10);
        });
      });
  };
}

export function saveOOMYears(years) {
  return dispatch => {
    const ref = database.ref('years/oom');
    return ref
      .set(years)
      .then(response => {
        dispatch(displayMessage(SAVE_SUCCESSFUL));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function getOOMYears() {
  return dispatch => {
    const ref = database.ref('years/oom');
    return ref
      .orderByValue()
      .once('value', data => data)
      .then(data => {
        let years = data.val();

        return years.sort((a, b) => {
          return parseInt(b, 10) - parseInt(a, 10);
        });
      });
  };
}
