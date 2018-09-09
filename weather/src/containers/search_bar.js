import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

 class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    // here, we are overriding the onInputChange to include in it the context: 'this' is now the SearchBar,
    // not the mystery context given by the browser.
    // We have to do this everytime we pass a callback to a DOMElement that has a reference to 'this'
    // What we can also do, is wrap the callback inside the DOMElement with a fat-arrow function definition
    // Remember: the fat-arrow function definition PRESERVES the meaning of 'this', as a Java-like notation
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // this 'event' object is a vanilla javascript/html thing, for DOMEvent handlers
  onInputChange(event) {
    // if we don't bind the context to this function, 'this' is going to be undefined, or some
    // mystery context given by the browser
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    // In this form, the input is a "controlled field". A controlled field is a form element 
    // in which the value of the input is set by the state of our component (NOT the redux state), not the other way around
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);