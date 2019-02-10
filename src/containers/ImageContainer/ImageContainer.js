import React, { Component } from 'react';
import { plannetImages } from '../../Source/imageSource'
import ImageCard from './ImageCard'

class ImageContainer extends Component {

  render() {
    const renderImages =
      plannetImages.map((img, idx) => <ImageCard key={idx} img={img} lat={this.props.lat} long={this.props.long} />)
    return (
      <div>
        <h1>ImageContainer Component</h1>
        {renderImages}
      </div>
    )
  }
}

export default ImageContainer;
