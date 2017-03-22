import React, { Component } from 'react';
import LatestNews from '../../components/LatestNews';
import Carousel from '../../components/Carousel';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <Carousel />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <LatestNews />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
