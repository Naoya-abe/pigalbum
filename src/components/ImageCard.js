import React from 'react';

const ImageCard = props => {
  return (
    <a href={props.link} className="ui medium props">
      <img src={props.image} alt={props.tags} />
    </a>
  );
};

export default ImageCard;
