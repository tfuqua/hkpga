import React from 'react';
import { connect } from 'react-redux';
import Text from '../Text';
import Slider from 'react-slick';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import translations from '../../util/translations';

function Carousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'dots',
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />
  };

  return (
    <div className="carousel">

      <h1 className="title">{translations[props.lang].HKPGA_FULL}</h1>

      <Slider {...settings}>
        <div className="item">
          <div className="carousel-caption">
            <p>The Hong Kong Golf Club</p>
          </div>
        </div>

        <div className="item">
          <div className="carousel-caption">
            <p>SkyCity Nine Eagles Golf Course</p>
          </div>
        </div>

        <div className="item">
          <div className="carousel-caption">
            <p>Jockey Club Kau Sai Chau Public Golf Course</p>
          </div>
        </div>

        <div className="item">
          <div className="carousel-caption">
            <p>Clearwater Bay Golf Club</p>
          </div>
        </div>

        <div className="item">
          <div className="carousel-caption">
            <p>Discovery Bay Golf Club</p>
          </div>
        </div>
      </Slider>
      <div className="background-overlay" />
    </div>
  );
}

function mapStateToProps(store) {
  return {
    lang: store.languageReducer.lang
  };
}

export default connect(mapStateToProps)(Carousel);
