export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';

export function showMessage(message, details) {
  return {
    type: SHOW_MESSAGE,
    message,
    details
  };
}

export function hideMessage() {
  return {
    type: HIDE_MESSAGE
  };
}

export function displayMessage(message, details) {
  return dispatch => {
    dispatch(showMessage(message, details));
  };
}
