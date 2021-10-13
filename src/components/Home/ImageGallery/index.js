import React from 'react';
// import Card from '../UI/Card';
import './style.css'

const SideImage = props => {
  return (
    <div>
      <img src={props.src} alt="" />
    </div>
  )
}

const ImageGallery = (props) => {
  return (
    <div className="ImageGallery" style={props.galleryStyle}>
      <section style={{width: props.largeWidthPrincipal}}>
        <div className="mainImageWrapper">
          <img src={props.imgArray[0]} alt="" />
        </div>
      </section>
      <section className="sideImageWrapper" style={{ width: props.smallWidth}}>
        {
          props.imgArray.map((imageUrl) =>
            <SideImage key={imageUrl} height={props.sideImageHeight} src={imageUrl} />
          )
        }
      </section>
    </div>
  )
}

export default ImageGallery;