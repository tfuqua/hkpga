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
  return dispatch => {
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

export function mergePressData() {
  return dispatch => {
    // Coverage
    let pressRef = database.ref('press');
    let ref = database.ref('coverage');
    ref.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        let cov = childSnapshot.val();

        let coverage = {
          cover: cov.cover,
          title: cov.title,
          publish_date: cov.publish_date,
          publication: cov.publication.en,
          url: cov.url,
          type: 'media'
        };

        let newEntry = pressRef.push();
        newEntry.set(coverage);
      });
    });

    //Magazines
    ref = database.ref('magazines');
    ref.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        let mag = childSnapshot.val();

        let magazine = {
          cover: mag.cover,
          title: mag.coverstory,
          publish_date: mag.publish_date,
          url: mag.url,
          type: 'magazine'
        };

        let newEntry = pressRef.push();
        newEntry.set(magazine);
      });
    });

    //Releases
    ref = database.ref('releases');
    ref.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        let rel = childSnapshot.val();

        let release = {
          title: rel.title,
          publish_date: rel.publish_date,
          url: rel.url.en,
          type: 'releases'
        };

        let newEntry = pressRef.push();
        newEntry.set(release);
      });
    });
    console.log('Press data merged');
  };
}
