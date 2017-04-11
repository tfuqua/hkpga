import database from '../../database';

export function fixArticles() {
  const ref = database.ref('article');
  ref.remove();
}

/******* Flatten Out Results Data  *********/
export function fixTournaments() {
  return dispathch => {
    const ref = database.ref('tournaments');

    ref.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        const resultsRef = database.ref(`/results/${childSnapshot.key}`);
        const results = childSnapshot.val().results;
        if (results) {
          resultsRef.set(results);
        }
        const tourney = database.ref('tournaments/' + childSnapshot.key + '/results');
        tourney
          .remove()
          .then(function() {
            console.log('Remove succeeded.');
          })
          .catch(function(error) {
            console.log('Remove failed: ' + error.message);
          });
      });
    });
  };
}

/******* Remove Results from Users  *********/
export function fixUserData() {
  return dispathch => {
    const ref = database.ref('users');
    ref.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        let user = childSnapshot.val();
        let userRef = database.ref('users/' + childSnapshot.key);

        userRef
          .remove()
          .then(() => {
            console.log('Remove succeeded.');
          })
          .then(() => {
            if (user.email !== '') {
              let newRef = ref.push();
              newRef.set(user);
            }
          })
          .catch(error => {
            console.log('Remove failed: ' + error.message);
          });
      });
    });
  };
}
