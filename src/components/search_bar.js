import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }
  }

  // React community uses convention handle/on + <name of the target element> + <type of event>
  // handleInputChange(event) { // every DOM element event comes with an argument with info about the context. Here we call it 'event'
  //   console.log(event);
  // }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    
    return (
      <div className="search-bar">
        <input 
          value={this.state.term} // this transforms the form element into a controlled component.
          // the value of the input element is not set by the user. The user only triggers the change event
          // but the state is what really is controlling the value
          // WHY? 3 reasons.
          // 1.- Goes with the declarative ('value is always this') way in which React works. Not imperative ('if change, then value')
          // 2.- Lets us do cool things, like put a placeholer when the component is being constructed
          // 3.- MOST IMPORTANTLY. The value is now more easily accesible. Just this.state.term, and not get the element with jquery and access its value
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}
// const SearchBar = () => {
//   return <input />; // remember: this is translated to something like React.createElement... so react must be imported
// };

export default SearchBar;
