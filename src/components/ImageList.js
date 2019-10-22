import React from 'react';

const ImageList = props => {
  const images = props.images.map(image => {
    return (
      <a href={image.pageURL} key={image.id} className="ui medium image">
        <img src={image.webformatURL} alt={image.tags} />
      </a>
    );
  });

  return <div>{images}</div>;
};

export default ImageList;
