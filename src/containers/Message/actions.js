export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';

export function showMessage(message) {
  return {
    type: SHOW_MESSAGE,
    message
  };
}

export function hideMessage() {
  return {
    type: HIDE_MESSAGE
  };
}

export function displayMessage(message) {
  console.log(message);
  return dispatch => {
    dispatch(showMessage(message));
  };
}
