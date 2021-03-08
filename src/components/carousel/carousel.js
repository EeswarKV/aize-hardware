import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default class MyCarousel extends Component {
  render() {
    return (
      <Carousel arrows className="carousel">
        <img src="http://placeimg.com/640/480/cats" />
        <img src="http://placeimg.com/640/480/cats" />
        <img src="http://placeimg.com/640/480/cats" />
      </Carousel>
    );
  }
}