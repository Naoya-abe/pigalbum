import React from 'react';

const ImageList = props => {
  console.log(props);

  return (
    <div>
      <a href={props.pageURL} className="ui medium image">
        <img src={props.imageURL} alt="getImage" />
      </a>
    </div>
  );
};

export default ImageList;
