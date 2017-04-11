import database from '../../database';
import config from '../../../config/env/development';
import axios from 'axios';

export const GET_RESULTS = 'GET_RESULTS';
export const GET_TOURNAMENTS = 'GET_TOURNAMENTS';
export const GET_TOURNAMENT = 'GET_TOURNAMENT';
export const REQUEST_TOURNAMENTS = 'REQUEST_TOURNAMENTS';
export const REQUEST_RESULTS = 'REQUEST_RESULTS';
export const GET_TOURNAMENT_QUERY = 'GET_TOURNAMENT_QUERY';
export const CHANGE_TOURNAMENT_PAGE = 'CHANGE_TOURNAMENT_PAGE';

const ref = database.ref('tournaments');

export function receiveTournaments(tournaments) {
  return {
    type: GET_TOURNAMENTS,
    tournaments
  };
}
export function receiveResults(results) {
  return {
    type: GET_RESULTS,
    results
  };
}

export function receiveTournamentQuery(query) {
  return {
    type: GET_TOURNAMENT_QUERY,
    query
  };
}

export function receiveTournament(tournament) {
  return {
    type: GET_TOURNAMENT,
    tournament
  };
}

export function requestTournaments() {
  return {
    type: REQUEST_TOURNAMENTS
  };
}

export function changePage(page) {
  return {
    type: CHANGE_TOURNAMENT_PAGE,
    page
  };
}

export function requestResults() {
  return {
    type: REQUEST_RESULTS
  };
}

/******* Get Tournament by Year *********/
export function getTournaments(year) {
  year = typeof year !== 'undefined' ? parseInt(year, 10) : 2017;

  return dispatch => {
    dispatch(requestTournaments());
    return ref
      .orderByChild('year')
      .equalTo(year)
      .once('value', tournaments => {
        dispatch(receiveTournaments(tournaments.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

/******* Get All Tournaments  *********/
export function getAllTournaments() {
  return dispatch => {
    dispatch(requestTournaments());
    return ref
      .orderByChild('updated_at')
      .once('value', tournaments => {
        dispatch(receiveTournaments(tournaments.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

/******* Delete Tournament  *********/
export function deleteTournament(id) {
  return dispatch => {
    let deleteRef = database.ref(`/tournaments/${id}`);

    deleteRef.remove().then(() => dispatch(getAllTournaments())).catch(error => {
      console.log(error);
    });
  };
}

/******* Get Tournament by Key *********/
export function getTournament(key) {
  return dispatch => {
    dispatch(requestTournaments());

    return database
      .ref(`tournaments/${key}`)
      .once('value', tournament => {
        dispatch(receiveTournament(tournament.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

/******* Get Tournament by Slug *********/
export function getTournamentBySlug(slug) {
  return dispatch => {
    dispatch(requestTournaments());

    let db = database.ref(`tournaments`);

    return db
      .orderByChild('slug')
      .equalTo(slug)
      .once('value', tournament => {
        dispatch(receiveTournament(tournament.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

/******* Get Tournament Result by Key *********/
export function getResults(key) {
  return dispatch => {
    dispatch(requestResults());

    return database
      .ref(`results/${key}`)
      .once('value', result => {
        dispatch(receiveResults(result.val()));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function queryTournaments(query) {
  return dispatch => {
    dispatch(requestTournaments());

    return axios.get(`${config.firebase.creds.databaseURL}/tournaments.json?shallow=true`).then(res => {
      const keys = Object.keys(res.data);
      const numberOfResults = keys.length;
      const totalPages = Math.ceil(numberOfResults / 10);

      database
        .ref('tournaments')
        .once('value', tournaments => {
          dispatch(
            receiveTournamentQuery({
              data: tournaments.val(),
              numberOfResults,
              totalPages,
              current: query.page,
              first: query.page === 1 ? true : false,
              last: query.page === totalPages
            })
          );
        })
        .catch(error => {
          console.log(error);
        });
    });
  };
}
