import React from "react";
import { Carousel } from "react-responsive-carousel";

import one from './assets/one.jpg';
import two from './assets/two.jpg';
import three from './assets/three.jpg';
import four from './assets/four.jpg';
import five from './assets/five.jpg';
import six from './assets/six.jpg';
import seven from './assets/seven.jpg';
import eight from './assets/eight.jpg';
import nine from './assets/nine.jpg';
import ten from './assets/ten.jpg';
import eleven from './assets/eleven.jpg';
import twelve from './assets/twelve.jpg';

export default () => (
  <Carousel
    showThumbs={false}
    showStatus={false}
    useKeyboardArrows
    className="presentation-mode"
  >
    <div><img src={one} /></div>
    <div><img src={two} /></div>
    <div><img src={three} /></div>
    <div><img src={four} /></div>
    <div><img src={five} /></div>
    <div><img src={six} /></div>
    <div><img src={seven} /></div>
    <div><img src={eight} /></div>
    <div><img src={nine} /></div>
    <div><img src={ten} /></div>
    <div><img src={eleven} /></div>
    <div><img src={twelve} /></div>
  </Carousel>
);
