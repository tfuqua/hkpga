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

  var t1 = new Date();
  year = (typeof year !== 'undefined') ? parseInt(year, 10) : 2017;

  return dispatch => {
    dispatch(requestTournaments());
    
    const ref = database.ref('tournaments');
    return ref.orderByChild('year').equalTo(year).once('value', tournaments => {
       dispatch(receiveTournaments(tournaments.val()))

       var t2 = new Date();
       console.log(t2-t1);
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

export function fixTournaments(){

  const ref = database.ref('tournaments');
  ref.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      console.log(childSnapshot.key);
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