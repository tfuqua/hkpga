import database from '../../database';

export const GET_TOURNAMENTS = 'GET_TOURNAMENTS';
export const REQUEST_TOURNAMENTS = 'REQUEST_TOURNAMENTS';

export function receiveTournaments(tournaments) {
  return {
    type: GET_TOURNAMENTS,
    tournaments
  };
}

export function requestTournaments(){
  return {
    type: REQUEST_TOURNAMENTS
  };
}

export function getTournaments(year){
  year = (typeof year !== 'undefined') ? parseInt(year, 10) : 2017;

  return dispatch => {
    dispatch(requestTournaments());
    
    const ref = database.ref('tournaments');
    return ref.orderByChild('year').equalTo(year).once('value', tournaments => {
       dispatch(receiveTournaments(tournaments.val()))
    })
    .catch((error) => {
      console.log(error);
    });
  }
}