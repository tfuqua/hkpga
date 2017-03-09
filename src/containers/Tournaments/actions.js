import database from '../../database';

export const GET_TOURNAMENTS = 'GET_TOURNAMENTS';
export const REQUEST_TOURNAMENTS = 'REQUEST_TOURNAMENTS';
const ref = database.ref('tournaments');

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

/******* Get Tournament by Year *********/
export function getTournaments(year){

  year = (typeof year !== 'undefined') ? parseInt(year, 10) : 2017;

  return dispatch => {
    dispatch(requestTournaments());
    return ref.orderByChild('year').equalTo(year).once('value', tournaments => {
       dispatch(receiveTournaments(tournaments.val()))
    })
    .catch((error) => { console.log(error);});
  }
}

/******* Get All Tournaments  *********/
export function getAllTournaments(){

  return dispatch => {
    dispatch(requestTournaments());
    return ref.orderByChild('updated_at').once('value', tournaments => {
       dispatch(receiveTournaments(tournaments.val()))
    })
    .catch((error) => { console.log(error);});
  }
}

/******* Delete Tournament  *********/
export function deleteTournament(id){
  return dispatch => {
    let deleteRef = database.ref(`/tournaments/${id}`);

    deleteRef.remove()
    .then(() => dispatch(getAllTournaments()))
    .catch((error) => { console.log(error);});
  }
}

/******* Flatten Out Results Data  *********/
export function fixTournaments(){

  const ref = database.ref('tournaments');

  ref.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {

      const resultsRef = database.ref(`/results/${childSnapshot.key}`);
      const results = childSnapshot.val().results;
      if (results){
        resultsRef.set(results);
      }
      const tourney = database.ref('tournaments/' + childSnapshot.key + '/results');
      tourney.remove()
        .then(function() {
          console.log("Remove succeeded.")
        })
        .catch(function(error) {
          console.log("Remove failed: " + error.message)
        });
    });
}); 
}