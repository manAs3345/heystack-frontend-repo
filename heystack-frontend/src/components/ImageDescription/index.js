import React from "react";
import './style.css'

const ImageDescription = (props) => {

  const imageDimensions = {
    width: props.imageWidth,
    height: props.imageHeight,
  }

  return (
    <div className={(props.imagePos === 'right' ? 'flex-row' : 'flex-row-reverse') + ' image_description d-flex justify-content-center align-items-center p-5'}>
      <div className="w-50">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        {props.children}
      </div>
      <img 
        className={'image-' + props.imagePos}
        style={imageDimensions}
        src={props.image} 
        alt="asset"
      />
    </div>
  );
};

export default ImageDescription;