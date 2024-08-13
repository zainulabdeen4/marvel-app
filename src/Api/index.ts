import Axios from 'axios';
import endpoints from './endpoints';

export enum ApiType {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

async function api(path: String, data: any, method: ApiType = ApiType.GET) {
  let baseUrl = 'https://dummyjson.com/auth/';
  let url = baseUrl + path;
  if (path !== endpoints.Login) {
    baseUrl = 'https://gateway.marvel.com/';
    url = baseUrl + path;
  }
  const options = {
    method,
    url: url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...(method !== ApiType.GET && data && {data: JSON.stringify(data)}),
  };

  return Axios(options)
    .then(response => {
      if (response.data) {
        return response.data;
      }
      return response;
    })
    .catch(error => {
      if (error.response) {
        return Promise.reject({
          data: error.response.data ? error.response.data : '',
          code:
            error.response.data && error.response.data.code
              ? error.response.data.code
              : 0,
          status: error.response.status,
        });
      }
    });
}

export {api};
