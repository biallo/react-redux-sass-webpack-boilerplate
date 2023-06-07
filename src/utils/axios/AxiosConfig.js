import { store } from '../../stores';
import { unauthorized } from '../../stores/auth';
import Keys from '../../config/Keys';

export const getAuthToken = () => {
  const data = window.localStorage.getItem(`${Keys.storeName}_${Keys.storeVersion}`);
  if (data !== null) {
    return (JSON.parse(data)).token;
  } else {
    return '';
  }
};

export function getResult(response) {
  if (store && response) {
    if (response.data.code === 0) {
      return response.data;
    }

    // Error message
    alert(response.data.msg);

    if (response.data.code === 4000) {
      store.dispatch(unauthorized(true));
    } else {
      return null;
    }
  }
}

export function getErrorObject(response) {
  // No response data, probably no network or 500
  let errorCode = 'unknown';
  let errorMessage = '';
  const statusCode = response ? response.status : -1;
  if (response && response.data) {
    errorCode = response.data.statusCode;
    errorMessage = response.data.message;
  }

  return {
    message: statusCode === 500 || statusCode === 404 ? errorCode : errorMessage,
    status: statusCode
  };
}

export function reactOnStatusCode(error) {
  if (store && error) {
    switch (error.status) {
      case 400:
        alert(`${error.status} ${error.message}`);
        break;
      case 401:
        // If my token become invalid, clear token and open login (if not alive api)
        store.dispatch(unauthorized(true));
        break;
      case 403:
        store.dispatch(unauthorized(true));
        break;
      default:
    }
  }
}
