import React from 'react';
import pixabay from '../api/pixabay';

import SearchBar from './SearchBar';

class App extends React.Component {
  state = {images: []};

  onSearchSubmit = async term => {
    const API_KEY = process.env.REACT_APP_PIXABAY_APIKEY;
    try {
      const response = await pixabay.get(`/?key=${API_KEY}`, {
        params: {q: term},
      });
      this.setState({images: response.data.hits});
    } catch {
      window.alert('写真の取得に失敗しました。');
    }
  };

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
