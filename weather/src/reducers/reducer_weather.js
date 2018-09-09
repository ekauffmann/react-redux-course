import { FETCH_WEATHER } from '../actions/index';


// DON'T EVER MUTATE THE STATE. Always return a completely new instance of state
export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // Don't use state.push(action.payload.data), because push mutates
    // We can use concat, as it return a new instance of array.
    // return state.concat([action.payload.data]);
    // But we can use ES6 !!!
    // ... flattens
    return [ action.payload.data, ...state ]; // [ city, city, city ] NOT [ city, [ city, city ] ]
  }
  return state;
};