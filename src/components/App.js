import React from 'react';

import pixabay from '../api/pixabay';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = {images: []};

  onSearchSubmit = async term => {
    const API_KEY = process.env.REACT_APP_PIXABAY_APIKEY;
    try {
      const response = await pixabay.get(`/?key=${API_KEY}`, {
        params: {q: term},
      });
      this.setState({images: response.data.hits});
      if (response.data.total === 0) {
        window.alert('お探しの画像はありません。');
      }
    } catch {
      window.alert('写真の取得に失敗しました。');
    }
  };

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.state.images.map(image => (
          <ImageList
            key={image.id}
            imageURL={image.webformatURL}
            pageURL={image.pageURL}
          />
        ))}
      </div>
    );
  }
}

export default App;
