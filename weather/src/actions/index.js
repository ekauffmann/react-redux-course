import axios from 'axios';

const API_KEY = '0cd19fc08f11e64d954258d6d09094c8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},cl`;

  // The magic trick is behind the redux-promise middleware.
  // It receives all actions: if the content of the payload is a promise, it stops the action
  // from going through any reducer. Only when it is resolved, the middleware creates a new action,
  // with the same type as the first one, but puts the request response as the payload for this action
  // This way, we only have to deal with data in our reducers, not promises. Redux-promise is the
  // one that unwraps promises for us
  
  // this here looks like synchronous code!
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}