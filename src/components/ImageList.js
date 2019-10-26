import React from 'react';
import Masonry from 'react-masonry-component';

import ImageCard from './ImageCard';
import '../styles/ImageList.css';

const ImageList = props => {
  const images = props.images.map(image => {
    return (
      <ImageCard
        link={image.pageURL}
        key={image.id}
        image={image.webformatURL}
        tag={image.tags}
      />
    );
  });

  return <Masonry className="image-list">{images}</Masonry>;
};

export default ImageList;
