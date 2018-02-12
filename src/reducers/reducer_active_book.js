// state argument is not the application state.
// it is only the piece of state this reducer is responsible for

// state = null covers the case in which the user starts the app for the first time,
// and no book is selected => this means 'state' is undefined.
// With ES6, state = null sets 'state' to 'null' if it is undefined
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      // set the current book to the one this action contains as payload
      // IMPORTANT!!! always return a NEW OBJECT. don't do something like

      // state.title = book.title <---- WRONG
      return action.payload;
  }

  // if the action does not belong to this reducer, just return the state as it was before
  return state;
};