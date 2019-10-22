import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit = term => {
    const API_KEY = process.env.REACT_APP_PIXABAY_APIKEY;
    axios.get(`https://pixabay.com/api/?key=${API_KEY}`, {
      params: {q: term},
    });
  };

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
