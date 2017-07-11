import React, { Component } from 'react';
import './Hero.css';
import { Carousel } from 'react-bootstrap';


class Hero extends Component {
  render() {
    return (
      <div id="carousel">
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/assets/images/5-Copy-900x500.jpg"/>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/assets/images/ac-taking-off.jpg"/>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/assets/images/balloon-2-900x500.jpg"/>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="https://i.gocollette.com/img/blog-and-news/blog-posts/2016/09/rome900x500.jpg"/>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Hero;