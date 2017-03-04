import database from '../../database';

export const GET_COVERAGE = 'GET_COVERAGE';

export function receiveCoverage(coverage) {
  return {
    type: GET_COVERAGE,
    coverage
  };
}

export function getCoverage(){
  return dispatch => {
   return database.ref('coverage').once('value', coverage => {
       dispatch(receiveCoverage(coverage.val()));
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
