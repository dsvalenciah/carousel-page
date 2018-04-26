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

import './style/overrides.css';

export default () => (
  <Carousel
    showThumbs={false}
    showStatus={false}
    useKeyboardArrows
    className="presentation-mode"
  >
    <div id="divcontent"><img src={one} /></div>
    <div id="divcontent"><img src={two} /></div>
    <div id="divcontent"><img src={three} /></div>
    <div id="divcontent"><img src={four} /></div>
    <div id="divcontent"><img src={five} /></div>
    <div id="divcontent"><img src={six} /></div>
    <div id="divcontent"><img src={seven} /></div>
    <div id="divcontent"><img src={eight} /></div>
    <div id="divcontent"><img src={nine} /></div>
    <div id="divcontent"><img src={ten} /></div>
    <div id="divcontent"><img src={eleven} /></div>
    <div id="divcontent"><img src={twelve} /></div>
  </Carousel>
);
