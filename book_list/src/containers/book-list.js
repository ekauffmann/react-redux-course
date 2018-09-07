import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}


// this stuff at the bottom is what glues together redux data (which comes from 'state' variable) with react views
function mapStateToProps(state) {
  // whatever object is returned here, will show up as props inside of BookList
  return {
    books: state.books 
  };
}

// and this stuff is what binds actioncreators (functions that produce actions) to the container.
// the dispatch thingy is what takes the actions spat out from the actioncreators and throws them out to ALL the reducers
// whatever this function returns, is passed to the BookList props! now the actioncreator (also called dispatch method) can be called as props.selectBook(...)
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch); 
}

/*
  this 'connect' function pushes the piece of the state (books), and the actions (selectBook) that BooksList needs, producing a Container
  In other words, the component is PROMOTED to a container (smart component)

  `mapStateToProps` (or whatever name it has) is handed the state through the connect handler. Remember, the connect function is what ties react and redux together.
  The connect function itself is what we call a 'higher-order-component', and it gets its knowledge of state by virtue of the Provider component in index.js....
  an upcoming section will discuss more about higher order components, at which point this will likely start to make more sense.

*/

// whenever the state changes, the containers RE-REND
export default connect(mapStateToProps, mapDispatchToProps)(BookList);