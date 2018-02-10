import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

/**
  At the beginning, App was a functional component, and then it was promoted to a class based component
  because it has to keep track of the data that is requested and propogate it down to its children components.
  REMEMBER: in React, requests should be done inside the uppermost components. DOWN FLOW RULE 
**/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('doggo');
    
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // videoSearch is a version (debounced version) of this.videoSearch that can only be called once every 300ms
    // the function is executed 300ms AFTER the last trigger, in this case, onChange event
    // this is like google works!
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); 
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
