// this is an action creator. The action that is produced (a simple object), will flow through out all reducers
// Action creators cannot be called directly from containers, as this would break the flow through reducers.
// Instead, we have to bind it to the container, using the function bindActionCreators from redux
export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}