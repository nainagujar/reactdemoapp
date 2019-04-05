import React from 'react';
import { Slide } from 'react-slideshow-image';
import i1 from './images/i1.jpg' ;
import i2 from './images/i2.jpg' ;
import i3 from './images/i3.jpg' ;
import i4 from './images/i4.jpg' ;
import i5 from './images/i5.jpg' ;
import './SlideShow.css' ;

const slideImages = [i3,i2,i1,i4,i5];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
 
const SlideShow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
           
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
            
          </div>
        </div>
      </Slide>
    )
}
export default SlideShow ;