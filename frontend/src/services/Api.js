'use strict'

// Axios
import axios from 'axios'

// export const API_URL = 'http://localhost:3000/api/fickr/';
export const API_URL = 'https://flickr-challenge-api.herokuapp.com/api/fickr/';

/** 
* @param {String} url api url
* @param {String} method request verb.
* @return {object} json feeds
* */
export const util = async (url, method) => {
  return await axios({
    method: method,
    url: `${url}`,
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json',
    },
    json: true,
  });
};